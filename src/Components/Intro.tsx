import { TypeAnimation } from 'react-type-animation';
import ScrollIndicator from './ScrollIndicator';

const Intro = () => {
  return (
    <div className="pt-2 flex flex-col px-4">
       <TypeAnimation
        sequence={[
          'Hi, I`m Arafat.',
          2000,
          '',
          1000
        ]}
        wrapper="h1"
        cursor={true}
        repeat={Infinity}
        className="text-center font-bold text-4xl sm:text-5xl md:text-7xl text-white"
      />
      <br/>
      <br/>
        <div className='text-center text- sm:text-2xl md:text-2xl text-slate-300'>
        <p className="mb-2">I'm a software engineer based in New York City.</p>
        <p className="mb-2">New graduate looking for <strong className="text-white">full-time opportunities.</strong></p>
      </div>
      
      <ScrollIndicator targetId="discord" />
    </div>
  );
};

export default Intro;
