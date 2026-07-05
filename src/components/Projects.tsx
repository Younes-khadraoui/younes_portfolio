import { motion } from "framer-motion";

const projects = [
  {
    title: "Web Terminal",
    problem:
      "Les administrateurs ont besoin d'un moyen sécurisé et convivial de gérer les serveurs Linux à distance sans outils SSH complexes.",
    solution:
      "Conception et gestion de l'infrastructure complète pour une plateforme d'administration de serveur à distance via SSH avec interface web moderne.",
    tech: ["Symfony", "Angular", "WebSockets", "SSH", "Docker", "CI/CD"],
    highlights: [
      "Gestion et déploiement complets de l'infrastructure de bout en bout",
      "Communication WebSocket bidirectionnelle en temps réel",
      "Intégration SSH sécurisée avec déploiement conteneurisé",
    ],
  },
  {
    title: "Gestion de Flotte - Microservices",
    problem:
      "La gestion de flotte nécessite un traitement distribué avec plusieurs services spécialisés communiquant de façon transparente.",
    solution:
      "Conception et développement d'un système distribué avec 3 microservices Symfony communiquant avec un frontend Angular unique.",
    tech: ["Symfony", "Angular", "Microservices", "PostgreSQL"],
    highlights: [
      "Architecture distribuée avec 3 services indépendants",
      "Frontend unifié pour l'écosystème multi-services",
      "Collaboration d'équipe utilisant la méthodologie Agile",
    ],
  },
  {
    title: "Lazdek - Outil Automatisation RH",
    problem:
      "Les équipes RH avaient besoin d'une solution automatisée pour la gestion interne et les calculs commerciaux critiques.",
    solution:
      "Construction d'une plateforme d'automatisation RH combinant frontend ReactJS avec backend FastAPI, et moteurs de tarification critiques en Python.",
    tech: ["React", "FastAPI", "Python", "Docker"],
    highlights: [
      "Intégration rapide: opérationnel dans la première semaine",
      "Moteurs de tarification dynamique et calcul",
      "Méthodologie Agile avec industrialisation Docker rigoureuse",
    ],
  },
  {
    title: "Hackathon IA - Détection de Bâtiments",
    problem:
      "Développer rapidement une solution IA pour la détection automatisée de bâtiments à partir d'imagerie satellite.",
    solution:
      "Gagnant du hackathon IA en développant une solution de détection de bâtiments basée sur le Deep Learning en moins de 48 heures.",
    tech: ["Python", "Deep Learning", "LangChain", "TensorFlow"],
    highlights: [
      "Gagnant du hackathon en moins de 48 heures",
      "Vision par ordinateur Deep Learning avancée",
      "Prototypage rapide et déploiement",
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
            Travail
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Projets sélectionnés
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
                    Problème
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
                  Points techniques clés
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
