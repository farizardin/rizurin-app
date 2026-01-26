/**
 * API Client
 * Axios instance with interceptors for request/response handling
 */

import axios from 'axios';
import { API_CONFIG } from './config';

// Create axios instance with default config
const apiClient = axios.create({
    baseURL: API_CONFIG.BASE_URL,
    timeout: API_CONFIG.TIMEOUT,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor
apiClient.interceptors.request.use(
    (config) => {
        // Log request in development
        if (process.env.NODE_ENV === 'development') {
            console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`);
        }
        return config;
    },
    (error) => {
        console.error('[API Request Error]', error);
        return Promise.reject(error);
    }
);

// Response interceptor
apiClient.interceptors.response.use(
    (response) => {
        // Log response in development
        if (process.env.NODE_ENV === 'development') {
            console.log(`[API Response] ${response.status} ${response.config.url}`);
        }
        return response;
    },
    (error) => {
        // Handle common error scenarios
        if (error.response) {
            // Server responded with error status
            console.error(`[API Error] ${error.response.status}: ${error.response.data?.message || 'Unknown error'}`);
        } else if (error.request) {
            // Request made but no response received
            console.error('[API Error] No response received from server');
        } else {
            // Error in request setup
            console.error('[API Error]', error.message);
        }
        return Promise.reject(error);
    }
);

export default apiClient;
