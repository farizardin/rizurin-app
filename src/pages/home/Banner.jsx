import React from 'react';
import { ParallaxBanner } from "react-scroll-parallax";
import Foreground from '../../components/Foreground';
import Background from '../../components/Background';
import Frame from '../../components/Frame';

const Banner = () => {
  const background = {
      translateY: [7, 40],
      scale: [1, 2],
      shouldAlwaysCompleteAnimation: true,
      children: (<Background/>)
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
      children: (<Foreground/>)
    };

    const frame = [
        {
        translateY: [45, -20],
        translateX: [15, 80],
        scale: [1.3, 3],
        shouldAlwaysCompleteAnimation: true,
        children: (<Frame rotation={35} image='/images/art1.png'/>)
      },
      {
        translateY: [32, -20],
        translateX: [45, 100],
        scale: [1.3, 3],
        shouldAlwaysCompleteAnimation: true,
        children: (<Frame rotation={20} image='/images/art2.png'/>)
      },
      {
        translateY: [50, -20],
        translateX: [70, 160],
        scale: [1.3, 3],
        shouldAlwaysCompleteAnimation: true,
        children: (<Frame rotation={-20} image='/images/art3.png'/>)
      },
      {
        translateY: [40, -20],
        translateX: [100, 160],
        scale: [1.3, 3],
        shouldAlwaysCompleteAnimation: true,
        children: (<Frame rotation={-45} image='/images/art4.png'/>)
      }
    ]
  
    const gradientOverlay = {
      opacity: [0.2, 0.5, "easeOutCubic"],
      shouldAlwaysCompleteAnimation: true,
      expanded: false,
      children: (<div style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)', width: '100%', height: '100%' }}/>),
    };
  return (
    <ParallaxBanner
      layers={[background, ...frame, foreground, gradientOverlay, headline]}
      className="full"
    />
  );
};

export default Banner;