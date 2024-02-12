import axios from "axios";
import {config} from "../config/config.js";


export default {
    /**
     * Retrieves a list of receipts from the integration service.
     *
     * @remarks
     * This function makes a GET request to the integration service to fetch a list of receipts for a specific INN and KKT within a date range.
     *
     * @param requestData - An object containing the necessary request data.
     * @param requestData.inn - The tax identification number (INN) of the organization.
     * @param requestData.kkt - The fiscal device identifier (KKT).
     * @param requestData.dateFrom - The start date for the receipt period.
     * @param requestData.dateTo - The end date for the receipt period.
     * @param requestData.authToken - The authentication token required for the request.
     *
     * @returns A promise that resolves to the response data from the integration service.
     *
     * @throws {Error} If the request fails due to network issues or invalid parameters.
     */
    async getListOfReceipts(requestData) {
        return axios.get(
            `${config.apiUrl}/api/integration/v1/inn/${requestData.inn}/kkt/${requestData.kkt}/receipts?dateFrom=${requestData.dateFrom}&dateTo=${requestData.dateTo}&AuthToken=${requestData.authToken}`)
    }
}