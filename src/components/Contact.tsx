import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs text-primary mb-3 tracking-widest uppercase">
            Next Step
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Let's Connect
          </h2>
          <p className="text-foreground text-lg mb-2">
            Open to{" "}
            <span className="text-text-bright font-semibold">
              Full Stack Internship
            </span>{" "}
            "June 2026"
          </p>
          <p className="text-foreground text-lg mb-10">
            <span className="text-text-bright font-semibold">
              Apprenticeship
            </span>{" "}
            "September 2026"
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="mailto:younes.khadraoui.pro@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
            <a
              href="https://github.com/younes-khadraoui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/younes-khadraoui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border">
          <p className="text-xs text-text-dim font-mono">
            © 2026 Younes Khadraoui — Designed & built with precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
