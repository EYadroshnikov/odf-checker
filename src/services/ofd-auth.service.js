import axios from 'axios';


export default {
    async createAuthToken(data){
        try{
            return await axios.post('https://demo.ofd.ru/api/Authorization/CreateAuthToken',
                {
                    "Login": data.login,
                    "Password": data.password
                });
        } catch (e){
            console.log(e)
            return e
        }
    }
}