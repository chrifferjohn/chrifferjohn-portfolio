import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 mt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5 -z-10"></div>
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="text-2xl font-bold text-primary">
              chriffer-Portfolio
            </Link>
            <p className="text-muted-foreground mt-2 max-w-md">
              Building exceptional digital experiences with modern web technologies. Available for freelance projects
              and full-time opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/chrifferjohn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/chrifferjohnlangomes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/jchriff"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:langomezchriff795@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              © {currentYear} Chriffer John Langomes. All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary/10">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <li>
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

