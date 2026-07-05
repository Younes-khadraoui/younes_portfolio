import { motion } from "framer-motion";

const events = [
  {
    year: "2023–2025",
    title: "Micro Club",
    description: "Ateliers Web/Python/Deep Learning & gagnant hackathon IA",
  },
  {
    year: "06/2024–10/2025",
    title: "Développeur Full-Stack - Lazdek LLC",
    description:
      "Remote: automatisation RH, assistance comptable, pricing dynamique & moteurs critiques",
  },
  {
    year: "2024–2025",
    title: "Projets clés",
    description:
      "Messagerie temps réel, moteurs de tarification, architecture microservices",
  },
  {
    year: "2025–2027",
    title: "Master Génie Logiciel",
    description:
      "Université de Rouen Normandie - Architecture avancée & systèmes distribués",
  },
  {
    year: "06–09/2026",
    title: "Alternance disponible",
    description: "Full-Stack & DevOps - 15 jours on/off, région Rouen/Lille",
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
            Croissance
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Parcours professionnel
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
