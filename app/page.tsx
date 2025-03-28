import { ArrowDown } from "lucide-react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import BackgroundElements from "@/components/background-elements"
import Services from "@/components/services"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <BackgroundElements />
      <Navbar />

      <main>
        <section id="home" className="relative">
          <Hero />
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a
              href="#about"
              className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <ArrowDown size={20} />
            </a>
          </div>
        </section>

        <section id="about" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30 -z-10"></div>
          <About />
        </section>

        <section id="services" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background -z-10"></div>
          <Services />
        </section>

        <section id="skills" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30 -z-10"></div>
          <Skills />
        </section>

        <section id="projects" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background -z-10"></div>
          <Projects />
        </section>

        <section id="experience" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30 -z-10"></div>
          <Experience />
        </section>

        <section id="testimonials" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background -z-10"></div>
          <Testimonials />
        </section>

        <section id="contact" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30 -z-10"></div>
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}

