/**
 * Home Context
 * Provides shared home page data across components
 * Data is fetched once and shared to prevent multiple API calls
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchHomePageData } from '../services/homeService';

const HomeContext = createContext(null);

export function HomeProvider({ children }) {
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
                    console.error('HomeProvider error:', err);
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

    const value = {
        header: data.header,
        services: data.services,
        researches: data.researches,
        loading,
        error,
    };

    return (
        <HomeContext.Provider value={value}>
            {children}
        </HomeContext.Provider>
    );
}

/**
 * Custom hook to access home data from context
 * @returns {Object} { services, researches, header, loading, error }
 */
export function useHomeData() {
    const context = useContext(HomeContext);

    if (context === null) {
        throw new Error('useHomeData must be used within a HomeProvider');
    }

    return context;
}

export default HomeContext;
