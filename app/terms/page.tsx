import Link from "next/link"

export default function TermsPage() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">Last updated: June 3, 2025</p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
          <p className="mb-6">
            These Terms and Conditions ("Terms", "Terms and Conditions") govern your relationship with the SalesCoach
            website and application (the "Service") operated by Anja El Kabbout ("us", "we", or "our"). Please read
            these Terms and Conditions carefully before using our Service.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Acceptance of Terms</h2>
          <p className="mb-6">
            By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of
            the terms, then you may not access the Service.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Use of the Service</h2>
          <p className="mb-4">By using our Service, you agree to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Use the Service only for lawful purposes and in accordance with these Terms</li>
            <li className="mb-2">
              Not use the Service in any way that violates any applicable local, national, or international law or
              regulation
            </li>
            <li className="mb-2">
              Not attempt to gain unauthorized access to any portion of the Service or any other systems or networks
              connected to the Service
            </li>
            <li className="mb-2">Not use the Service for any purpose that is unlawful or prohibited by these Terms</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
          <p className="mb-6">
            The Service and its original content, features, and functionality are and will remain the exclusive property
            of Anja El Kabbout and its licensors. The Service is protected by copyright, trademark, and other laws of
            both Germany and foreign countries. Our trademarks and trade dress may not be used in connection with any
            product or service without the prior written consent of Anja El Kabbout.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">5. User Accounts</h2>
          <p className="mb-6">
            When you create an account with us, you must provide information that is accurate, complete, and current at
            all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of
            your account on our Service.
          </p>
          <p className="mb-6">
            You are responsible for safeguarding the password that you use to access the Service and for any activities
            or actions under your password. You agree not to disclose your password to any third party. You must notify
            us immediately upon becoming aware of any breach of security or unauthorized use of your account.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Subscription and Payment</h2>
          <p className="mb-6">
            Some parts of the Service may be billed on a subscription basis. You will be billed in advance on a
            recurring and periodic basis, depending on the type of subscription plan you select. At the end of each
            period, your subscription will automatically renew under the same conditions unless you cancel it or we
            cancel it.
          </p>
          <p className="mb-6">
            You may cancel your subscription either through your online account management page or by contacting our
            customer support team. You will not receive a refund for the fees you already paid for your current
            subscription period, and you will continue to have access to the Service until the end of your current
            subscription period.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
          <p className="mb-6">
            In no event shall Anja El Kabbout, nor its directors, employees, partners, agents, suppliers, or affiliates,
            be liable for any indirect, incidental, special, consequential or punitive damages, including without
            limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access
            to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on
            the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of
            your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other
            legal theory, whether or not we have been informed of the possibility of such damage.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Disclaimer</h2>
          <p className="mb-6">
            Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE"
            basis. The Service is provided without warranties of any kind, whether express or implied, including, but
            not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or
            course of performance.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Governing Law</h2>
          <p className="mb-6">
            These Terms shall be governed and construed in accordance with the laws of Germany, without regard to its
            conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be
            considered a waiver of those rights.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Changes to Terms</h2>
          <p className="mb-6">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
            material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What
            constitutes a material change will be determined at our sole discretion. By continuing to access or use our
            Service after those revisions become effective, you agree to be bound by the revised terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
          <p className="mb-6">If you have any questions about these Terms, please contact us:</p>
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
