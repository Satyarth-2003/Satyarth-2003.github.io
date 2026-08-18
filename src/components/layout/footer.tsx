import Link from "next/link";
import { Container } from "@/components/ui/primitives";
import { navLinks, profile } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-12">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link href="/" className="font-mono text-sm text-bone">
              satyarth<span className="text-ember">.</span>srivastava
            </Link>
            <p className="mt-2 font-mono text-xs text-muted">
              AI Engineer · {profile.location}
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted"
          >
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-bone"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/resume"
              className="transition-colors hover:text-bone"
            >
              Résumé
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-bone"
            >
              Contact
            </Link>
          </nav>

          <div className="flex gap-5 font-mono text-xs">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-bone"
            >
              GitHub
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-bone"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-muted transition-colors hover:text-bone"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 font-mono text-[0.7rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center justify-between gap-4 sm:contents">
            <span>© {year} Satyarth Prakash Srivastava</span>
            <span className="text-muted/70">
              Gurugram, India · SDE-1 AI @ Adda Education
            </span>
          </div>
          <span>Engineered for intelligence & scale.</span>
        </div>
      </Container>
    </footer>
  );
}
