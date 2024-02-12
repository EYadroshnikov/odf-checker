import 'dotenv/config';
export const config = {
    env: process.env.ENV,
    apiUrl: process.env.ENV === 'PROD' ? process.env.API_URL : process.env.DEV_API_URL
}