
import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">Terms of Service</h1>
        <p className="text-white/70 text-center max-w-3xl mx-auto mb-12">
          Last Updated: May 1, 2025
        </p>
        
        <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-white/10 gradient-border">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-white text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-white/70 mb-6">
              These Terms of Service ("Terms") govern your access to and use of Soft Highlight's website, 
              products, and services ("Services"). By accessing or using our Services, you agree to be bound 
              by these Terms and our Privacy Policy. If you do not agree to these terms, please do not use our Services.
            </p>
            
            <h2 className="text-white text-2xl font-bold mb-4">2. User Accounts</h2>
            <p className="text-white/70 mb-6">
              To access certain features of our Services, you may need to create an account. You are responsible 
              for maintaining the confidentiality of your account information and for all activities that occur 
              under your account. You agree to immediately notify Soft Highlight of any unauthorized use of your 
              account or any other breach of security.
            </p>
            
            <h2 className="text-white text-2xl font-bold mb-4">3. Privacy</h2>
            <p className="text-white/70 mb-6">
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your 
              personal information. By using our Services, you consent to our collection and use of personal data 
              as outlined in our Privacy Policy.
            </p>
            
            <h2 className="text-white text-2xl font-bold mb-4">4. Content and Intellectual Property</h2>
            <p className="text-white/70 mb-6">
              All content, features, and functionality on our Services, including but not limited to text, graphics, 
              logos, button icons, images, audio clips, digital downloads, data compilations, and software, are the 
              exclusive property of Soft Highlight or its licensors and are protected by copyright, trademark, and 
              other intellectual property laws.
            </p>
            
            <h2 className="text-white text-2xl font-bold mb-4">5. User Conduct</h2>
            <p className="text-white/70 mb-6">
              You agree not to use our Services to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-white/70">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe the intellectual property rights of others</li>
              <li>Transmit viruses or other harmful code</li>
              <li>Interfere with the proper working of the Services</li>
              <li>Attempt to gain unauthorized access to our systems or user accounts</li>
              <li>Harass, abuse, or harm another person or entity</li>
            </ul>
            
            <h2 className="text-white text-2xl font-bold mb-4">6. Product Purchases and Subscriptions</h2>
            <p className="text-white/70 mb-6">
              When you purchase products or subscriptions through our Services, you agree to provide accurate and 
              complete information about yourself and your payment method. You agree to pay all charges incurred by 
              users of your account at the prices in effect when such charges are incurred.
            </p>
            
            <h2 className="text-white text-2xl font-bold mb-4">7. Warranty Disclaimer</h2>
            <p className="text-white/70 mb-6">
              OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR 
              IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO 
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            
            <h2 className="text-white text-2xl font-bold mb-4">8. Limitation of Liability</h2>
            <p className="text-white/70 mb-6">
              TO THE FULLEST EXTENT PERMITTED BY LAW, SOFT HIGHLIGHT SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY 
              OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>
            
            <h2 className="text-white text-2xl font-bold mb-4">9. Changes to Terms</h2>
            <p className="text-white/70 mb-6">
              We may modify these Terms at any time. If we make material changes to these Terms, we will notify you by 
              email or by posting a notice on our website. Your continued use of the Services after such notification 
              constitutes your acceptance of the updated Terms.
            </p>
            
            <h2 className="text-white text-2xl font-bold mb-4">10. Contact Information</h2>
            <p className="text-white/70">
              If you have any questions or concerns about these Terms or our Services, please contact us at:<br />
              Email: legal@softhighlight.com<br />
              Address: 123 Innovation Way, Tech District, San Francisco, CA 94103
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
