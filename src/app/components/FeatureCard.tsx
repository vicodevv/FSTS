import React from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  imageSrc: string;
  tags: string[];
  className?: string;
  title: string;
  width?: number;
  height?: number;
  date?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  imageSrc,
  tags,
  className,
  title,
  width,
  height,
  date,
}) => {
  return (
    <div className="relative" style={{ width: `${width}px` }}>
      <Image
        src={imageSrc}
        alt={title}
        className={`object-cover rounded-md ${className}`}
        width={width}
        height={height}
      />
      <div className="absolute bottom-8 left-8">
        <div className="space-x-2 text-sm mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#FFFFFF33] px-2 py-1.5 rounded-[3px]"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-sm text-gray-400">{date}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
