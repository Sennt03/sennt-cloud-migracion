// const myError = require('../../libs/myError')
const Model = require('./model')
const Store = require('../../db/store')
const store = new Store(Model)
const cloudController = require('../cloud/controller')

async function getUser(id){
    const analytics = await cloudController.analitycsData(id)
    const user = await store.findOneById(id, {password: 0})
    user._doc.analytics = analytics

    return user
}

module.exports = {
    getUser
}