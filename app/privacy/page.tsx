import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">Last updated: June 3, 2025</p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
          <p className="mb-4">
            This Privacy Policy explains how SalesCoach ("we", "us", or "our") collects, uses, and shares your personal
            information when you visit our website or use our services.
          </p>
          <p className="mb-6">
            We respect your privacy and are committed to protecting your personal data. Please read this Privacy Policy
            carefully to understand our practices regarding your personal data.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
          <p className="mb-4">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">
              <strong>Personal Information:</strong> Name, email address, phone number, company name, and other contact
              details you provide when filling out forms on our website.
            </li>
            <li className="mb-2">
              <strong>Usage Data:</strong> Information about how you use our website and services, including your IP
              address, browser type, pages visited, time spent on pages, and other diagnostic data.
            </li>
            <li className="mb-2">
              <strong>Cookies and Tracking Data:</strong> We use cookies and similar tracking technologies to track
              activity on our website and hold certain information.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect for various purposes, including:</p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">To provide and maintain our services</li>
            <li className="mb-2">To notify you about changes to our services</li>
            <li className="mb-2">To provide customer support</li>
            <li className="mb-2">To gather analysis or valuable information so that we can improve our services</li>
            <li className="mb-2">To monitor the usage of our services</li>
            <li className="mb-2">To detect, prevent, and address technical issues</li>
            <li className="mb-2">
              To provide you with news, special offers, and general information about other goods, services, and events
              which we offer
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Data Sharing and Disclosure</h2>
          <p className="mb-4">We may share your personal information in the following situations:</p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">
              <strong>With Service Providers:</strong> We may share your information with third-party service providers
              to perform services on our behalf.
            </li>
            <li className="mb-2">
              <strong>For Business Transfers:</strong> We may share or transfer your information in connection with, or
              during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion
              of our business.
            </li>
            <li className="mb-2">
              <strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with
              your consent.
            </li>
            <li className="mb-2">
              <strong>Legal Requirements:</strong> We may disclose your information where required to do so by law or in
              response to valid requests by public authorities.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
          <p className="mb-6">
            The security of your data is important to us, but remember that no method of transmission over the Internet
            or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to
            protect your personal information, we cannot guarantee its absolute security.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Your Data Protection Rights</h2>
          <p className="mb-4">You have the following data protection rights:</p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">The right to access, update, or delete the information we have on you</li>
            <li className="mb-2">
              The right of rectification - the right to have your information corrected if it is inaccurate or
              incomplete
            </li>
            <li className="mb-2">The right to object to our processing of your personal data</li>
            <li className="mb-2">
              The right of restriction - the right to request that we restrict the processing of your personal
              information
            </li>
            <li className="mb-2">
              The right to data portability - the right to receive a copy of your personal data in a structured,
              machine-readable format
            </li>
            <li className="mb-2">
              The right to withdraw consent at any time where we relied on your consent to process your personal
              information
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Cookies</h2>
          <p className="mb-6">
            We use cookies and similar tracking technologies to track activity on our website and store certain
            information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            However, if you do not accept cookies, you may not be able to use some portions of our service.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Changes to This Privacy Policy</h2>
          <p className="mb-6">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy. You are
            advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
          <p className="mb-6">If you have any questions about this Privacy Policy, please contact us:</p>
          <ul className="list-none mb-6">
            <li>By email: salescoach@akticon.net</li>
            <li>By phone: +49 175 344 5622</li>
            <li>By mail: Paul-Keller-Ring 5, 96052 Bamberg, Germany</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
