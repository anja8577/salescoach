"use client"

import {
  BarChart3,
  TrendingUp,
  CheckCircle,
  Download,
  Info,
  ClipboardList,
  Settings,
  Sliders,
  Target,
  Users,
  Zap,
  Heart,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { AppIcon } from "@/components/app-icon"

export default function HomePage() {
  const handleInstallClick = () => {
    window.dispatchEvent(new CustomEvent("pwa-install-prompt"))
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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            Transform Your Sales Team Performance
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-lato">
            Assess. Coach. <span className="text-blue-600">Excel.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Empower sales managers with standardized assessments to evaluate selling skills, provide targeted coaching,
            and drive measurable business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700" onClick={handleInstallClick}>
              <Download className="mr-2 h-5 w-5" />
              Install App Now
            </Button>
          </div>

          {/* PWA Installation Banner */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-center space-x-4">
                <AppIcon className="h-10 w-10" />
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 font-lato">Add to home screen</h3>
                  <p className="text-sm text-gray-600">Start for free</p>
                </div>
                <Button className="ml-auto bg-blue-600 hover:bg-blue-700" onClick={handleInstallClick}>
                  Install
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-lato">The Challenge Every Sales Manager Faces</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6 text-center">
                <div className="text-red-500 text-4xl font-bold mb-2 font-lato">43%</div>
                <p className="text-gray-700">of sales reps miss their quota</p>
              </CardContent>
            </Card>
            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-6 text-center">
                <div className="text-orange-500 text-4xl font-bold mb-2 font-lato">EUR 250k</div>
                <p className="text-gray-700">average cost of sales rep turnover</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coaching Impact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-lato">
              The Power of Structured Sales Coaching
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Research shows that organizations with formal coaching programs significantly outperform those without.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center font-lato">
              Research-Backed Impact
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0 ml-2">
                      <Info className="h-4 w-4" />
                      <span className="sr-only">Info</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">Click on any metric to see detailed research information</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Win Rate Improvement Card */}
              <div className="flip-card h-44">
                <div className="flip-card-inner">
                  <div className="flip-card-front flex justify-between items-center p-4 bg-green-50 rounded-lg cursor-pointer">
                    <span className="text-gray-700 font-medium">Win Rate Improvement</span>
                    <span className="text-3xl font-bold text-green-500 font-lato">+27%</span>
                  </div>
                  <div className="flip-card-back p-4 bg-green-100 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">CSO Insights Research</h4>
                    <p className="text-sm text-green-700 mb-2">
                      Organizations with dynamic coaching programs saw 27.9% improvement in win rates vs. informal
                      coaching approaches.
                    </p>
                    <p className="text-xs text-green-600 font-medium">
                      Source: CSO Insights 2016 Sales Enablement Study (900+ organizations)
                    </p>
                  </div>
                </div>
              </div>

              {/* Sales Cycle Reduction Card */}
              <div className="flip-card h-44">
                <div className="flip-card-inner">
                  <div className="flip-card-front flex justify-between items-center p-4 bg-blue-50 rounded-lg cursor-pointer">
                    <span className="text-gray-700 font-medium">Deal Closure Improvement</span>
                    <span className="text-3xl font-bold text-blue-500 font-lato">+20%</span>
                  </div>
                  <div className="flip-card-back p-4 bg-blue-100 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Aberdeen Group 2019 Sales Research</h4>
                    <p className="text-sm text-blue-700 mb-2">
                      Structured coaching focusing on specific selling skills improved deal closure rates by 20% through
                      better qualification and objection handling techniques.
                    </p>
                    <p className="text-xs text-blue-600 font-medium">Source: Aberdeen Group 2019 Sales Research</p>
                  </div>
                </div>
              </div>

              {/* Rep Retention Increase Card */}
              <div className="flip-card h-44">
                <div className="flip-card-inner">
                  <div className="flip-card-front flex justify-between items-center p-4 bg-purple-50 rounded-lg cursor-pointer">
                    <span className="text-gray-700 font-medium">Annual Revenue Growth</span>
                    <span className="text-3xl font-bold text-purple-500 font-lato">+16.7%</span>
                  </div>
                  <div className="flip-card-back p-4 bg-purple-100 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Sales Management Association</h4>
                    <p className="text-sm text-purple-700 mb-2">
                      Companies with optimal coaching programs experienced 16.7% greater annual revenue growth compared
                      to organizations with informal coaching approaches.
                    </p>
                    <p className="text-xs text-purple-600 font-medium">
                      Source: Sales Management Association 2020 Coaching Impact Report
                    </p>
                  </div>
                </div>
              </div>

              {/* Ramp Time Reduction Card */}
              <div className="flip-card h-44">
                <div className="flip-card-inner">
                  <div className="flip-card-front flex justify-between items-center p-4 bg-orange-50 rounded-lg cursor-pointer">
                    <span className="text-gray-700 font-medium">New Hire Productivity</span>
                    <span className="text-3xl font-bold text-orange-500 font-lato">+28%</span>
                  </div>
                  <div className="flip-card-back p-4 bg-orange-100 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Brandon Hall Group</h4>
                    <p className="text-sm text-orange-700 mb-2">
                      Structured onboarding with skills assessment and targeted coaching improved new hire productivity
                      by 28% compared to traditional approaches.
                    </p>
                    <p className="text-xs text-orange-600 font-medium">
                      Source: Brandon Hall Group 2021 Onboarding Study
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-lato">
              Standardized Assessment Meets Personalized Coaching
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our mobile-optimized platform provides the tools you need to evaluate and develop your sales team
              effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="font-lato">Align assessments</CardTitle>
                <CardDescription>
                  Evaluate selling skills using the same criteria and clearly defined behavioral indicators across your
                  entire team.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <ClipboardList className="h-12 w-12 text-yellow-500 mb-4" />
                <CardTitle className="font-lato">Coach with focus</CardTitle>
                <CardDescription>Coach specific skills based on assessment results.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-red-500 mb-4" />
                <CardTitle className="font-lato">Track development</CardTitle>
                <CardDescription>
                  Monitor skill development over time to ensure what you do is having an impact.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-1 gap-12 items-center justify-center">
            <div>
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                Tailored to Your Organization
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-lato">
                Your Sales Process, <span className="text-blue-600">Your Assessment Model</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We understand that every sales organization has its unique approach. That's why SalesCoach is fully
                customizable to your specific sales methodology.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Settings className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 font-lato">Tailored Behavior Indicators</h3>
                    <p className="text-gray-600">
                      Define the selling skills and behaviors being assessed to match your organization's specific sales
                      process and methodology.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Sliders className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 font-lato">Flexible Assessment Framework</h3>
                    <p className="text-gray-600">
                      Adapt assessment levels, implement internal benchmarks and integrate your unique coaching approach
                      and metrics.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <AppIcon className="h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 font-lato">An App that is Truly Yours</h3>
                    <p className="text-gray-600">
                      Customize a version of SalesCoach with us - specifically for your organization, with your branding
                      and tailored for your sales teams.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    Discuss Customization Options
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standard Frameworks Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">Ready-to-Use Frameworks</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-lato">
              Built on <span className="text-green-600">Industry Best Practices</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't have a customized sales process yet? No problem. Our standard version is based on tried and tested
              industry frameworks that have proven successful across thousands of sales organizations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Transactional Sales Card */}
            <Card className="hover:shadow-xl transition-shadow border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-blue-500 rounded-full w-fit">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-lato text-blue-900">Transactional Sales</CardTitle>
                <CardDescription className="text-blue-700 text-lg">
                  Perfect for shorter sales cycles and product-focused selling
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-blue-800 mb-3 font-lato">Key Focus Areas:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Target className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Efficient prospecting and lead qualification</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Product knowledge and feature-benefit selling</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Objection handling and closing techniques</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Volume-based activity management</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <p className="text-sm text-blue-800 font-medium">
                    <strong>Best for:</strong> Retail, inside sales, SaaS, e-commerce, and high-volume B2B sales
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Relationship Sales Card */}
            <Card className="hover:shadow-xl transition-shadow border-2 border-green-200 bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-green-500 rounded-full w-fit">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-lato text-green-900">Relationship Sales</CardTitle>
                <CardDescription className="text-green-700 text-lg">
                  Ideal for complex, consultative selling with longer cycles
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-green-800 mb-3 font-lato">Key Focus Areas:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Users className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Consultative discovery and needs analysis</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Stakeholder mapping and relationship building</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Solution development and value articulation</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Long-term account management and expansion</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <p className="text-sm text-green-800 font-medium">
                    <strong>Best for:</strong> Enterprise software, professional services, manufacturing, financial
                    services, and complex B2B solutions
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Benefits of Standard Frameworks */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center font-lato">
              Why Start with Proven Frameworks?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 font-lato">Immediate Implementation</h4>
                <p className="text-gray-600 text-sm">
                  Start assessing and coaching your team right away with frameworks that work
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 p-3 bg-yellow-100 rounded-full w-fit">
                  <TrendingUp className="h-6 w-6 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 font-lato">Proven Results</h4>
                <p className="text-gray-600 text-sm">
                  Our sales models are best practices, derived from the success for thousands of sales teams
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 p-3 bg-red-100 rounded-full w-fit">
                  <Settings className="h-6 w-6 text-red-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 font-lato">Foundation for Growth</h4>
                <p className="text-gray-600 text-sm">
                  Use them as a starting point and evolve them into your own customized approach over time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-lato">
                Transform Your Sales Organization
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 font-lato">Improve Employee Satisfaction</h3>
                    <p className="text-gray-600">
                      Structured coaching and clear development paths increase engagement and retention.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 font-lato">Accelerate Revenue Growth</h3>
                    <p className="text-gray-600">Better-trained reps close more deals and achieve quota faster.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 font-lato">Reduce Turnover Costs</h3>
                    <p className="text-gray-600">
                      Invest in your people and see dramatic improvements in retention rates.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 font-lato">Scale Coaching Excellence</h3>
                    <p className="text-gray-600">
                      Ensure consistent, high-quality coaching across all managers and teams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center font-lato">Why It Matters</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-500 font-lato mb-2">73%</div>
                  <p className="text-gray-600">of sales managers spend less than 5% of their time coaching</p>
                  <p className="text-xs text-gray-400 mt-1">Source: Sales Management Association 2020</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-500 font-lato mb-2">88%</div>
                  <p className="text-gray-600">of high-performing sales teams use structured coaching</p>
                  <p className="text-xs text-gray-400 mt-1">Source: CSO Insights 2018 Sales Performance Study</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-500 font-lato mb-2">7x</div>
                  <p className="text-gray-600">ROI on coaching investments in sales organizations</p>
                  <p className="text-xs text-gray-400 mt-1">Source: ICF Global Coaching Study 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-lato">Ready to Transform Your Sales Team?</h2>
          <p className="text-xl mb-8 opacity-90">Try it out for free, no strings attached.</p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 border border-blue-600"
              onClick={handleInstallClick}
            >
              <Download className="mr-2 h-5 w-5" />
              Install App Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="SalesCoach Logo" className="h-6 w-6 transform scale-x-110" />
                <span className="text-lg font-bold text-gray-900 font-lato tracking-tight">SalesCoach</span>
              </div>
              <p className="text-gray-500">
                Empowering sales teams through standardized assessment and personalized coaching.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900 font-lato">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/impressum" className="hover:text-gray-900">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-gray-900">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-gray-900">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900 font-lato">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="hover:text-gray-900">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-900">
                    Help
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2025 SalesCoach by AKTICON. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
