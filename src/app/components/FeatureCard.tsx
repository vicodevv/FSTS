import React from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  imageSrc: string;
  tags: string[];
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ imageSrc, tags, title }) => {
  return (
    <div className="w-2/3 relative">
      <Image
        src={imageSrc}
        alt={title}
        className="w-full h-[746px] object-cover rounded-md"
        height={746}
        width={200}
      />
      <div className="absolute bottom-8 left-8">
        <div className="space-x-2 text-sm mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-gray-700 px-2 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default FeatureCard;
