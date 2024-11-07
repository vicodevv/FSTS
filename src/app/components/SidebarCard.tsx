import React from 'react';
import Image from 'next/image';

interface SidebarCardProps {
  imageSrc: string;
  tags: string[];
  className?: string;
  title: string;
  date: string;
}

const SidebarCard: React.FC<SidebarCardProps> = ({
  imageSrc,
  tags,
  className,
  title,
  date,
}) => {
  return (
    <div className="space-y-4">
      <Image
        src={imageSrc}
        alt={title}
        className="h-[275px] w-[322px] object-cover rounded-md"
        height={275}
        width={322}
      />
      <div className="space-x-2 text-sm">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-[#ECECEC] text-[#111111] px-2 py-1.5 rounded-[3px]"
          >
            {tag}
          </span>
        ))}
      </div>
      <h2 className="text-xl text-[#000000] font-semibold">{title}</h2>
      <p className="text-sm text-[#7E7E7E]">{date}</p>
    </div>
  );
};

export default SidebarCard;
