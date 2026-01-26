/**
 * API Configuration
 * Centralized configuration for API endpoints and settings
 */

// Use proxy path in development, direct URL in production
const isDevelopment = process.env.NODE_ENV === 'development';

export const API_CONFIG = {
    BASE_URL: isDevelopment ? 'http://localhost:3001' : 'https://api.rizurin.my.id',
    TIMEOUT: 10000, // 10 seconds
    ENDPOINTS: {
        HOME: '/index',
    },
};

export default API_CONFIG;
