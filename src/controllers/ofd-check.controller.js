import ofdAuthService from "../services/ofd-auth.service.js";
import ofdDataService from "../services/ofd-data.service.js";
import receiptVerifierService from "../services/receipt-verifier.service.js";
import {OfdDto} from "../dtos/ofd.dto.js";
import {BegginsDto} from "../dtos/beggins.dto.js";

export default {
    /**
     * Performs a check against the OFD service to verify consistency of transaction data.
     *
     * @param {Request} req - Express HTTP request object containing user credentials and query parameters.
     * @param {Response} res - Express HTTP response object used to send back responses.
     *
     * @description
     * This function performs an asynchronous operation to authenticate the user, retrieve a list of receipts from the OFD service,
     * compare it with a list from the Beggins database, and report any inconsistencies.
     *
     * @throws Will log an error message to the console and return an error response if authentication fails or if there are issues retrieving the list of receipts.
     *
     * @example
     * app.post('/ofdCheck', ofdCheck);
     * // User sends a POST request to '/ofdCheck' with body containing Login and Password, and query parameters for date range.
     */
    async ofdCheck(req, res) {
        // authorization
        let authTokenResponse = await ofdAuthService.retrieveAuthToken({
            login: req.body.Login,
            password: req.body.Password
        }).catch(error => {
            console.error("Error retrieving auth token by user credentials: " + error.response.statusText)
            return error
        });

        if (authTokenResponse.response?.status === 403) {
            res.status(401).send("invalid credentials")
            return;
        }

        // getting a list of receipts from OFD
        let ofdResponse = await ofdDataService.getListOfReceipts({
            inn: req.params.inn,
            kkt: req.params.kkt,
            dateFrom: req.query.dateFrom,
            dateTo: req.query.dateTo,
            authToken: authTokenResponse.data.AuthToken
        }).catch(error => {
            // console.log(error)
            console.error("Error ..... " + error.response.data['Errors']);
            return error;
        });

        // console.log(ofdResponse.response)
        if (ofdResponse.response?.status !== 200) {
            res.status(ofdResponse.response?.status).send(ofdResponse.response.data['Errors'])
            return;
        }
        console.log(ofdResponse.response);


        // getting a list of receipts from beggins database
        //TODO: get the info from beggins
        let begginsDbResponse = [];

        let ofdDtos = ofdResponse.data["Data"].map(obj => new OfdDto(obj));
        let begginsDtos = begginsDbResponse.data["Data"].map(obj => new BegginsDto(obj));

        // checking the total amounts
        if (receiptVerifierService.checkTotalAmounts(ofdDtos, begginsDtos)) {
            res.status(200).send('The amounts are equal');
            return;
        }


        // finding Inconsistencies
        let inconsistencies = receiptVerifierService.findInconsistencies(ofdDtos, begginsDtos)
        res.send(inconsistencies);
    }
}