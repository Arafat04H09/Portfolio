import { useState, useEffect} from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Socials = () => {
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollTop = 0;

  const SCROLL_THRESHOLD = 15; 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (Math.abs(currentScrollTop - lastScrollTop) > SCROLL_THRESHOLD) {
        if (currentScrollTop > lastScrollTop) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-6 right-6 z-50 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex gap-5 items-center">
        <a
          href="https://www.linkedin.com/in/arhoss"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-blue-500 transition-colors"
        >
          <FaLinkedin size={30} />
        </a>

        <a
          href="https://github.com/Arafat04H09"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-gray-700 transition-colors"
        >
          <FaGithub size={30} />
        </a>
      </div>
    </div>
  );
};

export default Socials;
