import type React from "react"
import type { Metadata } from "next"
import { Inter, Lato } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
})

export const metadata: Metadata = {
  title: "SalesCoach - Transform Your Sales Team Performance",
  description:
    "Assess selling skills, provide targeted coaching, and drive business results. Mobile-optimized platform for sales managers.",
  keywords: "sales assessment, sales coaching, sales training, sales management, mobile app",
  authors: [{ name: "SalesCoach Team" }],
  creator: "SalesCoach",
  publisher: "SalesCoach",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://salescoach.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SalesCoach - Transform Your Sales Team Performance",
    description: "Assess selling skills, provide targeted coaching, and drive business results.",
    url: "https://salescoach.com",
    siteName: "SalesCoach",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SalesCoach - Sales Assessment Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SalesCoach - Transform Your Sales Team Performance",
    description: "Assess selling skills, provide targeted coaching, and drive business results.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${lato.variable}`}>{children}</body>
    </html>
  )
}
