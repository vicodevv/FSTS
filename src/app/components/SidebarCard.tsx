import React from 'react';
import Image from 'next/image';

interface SidebarCardProps {
  imageSrc: string;
  tags: string[];
  className?: string;
  title: string;
  date: string;
  tagClassName?: string;
  titleClassName?: string;
  dateClassName?: string;
}

const SidebarCard: React.FC<SidebarCardProps> = ({
  imageSrc,
  tags,
  className,
  title,
  date,
  tagClassName,
  titleClassName,
  dateClassName,
}) => {
  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-[6px]">
        <Image
          src={imageSrc}
          alt={title}
          className="h-[275zpx] w-[322px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
          height={275}
          width={322}
        />
      </div>
      <div className="space-x-2 text-sm">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`bg-[#ECECEC] text-[#111111] px-2.5 py-2.5 rounded-[3px] hover:bg-[#7E7E7E] hover:cursor-pointer hover:text-[#ffffff] ${tagClassName}`}
          >
            {tag}
          </span>
        ))}
      </div>
      <h2
        className={`text-[22px] text-[#000000] max-w-[300px] leading-[27px] ${titleClassName}`}
      >
        {title}
      </h2>
      <p className={`text-sm text-[#7E7E7E] ${dateClassName}`}>{date}</p>
    </div>
  );
};

export default SidebarCard;
