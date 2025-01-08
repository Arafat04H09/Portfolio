import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

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
        max: isMobile ? 1 : 5,
        speed: 400,
        glare: false,
        "max-glare": 0.1,
      });
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative p-6 m-4 shadow-2xl bg-black bg-opacity-45 backdrop-blur-md max-w-sm rounded-2xl flex flex-col cursor-pointer transition-transform hover:scale-105"
    >
      <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 text-base">{description}</p>
    </div>
  );
};

export default ClassCard;
