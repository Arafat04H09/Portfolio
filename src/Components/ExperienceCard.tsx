import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

interface ExperienceCardProps {
  title: string;
  organization: string;
  period: string;
  responsibilities: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, organization, period, responsibilities }) => {
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
      className="relative p-6 m-4 shadow-2xl bg-black bg-opacity-45 backdrop-blur-md rounded-2xl flex flex-col cursor-pointer transition-transform hover:scale-105 w-full"
    >
      <h3 className="text-white text-xl font-bold">{title}</h3>
      <p className="text-gray-400 text-base italic">{organization} | {period}</p>
      <ul className="list-disc list-inside text-gray-300 text-base mt-3 space-y-2">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
