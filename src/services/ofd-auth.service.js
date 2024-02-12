import axios from 'axios';
import {config} from "../config/config.js";


export default {
    async retrieveAuthToken(data) {
        return axios.post(`${config.apiUrl}/api/Authorization/CreateAuthToken`,
            {
                "Login": data.login,
                "Password": data.password
            });
    }
}