import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Terms() {
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

      {/* Terms Content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold text-gray-900">Terms of Service</h1>
          <p className="mb-6 text-sm text-gray-600">Effective Date: January 1, 2025</p>

          <div className="prose prose-gray max-w-none">
            <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">1. Acceptance of Terms</h2>
            <p className="mb-4 text-gray-700">
              By accessing or using the services provided by Ortios LLC (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree
              with these Terms, please do not use our services.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">2. Services</h2>
            <p className="mb-4 text-gray-700">
              Ortios LLC provides digital product development, SaaS platforms, and technology consulting
              services. We reserve the right to modify, suspend, or discontinue any service at any time
              without prior notice.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">3. User Obligations</h2>
            <p className="mb-4 text-gray-700">When using our services, you agree to:</p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Not use our services for any illegal or unauthorized purpose</li>
              <li>Not violate any laws in your jurisdiction</li>
              <li>Not interfere with or disrupt our services or servers</li>
              <li>Not attempt to gain unauthorized access to any part of our services</li>
            </ul>

            <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">4. Intellectual Property</h2>
            <p className="mb-4 text-gray-700">
              All content, features, and functionality of our services, including but not limited to
              text, graphics, logos, and software, are the exclusive property of Ortios LLC and are
              protected by international copyright, trademark, and other intellectual property laws.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">5. User Content</h2>
            <p className="mb-4 text-gray-700">
              By submitting content to our services, you grant us a non-exclusive, royalty-free,
              worldwide license to use, reproduce, modify, and distribute such content for the purpose
              of providing our services. You represent and warrant that you have all necessary rights to
              grant this license.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">6. Privacy</h2>
            <p className="mb-4 text-gray-700">
              Your use of our services is also governed by our Privacy Policy. By using our services,
              you consent to the collection and use of your information as described in our Privacy
              Policy.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">
              7. Disclaimers and Warranties
            </h2>
            <p className="mb-4 text-gray-700">
              Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
              either express or implied. We do not warrant that our services will be uninterrupted,
              error-free, or completely secure.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">
              8. Limitation of Liability
            </h2>
            <p className="mb-4 text-gray-700">
              To the maximum extent permitted by law, Ortios LLC shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, including but not limited to loss
              of profits, data, or other intangible losses resulting from your use of our services.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">9. Indemnification</h2>
            <p className="mb-4 text-gray-700">
              You agree to indemnify, defend, and hold harmless Ortios LLC and its officers, directors,
              employees, and agents from any claims, liabilities, damages, losses, and expenses arising
              from your use of our services or violation of these Terms.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">10. Termination</h2>
            <p className="mb-4 text-gray-700">
              We reserve the right to terminate or suspend your access to our services immediately,
              without prior notice, for any reason, including but not limited to breach of these Terms.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">11. Governing Law</h2>
            <p className="mb-4 text-gray-700">
              These Terms shall be governed by and construed in accordance with the laws of Wyoming,
              United States, without regard to its conflict of law provisions. Any disputes arising from
              these Terms shall be resolved in the courts of Wyoming.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">12. Severability</h2>
            <p className="mb-4 text-gray-700">
              If any provision of these Terms is found to be unenforceable or invalid, that provision
              shall be limited or eliminated to the minimum extent necessary, and the remaining
              provisions shall remain in full force and effect.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">13. Entire Agreement</h2>
            <p className="mb-4 text-gray-700">
              These Terms constitute the entire agreement between you and Ortios LLC regarding the use
              of our services and supersede all prior agreements and understandings.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">14. Changes to Terms</h2>
            <p className="mb-4 text-gray-700">
              We reserve the right to modify these Terms at any time. We will notify users of any
              material changes by posting the updated Terms on our website. Your continued use of our
              services after such modifications constitutes acceptance of the updated Terms.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900">15. Contact Information</h2>
            <p className="mb-4 text-gray-700">
              If you have any questions about these Terms, please contact us at:
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
                Email: legal@ortios.com
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