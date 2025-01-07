import AnimateOnScroll from "../Components/AnimateOnScroll";
import Project from "../Components/ProjectCard";

const Projects = () => {
  return (
    <AnimateOnScroll>
      <div id="projects" className="pt-7 flex justify-center items-start">
        <div className="container mx-auto px-4 pt-24 pb-20">
          <h1 className="text-5xl font-bold text-white mb-4 mt-4 relative after:content-[''] after:absolute after:top-1/2 after:ml-4 after:w-80 after:h-[1px] after:bg-white">
            / projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-8">
            <Project 
              title="Political Penguin" 
              description="A platform providing insights into political trends using sentiment analysis on tweets and other data sources." 
              techStack={["React", "Java Spring", "Python", "MongoDB"]}
              githubLink="https://github.com/Arafat04H09/PoliticalPenguin"
            />
            <Project 
              title="SyncFM" 
              description="A Discord bot that allows users to view and interact with their listening statistics. Inspired by Spotify Wrapped." 
              techStack={["Python", "Discord API", "Spotify API", "AWS"]}
              githubLink="https://github.com/Arafat04H09/SyncFM"
            />
            <Project 
              title="CodeHelp.io" 
              description="A lightweight website for users to ask programming-related questions, share solutions, and explore a collaborative Q&A community." 
              techStack={["Node", "React", "Express", "Axios", "HTML", "CSS", "JavaScript", "MongoDB"]}
              githubLink="https://github.com/Arafat04H09/CodeHelp.io"
            />
            <Project 
              title="DaemonTracker" 
              description="A low-level tool for process tracking and management. Created as a foundational systems project." 
              techStack={["C"]}
              githubLink="https://github.com/Arafat04H09/DaemonTracker"
            />
            <Project 
              title="Memory Allocator" 
              description="A custom memory allocator designed to replicate the functionality of `malloc` and `free` in C, with optimized performance." 
              techStack={["C"]}
              githubLink="https://github.com/Arafat04H09/MemoryAllocator"
            />
            <Project 
              title="Portfolio Website" 
              description="The website you're currently browsing! Designed and built to showcase my career, skills, and projects." 
              techStack={["Typescript", "React", "NextJS", "ThreeJS", "TailwindCSS"]}
              githubLink="https://github.com/Arafat04H09/Portfolio"
            />
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
};

export default Projects;
