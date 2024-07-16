import React, { useState, useEffect } from 'react';

const CircleShow: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalId);
          return 100;
        }
        return prev + 1;
      });
    }, 2);

    return () => clearInterval(intervalId);
  }, []);

  const getBackgroundStyle = () => {
    return `conic-gradient(transparent 0% ${progress}%, #2e1e19 ${progress}% 100%)`;
  };

  return <div className='w-85% h-85% aspect-square rounded-full absolute top-8.5% left-8.5%' style={{ background: getBackgroundStyle() }}></div>;
};

export default CircleShow;
