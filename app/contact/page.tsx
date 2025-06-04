"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Send, MessageCircle, Lightbulb, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { submitContactForm } from "./actions"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    reason: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const formDataObj = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value)
      })

      const result = await submitContactForm(formDataObj)

      if (result.success) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          company: "",
          reason: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <img src="/logo.png" alt="SalesCoach Logo" className="h-10 w-10 transform scale-x-110" />
            <span className="text-xl font-bold text-gray-900 font-lato tracking-tight">SalesCoach</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-lato">Get in Touch</h1>
          <p className="text-xl text-gray-600">
            We'd love to hear from you! Whether you need help or want to learn more about SalesCoach.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-lato">Send us a message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you soon!</CardDescription>
            </CardHeader>
            <CardContent>
              {submitStatus === "success" && (
                <Alert className="mb-6 border-green-200 bg-green-50">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                  </AlertDescription>
                </Alert>
              )}

              {submitStatus === "error" && (
                <Alert className="mb-6 border-red-200 bg-red-50">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800">
                    Sorry, there was an error sending your message. Please try again or contact us directly.
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    placeholder="Your company name"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Label htmlFor="reason">How can we help? *</Label>
                  <Select
                    onValueChange={(value) => handleInputChange("reason", value)}
                    required
                    disabled={isSubmitting}
                    value={formData.reason}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your reason for reaching out" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="help">🤔 I need help with something</SelectItem>
                      <SelectItem value="interested">🚀 I'm interested and want to learn more</SelectItem>
                      <SelectItem value="demo">👀 I'd like to see a demo</SelectItem>
                      <SelectItem value="partnership">🤝 Partnership opportunities</SelectItem>
                      <SelectItem value="feedback">💡 I have feedback or suggestions</SelectItem>
                      <SelectItem value="other">💬 Something else</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us more about what you need..."
                    rows={5}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Right Side Cards */}
          <div className="space-y-6">
            {/* Quick Help Section - Hidden until content is ready
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <HelpCircle className="h-6 w-6 text-blue-600" />
                  <CardTitle className="font-lato text-blue-900">Need Quick Help?</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-800 mb-4">
                  Check out our most common questions and solutions before reaching out.
                </p>
                <ul className="space-y-2 text-blue-700">
                  <li>• How to install the app on mobile devices</li>
                  <li>• Setting up your first assessment</li>
                  <li>• Creating coaching plans</li>
                  <li>• Tracking team performance</li>
                </ul>
              </CardContent>
            </Card>
            */}

            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Lightbulb className="h-6 w-6 text-green-600" />
                  <CardTitle className="font-lato text-green-900">Want to Learn More?</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-green-800 mb-4">
                  Curious about how SalesCoach can transform your sales team? We'd love to show you!
                </p>
                <ul className="space-y-2 text-green-700">
                  <li>• Schedule a personalized demo</li>
                  <li>• Discuss your specific needs</li>
                  <li>• Learn about implementation</li>
                  <li>• Get pricing information</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-6 w-6 text-purple-600" />
                  <CardTitle className="font-lato text-purple-900">Response Time</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-purple-800">
                  We typically respond within <strong>24 hours</strong> during business days. For urgent matters, please
                  mention it in your message!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
