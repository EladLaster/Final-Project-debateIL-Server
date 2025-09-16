const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const debateSchema = require('../schemas/debateSchema');

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

const validatefunc = ajv.compile(debateSchema)
const partialSchema = { ...debateSchema, required: [] };
const validatefuncPut = ajv.compile(partialSchema);


function validation(req,res,next){

    const valid = validatefunc(req.body);
    if(valid)
        return next();
    
    const errors = validatefunc.errors || [];
    
    return res.status(400).json({
        success: false,
        errors: errors.map(e => `${e.params?.missingProperty || e.instancePath}: ${e.message}`)
    });
}

function validationPut(req, res, next) {
    const valid = validatefuncPut(req.body);
    if(valid)
        return next();

    const errors = validatefuncPut.errors || [];

    return res.status(400).json({
        success: false,
        errors: errors.map(e => `${e.params.missingProperty || e.instancePath}: ${e.message}`)
    });
}

module.exports = {validation,validationPut}