const myError = require('../libs/myError')

function cleanData(data){
  for(const key in data){
    if(typeof data[key] === 'string'){
      data[key] = data[key].trim()
    }
  }
  return data
}

function validatorHandler(schema) {
  return (req, res, next) => {
    let data = req.body;
    data = cleanData(data)
    const { error } = schema.validate(data, { abortEarly: true, allowUnknown: true });
    if (error) {
      next(myError(error, 400, error.details));
    }
    next();
  }
}

function validatorFiles(schema){
  return (req, res, next) => {
    const data = {
        files: req.files ? req.files.files : null,
    };
  
    const { error } = schema.validate(data);
  
    if (error) {
      next(myError(error, 400, error.details));
    }
    next();
  }
}

function validateFile(value, helpers){
  if (!value) {
      return helpers.error('any.required');
  }
  return value;
};

module.exports = { validatorHandler, validatorFiles, validateFile };