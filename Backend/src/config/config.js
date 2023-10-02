const path = require('path')
require('dotenv').config()

const config = {
    dev: process.env.NODE_ENV != 'production',
    port: process.env.PORT || 3000,
    whiteList: ['http://localhost:4200'],
    dbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/migracion-cloud',
    jwtSecret:  process.env.JWT_SECRET || 'secret in key gen',
    // cloudinary
    cloud_name: process.env.CLOUD_NAME,
    cloud_key: process.env.CLOUD_KEY,
    cloud_secret: process.env.CLOUD_SECRET,
    // cloud
    cloudPath: path.join(__dirname, '../../Cloud/'),
    archivoOculto: 'archivoDeAccion.Q2YzzBiYjabJmODEiL1J.api.senntcloud.txt',
    maxFileSizeInMB: 10,
    usersUnlimit: [
        {id: '65158a37ef9bc448c0bb2f81', email: 'prueba@prueba.com'}
    ],
}

module.exports = config