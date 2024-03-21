import express from 'express';
import validateRequest from "../middlewares/validation.js"
import {checkOfdSchema} from "../validations/check-odf.validation.js";
import consistencyCheckController from "../controllers/consistency-check.controller.js";


const router = express.Router();

router.post('/check-specified-cash-register/inn/:inn/kkt/:kkt',
    validateRequest.validateRequestBody(checkOfdSchema),
    consistencyCheckController.checkSpecifiedCashRegister);

// router.post('check-all-receipts', validateRequest.validateRequestBody(), consistencyCheckController.)

export default router;