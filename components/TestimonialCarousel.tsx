"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface Testimonial {
  id: number
  quote: string
  name: string
  title: string
  company: string
  location: string
  countryCode: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Thank you Anja for the wonderful session and being a great host and trainer! The whole session was very well structured, timed well, interactive, engaging and very insightful. The resources provided at the end of the whole training programme were the cherry on the cake! Thank you very much!",
    name: "Harpreet K.",
    title: "Healthcare Solutions Manager",
    company: "Participant",
    location: "Netherlands",
    countryCode: "nl",
  },
  {
    id: 2,
    quote: "The program formed me as a professional trainer of coaches, ready to train the team. Thank you Anja!",
    name: "Yulia B.",
    title: "National Field Force Manager",
    company: "Participant",
    location: "Ukraine",
    countryCode: "ua",
  },
  {
    id: 3,
    quote:
      "Thank you Anja for a fabulous workshop! You were very clear in your delivery and very respectful of the participants, particularly with ensuring everyone was heard. The pace and tone of your facilitation was really well received. Would highly recommend - thank you!",
    name: "Fiona Z.",
    title: "Healthcare Competencies Manager",
    company: "Participant",
    location: "Australia & New Zealand",
    countryCode: "au-nz",
  },
  {
    id: 4,
    quote:
      "I had a great time in all training sessions. To be honest, it was the best training session from the Global Team that I've participated in, especially because of Anja's way of leading us through the sessions. Very connected to the team, supportive and commited! Thank you!",
    name: "Ana C.",
    title: "Learning & Development Manager",
    company: "Participant",
    location: "Brazil",
    countryCode: "br",
  },
  {
    id: 5,
    quote:
      "Working with Anja on a train the trainer session on coaching (both field coaching and remote coaching) was informative and engaging. The style that she used to not only teach, but also facilitate dialogue helped to put the information into better context. Anja asks great questions to really make you think about yourself as a coach, how you can improve, and what tactics you can use to pass on information to others.",
    name: "Kati D.",
    title: "Sales Trainer",
    company: "Participant",
    location: "United States",
    countryCode: "us",
  },
  {
    id: 6,
    quote:
      "Working with Anja on our Key Account Management training has been a truly valuable experience. Her deep expertise and extensive knowledge in capability development are evident in every interaction. She consistently delivers high-quality, engaging training materials & workshops that resonate with our global hospital KAM teams.",
    name: "Ihab A.",
    title: "Hospital Channel Lead",
    company: "Client",
    location: "Netherlands",
    countryCode: "nl",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const currentTestimonial = testimonials[currentIndex]

  // Function to render flag based on country code
  const renderFlag = (countryCode: string) => {
    if (countryCode === "au-nz") {
      return (
        <div className="flex space-x-1">
          <div className="w-8 h-6 rounded overflow-hidden">
            <Image
              src={`https://flagcdn.com/w80/au.png`}
              alt="Australia"
              width={80}
              height={60}
              className="object-cover"
            />
          </div>
          <div className="w-8 h-6 rounded overflow-hidden">
            <Image
              src={`https://flagcdn.com/w80/nz.png`}
              alt="New Zealand"
              width={80}
              height={60}
              className="object-cover"
            />
          </div>
        </div>
      )
    }

    return (
      <div className="w-8 h-6 rounded overflow-hidden">
        <Image
          src={`https://flagcdn.com/w80/${countryCode}.png`}
          alt={currentTestimonial.location}
          width={80}
          height={60}
          className="object-cover"
        />
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Main Testimonial Card */}
      <div className="relative">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mx-4 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
            <div className="text-8xl text-blue-600 font-bold">"</div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Quote */}
            <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
              "{currentTestimonial.quote}"
            </blockquote>

            {/* Author Info */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">{currentTestimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{currentTestimonial.name}</div>
                  <div className="text-gray-600">{currentTestimonial.title}</div>
                  <div className="text-sm text-gray-500">{currentTestimonial.company}</div>
                </div>
              </div>

              <div className="text-right">
                <div className="flex flex-col items-end">
                  <div className="mb-1">{renderFlag(currentTestimonial.countryCode)}</div>
                  <div className="text-sm text-gray-500">{currentTestimonial.location}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center mt-8 space-x-6">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all duration-200 flex items-center justify-center group"
          aria-label="Previous testimonial"
        >
          <span className="text-gray-400 group-hover:text-blue-600 text-lg">‹</span>
        </button>

        {/* Dots */}
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all duration-200 flex items-center justify-center group"
          aria-label="Next testimonial"
        >
          <span className="text-gray-400 group-hover:text-blue-600 text-lg">›</span>
        </button>
      </div>

      {/* Auto-play indicator */}
      <div className="flex justify-center mt-4">
        <div className="text-xs text-gray-400 flex items-center">
          <div className={`w-2 h-2 rounded-full mr-2 ${isAutoPlaying ? "bg-green-400" : "bg-gray-300"}`}></div>
          {isAutoPlaying ? "Auto-advancing" : "Paused"}
        </div>
      </div>
    </div>
  )
}
