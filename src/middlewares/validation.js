import Joi from "joi";


export default {
    validateRequestBody(schema){
        return (req, res, next) => {
            const result = schema.validate(req.body);
            // console.log(result)
            if (result.error) {
                return res.status(400).json({
                    error: result.error.details[0].message,
                });
            }
            if (!req.value) {
                req.value = {};
            }
            req.value['body'] = result.value;
            next();
        }
    },

    validateRequestQuery(schema){
        return (req, res, next) => {
            const result = schema.validate(req.query);
            // console.log(result)
            if (result.error) {
                return res.status(400).json({
                    error: result.error.details[0].message,
                });
            }
            if (!req.value) {
                req.value = {};
            }
            req.value['query'] = result.value;
            next();
        }
    },

    validateRequestParams(schema){
        return (req, res, next) => {
            const result = schema.validate(req.params);
            // console.log(result)
            if (result.error) {
                return res.status(400).json({
                    error: result.error.details[0].message,
                });
            }
            if (!req.value) {
                req.value = {};
            }
            req.value['params'] = result.value;
            next();
        }
    }
}
