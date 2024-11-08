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
      <div className="overflow-hidden rounded-[6px]">
        <Image
          src={imageSrc}
          alt={title}
          className={`object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 ${className}`}
          width={width}
          height={height}
        />
      </div>
      <div className="absolute bottom-8 left-8">
        <div className="space-x-2 text-sm mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#FFFFFF33] px-2.5 py-2.5 rounded-[3px] hover:bg-[#FFFFFF] hover:cursor-pointer hover:text-black"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-[50px] max-w-[590px] leading-[47px]">{title}</h1>
        <p className="text-[16px] text-gray-400">{date}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
