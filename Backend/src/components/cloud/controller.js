const { dirExist, fileExist, withoutExt, getDate, getSize, fileExistBoolean, uploadFileWithUniqueName } = require('../../libs/path')
const myError = require('../../libs/myError')
const fs = require('fs-extra')
const path = require('path')
const { cloudPath, archivoOculto, maxFileSizeInMB, usersUnlimit } = require('../../config/config')

async function registerDir(userId){
    const pathComplete = path.join(cloudPath + userId)
    try{
        await fs.mkdir(pathComplete)
        return {message: '!Bienvenido¡'}
    }catch(e){
        if(e.code != 'EEXIST'){
            throw myError('Ha ocurrido un error al registrar el espacio', 500)
        }
    }
}

async function openDir(userId, mipath){
    const pathComplete = path.join(cloudPath + userId + '/' + mipath)
    await dirExist(pathComplete)
    
    const dir = await fs.opendir(pathComplete)
    const content = { files: [], directories: [] }

    for await (dirent of dir) {
        if (dirent.isDirectory()) {
            content.directories.push(dirent.name)
        } else if(dirent.name != archivoOculto) {
            content.files.push(dirent.name)
        }
    }
    
    return { path: mipath, content }
}

async function detailFile(userId, mipath){
    const pathComplete = path.join(cloudPath + userId + '/' + mipath)
    await fileExist(pathComplete)

    const file = await fs.stat(pathComplete)
    const name = path.basename(pathComplete)
    const details = {
        name,
        nameWiouthExt: withoutExt(name),
        size: getSize(file.size),
        ext: path.extname(pathComplete).split('.')[1],
        uploaded: getDate(file.birthtime)
    }

    return { path: mipath, details }
}

async function downloadFile(userId, mipath){
    const pathComplete = path.join(cloudPath + userId + '/' + mipath)
    await fileExist(pathComplete)

    return {file: path.basename(pathComplete), pathComplete}
}

async function createDir(userId, mipath, name){
    const pathComplete = path.join(cloudPath + userId + '/' + mipath + '/' + name)
    try{
        await fs.mkdir(pathComplete)
        return {message: 'Carpeta creada correctamente'}
    }catch(e){
        if(e.code == 'ENOENT'){
            throw myError('Ruta inexistente', 403)
        }else if(e.code == 'EEXIST'){
            throw myError('La carpeta ya existe', 403)
        }else{
            throw myError('Ha ocurrido un error inesperado', 500)
        }
    }

}

async function uploadFile(userId, mipath, files){
    const pathComplete = path.join(cloudPath + userId + '/' + mipath)
    await dirExist(pathComplete)
    const responses = []

    for (let i = 0; i < files.length; i++) {
        const file = files[i]
        const pathFile = path.join(pathComplete, file.name)

        const maxFileSizeInBytes = maxFileSizeInMB * 1024 * 1024;
        const unlimit = usersUnlimit.find(user => user.id == userId)

        if(file.size > maxFileSizeInBytes && !unlimit) {
            responses.push({message: `"${file.name}": El tamaño máximo es ${maxFileSizeInMB}MB.`, status: 400})
            continue
        }

        if(file.name == archivoOculto){
            responses.push({message: `"${file.name}": No se puede subir un archivo con el nombre especificado.`, status: 400})
            continue
        }
        
        const exist = await fileExistBoolean(pathFile)
        if(exist){
            file.name = await uploadFileWithUniqueName(pathComplete, file.name)
        }
    
        try{
            await file.mv(pathComplete + '/' + file.name)
            responses.push({message: `"${file.name}": Archivo subido correctamente.`, status: 200})
        }catch(error){
            responses.push({message: `"${file.name}": Error inesperado.`, status: 500})
        }
    }

    return { message: 'Proceso finalizado.', responses }
}

async function deleteFile(userId, mipath){
    const pathComplete = path.join(cloudPath, userId + '/' + mipath)
    try {
        const stats = await fs.stat(pathComplete);

        if (stats.isDirectory()) {
            await fs.rmdirSync(pathComplete, { recursive: true });
        } else if (stats.isFile()) {
            await fs.unlink(pathComplete);
        } else {
            throw myError('Elemento no reconocido', 500)
        }

    } catch (error) {
        if(error.code === 'ENOENT') throw myError('Ruta inexistente', 400)
        else throw myError('Ha ocurrido un error inesperado.', 500)
    }

    let inicio = mipath.lastIndexOf('/')
    inicio++
    let nombre = mipath.substring(inicio)
    return { message: `"${nombre}": Eliminado correctamente` }
}

module.exports = {
    registerDir,
    openDir,
    detailFile,
    // getImage,
    downloadFile,
    createDir,
    uploadFile,
    deleteFile
}