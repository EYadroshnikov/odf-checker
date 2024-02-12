import Joi from "joi";

/**
 * A Joi schema for validating OFD request parameters.
 *
 * @constant
 * @type {Joi.ObjectSchema}
 *
 * @property {Joi.ObjectSchema} body - Schema for the request body.
 * @property {Joi.ObjectSchema} body.Login - Email field required in the request body.
 * @property {Joi.ObjectSchema} body.Password - Password field required in the request body.
 * @property {Joi.ObjectSchema} query - Schema for the request query parameters.
 * @property {Joi.ObjectSchema} query.dateFrom - Start date in ISO format, required.
 * @property {Joi.ObjectSchema} query.dateTo - End date in ISO format, required.
 * @property {Joi.ObjectSchema} params - Schema for the request path parameters.
 * @property {Joi.AnySchema} params.inn - Inn parameter, required.
 * @property {Joi.AnySchema} params.kkt - Kkt parameter, required.
 */
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
