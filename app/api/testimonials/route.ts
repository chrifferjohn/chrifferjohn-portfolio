import { type NextRequest, NextResponse } from "next/server"
import { getApprovedTestimonials, getTestimonials, approveTestimonial, deleteTestimonial } from "@/lib/testimonials"

// Get all testimonials (for admin)
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const approved = searchParams.get("approved")

  if (approved === "true") {
    const testimonials = getApprovedTestimonials()
    return NextResponse.json(testimonials)
  } else {
    const testimonials = getTestimonials()
    return NextResponse.json(testimonials)
  }
}

// Approve a testimonial (for admin)
export async function PATCH(request: NextRequest) {
  const { id } = await request.json()

  if (!id) {
    return NextResponse.json({ success: false, message: "Testimonial ID is required" }, { status: 400 })
  }

  const success = approveTestimonial(id)

  if (success) {
    return NextResponse.json({ success: true, message: "Testimonial approved successfully" })
  } else {
    return NextResponse.json({ success: false, message: "Failed to approve testimonial" }, { status: 500 })
  }
}

// Delete a testimonial (for admin)
export async function DELETE(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const id = searchParams.get("id")

  if (!id) {
    return NextResponse.json({ success: false, message: "Testimonial ID is required" }, { status: 400 })
  }

  const success = deleteTestimonial(id)

  if (success) {
    return NextResponse.json({ success: true, message: "Testimonial deleted successfully" })
  } else {
    return NextResponse.json({ success: false, message: "Failed to delete testimonial" }, { status: 500 })
  }
}

