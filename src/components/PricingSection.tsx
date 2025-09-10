import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Check, 
  Crown, 
  Clock,
  AlertCircle,
  Sparkles,
  Zap
} from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to 14 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 14);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="bg-luxury-charcoal/50 backdrop-blur-sm rounded-lg p-3 border border-luxury-gold/20">
          <div className="text-2xl font-bold text-luxury-gold">{value}</div>
          <div className="text-xs text-luxury-cream/60 capitalize">{unit}</div>
        </div>
      ))}
    </div>
  );
};

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$49',
      period: 'one-time',
      description: 'Perfect for small salons and individual stylists',
      features: [
        'Up to 100 bookings/month',
        'Basic deposit system',
        'SMS reminders',
        'Mobile-responsive design',
        'Email support'
      ],
      popular: false,
      cta: 'Get Started',
      badge: null
    },
    {
      name: 'Professional',
      price: '$149',
      period: 'one-time',
      description: 'Ideal for established salons with multiple stylists',
      features: [
        'Unlimited bookings',
        'Advanced deposit options',
        'Automated SMS & email',
        'Custom branding',
        'Analytics dashboard',
        'Priority support',
        'Client management system'
      ],
      popular: true,
      cta: 'Start Free Trial',
      badge: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: 'one-time',
      description: 'Complete solution for salon chains and franchises',
      features: [
        'Everything in Professional',
        'Multi-location support',
        'Advanced analytics',
        'API access',
        'White-label options',
        'Dedicated account manager',
        '24/7 phone support'
      ],
      popular: false,
      cta: 'Contact Sales',
      badge: 'Enterprise'
    }
  ];

  const leaseOption = {
    monthly: '$29',
    description: 'All Professional features with monthly payments'
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-luxury-charcoal to-luxury-black"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <Badge className="mb-4 bg-luxury-accent/10 text-luxury-accent border-luxury-accent/20">
            <AlertCircle className="mr-2 h-4 w-4" />
            Limited Time Offer
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Secure Your System</span>
          </h2>
          <p className="text-xl text-luxury-cream/70 max-w-3xl mx-auto mb-8">
            Choose your preferred payment option and start reducing no-shows today
          </p>
          
          {/* Countdown Timer */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Clock className="h-5 w-5 text-luxury-gold" />
              <span className="text-luxury-gold font-medium">Offer expires in:</span>
            </div>
            <CountdownTimer />
          </div>
        </div>

        {/* Scarcity Alert */}
        <div className="bg-gradient-card border border-luxury-accent/20 rounded-xl p-6 mb-12 text-center animate-scale-in">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Zap className="h-5 w-5 text-luxury-accent" />
            <span className="font-semibold text-luxury-accent">Only 47 licenses available this month</span>
          </div>
          <p className="text-luxury-cream/70 text-sm">Join 2,500+ successful salons before spots fill up</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-up" style={{animationDelay: '0.2s'}}>
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative bg-gradient-card border transition-all duration-300 hover:shadow-glow ${
                plan.popular 
                  ? 'border-luxury-gold shadow-glow scale-105' 
                  : 'border-luxury-gold/10 hover:border-luxury-gold/20'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-luxury text-luxury-black font-semibold px-4">
                    <Crown className="mr-1 h-4 w-4" />
                    {plan.badge}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-luxury-cream mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-luxury-cream/60 ml-2">{plan.period}</span>
                </div>
                <p className="text-luxury-cream/70 text-sm">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-luxury-cream/80">
                      <Check className="h-5 w-5 text-luxury-gold mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "cta" : "premium"} 
                  className="w-full text-lg py-3 h-auto"
                >
                  {plan.cta}
                  {plan.popular && <Sparkles className="ml-2 h-5 w-5" />}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lease Option */}
        <div className="bg-gradient-card border border-luxury-rose-gold/20 rounded-xl p-8 text-center mb-12 animate-fade-up" style={{animationDelay: '0.4s'}}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge className="bg-luxury-rose-gold/10 text-luxury-rose-gold border-luxury-rose-gold/20">
              Alternative Option
            </Badge>
          </div>
          <h3 className="text-2xl font-bold text-luxury-cream mb-2">
            Prefer Monthly Payments?
          </h3>
          <p className="text-luxury-cream/70 mb-6">
            {leaseOption.description}
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-3xl font-bold gradient-text">{leaseOption.monthly}</span>
            <span className="text-luxury-cream/60">/month</span>
          </div>
          <Button variant="luxury" size="lg" className="px-8">
            Start Monthly Plan
          </Button>
        </div>

        {/* Guarantee */}
        <div className="text-center animate-fade-up" style={{animationDelay: '0.6s'}}>
          <div className="inline-flex items-center gap-2 bg-luxury-charcoal/50 backdrop-blur-sm rounded-full px-6 py-3 border border-luxury-gold/20 mb-4">
            <Check className="h-5 w-5 text-luxury-gold" />
            <span className="text-luxury-cream font-medium">30-Day Money-Back Guarantee</span>
          </div>
          <p className="text-luxury-cream/60 text-sm">
            Risk-free trial • No setup fees • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;