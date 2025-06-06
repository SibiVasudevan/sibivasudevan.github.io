import { Link, useLocation } from "wouter";
import { ThemeToggle } from "@/components/theme-toggle";
import { Github, Linkedin } from "lucide-react";

export default function Header() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" }
  ];

  return (
    <header className="border-b border-border">
      <nav className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-medium hover:text-primary">
          Sibi
        </Link>
        <div className="flex items-center gap-6">
          <ul className="flex gap-6">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link 
                  href={href}
                  className={`hover:text-primary ${location === href ? 'text-primary' : 'text-muted-foreground'}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/sibi-chakravarthy-v/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/sibivasudevan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}