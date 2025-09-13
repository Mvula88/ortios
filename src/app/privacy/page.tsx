import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                Ortios LLC
              </Link>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/" className="inline-flex items-center">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Privacy Policy Content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="mb-6 text-sm text-gray-600">Effective Date: January 1, 2025</p>

          <div className="prose prose-gray max-w-none">
            <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">1. Introduction</h2>
            <p className="mb-4 text-gray-700">
              Ortios LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our
              website or use our services.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">2. Information We Collect</h2>
            <p className="mb-4 text-gray-700">We may collect information about you in various ways:</p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
              <li>
                <strong>Personal Data:</strong> Name, email address, phone number, and other contact
                details you provide through our contact forms.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact with our website,
                including IP address, browser type, pages visited, and time spent on pages.
              </li>
              <li>
                <strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance
                your experience on our website.
              </li>
            </ul>

            <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">
              3. How We Use Your Information
            </h2>
            <p className="mb-4 text-gray-700">We use the collected information to:</p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you updates about our products and services (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Analyze usage patterns and optimize user experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">4. Data Security</h2>
            <p className="mb-4 text-gray-700">
              We implement appropriate technical and organizational security measures to protect your
              personal information against unauthorized access, alteration, disclosure, or destruction.
              However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">5. Data Sharing</h2>
            <p className="mb-4 text-gray-700">
              We do not sell, trade, or rent your personal information to third parties. We may share
              your information only in the following circumstances:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>With service providers who assist us in operating our business</li>
            </ul>

            <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">6. Your Rights</h2>
            <p className="mb-4 text-gray-700">You have the right to:</p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>

            <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">
              7. Children&apos;s Privacy
            </h2>
            <p className="mb-4 text-gray-700">
              Our services are not intended for children under 13 years of age. We do not knowingly
              collect personal information from children under 13.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">
              8. Changes to This Policy
            </h2>
            <p className="mb-4 text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any changes by
              posting the new Privacy Policy on this page and updating the &quot;Effective Date&quot; above.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">9. Contact Us</h2>
            <p className="mb-4 text-gray-700">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mb-8 rounded-lg bg-gray-50 p-4">
              <p className="text-gray-700">
                <strong>Ortios LLC</strong>
                <br />
                8195, 1021 E Lincolnway
                <br />
                Cheyenne, WY, Laramie
                <br />
                US, 82001
                <br />
                Phone: +1 (307) 263-4887
                <br />
                Email: privacy@ortios.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 px-4 py-8 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm">© 2025 Ortios LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}