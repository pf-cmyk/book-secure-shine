import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  CreditCard, 
  MessageSquare, 
  BarChart3, 
  Shield, 
  Zap,
  Clock,
  Star
} from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Smart Booking System',
    description: 'Intuitive date/time picker with real-time availability updates',
    badge: 'Live Updates',
    gradient: 'from-luxury-gold to-luxury-accent'
  },
  {
    icon: CreditCard,
    title: 'Flexible Deposit Options',
    description: 'Configurable deposit percentages with secure Stripe integration',
    badge: 'Secure',
    gradient: 'from-luxury-rose-gold to-secondary'
  },
  {
    icon: MessageSquare,
    title: 'Auto SMS Reminders',
    description: 'Automated confirmation and reminder messages to reduce no-shows',
    badge: 'Automated',
    gradient: 'from-luxury-accent to-luxury-gold'
  },
  {
    icon: BarChart3,
    title: 'Live Price Updates',
    description: 'Dynamic pricing based on service selection and time slots',
    badge: 'Dynamic',
    gradient: 'from-secondary to-luxury-rose-gold'
  }
];

const stats = [
  { value: '90%', label: 'No-Show Reduction', icon: Shield },
  { value: '2.5x', label: 'Booking Speed', icon: Zap },
  { value: '24/7', label: 'Availability', icon: Clock },
  { value: '4.9★', label: 'Client Rating', icon: Star }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-black via-luxury-charcoal to-luxury-black"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-luxury-rose-gold/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <Badge className="mb-4 bg-luxury-gold/10 text-luxury-gold border-luxury-gold/20">
            Core Features
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Everything You Need</span>
          </h2>
          <p className="text-xl text-luxury-cream/70 max-w-3xl mx-auto">
            Professional-grade booking system designed specifically for hair and beauty businesses
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 animate-fade-up" style={{animationDelay: '0.2s'}}>
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card border-luxury-gold/10 text-center p-6 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-0">
                <stat.icon className="h-8 w-8 text-luxury-gold mx-auto mb-3" />
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-luxury-cream/60">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 animate-fade-up" style={{animationDelay: '0.4s'}}>
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-luxury-gold/10 hover:border-luxury-gold/20 transition-all duration-500 hover:shadow-glow group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.gradient} opacity-90 group-hover:opacity-100 transition-opacity`}>
                    <feature.icon className="h-6 w-6 text-luxury-black" />
                  </div>
                  <Badge 
                    variant="outline" 
                    className="border-luxury-gold/30 text-luxury-gold bg-luxury-gold/10"
                  >
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-luxury-cream group-hover:text-luxury-gold transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-luxury-cream/70 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-up" style={{animationDelay: '0.6s'}}>
          <p className="text-luxury-cream/60 text-lg">
            Join thousands of successful salons already using our platform
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;