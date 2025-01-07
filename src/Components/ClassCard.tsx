import React, { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { FaBook } from 'react-icons/fa';

interface ClassCardProps {
  title: string;
  description: string;
}

const ClassCard: React.FC<ClassCardProps> = ({ title, description }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      const isMobile = window.innerWidth < 768;
      VanillaTilt.init(cardRef.current, {
        max: isMobile ? 2 : 10,
        speed: 400,
        glare: false,
        "max-glare": 0.1,
      });
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative p-6 m-4 shadow-2xl bg-black bg-opacity-45 backdrop-blur-md max-w-xs rounded-xl cursor-pointer text-center"
    >
      <div className="flex items-center justify-center mb-2">
        <FaBook size={24} className="text-gray-300" /> 
      </div>
      <h2 className="text-slate-300 text-lg font-bold mb-2">{title}</h2>
      <p className="text-slate-400 text-sm">{description}</p>
    </div>
  );
};

export default ClassCard;
