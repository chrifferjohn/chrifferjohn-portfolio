"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log("Form submitted:", formData)
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitError("There was an error submitting the form. Please try again.")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="text-center mb-16 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto"></div>
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        <div className="bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-primary/10">
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:chriffer@example.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  langomezchriff795@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <a href="tel:+11234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +639381121894
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-muted-foreground">Dagohoy, Guipos Zamboanga Del sur</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
            <div className="flex space-x-4">
              <SocialLink icon={<Github />} href="https://github.com/chrifferjohn" label="GitHub" />
              <SocialLink icon={<Linkedin />} href="https://linkedin.com/chrifferjohn" label="LinkedIn" />
              <SocialLink icon={<Twitter />} href="https://twitter.com/jchriff" label="Twitter" />
            </div>
          </div>
        </div>

        <div className="bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-primary/10">
          <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>

          {submitSuccess ? (
            <div className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-6 rounded-lg mb-6 border border-green-200 dark:border-green-800">
              <h4 className="text-lg font-medium mb-2">Message Sent Successfully!</h4>
              <p>Thank you for your message! I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="chriffer John"
                    required
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="chrifferjohn@example.com"
                    required
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="border-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  className="border-primary/20 focus:border-primary"
                />
              </div>

              {submitError && (
                <div className="text-red-500 text-sm p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200 dark:border-red-800">
                  {submitError}
                </div>
              )}

              <Button
                type="submit"
                className="w-full gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

function SocialLink({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-card border border-primary/10 hover:border-primary hover:text-primary transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  )
}

