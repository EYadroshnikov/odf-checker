import express from 'express';
import ofdCheckController from "../controllers/ofd-check.controller.js";
import validateRequest from "../middlewares/validation.js"
import ofdAuthValidation from "../validations/ofd-auth.validation.js";
import authSchema from "../validations/ofd-auth.validation.js";
import dataSchema from "../validations/ofd-date.validation.js";
import paramsSchema from "../validations/path.validation.js";



const router = express.Router();

router.post('/ofd-check/inn/:inn/kkt/:kkt',
    validateRequest.validateRequestBody(authSchema),
    validateRequest.validateRequestQuery(dataSchema),
    validateRequest.validateRequestParams(paramsSchema),
    ofdCheckController.ofdCheck);


export default router;