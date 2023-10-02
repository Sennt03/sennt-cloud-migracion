const Joi = require('joi');
const { validatorHandler, validateFile, validatorFiles } = require('../../middlewares/validatorHandlers')

const name = Joi.string();

const createDirSchema = Joi.object({
  name: name.required()
});

const uploadFileSchema = Joi.object({
  files: Joi.any().custom(validateFile, 'File required').required()
});

const createDirValidator = validatorHandler(createDirSchema)
const uploadFileValidator = validatorFiles(uploadFileSchema)

module.exports = { createDirValidator, uploadFileValidator }