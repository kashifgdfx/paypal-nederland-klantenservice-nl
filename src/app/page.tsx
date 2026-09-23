'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LoginProblemsSection from '@/components/LoginProblemsSection';
import PasswordChangeSection from '@/components/PasswordChangeSection';
import AccountRecoverySection from '@/components/AccountRecoverySection';
import PaymentProblemsSection from '@/components/PaymentProblemsSection';
import BalanceSection from '@/components/BalanceSection';
import ContactSection from '@/components/ContactSection';
import RefundSection from '@/components/RefundSection';
import PhoneNumberSection from '@/components/PhoneNumberSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Sticky Navigation */}
      <Navbar />

      {/* 2. Hero Section using exact H1 and intro content */}
      <HeroSection />

      {/* 3. Login Problems Section */}
      <LoginProblemsSection />

      {/* 4. Password Change Section */}
      <PasswordChangeSection />

      {/* 5. Account Recovery Section */}
      <AccountRecoverySection />

      {/* 6. Payment Problems Section */}
      <PaymentProblemsSection />

      {/* 7. Balance / Opwaarderen Section */}
      <BalanceSection />

      {/* 8. Contact Section */}
      <ContactSection />

      {/* 9. Refund Section */}
      <RefundSection />

      {/* 10. Phone Number Section */}
      <PhoneNumberSection />

      {/* 11. FAQ Section */}
      <FAQSection />

      {/* 12. CTA Section */}
      <CTASection />

      {/* 13. Footer */}
      <Footer />
    </main>
  );
}
