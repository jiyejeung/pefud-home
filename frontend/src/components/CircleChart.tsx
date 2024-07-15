import React from 'react';

interface CircleChartProps {
  aPercentage?: number;
  bPercentage?: number;
}

const CircleChart: React.FC<CircleChartProps> = ({ aPercentage, bPercentage }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  // const aOffset = circumference * ((100 - aPercentage) / 100);
  // const bOffset = circumference * ((100 - bPercentage) / 100);

  return (
    <div className='flex justify-center items-center absolute top-0 left-0 w-100% h-100%'>
      <svg width='120' height='120' viewBox='0 0 120 120' className='relative w-100% h-100%'>
        {/* <circle cx='60' cy='60' r={radius} stroke='#fff' strokeWidth='10' fill='none' />
        <circle cx='60' cy='60' r={radius} stroke='#000' strokeWidth='10' fill='none' strokeDasharray={circumference} strokeDashoffset={aPercentage} transform='rotate(-90 60 60)' className='transition-all duration-500 ease-out' />
        <circle cx='60' cy='60' r={radius} stroke='#EF4444' strokeWidth='10' fill='none' strokeDasharray={circumference} strokeDashoffset={bPercentage} transform='rotate(-90 60 60)' className='transition-all duration-500 ease-out' /> */}
        <circle cx='60' cy='60' r={radius} fill='#ed9d52' transform='rotate(-90 60 60)' strokeDashoffset='100' strokeDasharray='100' />
        {/* <circle cx='60' cy='60' r={radius} stroke='#000' strokeWidth='1' fill='none' strokeDasharray={circumference} strokeDashoffset={aPercentage} transform='rotate(-90 60 60)' className='transition-all duration-500 ease-out' />
        <circle cx='60' cy='60' r={radius} stroke='#EF4444' strokeWidth='1' fill='none' strokeDasharray={circumference} strokeDashoffset={bPercentage} transform='rotate(-90 60 60)' className='transition-all duration-500 ease-out' /> */}
      </svg>
    </div>
  );
};

export default CircleChart;
