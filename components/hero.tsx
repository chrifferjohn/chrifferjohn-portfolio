"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Full Stack Developer"
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index])
        setIndex(index + 1)
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [index, fullText])

  return (
    <div className="min-h-screen flex items-center relative">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border-2 border-primary/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-10 w-32 h-32 border border-primary/30 rounded-full"></div>
      <div className="absolute top-1/3 right-1/4 w-10 h-10 bg-primary/10 rounded-full"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-xl md:text-2xl font-medium text-primary">Hello, I'm</h2>
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Chriffer John Langomesss
            </h1>
            <div className="h-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                {typedText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-xl space-y-3">
              <span className="block">
                I create web-based digital solutions with a focus on functionality, usability, and accessibility.
                Passionate about beauty and efficiency, I specialize in PHP, MySQL, JavaScript, Tailwind, Next.js, and
                React Native.
              </span>

              <span className="block mt-3">
                During my internship at JHCSC Library, I developed a Library Book QR Code Scanner and a Library
                Inventory System, gaining hands-on experience in database administration and system development.
              </span>

              <span className="block mt-3">
                I love learning new techniques, solving complex challenges, and building impactful solutions.
              </span>
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
              >
                View My Work <ArrowRight size={16} />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary">
                Download CV
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Circular glow effect behind profile image */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 to-primary/5 blur-lg animate-pulse"></div>

              {/* Circular profile image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 z-10">
                <Image src="/images/profile.jpg" alt="Chriffer John Langomes" fill className="object-cover" priority />
              </div>

              {/* Subtle circular glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-primary/10 to-transparent opacity-60 pointer-events-none"></div>

              {/* Decorative circular elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-md"></div>
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary/10 rounded-full blur-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

