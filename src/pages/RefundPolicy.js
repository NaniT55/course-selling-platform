import React from "react";

const RefundPolicy = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-10">
      <div className="container mx-auto px-5">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6">Refund Policy</h1>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Refund Window</h2>
              <p className="leading-relaxed">
                Orn-ai allows for a <strong>100% refund</strong> of the amount paid if the refund request is raised within <strong>14 days</strong> of the first purchase.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
              <p className="leading-relaxed">
                When you visit the Site, you can browse without submitting any personal information about yourself. We will, however, receive and store some non-personally identifiable information about your visit, as described below.
              </p>
              <p className="leading-relaxed mt-2">
                In order to participate in certain functionalities, you may be asked to provide personally identifiable information, such as your name or email address. Providing such information is always your choice.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Refund Method</h2>
              <p className="leading-relaxed">
                Regardless of the mode of payment used for paying the fees, refunds will always be made to a bank account (as per the details provided by the customer) through NEFT/IMPS/RTGS or another suitable method.
              </p>
              <p className="leading-relaxed mt-2">
                To verify your credentials and bank account details, we may request information or documents, including a canceled cheque. Refunds will be processed within <strong>30 days</strong> of receiving all relevant information and documentation.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Non-Refundable Cases</h2>
              <p className="leading-relaxed">
                We do not provide refunds for:
              </p>
              <ul className="list-disc ml-6 space-y-2 mt-2">
                <li>Lack of usage of the program.</li>
                <li>Dissatisfaction with the program.</li>
                <li>Requests made after the expiry of the refund window.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Refund Steps</h2>
              <ol className="list-decimal ml-6 space-y-3">
                <li>
                  Shoot an email to <a href="mailto:connect@orn-ai.com" className="text-blue-600 underline">connect@orn-ai.com</a> with your registration details. Please use your registered email to send the request.
                </li>
                <li>
                  After receiving your email, our team will verify within <strong>1 business day</strong> if you are within the refund period according to the policy.
                </li>
                <li>
                  If eligible, we will reply with a form to fill. Additionally, our team will contact you within <strong>2 business days</strong> to understand your concerns and see if we can assist further.
                </li>
                <li>
                  If you decide to proceed with the refund after the call, our finance team will initiate the refund process. Refunds typically take <strong>7–9 business days</strong> to reflect in your account.
                </li>
              </ol>
              <p className="leading-relaxed mt-4">
                <strong>Note:</strong> If you took a loan from an external company, the loan cancellation process is managed by them. While we strive to adhere to timelines, delays on their end may occur and are beyond our control.
              </p>
            </section>
          </div>
          <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Orn-ai. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
