import 'dotenv/config';

/**
 * Configuration settings for the application.
 *
 * @property {string} env - The environment in which the application is running (e.g., 'PROD', 'DEV').
 * @property {string} apiUrl - The base URL for API requests, determined by the environment.
 *
 * @example
 * import { config } from './config';
 * console.log(config.apiUrl); // Outputs the API URL based on the current environment
 */
export const config = {
    env: process.env.ENV,
    apiUrl: process.env.ENV === 'PROD' ? process.env.API_URL : process.env.DEV_API_URL
}