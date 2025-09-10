import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Trophy,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Reduce No-Shows by up to 90%',
    description: 'Deposit commitments ensure clients show up, protecting your time and revenue',
    metric: '90%',
    color: 'text-green-400'
  },
  {
    icon: DollarSign,
    title: 'Increase Revenue by 40%',
    description: 'Premium positioning and guaranteed bookings boost your bottom line',
    metric: '+40%',
    color: 'text-luxury-gold'
  },
  {
    icon: Users,
    title: 'Look Premium, Book Faster',
    description: 'Professional booking experience that builds trust and attracts quality clients',
    metric: '2.5x',
    color: 'text-luxury-rose-gold'
  },
  {
    icon: Trophy,
    title: 'Earn More Per Client',
    description: 'Higher-value bookings from clients who appreciate professional service',
    metric: '+60%',
    color: 'text-luxury-accent'
  }
];

const testimonials = [
  {
    quote: "No-shows dropped from 30% to just 3%. This system paid for itself in the first month.",
    author: "Sarah Chen",
    role: "Salon Owner, Elite Beauty",
    rating: 5
  },
  {
    quote: "My clients love the professional booking experience. It sets the right expectations.",
    author: "Marcus Johnson",
    role: "Master Barber, Crown Cuts",
    rating: 5
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-charcoal to-luxury-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <Badge className="mb-4 bg-luxury-rose-gold/10 text-luxury-rose-gold border-luxury-rose-gold/20">
            Why Salons Choose Us
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Transform Your Business</span>
          </h2>
          <p className="text-xl text-luxury-cream/70 max-w-3xl mx-auto">
            Stop losing money to no-shows and start building a premium client experience
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 animate-fade-up" style={{animationDelay: '0.2s'}}>
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-luxury-gold/10 hover:border-luxury-gold/20 transition-all duration-500 hover:shadow-glow group overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-xl bg-luxury-gold/10 border border-luxury-gold/20 group-hover:bg-luxury-gold/20 transition-colors">
                      <benefit.icon className="h-8 w-8 text-luxury-gold" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-luxury-cream group-hover:text-luxury-gold transition-colors">
                        {benefit.title}
                      </h3>
                      <span className={`text-2xl font-bold ${benefit.color}`}>
                        {benefit.metric}
                      </span>
                    </div>
                    <p className="text-luxury-cream/70 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 animate-fade-up" style={{animationDelay: '0.4s'}}>
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-luxury-rose-gold/10 hover:shadow-glow transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Sparkles key={i} className="h-5 w-5 text-luxury-gold fill-current" />
                  ))}
                </div>
                <blockquote className="text-luxury-cream/90 text-lg mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold text-luxury-cream">{testimonial.author}</div>
                    <div className="text-sm text-luxury-cream/60">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature List */}
        <div className="bg-gradient-card rounded-2xl border border-luxury-gold/10 p-8 mb-12 animate-fade-up" style={{animationDelay: '0.6s'}}>
          <h3 className="text-2xl font-bold text-luxury-cream mb-6 text-center">
            Everything You Get
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              'Deposit-secured bookings',
              'Automated SMS reminders',
              'Real-time availability',
              'Stripe payment integration',
              'Mobile-responsive design',
              'Client management system',
              'Revenue analytics',
              'Custom branding options',
              '24/7 customer support'
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-luxury-gold flex-shrink-0" />
                <span className="text-luxury-cream/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-up" style={{animationDelay: '0.8s'}}>
          <Button variant="cta" size="lg" className="text-lg px-8 py-4 h-auto">
            Start Your Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-luxury-cream/60 text-sm mt-4">
            No setup fees • Cancel anytime • 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;