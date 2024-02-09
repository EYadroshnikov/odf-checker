import express from 'express';
import ofdCheckController from "../controllers/ofd-check.controller.js";


const router = express.Router();

router.post('/ofd-check/inn/:INN/kkt/:KKT', ofdCheckController.ofdCheck);


export default router;