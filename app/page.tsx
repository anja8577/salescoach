"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import TestimonialCarousel from "../components/TestimonialCarousel"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [activeItem, setActiveItem] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-white shadow-md py-3" : "bg-white/80 backdrop-blur-sm py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/AKTICON-logo-horizontal.png"
              alt="AKTICON"
              width={180}
              height={50}
              className="h-10 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
              About
            </Link>
            <Link href="#services" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
              Services
            </Link>
            <Link href="#process" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
              Process
            </Link>
            <a
              href="https://salescoach.akticon.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
            >
              SalesCoach
            </a>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
              Contact
            </Link>
          </nav>
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
            Get in Touch
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-red-600/10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-stretch min-h-[500px]">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-600 mb-6 leading-tight">
                There are many ways to learn.
                <br />
                <span className="text-blue-600 font-extrabold">Some achieve better results than others.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                At my boutique L&D consultancy AKTICON, we don't deliver{" "}
                <span className="text-blue-600 font-bold">programs</span>. We craft unique learning experiences that
                transform your sales teams and drive business <span className="text-red-600 font-bold">results</span>.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md flex items-center"
                >
                  Explore Services <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[500px] w-full overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/group-session.jpeg"
                  alt="Transformative Impact"
                  fill
                  className="object-cover object-center"
                  style={{ objectPosition: "30% center" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-6">
              <span className="text-red-600 font-extrabold">Crafting Unique Experiences</span>
            </h2>
            <p className="text-xl text-gray-600">
              Don't expect a '2-day standard training program' from me. I'm not repeating the same training program with
              different clients over and over again. Some call that 'subject matter expertise' - I call it laziness...
              <br /> It would be easier and definitely more profitable for me. But also way less fun - and most
              certainly way less transformative and impactful for you and your teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 - UPDATED */}
            <div className="group">
              <div className="overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl rounded-lg">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/images/child-globe.jpeg"
                    alt="Child with Globe"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Learning Program
                        <br />
                        Design & Delivery
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-justify">
                    You need to change specific behaviors of individual team members? Get knowledge or new skills
                    embedded in the hearts and minds of some of your teams? Or you want to support a larger
                    transformation effort with proactive upskilling? <br /> It's not always easy to find the right
                    approach to help your people move in the direction you need them to. Change is hard. Necessary, but
                    hard.
                  </p>

                  {/* Light divider */}
                  <div className="border-t border-gray-200 mb-4"></div>

                  <p className="text-gray-600 mb-6 text-justify">
                    <span className="text-gray-600">Let me help you getting (them) there:</span>
                  </p>

                  <div className="space-y-4">
                    <div
                      className="bg-blue-100 hover:bg-[#0077b6] p-4 rounded-lg cursor-pointer transition-all duration-300 group/box"
                      onClick={() => setActiveItem(activeItem === 1 ? null : 1)}
                    >
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium text-gray-600 group-hover/box:!text-white transition-colors">
                          Tapping Into Curiosity
                        </h4>
                        <span
                          className={`transition-all duration-300 text-gray-600 group-hover/box:!text-white ${activeItem === 1 ? "rotate-45" : ""}`}
                        >
                          ↗
                        </span>
                      </div>
                      {activeItem === 1 && (
                        <p className="mt-2 text-sm text-gray-600 group-hover/box:!text-white transition-colors">
                          Let's create learning journeys that tap into that curious inner child of your participants.
                          Let's connect the topic at hand with your learners' real day to day life. Us humans, we love
                          to learn. We are built to explore and to grow. Yet as adults, we don't always like being told.
                          Let's make learning personal and enjoyable and rewarding. Let's see our participants for who
                          they are, for what they can be - and then help them become that!
                        </p>
                      )}
                    </div>

                    <div
                      className="bg-blue-100 hover:bg-[#0077b6] p-4 rounded-lg cursor-pointer transition-all duration-300 group/box"
                      onClick={() => setActiveItem(activeItem === 2 ? null : 2)}
                    >
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium text-gray-600 group-hover/box:!text-white transition-colors">
                          Tackling resistance before it emerges
                        </h4>
                        <span
                          className={`transition-all duration-300 text-gray-600 group-hover/box:!text-white ${activeItem === 2 ? "rotate-45" : ""}`}
                        >
                          ↗
                        </span>
                      </div>
                      {activeItem === 2 && (
                        <p className="mt-2 text-sm text-gray-600 group-hover/box:!text-white transition-colors">
                          To attain – or maintain – a competitive edge in an ever-changing world, change is inevitable.
                          Your people have to change, you have to change, even your boss (and your bosses' boss) have to
                          change. Often. But change is hard on people. Our brains are wired to stay in homeostasis. To
                          keep the status quo alive, because in that status que, we are alive. To overcome that very
                          human inertia, we must identify how a change may impact different stakeholders in the
                          organization and engage them in the process early to reduce the risk they associate with
                          change.
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 text-justify">
                    <br />
                    We create a clear roadmap to achieve the change you're after that includes all relevant stakeholders
                    and multiple activities spread over time to preempt implementation barriers. Then, I deliver against
                    the plan we made as promised - or better.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group">
              <div className="overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl rounded-lg">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/images/paths.jpeg"
                    alt="Program Evaluation"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Learning Program
                        <br />
                        Evaluation & Optimization
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-justify">
                    Finding the best route to successful learning and behaviour change can be confusing. Your internal
                    trainers are doing their thing, but the changes you're after aren't coming to pass? Is it, because
                    you didn't include some stakeholders? Tried to do too much, too quickly? Content not engaging
                    enough? We can evaluate existing program designs, didactics and facilitation.
                  </p>

                  {/* Light divider */}
                  <div className="border-t border-gray-200 mb-4"></div>

                  <p className="text-gray-600 mb-6 text-justify">
                    <span className="text-gray-600">Then, we create a plan to boost engagement:</span>
                  </p>

                  <div className="space-y-4">
                    <div
                      className="bg-red-100 hover:bg-[#d62828] p-4 rounded-lg cursor-pointer transition-all duration-300 group/box"
                      onClick={() => setActiveItem(activeItem === 4 ? null : 4)}
                    >
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium text-gray-600 group-hover/box:!text-white transition-colors">
                          Planning with the end in mind
                        </h4>
                        <span
                          className={`transition-all duration-300 text-gray-600 group-hover/box:!text-white ${activeItem === 4 ? "rotate-45" : ""}`}
                        >
                          ↗
                        </span>
                      </div>
                      {activeItem === 4 && (
                        <p className="mt-2 text-sm text-gray-600 group-hover/box:!text-white transition-colors">
                          Programs with the power to change the people and the organization need to be designed from a
                          meta-perspective: with an interwoven top-down / bottom-up approach, involving all relevant
                          stakeholder groups, analyzing and adjusting related systems and procedures to reinforce the
                          intended change. Because learning 'the thing' is one thing - but shaping the organization to
                          then apply 'that thing' is another.
                        </p>
                      )}
                    </div>

                    <div
                      className="bg-red-100 hover:bg-[#d62828] p-4 rounded-lg cursor-pointer transition-all duration-300 group/box"
                      onClick={() => setActiveItem(activeItem === 5 ? null : 5)}
                    >
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium text-gray-600 group-hover/box:!text-white transition-colors">
                          Delivering enriching growth experiences
                        </h4>
                        <span
                          className={`transition-all duration-300 text-gray-600 group-hover/box:!text-white ${activeItem === 5 ? "rotate-45" : ""}`}
                        >
                          ↗
                        </span>
                      </div>
                      {activeItem === 5 && (
                        <div className="mt-2">
                          <p className="text-sm text-gray-600 group-hover/box:!text-white transition-colors">
                            Each training hour is an investment the company takes into its people. Yet often, it doesn't
                            quite feel like that to the participants of a training program. Are your trainers
                            communicating the value they provide? Great facilitation skills can turn boring topics into
                            exciting opportunities for growth. Let's make sure your trainers are up to the task.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 text-justify">
                    <br />
                    We tweak the design of your programs to maxize its chances of success, we coach your trainers to be
                    the best you've ever had, in short: we improve your internal program design, didactical and
                    facilitation capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections remain unchanged */}
      {/* Churchill Quote Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl font-light italic mb-3">
              "I am always ready to learn although I do not always like being taught."
            </blockquote>
            <cite className="text-lg">— Winston Churchill</cite>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-6">
              How We'll <span className="text-red-600">Work Together</span>
            </h2>
            <p className="text-xl text-gray-600">
              I'm actively thinking with you, ahead of you, to ensure you're hitting your target.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="md:w-1/6">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto md:mx-0">
                    1
                  </div>
                </div>
                <div className="md:w-5/6">
                  <h3 className="text-2xl font-bold text-gray-600 mb-4">Define Your Objectives</h3>
                  <p className="text-gray-600">
                    We start by clearly defining what success looks like for you. Whether you need to change specific
                    behaviors, embed new knowledge, or support a large-scale transformation—I'll work with you to
                    establish clear, measurable objectives.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="md:w-1/6">
                  <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto md:mx-0">
                    2
                  </div>
                </div>
                <div className="md:w-5/6">
                  <h3 className="text-2xl font-bold text-gray-600 mb-4">Craft Your Experience</h3>
                  <p className="text-gray-600">
                    No cookie-cutter programs here. I'll design a completely custom experience that addresses your
                    specific challenges, fits your organizational culture, and engages your team in ways standard
                    training never could.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="md:w-1/6">
                  <div className="bg-gray-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto md:mx-0">
                    3
                  </div>
                </div>
                <div className="md:w-5/6">
                  <h3 className="text-2xl font-bold text-gray-600 mb-4">Deliver With Excellence</h3>
                  <p className="text-gray-600">
                    I'll deliver what you need, when you need it, in the highest quality and with the least amount of
                    headache for you. My goal is to make the entire process smooth and stress-free while exceeding your
                    expectations.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="md:w-1/6">
                  <div className="bg-white border-2 border-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0 p-3">
                    <Image
                      src="/images/logo1.png"
                      alt="AKTICON"
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="md:w-5/6">
                  <h3 className="text-2xl font-bold text-gray-600 mb-4">Ensure Lasting Impact</h3>
                  <p className="text-gray-600">
                    Our work doesn't end when the training does. I'll help you implement systems that embed new
                    behaviors into your organization's DNA, ensuring the change you want to bring about lives on long
                    after our engagement ends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Einstein Quote Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl font-light italic mb-3">
              "Things should be made as simple as possible, but not any simpler."
            </blockquote>
            <cite className="text-lg">— Albert Einstein</cite>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-6">
              AKTICON Learning Journeys:
              <br />
              <span className="text-blue-600">Created from Expertise</span> <br />{" "}
              <span className="text-red-600">Made for Change</span>
            </h2>
            <p className="text-xl text-gray-600">
              Applying 20 years of specialized expertise in andragogy, didactics, sales and coaching to your challenges,
              we will jointly create learning experiences that transform your sales teams.
              <br />
              For more <span className="text-red-600">fun</span>, more <span className="text-blue-600">impact</span>,
              and <span className="text-blue-400">bluer</span> skies in your learning world.
            </p>
          </div>

          {/* Centered image */}
          <div className="flex justify-center mb-12">
            <div className="relative h-[350px] w-full max-w-2xl overflow-hidden rounded-lg shadow-lg">
              <Image src="/images/blue-sky.png" alt="Reaching for transformation" fill className="object-cover" />
            </div>
          </div>

          {/* Second text block */}
          <div className="prose prose-lg max-w-none text-center">
            <p>
              As independent consultant, I work directly with you to craft high-impact learning journeys that lead to
              lasting change and transform your people and your business. If expertise in other areas is required -
              whether it's artwork, animation, video, audio, web, or leveraging emerging AI tools - I draw from a
              network of specialists I know and trust. And if I don't have a specialist at hand, I'll find just the
              right person for the job. No stress for you, I'll take care of it.
            </p>
          </div>

          {/* Purpose Statement - Visually Separated */}
          <div className="mt-16 mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-red-600 py-12">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">My Purpose</h3>
                  <p className="text-xl font-medium text-white mb-2">
                    Supporting you with whatever it takes to create a remarkable sales organization.
                  </p>
                  <p className="text-xl font-medium text-white">For better workplaces and happier people.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-6">
              What <span className="text-blue-600">Clients</span> Say
            </h2>
            <p className="text-xl text-gray-600">Real feedback from real transformations</p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white !important">
              Ready to Transform Your Training?
            </h2>
            <p className="text-xl mb-8 text-white !important">
              Let's discuss how we can create a unique learning experience that delivers lasting results for your team.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-md font-semibold transition-colors"
            >
              Get in Touch <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SalesCoach Section */}
      <section id="salescoach" className="py-20 bg-red-600 my-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white !important">
              Need to optimize Sales through consistent Sales Coaching?
            </h2>
            <p className="text-xl mb-8 text-white !important">
              Sometimes, it takes a piece of technology to embed behaviour. Our SalesCoach App is closing the gap
              between 'learning how to coach a sales team' and 'consistently coaching them in a professional manner to
              improve their selling skills'.
            </p>
            <a
              href="https://salescoach.akticon.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-md font-semibold transition-colors"
            >
              Learn more about our SalesCoach App <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Image
                src="/images/AKTICON-logo-horizontal.png"
                alt="AKTICON"
                width={180}
                height={50}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="#process" className="text-gray-300 hover:text-white transition-colors">
                Process
              </Link>
              <a
                href="https://salescoach.akticon.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                SalesCoach
              </a>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-500 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} AKTICON. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
