"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export default function BackgroundElements() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <>
      {/* Hero section background */}
      <div className="absolute top-0 left-0 right-0 h-screen overflow-hidden -z-10">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background"></div>

        {/* Animated dots pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
          <div className="absolute top-40 right-10 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl"></div>
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(${isDark ? "white" : "black"} 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      {/* Floating shapes */}
      <div className="hidden md:block">
        {/* Circle */}
        <div className="absolute top-[25%] right-[10%] w-64 h-64 border border-primary/20 rounded-full"></div>
        <div className="absolute top-[25%] right-[10%] w-80 h-80 border border-primary/10 rounded-full"></div>

        {/* Square */}
        <div className="absolute top-[60%] left-[5%] w-40 h-40 border border-primary/20 rounded-lg transform rotate-12"></div>

        {/* Triangle (CSS triangle) */}
        <div className="absolute bottom-[20%] right-[15%]">
          <div className="w-0 h-0 border-l-[30px] border-l-transparent border-b-[50px] border-b-primary/20 border-r-[30px] border-r-transparent"></div>
        </div>
      </div>

      {/* Diagonal lines */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-[0.03]">
        <div className="absolute -top-[100%] -left-[50%] w-[200%] h-[200%] transform rotate-12">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className={`absolute h-px w-full bg-foreground/30`} style={{ top: `${i * 10}%` }}></div>
          ))}
        </div>
      </div>

      {/* Animated gradient blob for skills section */}
      <div className="absolute top-[120%] left-[50%] transform -translate-x-1/2 -z-10">
        <div className="relative w-[800px] h-[800px]">
          <div className="absolute inset-0 bg-primary/5 rounded-full filter blur-3xl animate-pulse"></div>
        </div>
      </div>

      {/* Animated gradient blob for projects section */}
      <div className="absolute top-[220%] right-0 -z-10">
        <div className="relative w-[600px] h-[600px]">
          <div className="absolute inset-0 bg-primary/5 rounded-full filter blur-3xl"></div>
        </div>
      </div>

      {/* Animated gradient blob for contact section */}
      <div className="absolute bottom-[5%] left-0 -z-10">
        <div className="relative w-[700px] h-[700px]">
          <div className="absolute inset-0 bg-primary/5 rounded-full filter blur-3xl"></div>
        </div>
      </div>
    </>
  )
}

