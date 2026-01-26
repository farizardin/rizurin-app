/**
 * useHomeData Hook
 * Custom hook for fetching and managing home page data state
 */

import { useState, useEffect } from 'react';
import { fetchHomePageData } from '../services/homeService';

/**
 * Custom hook to fetch home page data
 * @returns {Object} { services, researches, header, loading, error }
 */
const useHomeData = () => {
    const [data, setData] = useState({
        header: '',
        services: [],
        researches: [],
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const result = await fetchHomePageData();

                if (isMounted) {
                    setData(result);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message || 'Failed to load data');
                    console.error('useHomeData error:', err);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, []);

    return {
        header: data.header,
        services: data.services,
        researches: data.researches,
        loading,
        error,
    };
};

export default useHomeData;
