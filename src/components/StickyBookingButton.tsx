import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import BookingModal from './BookingModal';

const StickyBookingButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky button after scrolling past hero section
      const scrolled = window.scrollY > window.innerHeight * 0.8;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-slide-up">
        <Button
          variant="hero"
          size="lg"
          onClick={() => setIsBookingOpen(true)}
          className="shadow-luxury hover:shadow-glow px-8 py-4 text-lg font-semibold"
        >
          <Sparkles className="mr-2 h-5 w-5" />
          Reserve Your Spot
        </Button>
      </div>
      
      <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </>
  );
};

export default StickyBookingButton;