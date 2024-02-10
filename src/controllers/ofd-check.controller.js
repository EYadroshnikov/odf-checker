import ofdAuthService from "../services/ofd-auth.service.js";

export default {
    async ofdCheck(req, res) {
        try {
            let authToken = await ofdAuthService.createAuthToken({login: req.body.Login, password: req.body.Password});
            if (authToken.status !== 200) {
                res.status(403).send(authToken);
            }
            // console.log(authToken.data)
            res.send(authToken.data);


        } catch (e) {
            // console.log(e)
            res.status(500).send(e);
        }
    }
}