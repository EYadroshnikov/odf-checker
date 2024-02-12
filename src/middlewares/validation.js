import Joi from "joi";


export default {
    /**
     * Middleware function to validate the request body against a given schema.
     * If validation fails, responds with a  400 status and the validation error message.
     * If validation passes, attaches the validated value to the request object and calls the next middleware.
     *
     * @template T - The expected shape of the request body after validation.
     *
     * @param {Joi.Schema} schema - The Joi schema to validate the request body against.
     * @returns {express.RequestHandler} - An Express middleware function.
     *
     * @example
     * app.post('/api/endpoint', validateRequestBody(mySchema), (req, res) => {
     *   // The request body has been validated and is available as req.value
     * });
     */
    validateRequestBody(schema){
        return (req, res, next) => {
            const result = schema.validate(req);
            // console.log(result)
            if (result.error) {
                return res.status(400).json({
                    error: result.error.details[0].message,
                });
            }
            if (!req.value) {
                req.value = {};
            }
            req.value = result.value;
            next();
        }
    }
}
