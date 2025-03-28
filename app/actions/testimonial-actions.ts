"use server"

import { addTestimonial } from "@/lib/testimonials"
import { revalidatePath } from "next/cache"
import { z } from "zod"

// Define validation schema
const testimonialSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  role: z.string().min(2, { message: "Role must be at least 2 characters" }),
  testimonial: z.string().min(10, { message: "Testimonial must be at least 10 characters" }),
})

export type FormState = {
  success?: boolean
  message?: string
  errors?: {
    name?: string[]
    role?: string[]
    testimonial?: string[]
  }
}

export async function submitTestimonial(prevState: FormState, formData: FormData): Promise<FormState> {
  // Extract form data
  const name = formData.get("name") as string
  const role = formData.get("role") as string
  const testimonial = formData.get("testimonial") as string

  // Validate form data
  const validationResult = testimonialSchema.safeParse({ name, role, testimonial })

  if (!validationResult.success) {
    const errors = validationResult.error.flatten().fieldErrors
    return {
      success: false,
      message: "Please fix the errors in the form",
      errors: {
        name: errors.name,
        role: errors.role,
        testimonial: errors.testimonial,
      },
    }
  }

  try {
    // Add the testimonial
    addTestimonial({
      name,
      role,
      quote: testimonial,
      image: "/placeholder.svg?height=100&width=100", // Default image
    })

    // Revalidate the page to show the new testimonial (if approved)
    revalidatePath("/")

    return {
      success: true,
      message: "Thank you for your testimonial! It will be reviewed before being published.",
    }
  } catch (error) {
    console.error("Error submitting testimonial:", error)
    return {
      success: false,
      message: "There was an error submitting your testimonial. Please try again.",
    }
  }
}

