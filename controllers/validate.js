const Joi = require('@hapi/joi');
const joi = require('@hapi/joi');
const { schema } = require('../models/User');

const registerValidate = (data) => {

    const schema = Joi.object({
      
       name: Joi.string().required().min(3).max(50),
       email: Joi.string().required().min(8).max(80),
       password: Joi.string().required().min(10).max(100),

    })



    return schema.validate(data)
}



const loguinValidate = (data) => {

    const schema = Joi.object({
      
       email: Joi.string().required().min(8).max(80),
       password: Joi.string().required().min(10).max(100)

    })


    
    return schema.validate(data)
}

module.exports.loguinValidate = loguinValidate;
module.exports.registerValidate = registerValidate;