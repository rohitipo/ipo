import { FC } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";

const PolicyPage: FC = () => {
  return (
    <div>
        <Header/>
    <div className="min-h-screen bg-gradient-to-b from-white to-white text-gray-800 py-16 px-6 md:px-12 flex items-center justify-center">
      <div className="w-full max-w-5xl text-left">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-8 text-center">Privacy Policy & Terms</h1>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-600 mb-4">Privacy Policy</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            At <span className="font-semibold text-blue-600">IPO Analyser</span>, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you access our website and services.
          </p>
          <h3 className="text-2xl font-bold text-gray-700 mt-6">1. Information We Collect</h3>
          <p className="text-lg text-gray-600 leading-relaxed">We may collect the following types of information:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li><strong>Personal Information:</strong> When you subscribe to our newsletter or contact us, we may collect your name, email address, and phone number.</li>
            <li><strong>Non-Personal Information:</strong> We collect technical data such as your IP address, browser type, and device information for website analytics and performance improvement.</li>
            <li><strong>Cookies & Tracking Technologies:</strong> We use cookies to enhance user experience, track website performance, and improve our services.</li>
          </ul>
          <h3 className="text-2xl font-bold text-gray-700 mt-6">2. How We Use Your Information</h3>
          <p className="text-lg text-gray-600 leading-relaxed">Your data is used for the following purposes:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Providing IPO-related information and updates.</li>
            <li>Sending notifications, newsletters, and important announcements.</li>
            <li>Analyzing website performance and improving our content.</li>
            <li>Enhancing user experience through personalized services.</li>
          </ul>
          <h3 className="text-2xl font-bold text-gray-700 mt-6">3. Data Security</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            We implement industry-standard security measures to protect your personal data from unauthorized access, alteration, or disclosure. However, no online platform is entirely risk-free, and we encourage users to take necessary precautions while sharing information online.
          </p>
          <h3 className="text-2xl font-bold text-gray-700 mt-6">4. Third-Party Links</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our website may contain links to third-party websites. We do not control or take responsibility for their privacy policies and encourage users to review their terms before providing any personal information.
          </p>
          <h3 className="text-2xl font-bold text-gray-700 mt-6">5. Grey Market Premium (GMP) Disclaimer</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            The GMP data provided on our website is sourced from market trends and third-party sources. It is purely indicative and subject to fluctuations. We do not guarantee the accuracy of GMP values, and investors are advised to conduct their own research before making any financial decisions.
          </p>
          <h3 className="text-2xl font-bold text-gray-700 mt-6">6. User Responsibilities</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            By using our website, you agree:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Not to misuse, reproduce, or distribute our content without permission.</li>
            <li>To use the information provided for personal and informational purposes only.</li>
          </ul>
          <h3 className="text-2xl font-bold text-gray-700 mt-6">7. Policy Updates</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage users to review it periodically.
          </p>
          <h3 className="text-2xl font-bold text-gray-700 mt-6">8. Contact Us</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            For any questions or concerns about our Privacy Policy, please contact us at <span className="text-blue-600">[ipoanaylser.in@gmail.com]</span>.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-green-600 mb-4">Terms & Conditions</h2>
          <p className="text-lg text-gray-600 leading-relaxed"></p>
          <h3 className="text-2xl font-bold text-gray-700 mt-6">1. Acceptance of Terms</h3>
          <p className="text-lg text-gray-600 leading-relaxed">By using our website, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions.</p>
          <h3 className="text-2xl font-bold text-gray-700 mt-6">2. Services Provided</h3>
          <p className="text-lg text-gray-600 leading-relaxed">We provide IPO-related information, including IPO details, company fundamentals, financials, and Grey Market Premium updates.</p>
          <h3 className="text-2xl font-bold text-gray-700 mt-6">3. Disclaimer</h3>
          <p className="text-lg text-gray-600 leading-relaxed">Information provided is for reference only and not investment advice. We do not guarantee accuracy.</p>
          <h3 className="text-2xl font-bold text-gray-700 mt-6">4. User Responsibilities</h3>
          <p className="text-lg text-gray-600 leading-relaxed">Users must not misuse, reproduce, or distribute our content without permission.</p>
          <h3 className="text-2xl font-bold text-gray-700 mt-6">5. Third-Party Links & Advertisements</h3>
          <p className="text-lg text-gray-600 leading-relaxed">Our website may contain links to third-party websites or advertisements. We do not endorse or take responsibility for the content, privacy policies, or services offered by these third parties. Users should review their terms before engaging with them.</p>
          <h3 className="text-2xl font-bold text-gray-700 mt-6">6. Intellectual Property</h3>
          <p className="text-lg text-gray-600 leading-relaxed">All content, including text, graphics, logos, and data on IpoAnalyser.in, is our intellectual property or used with permission. Unauthorized use, reproduction, or redistribution of our content is strictly prohibited.</p>
          <h3 className="text-2xl font-bold text-gray-700 mt-6">7. Limitation of Liability</h3>
          <p className="text-lg text-gray-600 leading-relaxed">We strive to provide accurate and up-to-date information, but we do not guarantee the completeness or accuracy of the data presented. Under no circumstances shall IpoAnalyser.in be liable for any direct, indirect, incidental, or consequential damages resulting from the use of our website.</p>
          <h3 className="text-2xl font-bold text-gray-700 mt-6">8. Changes to Terms and Conditions</h3>
          <p className="text-lg text-gray-600 leading-relaxed">We reserve the right to update or modify these Terms and Conditions at any time. Users are encouraged to review this page periodically for changes. Continued use of our website after modifications constitutes acceptance of the updated terms.</p>
          <h3 className="text-2xl font-bold text-gray-700 mt-6">9. Governing Law</h3>
          <p className="text-lg text-gray-600 leading-relaxed">These Terms and Conditions are governed by the laws of India. Any disputes arising from the use of our website shall be subject to the jurisdiction of the appropriate courts.</p>
          <h3 className="text-2xl font-bold text-gray-700 mt-6">10. Contact Information</h3>
          <p className="text-lg text-gray-600 leading-relaxed">For any questions or concerns regarding these Terms and Conditions, please contact us at <span className="text-blue-600">[ipoanaylser.in@gmail.com]</span>.</p>
        </section>
      </div>
    </div>
    <NewsLetter/>
    <Footer/>
    </div>
  );
};

export default PolicyPage;
