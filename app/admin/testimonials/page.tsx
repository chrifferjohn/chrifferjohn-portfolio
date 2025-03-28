"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Testimonial } from "@/lib/testimonials"
import { Check, Trash2, Quote } from "lucide-react"
import Image from "next/image"

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        setLoading(true)
        const response = await fetch("/api/testimonials")
        if (!response.ok) {
          throw new Error("Failed to fetch testimonials")
        }
        const data = await response.json()
        setTestimonials(data)
      } catch (err) {
        setError("Error loading testimonials")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

  const approveTestimonial = async (id: string) => {
    try {
      const response = await fetch("/api/testimonials", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      })

      if (!response.ok) {
        throw new Error("Failed to approve testimonial")
      }

      // Update the local state
      setTestimonials((prev) => prev.map((t) => (t.id === id ? { ...t, approved: true } : t)))
    } catch (err) {
      console.error(err)
      setError("Error approving testimonial")
    }
  }

  const deleteTestimonial = async (id: string) => {
    try {
      const response = await fetch(`/api/testimonials?id=${id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Failed to delete testimonial")
      }

      // Update the local state
      setTestimonials((prev) => prev.filter((t) => t.id !== id))
    } catch (err) {
      console.error(err)
      setError("Error deleting testimonial")
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Testimonials Admin</h1>
        <p>Loading testimonials...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Testimonials Admin</h1>
        <p className="text-red-500">{error}</p>
      </div>
    )
  }

  const pendingTestimonials = testimonials.filter((t) => !t.approved)
  const approvedTestimonials = testimonials.filter((t) => t.approved)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Testimonials Admin</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Pending Testimonials</h2>
        {pendingTestimonials.length === 0 ? (
          <p className="text-muted-foreground">No pending testimonials</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pendingTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-yellow-300/30">
                <CardContent className="p-4">
                  <div className="flex items-center mb-4">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex items-start mb-3">
                    <Quote size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{testimonial.quote}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Submitted: {new Date(testimonial.createdAt).toLocaleDateString()}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between p-4 pt-0">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-red-500/30 hover:border-red-500 hover:bg-red-500/10 text-red-500"
                    onClick={() => deleteTestimonial(testimonial.id)}
                  >
                    <Trash2 size={16} className="mr-2" /> Delete
                  </Button>
                  <Button
                    size="sm"
                    className="bg-green-600 hover:bg-green-700"
                    onClick={() => approveTestimonial(testimonial.id)}
                  >
                    <Check size={16} className="mr-2" /> Approve
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Approved Testimonials</h2>
        {approvedTestimonials.length === 0 ? (
          <p className="text-muted-foreground">No approved testimonials</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approvedTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-green-300/30">
                <CardContent className="p-4">
                  <div className="flex items-center mb-4">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex items-start mb-3">
                    <Quote size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{testimonial.quote}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Approved: {new Date(testimonial.createdAt).toLocaleDateString()}
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-red-500/30 hover:border-red-500 hover:bg-red-500/10 text-red-500 w-full"
                    onClick={() => deleteTestimonial(testimonial.id)}
                  >
                    <Trash2 size={16} className="mr-2" /> Delete
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

