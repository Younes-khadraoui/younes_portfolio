import { motion } from "framer-motion";
import { Brain, Zap, Wrench } from "lucide-react";
import { useState } from "react";

const pillars = [
  {
    icon: Brain,
    title: "Systems Thinking",
    description: "Designing architecture before writing code. Solving complex problems with structured approaches.",
    details: [
      "Web Terminal : Full SSH interface with secure auth flows",
      "Dynamic Pricing Engine : Real-time algorithmic pricing at Lazdek LLC",
      "Clean architecture patterns across Go, Python & TypeScript",
    ],
  },
  {
    icon: Zap,
    title: "Real-Time Applications",
    description: "Building responsive, bidirectional communication systems that scale.",
    details: [
      "Radiance Chat : WebSocket-based messaging platform",
      "Real-time data streaming with event-driven architecture",
      "Low-latency UI updates with optimistic state management",
    ],
  },
  {
    icon: Wrench,
    title: "Practical DevOps",
    description: "Shipping reliable software with modern infrastructure and deployment pipelines.",
    details: [
      "Docker containerization for consistent environments",
      "Linux server administration & SSH automation",
      "CI/CD workflows and deployment strategies",
    ],
  },
];

const EngineeringFocus = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="approach" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-primary mb-3 tracking-widest uppercase">Methodology</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Engineering Approach</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const isExpanded = expanded === i;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setExpanded(isExpanded ? null : i)}
                className="glow-border rounded-xl p-6 bg-card cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{pillar.description}</p>

                <motion.div
                  initial={false}
                  animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-2 pt-2 border-t border-border">
                    {pillar.details.map((detail) => (
                      <li key={detail} className="text-xs text-foreground flex items-start gap-2">
                        <span className="text-accent mt-0.5">▸</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <p className="text-xs text-text-dim mt-3 font-mono">
                  {isExpanded ? "Click to collapse" : "Click to expand"}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EngineeringFocus;
