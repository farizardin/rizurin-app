import React from 'react';
import { HomeProvider } from '../../context/HomeContext';
import FloatingNavbar from '../organisms/FloatingNavbar';

const HomeTemplate = ({ banner, profiles, researches, footer }) => {
    return (
        <div className="home-template-container">
            <FloatingNavbar />
            
            {/* Hero Section */}
            {banner}
            
            <HomeProvider>
                <div className="home-content-wrapper">
                    {profiles}
                    {researches}
                </div>
            </HomeProvider>
            
            {footer}
        </div>
    );
};

export default HomeTemplate;
