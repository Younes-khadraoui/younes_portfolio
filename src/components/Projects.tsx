import { motion } from "framer-motion";

const projects = [
  {
    title: "Web Terminal Platform",
    problem: "Remote Linux server administration requires complex SSH tooling and manual configuration.",
    solution: "Built a web-based SSH interface enabling browser-based server management with secure authentication.",
    tech: ["Symfony 7", "Angular", "WebSockets", "JWT", "Docker"],
    highlights: [
      "Real-time bidirectional communication via WebSockets",
      "Secure JWT-based authentication flow",
      "Containerized deployment with Docker",
    ],
  },
  {
    title: "Dynamic Pricing Engine",
    problem: "E-commerce pricing required manual adjustments and lacked real-time market responsiveness.",
    solution: "Engineered an algorithmic pricing engine at Lazdek LLC, enabling automated price optimization.",
    tech: ["Go", "HTMX", "PostgreSQL", "REST APIs"],
    highlights: [
      "Real-time price calculation based on market parameters",
      "Go backend for high-performance computation",
      "HTMX for lightweight, server-driven UI updates",
    ],
  },
  {
    title: "Radiance Chat",
    problem: "Need for a real-time communication platform with modern UX and reliable message delivery.",
    solution: "Built a full-featured chat application with WebSocket-based real-time messaging.",
    tech: ["React", "Node.js", "WebSockets", "MongoDB"],
    highlights: [
      "Persistent real-time messaging with WebSocket connections",
      "User presence and typing indicators",
      "Message history with pagination",
    ],
  },
  {
    title: "Weather Cast",
    problem: "Weather data APIs are complex and lack intuitive visualization.",
    solution: "Created a clean weather dashboard consuming external APIs with responsive data visualization.",
    tech: ["React", "FastAPI", "REST APIs"],
    highlights: [
      "FastAPI backend aggregating weather data sources",
      "Responsive React frontend with clean data presentation",
      "API caching layer for performance optimization",
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
          <p className="font-mono text-xs text-primary mb-3 tracking-widest uppercase">Work</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Selected Projects</h2>
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
                <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
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
                  <p className="text-xs font-mono text-text-dim uppercase mb-2">Problem</p>
                  <p className="text-sm text-foreground leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-text-dim uppercase mb-2">Solution</p>
                  <p className="text-sm text-foreground leading-relaxed">{project.solution}</p>
                </div>
              </div>

              <div>
                <p className="text-xs font-mono text-text-dim uppercase mb-3">Engineering Highlights</p>
                <ul className="grid md:grid-cols-3 gap-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="text-xs text-muted-foreground flex items-start gap-2">
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
