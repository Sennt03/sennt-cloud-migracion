// const Imagen = require('../models/Imagen')
// const Video = require('../models/Video')

const fs = require('fs-extra')
const cloudinary = require('cloudinary')
const myError = require('./myError')
const path = require('path')
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
})

module.exports = {
    processPath: (path) => {
        if(path){
            if(path.includes('-')){
                let pathProcess = path.replace(/-/g, '/')
                return pathProcess
            }else{
                return path
            }
        }else{
            return '/'
        }
        
    },

    dirExist: async (pathComplete) => {
        let exist
        try{
            exist = await fs.promises.stat(pathComplete)
        }catch(error){
            if(error.code == 'ENOENT') throw myError('La carpeta no existe', 403)
        }

        if(!exist.isDirectory()) throw myError('La carpeta no existe', 403)
        return true
    },

    fileExist: async (pathComplete) => {
        let exist
        try{
            exist = await fs.promises.stat(pathComplete)
        }catch(error){
            if(error.code == 'ENOENT') throw myError('El archivo no existe', 403)
        }

        if(!exist.isFile()) throw myError('El archivo no existe', 403)
        return true
    },

    fileExistBoolean: async (pathComplete) => {
        try{
            await fs.promises.stat(pathComplete)
            return true
        }catch(error){
            if(error.code == 'ENOENT') 
                return false
        }

    },

    uploadFileWithUniqueName: async (pathComplete, originalFileName) => {
        let newFileName = originalFileName;
        let n = 1;
    
        while (true) {
            try {
                await fs.stat(path.join(pathComplete, newFileName));
                n++;
                const nameParts = path.parse(originalFileName);
                newFileName = `${nameParts.name} (${n})${nameParts.ext}`;
            } catch (error) {
                break;
            }
        }

        return newFileName;
    },

    withoutExt: (name) => {
        let inicio = name.lastIndexOf('/')
        let final = name.lastIndexOf('.')
        inicio++
        let nombre = name.substring(inicio, final)
        return nombre
    },

    getDate: (date) => {
        const dia = date.getDate().toString().padStart(2, '0')
        const mes = (date.getMonth() + 1).toString().padStart(2, '0')
        const año = date.getFullYear()
        const hora = date.getHours().toString().padStart(2, '0')
        const minuto = date.getMinutes().toString().padStart(2, '0')

        return `${dia}-${mes}-${año} ${hora}:${minuto}`;
    },

    getSize: function(size){
        const sizeInKB = (size / 1024).toFixed(0)

        if (sizeInKB >= 1024 * 1024) {
            const sizeInGB = (sizeInKB / (1024 * 1024)).toFixed(2);
            return `${sizeInGB} GB`;
        } 
        
        if (sizeInKB >= 1024) {
            const sizeInMB = (sizeInKB / 1024).toFixed(2);
            return `${sizeInMB} MB`;
        }
        
        return `${sizeInKB} KB`;
    },

    // uploadImgOvid: async (file, ext, path, type, carpeta, userId) => {
    //     const pathComplete = path + '/' + file.name
    //     file.mv(pathComplete)
    //     const { join } = require('path')
    //     const pathClou = join(path, '/'+file.name)

    //     const response = await cloudinary.v2.uploader.upload(pathClou)
    //     const imageUrl = response.secure_url
    //     const public_id = response.public_id

    //     fs.unlink(pathComplete)
    //     rutaArchivo = ''
    //     if(carpeta == '/'){
    //         rutaArchivo = file.name
    //     }else{
    //         rutaArchivo = carpeta+'/'+file.name
    //     }
    //     if(type == 'imagen'){
    //         const image = await Imagen.findOne({userId, rutaArchivo})
    //         if(image){
    //             return 'false'
    //         }else{
                
    //             const newImage = new Imagen({userId, carpeta, rutaArchivo, name: file.name,ext, size: file.size, url: imageUrl, public_id})
    //             console.log(newImage)
    //             await newImage.save()
    //             return 'true'
    //         }
    //     }else if(type == 'video'){
    //         const newVideo = new Video({userId, carpeta, name: file.name,ext, size: file.size, url: imageUrl, public_id})
    //         await newVideo.save()
            
    //         return
    //     }
    // },

    deleteImage: async (publicId) => {
        await cloudinary.v2.uploader.destroy(publicId)
    }
    
}