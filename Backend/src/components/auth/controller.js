const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const myError = require('../../libs/myError')
const config = require('../../config/config')
const Model = require('../user/model')
const Store = require('../../db/store')
const store = new Store(Model)
const cloudController = require('../cloud/controller')

async function register(user){
    const password = await bcrypt.hash(user.password, 10)
    user.password = password
    const newUser = await store.addOne(user)
    const sendUser = createSendUser(newUser)

    const token = jwt.sign(sendUser, config.jwtSecret, { expiresIn: '6h' })

    await cloudController.registerDir(sendUser._id)
    
    return { user: sendUser, token }
}

async function login({ email, password }){
    const user = await store.findOne({ email })
    
    if(!user){
        throw myError('Unauthorized', 401)
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        throw myError('Unauthorized', 401)
    }

    const sendUser = createSendUser(user)
    const token = jwt.sign(sendUser, config.jwtSecret, { expiresIn: '6h' })    
    
    cloudController.registerDir(sendUser._id)

    return { user: sendUser, token }
}

function createSendUser(user){
    return {
        _id: user._id,
        username: user.username,
        email: user.email
    }
}

function findValidate(field, email = true){
    if(email){
        return store.findOne({email: {$regex: `^${field}$`, $options: 'i'}})
    }else{
        return store.findOne({username: {$regex: `^${field}$`, $options: 'i'}})
    }
}

async function validateField(field, value){
    let exists
    if(field === 'email'){
        const re = new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$")
        if(!re.exec(value)) return { isAvailable: true }
        exists = await findValidate(value)
    }
    // else if(field === 'username'){
    //     exists = await store.findValidate(value, false)
    // }
    else{
        throw myError('Field invalid', 400)
    }

    let isAvailable = exists ? false : true

    return {
        isAvailable
    }
}

module.exports = {
    register,
    login,
    validateField
}