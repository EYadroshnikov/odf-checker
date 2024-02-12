import express from 'express';
import ofdCheckController from "../controllers/ofd-check.controller.js";
import validateRequest from "../middlewares/validation.js"
import {checkOfdSchema} from "../validations/check-odf.validation.js";


const router = express.Router();

router.post('/ofd-check/inn/:inn/kkt/:kkt',
    validateRequest.validateRequestBody(checkOfdSchema),
    ofdCheckController.ofdCheck);


export default router;