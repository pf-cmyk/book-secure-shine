import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import BenefitsSection from '@/components/BenefitsSection';
import PricingSection from '@/components/PricingSection';
import StickyBookingButton from '@/components/StickyBookingButton';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <PricingSection />
      <StickyBookingButton />
    </main>
  );
};

export default Index;
