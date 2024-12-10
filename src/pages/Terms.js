import React from "react";

const Terms = () => {
  return (
    <div className="bg-gray-100 text-gray-800 py-10">
      <div className="container mx-auto px-5">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6">Terms and Conditions</h1>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="leading-relaxed">
                This document constitutes a legal and binding agreement between you, the user ("User"), and <strong>ORN-AI</strong> 
                ("we," "us," "our," or "the Company"), outlining the terms governing your use of our Platform. The term "Platform" 
                collectively refers to our website (<a href="https://www.ORN-AI.com" className="text-blue-600 underline">www.ORN-AI.com</a>), 
                mobile applications, and associated services, content, and materials. By accessing or using the Platform, you agree 
                to abide by these Terms.
              </p>
              <p className="leading-relaxed mt-2">
                If you disagree with any part of these Terms, you must cease using the Platform and Programs immediately.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">User Accounts, Registration, and Delivery of Services</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Complete a two-step verification process with a valid email and phone number.</li>
                <li>Full or partial payment grants access to Programs. Failure to pay may result in account suspension.</li>
                <li>Do not share your account or access others' accounts. Ensure that all information provided is accurate and up-to-date.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Payment Terms and Refund Policy</h2>
              <p className="leading-relaxed">
                Program fees are <strong>non-transferable</strong> and must be paid through an approved Payment Method. Taxes and 
                exchange fees may apply based on your location and chosen currency. Refunds and cancellations are governed by specific 
                Program policies.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">ORN-AI’s Intellectual Property Rights</h2>
              <p className="leading-relaxed">
                All content on the Platform, including text, images, videos, software, and other materials ("ORN-AI Content"), is 
                protected by intellectual property laws. You agree not to:
              </p>
              <ul className="list-disc ml-6 space-y-2 mt-2">
                <li>Reproduce, duplicate, or sell any part of the ORN-AI Content for commercial use.</li>
                <li>Use ORN-AI trademarks without prior written consent.</li>
              </ul>
              <p className="leading-relaxed mt-4">
                For IP-related concerns, contact us at <a href="mailto:email@example.com" className="text-blue-600 underline">email@example.com</a>.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Limited License</h2>
              <p className="leading-relaxed">
                ORN-AI grants you a personal, non-commercial license to use the Platform and its Content. Commercial activities 
                such as reselling, renting, or distributing ORN-AI Content are strictly prohibited.
              </p>
              <p className="leading-relaxed mt-2">
                Prohibited uses include:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Using ORN-AI Content for institutional purposes where tuition is charged.</li>
                <li>Sharing ORN-AI Content publicly (e.g., on social media or torrents).</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="leading-relaxed">
                For inquiries regarding these Terms, reach us at:
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

export default Terms;
