import React from 'react';
import { ParallaxBanner } from "react-scroll-parallax";
import Wave from './Wave';
import Wave2 from './Wave2';
import Frame from '../components/Frame';

const Banner = () => {
  const background = {
      translateY: [0, 40],
      scale: [1, 2],
      shouldAlwaysCompleteAnimation: true,
      children: (<Wave2/>)
    };

    const headline = {
      translateY: [0, 30],
      scale: [0.5, 0.4],
      shouldAlwaysCompleteAnimation: true,
      expanded: false,
      children: (
        <div className="inset center">
          <h1 className="headline white">RiZU</h1>
        </div>
      ),
    };
  
    const foreground = {
      translateY: [0, 10],
      scale: [1, 2],
      shouldAlwaysCompleteAnimation: true,
      children: (<Wave/>)
    };

    const frame = {
      translateY: [0, 10],
      scale: [1, 1.5],
      shouldAlwaysCompleteAnimation: true,
      children: (<Frame rotation={20}/>)
    }
  
    const gradientOverlay = {
      opacity: [0, 0.5, "easeOutCubic"],
      shouldAlwaysCompleteAnimation: true,
      expanded: false,
      children: (<div className="gradient inset" />),
    };
  return (
    <ParallaxBanner
      layers={[background, frame, foreground, headline]}
      className="full"
    />
  );
};

export default Banner;