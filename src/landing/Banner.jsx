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

    const frame = [
        {
        translateY: [53, -20],
        translateX: [20, 80],
        scale: [1.3, 3],
        shouldAlwaysCompleteAnimation: true,
        children: (<Frame rotation={35}/>)
      },
      {
        translateY: [30, -20],
        translateX: [40, 100],
        scale: [1.3, 3],
        shouldAlwaysCompleteAnimation: true,
        children: (<Frame rotation={20}/>)
      },
      {
        translateY: [45, -20],
        translateX: [60, 160],
        scale: [1.3, 3],
        shouldAlwaysCompleteAnimation: true,
        children: (<Frame rotation={-20}/>)
      },
      {
        translateY: [55, -20],
        translateX: [80, 160],
        scale: [1.3, 3],
        shouldAlwaysCompleteAnimation: true,
        children: (<Frame rotation={-45}/>)
      }
    ]
  
    const gradientOverlay = {
      opacity: [0, 0.5, "easeOutCubic"],
      shouldAlwaysCompleteAnimation: true,
      expanded: false,
      children: (<div className="gradient inset" />),
    };
  return (
    <ParallaxBanner
      layers={[background, ...frame, foreground, headline]}
      className="full"
    />
  );
};

export default Banner;