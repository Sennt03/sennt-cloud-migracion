const express = require('express')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const router = require('./network/routes')
const errHandler = require('./middlewares/errorHandlers')
const config = require('./config/config')
const db = require('./db/connection')

const optionsCors = { origin: (origin, callback) => {
    if (config.whiteList.includes(origin) || !origin) callback(null, true);
        else callback(new Error('no permitido'));
    }
}

class App{

    constructor(){
        this.app = express()
        db()
        this.middlewares()
        this.routes()
        this.errHandlers()
    }

    middlewares(){
        // this.app.use(cors(optionsCors));
        this.app.use(cors());
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true}))
        this.app.use(fileUpload())
    }

    routes(){
        router(this.app)
    }

    errHandlers(){
        // this.app.use(errHandler.logErrors)
        this.app.use(errHandler.errorHandler)
    }

    start(){
        this.app.listen(config.port, () => {
        // this.app.listen(config.port, '192.168.100.75', () => {
            console.log('Server on port', config.port)
        })
    }

}

module.exports = App