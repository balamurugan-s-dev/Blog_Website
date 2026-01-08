import React from 'react'

function TermsAndConditions() {
  return (
    <div className="h-full">
      <div className="flex flex-col items-center justify-center min-h-45 bg-linear-to-b from-slate-100 to-white">
        <h1 className="font-bold text-3xl">Terms & Condtions</h1>
      </div>
      <div className="flex h-[calc(89vh-180px)] pb-4" >
        <aside className="hidden md:block lg:w-1/3 xl:w-1/3 2xl:w-1/3 border-r px-7 sticky top-0 h-full">
          <ul className="space-y-6 lg:space-y-8 font-medium">
            <li>
              <a href="#acceptance" className="hover:text-indigo-600">
                Acceptance of Terms
              </a>
            </li>
            <li>
              <a href="#purpose" className="hover:text-indigo-600">
                Purpose of the Website
              </a>
            </li>
            <li>
              <a href="#intellectual-property" className="hover:text-indigo-600">
                Intellectual Property Rights
              </a>
            </li>
            <li>
              <a href="#code-usage" className="hover:text-indigo-600">
                Code Usage Disclaimer
              </a>
            </li>
            <li>
              <a href="#external-links" className="hover:text-indigo-600">
                External Links & Third-Party Content
              </a>
            </li>
            <li>
              <a href="#user-conduct" className="hover:text-indigo-600">
                User Conduct
              </a>
            </li>
            <li>
              <a href="#changes" className="hover:text-indigo-600">
                Changes to Content & Terms
              </a>
            </li>
          </ul>
        </aside>

        <section className="md:w-2/3 xl:w-3/4 px-6 overflow-y-auto h-full space-y-10 scroll-smooth no-scrollbar">
          <section id="acceptance">
            <h2 className="text-xl font-semibold mb-2">Acceptance of Terms</h2>
            <p className="text-sm leading-relaxed">
              By accessing and using this website, you agree to be bound by these
              Terms and Conditions.
            </p>
          </section>

          <section id="purpose">
            <h2 className="text-xl font-semibold mb-2">Purpose of the Website</h2>
            <p className="text-sm leading-relaxed">
              This blog provides educational content, coding tutorials, and the
              latest technology-related news.
            </p>
          </section>

          <section id="intellectual-property" className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">
              Intellectual Property Rights
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">
              All content published on this website, including articles, tutorials, code
              snippets, graphics, logos, and design elements, is the intellectual property
              of the website owner unless otherwise stated. You may access and use the
              content for personal and educational purposes only.
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              Republishing, modifying, or redistributing any material without prior written
              permission is strictly prohibited.
            </p>
          </section>

          <section id="code-usage" className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">
              Code Usage Disclaimer
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Any code examples provided on this website are shared for educational
              purposes only and are offered “as-is” without warranties of any kind.
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              We are not responsible for bugs, security issues, data loss, or system
              failures that may result from using the provided code. Always test code
              thoroughly before using it in production environments.
            </p>
          </section>

          <section id="external-links" className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">
              External Links & Third-Party Content
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">
              This website may include links to third-party websites, tools, or
              documentation for reference purposes. We do not control or endorse the
              content of any third-party websites.
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              Accessing external links is done at your own risk, and we are not responsible
              for any content, policies, or practices of third-party services.
            </p>
          </section>

          <section id="user-conduct" className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">
              User Conduct
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">
              By using this website, you agree not to engage in any activity that may harm,
              disrupt, or misuse the platform.
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Posting spam, misleading, or promotional content</li>
              <li>Attempting unauthorized access or security breaches</li>
              <li>Copying content and claiming it as your own</li>
              <li>Using the website for illegal or abusive purposes</li>
            </ul>
          </section>

          <section id="comments" className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">
              Comments & User-Generated Content
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">
              If commenting is enabled, users are solely responsible for the content they
              submit. Comments must not violate any laws or infringe on the rights of
              others.
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              We reserve the right to remove comments that are offensive, irrelevant, or
              inappropriate without prior notice.
            </p>
          </section>

          <section id="changes" className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">
              Changes to Content & Terms
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">
              We may update or modify the content of this website and these Terms &
              Conditions at any time without prior notice.
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              Continued use of the website after changes are made constitutes acceptance
              of the updated terms.
            </p>
          </section>

          <section id="liability" className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">
              Limitation of Liability
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Under no circumstances shall we be liable for any direct, indirect,
              incidental, or consequential damages arising from the use of this website or
              reliance on its content.
            </p>
          </section>

          <section id="governing-law" className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">
              Governing Law
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">
              These Terms & Conditions shall be governed and interpreted in accordance with
              the laws of India.
            </p>
          </section>

          <section id="contact" className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">
              Contact Information
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">
              If you have any questions or concerns regarding these Terms & Conditions, you
              may contact us at:
            </p>
            <p className="text-sm font-medium text-gray-900">
              Email: your-email@example.com
            </p>
          </section>

        </section>
      </div>
    </div>
  )
}

export default TermsAndConditions