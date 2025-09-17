import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Martinez",
    business: "Luxe Hair Studio",
    location: "Beverly Hills, CA",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    quote: "No-shows dropped from 25% to just 3% in the first month. The deposit system pays for itself immediately.",
    result: "90% reduction in no-shows"
  },
  {
    name: "Marcus Thompson",
    business: "Elite Barbershop",
    location: "Austin, TX", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    quote: "My revenue increased 40% because I'm not losing money on empty chairs. Clients respect the deposit system.",
    result: "+$3,200 monthly revenue"
  },
  {
    name: "Jennifer Lee",
    business: "Zen Beauty Spa",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    quote: "The automated reminders and professional booking experience elevated our brand. Clients love how easy it is.",
    result: "95% client satisfaction"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-charcoal via-luxury-black to-luxury-charcoal"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-luxury-gold/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <Badge className="mb-4 bg-luxury-gold/10 text-luxury-gold border-luxury-gold/20">
            <Star className="mr-2 h-4 w-4" />
            Client Success Stories
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-xl text-luxury-cream/70 max-w-3xl mx-auto">
            Join thousands of successful salons that transformed their business with our deposit-secured booking system
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 animate-fade-up" style={{animationDelay: '0.2s'}}>
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-card border border-luxury-gold/10 hover:border-luxury-gold/20 transition-all duration-300 hover:shadow-glow">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-luxury-gold mb-4" />
                
                {/* Testimonial Text */}
                <blockquote className="text-luxury-cream/90 text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Result Badge */}
                <Badge className="mb-6 bg-luxury-gold/10 text-luxury-gold border-luxury-gold/20">
                  {testimonial.result}
                </Badge>
                
                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-luxury-gold/20"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80';
                    }}
                  />
                  <div>
                    <div className="font-semibold text-luxury-cream">{testimonial.name}</div>
                    <div className="text-luxury-gold text-sm font-medium">{testimonial.business}</div>
                    <div className="text-luxury-cream/60 text-xs">{testimonial.location}</div>
                  </div>
                </div>
                
                {/* Star Rating */}
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-gradient-card border border-luxury-gold/20 rounded-xl p-8 animate-fade-up" style={{animationDelay: '0.4s'}}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">2,500+</div>
              <div className="text-luxury-cream/70">Active Salons</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">87%</div>
              <div className="text-luxury-cream/70">Avg. No-Show Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">$4,800</div>
              <div className="text-luxury-cream/70">Avg. Monthly Revenue Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">24hrs</div>
              <div className="text-luxury-cream/70">Implementation Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;