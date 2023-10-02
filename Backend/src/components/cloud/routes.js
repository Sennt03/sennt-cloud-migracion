const router = require('express').Router()
const controller = require('./controller')
const response = require('../../network/response')
const { verifyToken } = require('../../middlewares/authHandlers')
const { createDirValidator, uploadFileValidator } = require('./validators')

// DETAILa
router.get('/openDir/:path(*)?', verifyToken, (req, res, next) => {
    const path = req.params.path || ''
    response.process(req, res, next, controller.openDir, req.user._id, path)
})

router.get('/detailFile/:path(*)', verifyToken, async(req, res, next) => {
    const path = req.params.path || ''
    response.process(req, res, next, controller.detailFile, req.user._id, path)
})

// UPLOAD & DOWLOAD
router.post('/createDir/:path(*)?', verifyToken, createDirValidator, async(req, res, next) => {
    const path = req.params.path || ''
    response.process(req, res, next, controller.createDir, req.user._id, path, req.body.name)
})

router.post('/uploadFile/:path(*)?', verifyToken, uploadFileValidator, async(req, res, next) => {
    const path = req.params.path || ''
    const files = Array.isArray(req.files.files) ? req.files.files : [req.files.files]
    response.process(req, res, next, controller.uploadFile, req.user._id, path, files)
})

router.get('/downloadFile/:path(*)', verifyToken, async (req, res, next) => {
    try{
        const path = req.params.path || ''
        const { file, pathComplete } = await controller.downloadFile(req.user._id, path)
        res.setHeader('Content-disposition', `attachment; filename=${file}`);
        res.download(pathComplete)
    }catch(error){
        next(error)
    }
})

// ACTIONS
router.delete('/delete/:path(*)', verifyToken, async(req, res, next) => {
    const path = req.params.path || ''
    response.process(req, res, next, controller.deleteFile, req.user._id, path)
})

module.exports = router