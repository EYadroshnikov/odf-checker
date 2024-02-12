import ofdAuthService from "../services/ofd-auth.service.js";
import ofdDataService from "../services/ofd-data.service.js";
import receiptVerifierService from "../services/receipt-verifier.service.js";

export default {
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
        let begginsDbResponse = [];

        let ofdDtos = ofdResponse.data["Data"].map(obj => new OfdDto(obj));
        let begginsDtos = begginsDbResponse.data["Data"].map(obj => new OfdDto(obj));

        // checking the total amounts
        if (receiptVerifierService.checkTotalAmounts(ofdDtos, begginsDtos)) {
            res.status(200).send('The amounts are equal');
            return;
        }


        // finding Inconsistencies
        receiptVerifierService.findInconsistencies(ofdDtos, begginsDtos)

    }
}