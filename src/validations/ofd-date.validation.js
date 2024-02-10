import Joi from "joi";

const dataSchema = Joi.object({
    some: Joi.string().required()
});

export default dataSchema;