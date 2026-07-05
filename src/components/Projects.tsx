import { motion } from "framer-motion";

const projects = [
  {
    title: "Web Terminal",
    problem:
      "Administrators need a secure, user-friendly way to manage Linux servers remotely without complex SSH tooling.",
    solution:
      "Designed and managed the complete infrastructure for a remote server administration platform via SSH with a modern web interface.",
    tech: ["Symfony", "Angular", "WebSockets", "SSH", "Docker", "CI/CD"],
    highlights: [
      "End-to-end infrastructure management and deployment",
      "Real-time bidirectional WebSocket communication",
      "Secure SSH integration with containerized deployment",
    ],
  },
  {
    title: "Gestion de Flotte - Microservices",
    problem:
      "Fleet management requires distributed processing with multiple specialized services communicating seamlessly.",
    solution:
      "Designed and developed a distributed system with 3 Symfony microservices communicating with a single Angular frontend.",
    tech: ["Symfony", "Angular", "Microservices", "PostgreSQL"],
    highlights: [
      "Distributed architecture with 3 independent services",
      "Unified frontend for multi-service ecosystem",
      "Team collaboration using Agile methodology",
    ],
  },
  {
    title: "Lazdek - RH Automation Tool",
    problem:
      "HR teams needed an automated solution for internal management and critical business calculations.",
    solution:
      "Built an HR automation platform combining ReactJS frontend with FastAPI backend, and engineered critical pricing engines in Python.",
    tech: ["React", "FastAPI", "Python", "Docker"],
    highlights: [
      "Rapid onboarding: fully operational within the first week",
      "Dynamic pricing and computation engines",
      "Agile methodology with rigorous Docker industrialization",
    ],
  },
  {
    title: "AI Hackathon - Building Detection",
    problem:
      "Quickly develop an AI solution for automated building detection from satellite imagery.",
    solution:
      "Won an AI hackathon by developing a Deep Learning-based building detection solution in less than 48 hours.",
    tech: ["Python", "Deep Learning", "LangChain", "TensorFlow"],
    highlights: [
      "Hackathon winner in under 48 hours",
      "Advanced Deep Learning computer vision",
      "Rapid prototyping and deployment",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-primary mb-3 tracking-widest uppercase">
            Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Selected Projects
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-border rounded-xl p-6 md:p-8 bg-card"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <h3 className="text-xl md:text-2xl font-bold">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-xs font-mono text-text-dim uppercase mb-2">
                    Problem
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-mono text-text-dim uppercase mb-2">
                    Solution
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs font-mono text-text-dim uppercase mb-3">
                  Engineering Highlights
                </p>
                <ul className="grid md:grid-cols-3 gap-2">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-xs text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-accent mt-0.5 shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
