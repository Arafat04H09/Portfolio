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
              title="Praxis"
              description="Full-stack offline-first vocabulary learning app with FSRS-6 spaced repetition, 4,000+ word corpus, and AI-generated exercises across 3 CEFR proficiency tiers."
              techStack={["TypeScript", "Next.js", "React", "sql.js", "Supabase", "Stripe"]}
              githubLink="https://praxis-v2-clean-web.vercel.app"
            />
            <Project
              title="Brain-Train"
              description="Evidence-based cognitive training suite with 5 modules, adaptive difficulty algorithms (QUEST, CUSUM, d-prime), and transfer assessment battery."
              techStack={["TypeScript", "React", "Vite", "Tailwind"]}
              githubLink="https://github.com/Arafat04H09/brain-train"
            />
            <Project
              title="Pare Engine"
              description="B2B SaaS platform auditing how AI systems perceive businesses. Scores across 5 pillars with multi-stage audit pipeline and PDF report generation."
              techStack={["TypeScript", "Next.js", "PostgreSQL", "Drizzle", "Inngest", "Stripe"]}
              githubLink="https://github.com/Arafat04H09/pare-engine"
            />
            <Project
              title="Political Penguin"
              description="Redistricting analysis platform with 30K+ plans in MongoDB, optimized RESTful APIs, and React dashboard for researchers."
              techStack={["React", "Java Spring", "Python", "MongoDB"]}
              githubLink="https://github.com/Arafat04H09/PoliticalPenguin"
            />
            <Project
              title="CodeHelp.io"
              description="Programming Q&A community with React frontend, Express backend, and MongoDB. RESTful API with search, voting, and authentication."
              techStack={["Node", "React", "Express", "MongoDB"]}
              githubLink="https://github.com/Arafat04H09/CodeHelp.io"
            />
            <Project
              title="DaemonTracker"
              description="Low-level daemon process manager handling lifecycle, logging, and monitoring using pipes, signals, and IPC in C."
              techStack={["C", "Unix", "IPC", "Signals"]}
              githubLink="https://github.com/Arafat04H09/DaemonTracker"
            />
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
};

export default Projects;
