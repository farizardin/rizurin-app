/**
 * Home Service
 * Business logic layer for home page data
 */

import { getHomeData } from '../repositories/homeRepository';

/**
 * Transform service data from API response
 * @param {Object} service - Raw service object from API
 * @returns {Object} Transformed service object
 */
const transformService = (service) => ({
    id: service.id,
    title: service.title,
    descriptions: service.descriptions || [],
});

/**
 * Transform research data from API response
 * @param {Object} research - Raw research object from API
 * @returns {Object} Transformed research object
 */
const transformResearch = (research) => ({
    id: research.id,
    title: research.title,
    description: research.description,
    year: research.year,
    tags: research.tags || [],
    ieeeUrl: research.ieee_url,
});

/**
 * Fetch and transform home page data
 * @returns {Promise<Object>} Transformed home page data
 */
export const fetchHomePageData = async () => {
    const response = await getHomeData();

    if (response.status !== 'success') {
        throw new Error(response.message || 'Failed to fetch home data');
    }

    const { data } = response;

    return {
        header: data.header,
        services: (data.services || []).map(transformService),
        researches: (data.researches || []).map(transformResearch),
    };
};

/**
 * Get services data only
 * @returns {Promise<Array>} Array of transformed services
 */
export const getServices = async () => {
    const data = await fetchHomePageData();
    return data.services;
};

/**
 * Get researches data only
 * @returns {Promise<Array>} Array of transformed researches
 */
export const getResearches = async () => {
    const data = await fetchHomePageData();
    return data.researches;
};

/**
 * Get header text
 * @returns {Promise<string>} Header text
 */
export const getHeader = async () => {
    const data = await fetchHomePageData();
    return data.header;
};

export default {
    fetchHomePageData,
    getServices,
    getResearches,
    getHeader,
};
