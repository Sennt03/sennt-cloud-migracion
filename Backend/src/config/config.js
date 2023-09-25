// if(process.env.NODE_ENV != 'production'){
    require('dotenv').config()
// }

const config = {
    dev: process.env.NODE_ENV != 'production',
    port: process.env.PORT || 3000,
    whiteList: ['http://localhost:4200'],
    dbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/migracion-cloud',
    jwtSecret:  process.env.JWT_SECRET || 'secret in key gen',
    // cloudinary
    cloud_name: process.env.CLOUD_NAME,
    cloud_key: process.env.CLOUD_KEY,
    cloud_secret: process.env.CLOUD_SECRET
}

module.exports = config