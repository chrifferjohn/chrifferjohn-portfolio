"use client"

import { useEffect, useRef } from "react"

export default function ProjectImages() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 600
    canvas.height = 400

    // Library QR Code Scanner visualization
    const drawLibraryQRCode = () => {
      // Background
      const gradient = ctx.createLinearGradient(0, 0, 600, 400)
      gradient.addColorStop(0, "#4338ca20")
      gradient.addColorStop(1, "#6d28d920")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, 600, 400)

      // QR Code frame
      ctx.strokeStyle = "#6d28d9"
      ctx.lineWidth = 3
      ctx.strokeRect(200, 100, 200, 200)

      // QR Code corner markers
      const cornerSize = 30

      // Top-left corner
      ctx.fillStyle = "#6d28d9"
      ctx.fillRect(200, 100, cornerSize, cornerSize)
      ctx.fillStyle = "#ffffff"
      ctx.fillRect(210, 110, 10, 10)

      // Top-right corner
      ctx.fillStyle = "#6d28d9"
      ctx.fillRect(370, 100, cornerSize, cornerSize)
      ctx.fillStyle = "#ffffff"
      ctx.fillRect(380, 110, 10, 10)

      // Bottom-left corner
      ctx.fillStyle = "#6d28d9"
      ctx.fillRect(200, 270, cornerSize, cornerSize)
      ctx.fillStyle = "#ffffff"
      ctx.fillRect(210, 280, 10, 10)

      // QR Code pattern (simplified)
      ctx.fillStyle = "#6d28d9"
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          if (Math.random() > 0.6) {
            ctx.fillRect(230 + i * 14, 130 + j * 14, 10, 10)
          }
        }
      }

      // Scanning line animation
      ctx.fillStyle = "#6d28d990"
      ctx.fillRect(200, 180, 200, 2)

      // Text
      ctx.fillStyle = "#6d28d9"
      ctx.font = "bold 24px Arial"
      ctx.fillText("Library QR Scanner", 200, 350)
    }

    drawLibraryQRCode()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full object-cover"
      style={{ display: "none" }} // Hidden for now, can be used later
    />
  )
}

