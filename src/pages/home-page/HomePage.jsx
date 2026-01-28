import React from 'react';
import HomeTemplate from '../../components/templates/HomeTemplate';
import Banner from '../../components/organisms/Banner';
import Profiles from '../../components/organisms/Profiles';
import Researches from '../../components/organisms/Researches';
import Footer from '../../components/organisms/Footer';

const HomePage = () => {
    return (
        <HomeTemplate
            banner={<Banner />}
            profiles={<Profiles />}
            researches={<Researches />}
            footer={<Footer />}
        />
    );
};

export default HomePage;
