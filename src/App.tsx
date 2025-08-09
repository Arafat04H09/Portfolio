import Hero from './Pages/Hero.tsx';
import Projects from './Pages/Projects.tsx';
import Discord from './Pages/Discord.tsx';
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import Experience from './Pages/Experience.tsx';

function App() {
  return (
    <div className="flex flex-col">
      <Analytics />
      <SpeedInsights />
      <Hero />
      <Discord /> 
      <Experience />
      <Projects />
      <footer className="mt-auto text-center text-sm text-gray-500 ">
        Built by <span className="font-bold">Arafat</span> ©<br />
      </footer>
    </div>
  );
}

export default App  
