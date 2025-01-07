import Shapes from '../Components/Shapes';
import Intro from '../Components/Intro';
import FadeIn from 'react-fade-in';
import Socials from '../Components/Socials';

const Hero = () => {
  return (
    <FadeIn>
      <div className="relative flex flex-col items-center justify-center h-screen">
        <div className="absolute top-4 right-4">
          <Socials />
        </div>
        <Shapes />
        <Intro />
      </div>
    </FadeIn>
  );
};

export default Hero;
