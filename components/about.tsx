import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <div className="container mx-auto px-4 relative">
      {/* Decorative elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-xl"></div>
      <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/5 rounded-full blur-xl"></div>

      <div className="text-center mb-16 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="md:w-2/5">
          <div className="relative">
            {/* Circular glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-lg"></div>

            {/* Circular profile image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image src="/images/profile.jpg" alt="Chriffer John Langomes" fill className="object-cover" />
            </div>

            {/* Subtle overlay for better integration */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-background/30 to-transparent"></div>

            {/* Decorative circular elements */}
            <div className="absolute -bottom-6 -right-6 w-16 h-16 border-2 border-primary/20 rounded-full"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 border-2 border-primary/20 rounded-full"></div>
          </div>
        </div>

        <div className="md:w-3/5 space-y-6">
          <h3 className="text-2xl font-semibold">Who am I?</h3>
          <p className="text-muted-foreground">
            I aim to be a Full Stack Developer and have prior experience in web and mobile development. My internship with the JHCSC Library helped me polish my PHP, MySQL, JavaScript, and React Native skills as I worked on real world problems such as a Library Inventory System and a Library Book QR Code Scanner App.
          </p>
          <p className="text-muted-foreground">
            Learning emerging technologies excites me, and I enjoy coding to materialize the concept. I am constantly working towards my passion of being able to construct efficient and simple to use systems and make strides in my technical know how.
          </p>
          <p className="text-muted-foreground">
            During my free time, I challenge myself with personal projects to enhance my web and mobile development skills, learn new programming languages, and follow latest trends in UI/UX design.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-colors">
              <h4 className="font-semibold">Name:</h4>
              <p className="text-muted-foreground">Chriffer John Langomes</p>
            </div>
            <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-colors">
              <h4 className="font-semibold">Email:</h4>
              <p className="text-muted-foreground">langomezchriff795@gmail.com</p>
            </div>
            <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-colors">
              <h4 className="font-semibold">Location:</h4>
              <p className="text-muted-foreground">Dagohoy,Guipos Zamboanga Del sur</p>
            </div>
            <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-colors">
              <h4 className="font-semibold">Availability:</h4>
              <p className="text-muted-foreground">Open to opportunities</p>
            </div>
          </div>

          <Button className="mt-6 gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary">
            <FileDown size={16} /> Download Resume
          </Button>
        </div>
      </div>
    </div>
  )
}

