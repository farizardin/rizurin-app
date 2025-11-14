import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from './pages/home/Banner';
import { ParallaxProvider } from 'react-scroll-parallax';
import React, { useEffect, useState } from 'react';
import Artworks from './pages/home/Artworks';
import YoutubePost from './pages/home/YoutubePost';
import Profiles from './pages/home/Profiles';

function App() {

  return (
    <div>
      <ParallaxProvider>
        <Banner />
      </ParallaxProvider>
      {/* <ScrollReveal/> */}
      <div style={{ height: "100vh", background: "#e4c5ff" }}>
        {/* <div>
          <Profiles />
        </div> */}
        <div style={{ paddingTop: "5%" }}>
          <Artworks />
        </div>
        <div style={{ paddingBottom: "5%" }}>
          <YoutubePost />
        </div>
      </div>
    </div>
  );
}

export default App;