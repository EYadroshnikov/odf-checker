import axios from 'axios';
import {config} from "../config/config.js";


export default {
    /**
     * Creates an authentication token by sending a POST request to the Authorization service.
     *
     * @param data - An object containing login credentials.
     * @param data.login - The username or email address for the account.
     * @param data.password - The password associated with the account.
     *
     * @returns A promise that resolves to the response data from the Authorization service, which should include the generated auth token.
     *
     * @throws {Error} If the request fails due to network issues, incorrect credentials, or server errors.
     */
    async retrieveAuthToken(data) {
        return axios.post(`${config.apiUrl}/api/Authorization/CreateAuthToken`,
            {
                "Login": data.login,
                "Password": data.password
            });
    }
}