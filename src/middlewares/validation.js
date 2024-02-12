import Joi from "joi";


export default {
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
