import React from 'react';

const Wave = ({ amplitude = 20, frequency = 5, points = 100, height = 100 }) => {
  const width = 2100;
	const range = points / frequency;
	// console.log(range);
  const generateWavePath = () => {
    const step = width / points;
    let path = `M0,${height}`;
    for (let i = 0; i <= points; i++) {
			if(i % range == 0){
				console.log(i, range, i % range);
				amplitude = (Math.random() * (80 - 10) + 10);
			}
      const x = i * step;
      const y = height + amplitude * Math.sin((frequency * x * Math.PI) / width);
      path += ` L${x},${y}`;
    }
    path += ` L${width},2100 L0,2100 Z`;
    return path;
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2100 100" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="gradient" x1="0" x2="0" y1="1" y2="1">
          <stop offset="0%" stopColor="#0099ff" />
          <stop offset="100%" stopColor="#66ccff" />
        </linearGradient>
      </defs>
      <path fill="url(#gradient)" d={generateWavePath()} />
    </svg>
  );
};

export default Wave;
