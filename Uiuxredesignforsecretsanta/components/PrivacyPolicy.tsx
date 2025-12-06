export function PrivacyPolicy() {
  return (
    <section className="relative min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="mb-4">Privacy Policy</h1>
          <p className="text-lg text-[#333333]/70">
            Last updated: November 26, 2025
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(47,79,79,0.12)] p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <h3>Our Commitment to Privacy</h3>
            <p className="text-[#333333]/70 mb-6">
              At Secret Santa, we take your privacy seriously. This policy outlines how we collect, use, and protect your information when you use our platform.
            </p>

            <h3 className="mt-8">Information We Collect</h3>
            <p className="text-[#333333]/70 mb-4">
              When you create a Secret Santa event, we collect:
            </p>
            <ul className="text-[#333333]/70 mb-6 space-y-2">
              <li>Event organizer email address</li>
              <li>Participant names and email addresses</li>
              <li>Event details (name, date, budget)</li>
              <li>Basic technical information (IP address, browser type) for security purposes</li>
            </ul>

            <h3 className="mt-8">How We Use Your Information</h3>
            <p className="text-[#333333]/70 mb-4">
              Your information is used exclusively to:
            </p>
            <ul className="text-[#333333]/70 mb-6 space-y-2">
              <li>Send Secret Santa assignment emails to participants</li>
              <li>Provide event management capabilities to organizers</li>
              <li>Send reminder emails about upcoming events</li>
              <li>Improve our service and prevent abuse</li>
            </ul>

            <h3 className="mt-8">Data Security</h3>
            <p className="text-[#333333]/70 mb-6">
              We implement industry-standard security measures to protect your data. All assignments are randomly generated and encrypted. We do not share your information with third parties for marketing purposes.
            </p>

            <h3 className="mt-8">Data Retention</h3>
            <p className="text-[#333333]/70 mb-6">
              Event data is retained for 90 days after the event date to allow for late management and resending emails. After this period, all personal information is automatically deleted from our servers.
            </p>

            <h3 className="mt-8">Your Rights</h3>
            <p className="text-[#333333]/70 mb-4">
              You have the right to:
            </p>
            <ul className="text-[#333333]/70 mb-6 space-y-2">
              <li>Request deletion of your event and all associated data at any time</li>
              <li>Access information we hold about you</li>
              <li>Opt out of reminder emails</li>
              <li>Update or correct your information</li>
            </ul>

            <h3 className="mt-8">Cookies and Tracking</h3>
            <p className="text-[#333333]/70 mb-6">
              We use minimal cookies for essential functionality only. We do not use tracking cookies or analytics that identify individual users.
            </p>

            <h3 className="mt-8">Third-Party Services</h3>
            <p className="text-[#333333]/70 mb-6">
              We use trusted third-party email service providers to send notifications. These providers are contractually obligated to protect your data and use it only for sending emails on our behalf.
            </p>

            <h3 className="mt-8">Children's Privacy</h3>
            <p className="text-[#333333]/70 mb-6">
              Our service is not intended for children under 13. We do not knowingly collect information from children under 13. If you believe we have collected such information, please contact us immediately.
            </p>

            <h3 className="mt-8">Changes to This Policy</h3>
            <p className="text-[#333333]/70 mb-6">
              We may update this privacy policy from time to time. We will notify users of any material changes via email to event organizers.
            </p>

            <h3 className="mt-8">Contact Us</h3>
            <p className="text-[#333333]/70 mb-6">
              If you have questions about this privacy policy or want to exercise your data rights, please contact us at privacy@secretsanta.example.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
