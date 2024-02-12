import axios from "axios";
import {config} from "../config/config.js";

export default {
    async getListOfReceipts(requestData) {
            return axios.get(
                `${config.apiUrl}/api/integration/v1/inn/${requestData.inn}/kkt/${requestData.kkt}/receipts?dateFrom=${requestData.dateFrom}&dateTo=${requestData.dateTo}&AuthToken=${requestData.authToken}`)

    }
}