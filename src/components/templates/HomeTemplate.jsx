import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { HomeProvider } from '../../context/HomeContext';
import FloatingNavbar from '../organisms/FloatingNavbar';

const HomeTemplate = ({ banner, profiles, researches, footer }) => {
    return (
        <div>
            <FloatingNavbar />
            <ParallaxProvider>
                {banner}
            </ParallaxProvider>
            <HomeProvider>
                <div style={{ height: "100vh", background: "#e4c5ff" }}>
                    <div>
                        {profiles}
                    </div>
                    <div>
                        {researches}
                    </div>
                    <div>
                        {footer}
                    </div>
                </div>
            </HomeProvider>
        </div>
    );
};

export default HomeTemplate;
