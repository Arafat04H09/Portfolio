import AnimateOnScroll from "../Components/AnimateOnScroll";
import ClassCard from "../Components/ClassCard";
import ExperienceCard from "../Components/ExperienceCard";

const Experiences = () => {
  return (
    <AnimateOnScroll>
      <div id="experience" className="pt-7 flex justify-center items-start">
        <div className="container mx-auto px-4 pt-24">
          <h1 className="text-5xl font-bold text-white mb-4 mt-4 relative after:content-[''] after:absolute after:top-1/2 after:ml-4 after:w-80 after:h-[1px] after:bg-white">
            / experience
          </h1>

          <h2 className="text-3xl font-semibold text-blue-500 mt-12 mb-6">
            Professional Experience
          </h2>
          <div className="flex flex-col gap-8 pb-10">
            <ExperienceCard
              title="Software Engineer"
              organization="JPMorgan Chase & Co."
              period="April 2025 – Current"
              responsibilities={[
                "Prevented pipeline storage issues by automating Jenkins cleanup, removing 80% of outdated builds.",
                "Closed critical security gaps by automating vulnerability PR tracking through Bitbucket–Jira integration.",
                "Restored uptime monitoring to 100% by fixing 40+ AWS CloudWatch canaries for critical endpoints.",
                "Enhanced incident prevention by transforming failed monitoring into a fully operational early-warning system."
              ]}
            />
          </div>

          <h2 className="text-3xl font-semibold text-blue-500 mb-6">Academic Coursework</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 justify-items-center gap-y-4 gap-x-4">
            <ClassCard
              title="CSE 214: Data Structures"
              description="Covers fundamental data structures, including arrays, linked lists, stacks, and graphs."
            />
            <ClassCard
              title="CSE 215: Foundations of Computer Science"
              description="Introduces logic, set theory, combinatorics, and discrete math for computer science."
            />
            <ClassCard
              title="CSE 216: Programming Abstractions II"
              description="Focuses on abstraction, modularity, and software design patterns."
            />
            <ClassCard
              title="CSE 303: Theory of Computation"
              description="Explores automata theory, computability, and complexity analysis."
            />
            <ClassCard
              title="AMS 310: Probability and Statistics"
              description="Covers probability theory and statistical methods like hypothesis testing."
            />
            <ClassCard
              title="CSE 310: Computer Networks"
              description="Introduces networking principles, including TCP/IP and network security."
            />
            <ClassCard
              title="CSE 320: Systems Fundamentals II"
              description="Covers operating systems, computer architecture, and assembly programming."
            />
            <ClassCard
              title="CSE 356: Natural Language Processing"
              description="Introduces computational techniques for processing and understanding language."
            />
            <ClassCard
              title="CSE 373: Analysis of Algorithms"
              description="Covers algorithm design, graph algorithms, and NP-completeness."
            />
            <ClassCard
              title="CSE 416: Fundamentals of Software Development"
              description="Focuses on software development methodologies and testing practices."
            />
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
};

export default Experiences;
