import React from "react";

const Privacy = () => {
  return (
    <div className="bg-gray-100 text-gray-800 py-10">
      <div className="container mx-auto px-5">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="leading-relaxed">
                At <strong>ORN-AI</strong>, we are committed to safeguarding your privacy and protecting your personal information. This Privacy Policy outlines how we collect, use, and share your data when you access or use our Platform, including our website, mobile applications, and services (collectively, the "Platform").
              </p>
              <p className="leading-relaxed mt-2">
                By using the Platform, you consent to the practices described in this Privacy Policy. If you disagree with any part of this policy, you must cease using our services immediately.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Personal Information:</strong> Name, email address, phone number, payment details, and any other information you provide during registration or transactions.
                </li>
                <li>
                  <strong>Usage Data:</strong> Details about your interactions with the Platform, such as pages visited, time spent, and features accessed.
                </li>
                <li>
                  <strong>Device Information:</strong> Information about your device, including IP address, browser type, operating system, and device identifiers.
                </li>
                <li>
                  <strong>Cookies and Tracking:</strong> We use cookies and similar technologies to enhance your experience and gather analytics.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>To provide, maintain, and improve our Platform and services.</li>
                <li>To process transactions and send confirmations.</li>
                <li>To respond to inquiries and provide customer support.</li>
                <li>To send promotional communications, updates, or special offers.</li>
                <li>To monitor and analyze trends, usage, and activities for analytics and marketing.</li>
                <li>To enforce our terms, conditions, and policies.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Sharing Your Information</h2>
              <p className="leading-relaxed">
                We do not sell your personal information to third parties. However, we may share your information with:
              </p>
              <ul className="list-disc ml-6 space-y-2 mt-2">
                <li>
                  <strong>Service Providers:</strong> Third-party vendors who assist in providing services, such as payment processing and analytics.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> To comply with legal obligations or respond to lawful requests.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="leading-relaxed">
                We implement industry-standard security measures to protect your data. However, no online transmission is completely secure, and we cannot guarantee absolute data security.
              </p>
              <p className="leading-relaxed mt-2">
                You are responsible for safeguarding your account credentials and notifying us immediately of unauthorized access.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
              <p className="leading-relaxed">
                We use cookies to improve your experience on the Platform. Cookies are small data files stored on your device that help us understand user behavior and enhance functionality.
              </p>
              <p className="leading-relaxed mt-2">
                You can manage your cookie preferences through your browser settings, but some features of the Platform may not function properly without cookies.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Privacy Rights</h2>
              <p className="leading-relaxed">
                Depending on your jurisdiction, you may have rights to:
              </p>
              <ul className="list-disc ml-6 space-y-2 mt-2">
                <li>Access, correct, or delete your personal information.</li>
                <li>Opt out of receiving promotional communications.</li>
                <li>Restrict the processing of your data.</li>
              </ul>
              <p className="leading-relaxed mt-4">
                To exercise these rights, contact us at <a href="mailto:privacy@ORN-AI.com" className="text-blue-600 underline">privacy@ORN-AI.com</a>.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Updates to this Privacy Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices or legal obligations. The updated version will be posted on this page with the "Last Updated" date at the top.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="leading-relaxed">
                For any questions or concerns regarding this Privacy Policy, please reach out to us at:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Email:</strong> <a href="mailto:contact@ORN-AI.com" className="text-blue-600 underline">contact@ORN-AI.com</a></li>
                <li><strong>Phone:</strong> +91-XXXX-XXXXXX</li>
                <li><strong>Address:</strong> ORN-AI Headquarters, City, State, PIN Code</li>
              </ul>
            </section>
          </div>
          <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} ORN-AI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

