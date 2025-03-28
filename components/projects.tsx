"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ExternalLink, Github, ArrowRight, ArrowLeft, QrCode, Calendar, FileText } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Library Books QR Code Scanner",
    description:
      "A web-based system that streamlines book borrowing and returning using QR code scanning. Features include real-time book tracking, user authentication, and borrowing history management.",
    image: "/images/library-qr-scanner.png",
    technologies: ["HTML", "Tailwind CSS", "Laravel", "PHP", "JavaScript"],
    demoLink: "https://github.com/chrifferjohn/Library-Books-Qrcode-Scanner-",
    githubLink: "https://github.com/chrifferjohn/Library-Books-Qrcode-Scanner-",
    icon: <QrCode className="w-8 h-8 text-primary/70" />,
  },
  {
    id: 2,
    title: "Rice Mill Scheduling System",
    description:
      "A scheduling system designed for rice mills to automate appointment booking and track milling sessions. It ensures efficient resource allocation and production tracking.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["PHP", "Tailwind CSS", "JavaScript", "MySQL", "AJAX"],
    demoLink: "https://github.com/chrifferjohn/rice-mill-scheduling-system",
    githubLink: "https://github.com/chrifferjohn/rice-mill-scheduling-system",
    icon: <Calendar className="w-8 h-8 text-primary/70" />,
  },
  {
    id: 3,
    title: "Barangay Dagohoy Information System",
    description:
      "A web-based system that digitizes barangay records, enabling efficient document requests, resident data management, and service tracking.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Bootstrap 5", "HTML", "PHP", "JavaScript", "MySQL"],
    demoLink: "https://github.com/chrifferjohn/barangay-dagohoy-info-system",
    githubLink: "https://github.com/chrifferjohn/barangay-dagohoy-info-system",
    icon: <FileText className="w-8 h-8 text-primary/70" />,
  },
  {
    id: 4,
    title: "IT Career roadmap App",
    description:
      "A content management system that allows users to create, edit, and publish blog posts. Includes user authentication, category filtering, and a rich text editor.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React native", "axios", "tailwind Css", "MySql"],
    demoLink: "https://github.com/chrifferjohn/blog-platform",
    githubLink: "https://github.com/chrifferjohn/blog-platform",
  },
  {
    id: 5,
    title: "BSIT Promotional Website",
    description:
      "An interactive website promoting the BSIT program. Showcases curriculum details, student projects, career opportunities, and faculty profiles.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["html", "bootstrap", "Javascript"],
    demoLink: "https://github.com/chrifferjohn/bsit-promotional-website",
    githubLink: "https://github.com/chrifferjohn/bsit-promotional-website",
  },
  {
    id: 6,
    title: "Currency Converter",
    description:
      "A web app that provides real-time currency conversion. It integrates with an exchange rate API to ensure accurate and up-to-date conversions.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Javascript", "Tailwind CSS"],
    demoLink: "https://github.com/chrifferjohn/currency-converter",
    githubLink: "https://github.com/chrifferjohn/currency-converter",
  },
]

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 3

  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject)
  const totalPages = Math.ceil(projects.length / projectsPerPage)

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="container mx-auto px-4 relative">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="text-center mb-16 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto"></div>
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
          Here are some of my recent projects. Each one was built to solve a specific problem or explore new
          technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-12 gap-4">
          <Button
            variant="outline"
            onClick={prevPage}
            disabled={currentPage === 1}
            className="gap-2 border-primary/20 hover:border-primary"
          >
            <ArrowLeft size={16} /> Previous
          </Button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i}
                variant={currentPage === i + 1 ? "default" : "outline"}
                size="icon"
                onClick={() => setCurrentPage(i + 1)}
                className={currentPage === i + 1 ? "bg-primary" : "border-primary/20 hover:border-primary"}
              >
                {i + 1}
              </Button>
            ))}
          </div>
          <Button
            variant="outline"
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="gap-2 border-primary/20 hover:border-primary"
          >
            Next <ArrowRight size={16} />
          </Button>
        </div>
      )}
    </div>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg border-primary/10 hover:border-primary/30 bg-card/50 backdrop-blur-sm group">
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background/80 z-0"></div>

        {/* Project image */}
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Project icon overlay (if available) */}
        {project.icon && (
          <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-background/70 backdrop-blur-sm rounded-full z-20">
            {project.icon}
          </div>
        )}
      </div>
      <CardContent className="flex-grow pt-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="border-primary/20 hover:border-primary hover:bg-primary/5"
        >
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Github size={16} /> Code
          </a>
        </Button>
        <Button
          size="sm"
          asChild
          className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
        >
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <ExternalLink size={16} /> Live Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

