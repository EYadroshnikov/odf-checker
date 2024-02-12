import Joi from "joi";


const checkOfdSchema = Joi.object({
    body: {
        Login: Joi.string().required().email(),
        Password: Joi.string().required()
    },
    query: {
        dateFrom: Joi.string().required().isoDate(),
        dateTo: Joi.string().required().isoDate()
    },
    params: {
        inn: Joi.required(),
        kkt: Joi.required()
    }
}).unknown();
export {checkOfdSchema}
