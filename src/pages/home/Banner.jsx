import React from 'react';
import { ParallaxBanner } from "react-scroll-parallax";
import Foreground from '../../components/Foreground';
import Background from '../../components/Background';
import Frame from '../../components/Frame';
import Particle from '../../components/Particles';
import Dock from '../../components/Dock';

const Banner = () => {
  const background = {
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (<div style={{ backgroundColor: 'rgb(25, 0, 34)', width: '100%', height: '100%' }} />),
  };

  const background2 = {
    translateY: [7, 40],
    scale: [1, 2],
    shouldAlwaysCompleteAnimation: true,
    children: (<Background />)
  };

  const headline = {
    translateY: [0, 0],
    scale: [1, 0.5],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset center">
        <h2 className="headline" style={{ paddingLeft: "100px", letterSpacing: "100px", color: "lavender", textAlign: "center" }}>RiZU</h2>
      </div>
    ),
  };

  const foreground = {
    translateY: [0, 10],
    scale: [1, 2],
    shouldAlwaysCompleteAnimation: true,
    children: (<Foreground />)
  };

  const particle = {
    translateY: [0, 10],
    scale: [1, 2],
    shouldAlwaysCompleteAnimation: true,
    children: (<Particle />)
  };

  const frame = [
    {
      translateY: [45, -20],
      translateX: [15, 80],
      scale: [1.3, 3],
      shouldAlwaysCompleteAnimation: true,
      children: (<Frame rotation={35} image='/images/art1.png' />)
    },
    {
      translateY: [32, -20],
      translateX: [45, 100],
      scale: [1.3, 3],
      shouldAlwaysCompleteAnimation: true,
      children: (<Frame rotation={20} image='/images/art3.png' />)
    },
    {
      translateY: [50, -20],
      translateX: [70, 160],
      scale: [1.3, 3],
      shouldAlwaysCompleteAnimation: true,
      children: (<Frame rotation={-20} image='/images/art2.png' />)
    },
    {
      translateY: [40, -20],
      translateX: [100, 160],
      scale: [1.3, 3],
      shouldAlwaysCompleteAnimation: true,
      children: (<Frame rotation={-45} image='/images/art4.png' />)
    }
  ];

  const dock = {
    translateY: [70, 50],
    scale: [1, 0.5],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    expanded: false,
    shouldAlwaysCompleteAnimation: true,
    children: (<Dock />)
  };

  const gradientOverlay = {
    opacity: [0.1, 0.3, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (<div style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)', width: '100%', height: '100%' }} />),
  };

  return (
    <ParallaxBanner
      // layers={[background, background2, foreground, particle, gradientOverlay, headline, dock]}
      layers={[background, background2, foreground, particle, gradientOverlay, headline]}
      className="full"
    />
  );
};

export default Banner;