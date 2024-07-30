import React from 'react';

interface ParallaxSectionProps {
  className: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ className, style, children }) => {
  return (
    <div className={`absolute top-0 left-0 right-0 flex text-white ${className}`} style={style}>
      {children}
    </div>
  );
};

export default ParallaxSection;
