import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  Clock,
  Shield,
  Zap,
  CheckCircle
} from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent! 🚀",
      description: "We'll get back to you within 2 hours with your custom setup.",
      duration: 5000,
    });
    
    setFormData({
      name: '',
      email: '',
      business: '',
      phone: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-luxury-charcoal to-luxury-black"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="animate-fade-up">
            <Badge className="mb-6 bg-luxury-accent/10 text-luxury-accent border-luxury-accent/20">
              <MessageCircle className="mr-2 h-4 w-4" />
              Get Started Today
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Ready to Eliminate No-Shows?</span>
            </h2>
            
            <p className="text-xl text-luxury-cream/80 mb-8 leading-relaxed">
              Join the salon revolution. We'll have your deposit-secured booking system up and running in less than 24 hours.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-luxury-gold" />
                </div>
                <div>
                  <div className="font-medium text-luxury-cream">Phone Support</div>
                  <div className="text-luxury-cream/70">+1 (555) 123-SALON</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-luxury-gold" />
                </div>
                <div>
                  <div className="font-medium text-luxury-cream">Email Support</div>
                  <div className="text-luxury-cream/70">hello@salonbooking.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-luxury-gold" />
                </div>
                <div>
                  <div className="font-medium text-luxury-cream">Response Time</div>
                  <div className="text-luxury-cream/70">Within 2 hours, guaranteed</div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-luxury-gold" />
                <span className="text-luxury-cream/80">Free 30-day trial</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-luxury-gold" />
                <span className="text-luxury-cream/80">No setup fees</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-luxury-gold" />
                <span className="text-luxury-cream/80">Custom branding included</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-luxury-gold" />
                <span className="text-luxury-cream/80">24/7 customer support</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card border border-luxury-gold/20 animate-fade-up" style={{animationDelay: '0.2s'}}>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-luxury-cream">
                Get Your Custom Quote
              </CardTitle>
              <p className="text-luxury-cream/70">
                Tell us about your salon and we'll create a personalized solution
              </p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-luxury-cream">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-luxury-charcoal border-luxury-gold/20 text-luxury-cream mt-1"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-luxury-cream">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-luxury-charcoal border-luxury-gold/20 text-luxury-cream mt-1"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="business" className="text-luxury-cream">Business Name *</Label>
                    <Input
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleInputChange}
                      required
                      className="bg-luxury-charcoal border-luxury-gold/20 text-luxury-cream mt-1"
                      placeholder="Your salon name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-luxury-cream">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-luxury-charcoal border-luxury-gold/20 text-luxury-cream mt-1"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-luxury-cream">Tell us about your salon</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="bg-luxury-charcoal border-luxury-gold/20 text-luxury-cream mt-1 resize-none"
                    placeholder="Number of stylists, current booking challenges, etc..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  className="w-full text-lg py-3 h-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-luxury-black mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Get My Custom Quote
                      <Zap className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
              
              <div className="mt-6 flex items-center gap-2 text-sm text-luxury-cream/60">
                <Shield className="h-4 w-4" />
                <span>Your information is secure and never shared</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;