import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Shield, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-salon.jpg';
import BookingModal from './BookingModal';

const HeroSection = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  // Calculate date 14 days from now
  const urgencyDate = new Date();
  urgencyDate.setDate(urgencyDate.getDate() + 14);
  const formattedDate = urgencyDate.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric' 
  });

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Luxury salon interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-up">
          {/* Urgency Badge */}
          <Badge 
            variant="secondary" 
            className="mb-6 bg-luxury-rose-gold/20 text-luxury-rose-gold border-luxury-rose-gold/30 backdrop-blur-sm px-4 py-2 text-sm font-medium animate-scale-in"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Available now — secure before {formattedDate}
          </Badge>

          {/* Main Headlines */}
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight animate-fade-up" style={{animationDelay: '0.2s'}}>
            <span className="gradient-text">Book Your Spot</span>
            <br />
            <span className="text-luxury-cream">Secure It with a Deposit</span>
          </h1>

          <p className="text-xl md:text-2xl text-luxury-cream/80 mb-8 max-w-2xl mx-auto font-light animate-fade-up" style={{animationDelay: '0.4s'}}>
            No more no-shows. No more lost income.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-up" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center bg-luxury-charcoal/50 backdrop-blur-sm rounded-full px-4 py-2 border border-luxury-gold/20">
              <Calendar className="mr-2 h-4 w-4 text-luxury-gold" />
              <span className="text-sm text-luxury-cream">Smart Scheduling</span>
            </div>
            <div className="flex items-center bg-luxury-charcoal/50 backdrop-blur-sm rounded-full px-4 py-2 border border-luxury-gold/20">
              <Shield className="mr-2 h-4 w-4 text-luxury-gold" />
              <span className="text-sm text-luxury-cream">Secure Deposits</span>
            </div>
            <div className="flex items-center bg-luxury-charcoal/50 backdrop-blur-sm rounded-full px-4 py-2 border border-luxury-gold/20">
              <Clock className="mr-2 h-4 w-4 text-luxury-gold" />
              <span className="text-sm text-luxury-cream">Auto Reminders</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{animationDelay: '0.8s'}}>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto"
              onClick={() => setIsBookingOpen(true)}
            >
              Reserve Now
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="premium" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto"
            >
              Watch Demo
            </Button>
          </div>

          {/* Social Proof */}
          <p className="text-luxury-cream/60 text-sm mt-8 animate-fade-up" style={{animationDelay: '1s'}}>
            Trusted by 2,500+ salons worldwide
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-pulse">
          <div className="w-3 h-3 bg-luxury-gold rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-32 right-16 animate-pulse" style={{animationDelay: '0.5s'}}>
          <div className="w-2 h-2 bg-luxury-rose-gold rounded-full opacity-40"></div>
        </div>
      </section>

      <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </>
  );
};

export default HeroSection;