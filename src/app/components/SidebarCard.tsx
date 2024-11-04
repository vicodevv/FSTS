import React from 'react';
import Image from 'next/image';

interface SidebarCardProps {
  imageSrc: string;
  tags: string[];
  title: string;
  date: string;
}

const SidebarCard: React.FC<SidebarCardProps> = ({
  imageSrc,
  tags,
  title,
  date,
}) => {
  return (
    <div className="space-y-2">
      <Image
        src={imageSrc}
        alt={title}
        className="w-full h-[192px] object-cover rounded-md"
        height={192}
        width={200}
      />
      <div className="space-x-2 text-sm">
        {tags.map((tag, index) => (
          <span key={index} className="bg-gray-700 px-2 py-1 rounded-md">
            {tag}
          </span>
        ))}
      </div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm text-gray-400">{date}</p>
    </div>
  );
};

export default SidebarCard;
