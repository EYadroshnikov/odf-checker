import Joi from "joi";

const paramsSchema = Joi.object({
    inn: Joi.required(),
    kkt: Joi.required()
});

export default paramsSchema;