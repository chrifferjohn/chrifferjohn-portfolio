"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ArrowLeft, ArrowRight, Quote, PlusCircle, User, Briefcase, MessageSquare } from "lucide-react"
import { useActionState } from "react"
import { submitTestimonial, type FormState } from "@/app/actions/testimonial-actions"
import type { Testimonial } from "@/lib/testimonials"

// Initial testimonials (will be replaced with data from API)
const initialTestimonials = [
  {
    id: "1",
    name: "Terhevic Bation",
    role: "Assistant Librarian",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Chriffer is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills made our project a success. I would gladly work with him again.",
  },
  {
    id: "2",
    name: "Mercelyn Timbong",
    role: "Student client",
    image: "/images/mer.jpg",
    quote:
      "maayo ni siya na developer iya gihimo na sytem kay Kuan kanang user-friendly interface,making it easy to navigate.",
  },
  {
    id: "3",
    name: "Jenelyn Gella",
    role: "SK Chairman",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Chriffer did an outstanding job developing the Barangay Dagohoy Information System. His expertise made our record-keeping and document processing more efficient, saving us time and improving our services to the community.",
  },
  {
    id: "4",
    name: "arf leffer Halios",
    role: "student",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Chriffer developed an amazing system that is very user-friendly and efficient. Navigating through the platform is smooth, making it easier for students like me to access the information we need quickly..",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials as Testimonial[])

  // Initialize form state
  const initialState: FormState = { success: false, message: "", errors: {} }
  const [formState, formAction] = useActionState(submitTestimonial, initialState)

  // Fetch testimonials on component mount
  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const response = await fetch("/api/testimonials?approved=true")
        if (response.ok) {
          const data = await response.json()
          if (data.length > 0) {
            setTestimonials(data)
          }
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error)
      }
    }

    fetchTestimonials()
  }, [])

  // Close dialog when form submission is successful
  useEffect(() => {
    if (formState.success) {
      const timer = setTimeout(() => {
        setIsDialogOpen(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [formState.success])

  const testimonialsPerView = 2
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerView)

  const nextSlide = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(totalSlides - 1)
    }
  }

  const currentTestimonials = testimonials.slice(
    currentIndex * testimonialsPerView,
    currentIndex * testimonialsPerView + testimonialsPerView,
  )

  return (
    <div className="container mx-auto px-4 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="text-center mb-16 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto"></div>
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
          Here's what people are saying about my work and collaboration experience.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center mt-10 gap-4">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-primary/20 hover:border-primary hover:bg-primary/5"
            >
              <ArrowLeft size={20} />
            </Button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalSlides }, (_, i) => (
                <Button
                  key={i}
                  variant={currentIndex === i ? "default" : "outline"}
                  size="icon"
                  className={`w-3 h-3 rounded-full p-0 ${currentIndex === i ? "bg-primary" : "border-primary/20 hover:border-primary"}`}
                  onClick={() => setCurrentIndex(i)}
                >
                  <span className="sr-only">Go to slide {i + 1}</span>
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-primary/20 hover:border-primary hover:bg-primary/5"
            >
              <ArrowRight size={20} />
            </Button>
          </div>

          <div className="mt-6 sm:mt-0 sm:ml-6">
            <Button
              onClick={() => setIsDialogOpen(true)}
              className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
            >
              <PlusCircle size={16} /> Add Your Testimonial
            </Button>
          </div>
        </div>
      </div>

      {/* Testimonial Submission Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px] bg-card/95 backdrop-blur-sm border-primary/10">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Share Your Experience</DialogTitle>
            <DialogDescription>
              Thank you for considering to share your experience working with me. Your feedback is highly appreciated!
            </DialogDescription>
          </DialogHeader>

          {formState.success ? (
            <div className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-6 rounded-lg mb-4 border border-green-200 dark:border-green-800">
              <h4 className="text-lg font-medium mb-2">Thank You!</h4>
              <p>{formState.message}</p>
            </div>
          ) : (
            <form action={formAction} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                    <User size={16} /> Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Smith"
                    required
                    className={`border-primary/20 focus:border-primary ${formState.errors?.name ? "border-red-500" : ""}`}
                  />
                  {formState.errors?.name && <p className="text-red-500 text-sm">{formState.errors.name[0]}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="role" className="text-sm font-medium flex items-center gap-2">
                    <Briefcase size={16} /> Your Role & Company
                  </label>
                  <Input
                    id="role"
                    name="role"
                    placeholder="CEO at Example Company"
                    required
                    className={`border-primary/20 focus:border-primary ${formState.errors?.role ? "border-red-500" : ""}`}
                  />
                  {formState.errors?.role && <p className="text-red-500 text-sm">{formState.errors.role[0]}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="testimonial" className="text-sm font-medium flex items-center gap-2">
                    <MessageSquare size={16} /> Your Testimonial
                  </label>
                  <Textarea
                    id="testimonial"
                    name="testimonial"
                    placeholder="Share your experience working with me..."
                    rows={5}
                    required
                    className={`border-primary/20 focus:border-primary ${formState.errors?.testimonial ? "border-red-500" : ""}`}
                  />
                  {formState.errors?.testimonial && (
                    <p className="text-red-500 text-sm">{formState.errors.testimonial[0]}</p>
                  )}
                </div>
              </div>

              {formState.message && !formState.success && (
                <div className="text-red-500 text-sm p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200 dark:border-red-800">
                  {formState.message}
                </div>
              )}

              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                  className="border-primary/20 hover:border-primary"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
                >
                  Submit Testimonial
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full border-primary/10 hover:border-primary/30 transition-all duration-300 bg-card/50 backdrop-blur-sm">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="text-primary mb-4">
          <Quote size={32} className="opacity-50" />
        </div>
        <p className="text-muted-foreground italic flex-grow mb-6">"{testimonial.quote}"</p>
        <div className="flex items-center">
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary/20">
            <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

