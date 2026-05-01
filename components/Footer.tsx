import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Left: identity */}
          <div>
            <p className="font-cal text-lg font-semibold">{personal.name}</p>
            <p className="text-sm text-text-secondary">{personal.title}</p>
          </div>

          {/* Right: social icons */}
          <div className="flex items-center gap-5">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary transition-colors hover:text-text-primary"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary transition-colors hover:text-text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-text-secondary transition-colors hover:text-text-primary"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
