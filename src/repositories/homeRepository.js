/**
 * Home Repository
 * Data access layer for home page API endpoints
 */

import apiClient from '../api/apiClient';
import { API_CONFIG } from '../api/config';

/**
 * Fetch home page data from API
 * @returns {Promise<Object>} Raw API response data
 */
export const getHomeData = async () => {
    const response = await apiClient.get(API_CONFIG.ENDPOINTS.HOME);
    return response.data;
};

export default {
    getHomeData,
};
