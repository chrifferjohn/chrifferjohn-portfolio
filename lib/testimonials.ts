import fs from "fs"
import path from "path"
import { v4 as uuidv4 } from "uuid"

// Define the testimonial type
export type Testimonial = {
  id: string
  name: string
  role: string
  image: string
  quote: string
  approved?: boolean
  createdAt: string
}

// Path to the JSON file that will store testimonials
const dataFilePath = path.join(process.cwd(), "data", "testimonials.json")

// Ensure the data directory exists
export function ensureDataDirectoryExists() {
  const dataDir = path.join(process.cwd(), "data")
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }

  // Create the testimonials file if it doesn't exist
  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify([], null, 2))
  }
}

// Get all testimonials
export function getTestimonials(): Testimonial[] {
  ensureDataDirectoryExists()

  try {
    const data = fs.readFileSync(dataFilePath, "utf8")
    return JSON.parse(data)
  } catch (error) {
    console.error("Error reading testimonials:", error)
    return []
  }
}

// Get approved testimonials
export function getApprovedTestimonials(): Testimonial[] {
  const testimonials = getTestimonials()
  return testimonials.filter((testimonial) => testimonial.approved)
}

// Add a new testimonial
export function addTestimonial(testimonial: Omit<Testimonial, "id" | "createdAt" | "approved">): Testimonial {
  const testimonials = getTestimonials()

  const newTestimonial: Testimonial = {
    ...testimonial,
    id: uuidv4(),
    approved: false, // New testimonials are not approved by default
    createdAt: new Date().toISOString(),
  }

  testimonials.push(newTestimonial)

  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(testimonials, null, 2))
    return newTestimonial
  } catch (error) {
    console.error("Error saving testimonial:", error)
    throw new Error("Failed to save testimonial")
  }
}

// Approve a testimonial
export function approveTestimonial(id: string): boolean {
  const testimonials = getTestimonials()
  const testimonialIndex = testimonials.findIndex((t) => t.id === id)

  if (testimonialIndex === -1) {
    return false
  }

  testimonials[testimonialIndex].approved = true

  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(testimonials, null, 2))
    return true
  } catch (error) {
    console.error("Error approving testimonial:", error)
    return false
  }
}

// Delete a testimonial
export function deleteTestimonial(id: string): boolean {
  const testimonials = getTestimonials()
  const filteredTestimonials = testimonials.filter((t) => t.id !== id)

  if (filteredTestimonials.length === testimonials.length) {
    return false // No testimonial was removed
  }

  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(filteredTestimonials, null, 2))
    return true
  } catch (error) {
    console.error("Error deleting testimonial:", error)
    return false
  }
}

