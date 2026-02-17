import { motion } from "framer-motion";

const events = [
  {
    year: "2023",
    title: "Weather Cast",
    description: "React + FastAPI weather dashboard",
  },
  {
    year: "2024",
    title: "Radiance Chat",
    description: "Real-time WebSocket messaging platform",
  },
  {
    year: "2024–2025",
    title: "Lazdek LLC",
    description: "Go-based dynamic pricing engine, Professional experience",
  },
  {
    year: "2025",
    title: "Web Terminal",
    description: "Browser-based SSH with Symfony, Angular & Docker",
  },
  {
    year: "2025–2027",
    title: "Master's in Software Engineering",
    description: "Advanced studies in system design & architecture",
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 md:py-32 border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-primary mb-3 tracking-widest uppercase">
            Growth
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Professional Timeline
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[11px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[7px] md:left-1/2 md:-translate-x-1/2 top-1 w-[9px] h-[9px] rounded-full border-2 border-primary bg-background z-10" />

                {/* Content */}
                <div
                  className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                >
                  <p className="font-mono text-xs text-primary mb-1">
                    {event.year}
                  </p>
                  <h3 className="text-base font-semibold mb-1">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
