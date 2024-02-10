import Joi from "joi";


const authSchema = Joi.object({
        Login: Joi.string().required(),
        Password: Joi.string().required()
});
export default authSchema
