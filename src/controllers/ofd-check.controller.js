import ofdAuthService from "../services/ofd-auth.service.js";
import ofdDataService from "../services/ofd-data.service.js";
import receiptVerifierService from "../services/receipt-verifier.service.js";

export default {
    async ofdCheck(req, res) {
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


        let ofdList = await ofdDataService.getListOfReceipts({
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
        // console.log(ofdList.response)
        if (ofdList.response?.status !== 200) {
            res.status(ofdList.response?.status).send(ofdList.response.data['Errors'])
            return;
        }

        console.log(ofdList.response);
        let begginsDbList = [];

        if (receiptVerifierService.checkTotalSum(ofdList, begginsDbList)) {
            res.status(200).send('The amounts are equal');
        }

    }
}