import { Globe, Smartphone, Palette, Database, Code, Wrench, Server, Lock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom responsive websites and web applications built with modern frameworks and best practices.",
    icon: <Globe className="w-10 h-10" />,
    technologies: "Vaniila Javascript,React, Next.js, Laravel, PHP",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    icon: <Smartphone className="w-10 h-10" />,
    technologies: "React Native, Android",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "User-centered design solutions that are both aesthetically pleasing and highly functional.",
    icon: <Palette className="w-10 h-10" />,
    technologies: "Figma, Adobe XD, Tailwind CSS",
  },
  {
    id: 4,
    title: "Database Design",
    description: "Efficient and scalable database architectures tailored to your specific requirements.",
    icon: <Database className="w-10 h-10" />,
    technologies: "MySQL, SQLi, MongoDB",
  },
  {
    id: 5,
    title: "API Development",
    description: "Robust and secure APIs that enable seamless integration between different systems.",
    icon: <Server className="w-10 h-10" />,
    technologies: "RESTful APIs, GraphQL, Laravel",
  },

  {
    id: 7,
    title: "Custom Software Solutions",
    description: "Tailor-made software solutions designed to address your unique business challenges.",
    icon: <Code className="w-10 h-10" />,
    technologies: "JavaScript, PHP, Python",
  },
 
]

export default function Services() {
  return (
    <div className="container mx-auto px-4 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="text-center mb-16 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto"></div>
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
          I offer a wide range of development services to help bring your ideas to life. Here's how I can help you with
          your next project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  )
}

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  return (
    <Card className="h-full border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-card/50 backdrop-blur-sm group">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4 p-3 rounded-lg bg-primary/10 text-primary w-fit group-hover:bg-primary/20 transition-colors">
          {service.icon}
        </div>

        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>

        <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>

        <div className="text-sm text-primary/70 pt-2 border-t border-primary/10">
          <span className="font-medium">Technologies:</span> {service.technologies}
        </div>
      </CardContent>
    </Card>
  )
}

