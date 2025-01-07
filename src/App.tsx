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
      <Projects />
      <Experience />
    </div>
  );
}

export default App  
