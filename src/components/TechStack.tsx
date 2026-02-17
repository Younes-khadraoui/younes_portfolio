import { motion } from "framer-motion";

const layers = [
  {
    label: "Frontend",
    items: ["React", "Angular", "HTMX", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Go", "FastAPI", "Node.js", "Symfony"],
  },
  {
    label: "Infrastructure",
    items: ["Docker", "Linux", "WebSockets", "SSH"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MongoDB", "Supabase", "REST APIs"],
  },
];

const TechStack = () => {
  return (
    <section id="stack" className="py-24 md:py-32 border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-primary mb-3 tracking-widest uppercase">Tools</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Architecture Stack</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-border rounded-xl p-6 bg-card"
            >
              <p className="font-mono text-xs text-primary uppercase tracking-wider mb-4">
                {layer.label} Layer
              </p>
              <ul className="space-y-3">
                {layer.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-foreground flex items-center gap-3 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/60 group-hover:bg-accent transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
