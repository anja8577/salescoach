"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    trainingType: "",
    teamSize: "",
    timeline: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setSubmitted(true)
    setIsSubmitting(false)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-green-600">✓</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-600 mb-4">Thank You!</h1>
            <p className="text-xl text-gray-600 mb-6">
              Your message has been sent successfully. I'll get back to you within 24 hours to discuss how we can
              transform your sales training.
            </p>
            <Link
              href="/"
              className="inline-flex items-center bg-[#0077b6] hover:bg-[#006399] text-white px-6 py-3 rounded-md transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Updated to match main page */}
      <header className="bg-white shadow-sm border-b py-5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/AKTICON-logo-horizontal.png"
                alt="AKTICON"
                width={180}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <Link href="/" className="flex items-center text-gray-600 hover:text-[#0077b6] transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <div className="mb-8">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-600 mb-6">
                    Let's Create Something <span className="text-[#0077b6]">Extraordinary</span> Together
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    Ready to transform your sales training? I'd love to hear about your challenges and discuss how we
                    can craft a unique learning experience that delivers lasting results.
                  </p>
                </div>

                <div className="bg-[#e6f3fa] border border-[#b3d9f0] rounded-lg p-6">
                  <h3 className="font-semibold text-[#0077b6] mb-2">What to Expect</h3>
                  <ul className="text-[#0077b6] space-y-2">
                    <li>• Response within 24 hours</li>
                    <li>• Initial consultation to understand your needs</li>
                    <li>• Custom proposal tailored to your objectives</li>
                    <li>• Zero pressure, maximum value</li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-600 mb-6">Get in Touch</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-600 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0077b6] focus:border-[#0077b6] transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-600 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0077b6] focus:border-[#0077b6] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0077b6] focus:border-[#0077b6] transition-colors"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-600 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0077b6] focus:border-[#0077b6] transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-600 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0077b6] focus:border-[#0077b6] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="trainingType" className="block text-sm font-medium text-gray-600 mb-2">
                          Training Type
                        </label>
                        <select
                          id="trainingType"
                          name="trainingType"
                          value={formData.trainingType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0077b6] focus:border-[#0077b6] transition-colors"
                        >
                          <option value="">Select an option</option>
                          <option value="sales-training">Sales Training</option>
                          <option value="program-design">Program Design</option>
                          <option value="program-evaluation">Program Evaluation</option>
                          <option value="coaching">Individual Coaching</option>
                          <option value="consultation">Consultation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="teamSize" className="block text-sm font-medium text-gray-600 mb-2">
                          Team Size
                        </label>
                        <select
                          id="teamSize"
                          name="teamSize"
                          value={formData.teamSize}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0077b6] focus:border-[#0077b6] transition-colors"
                        >
                          <option value="">Select team size</option>
                          <option value="1-5">1-5 people</option>
                          <option value="6-15">6-15 people</option>
                          <option value="16-50">16-50 people</option>
                          <option value="51-100">51-100 people</option>
                          <option value="100+">100+ people</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-600 mb-2">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0077b6] focus:border-[#0077b6] transition-colors"
                      >
                        <option value="">When do you need this?</option>
                        <option value="asap">ASAP</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="3-months">Within 3 months</option>
                        <option value="6-months">Within 6 months</option>
                        <option value="planning">Just planning ahead</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-2">
                        Tell me about your challenge *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="What specific challenges are you facing with your training? What outcomes are you hoping to achieve?"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0077b6] focus:border-[#0077b6] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#0077b6] hover:bg-[#006399] disabled:bg-[#7fb8d8] text-white font-semibold py-4 px-6 rounded-md transition-colors flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>Send Message →</>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
