import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import {
  CalendarIcon,
  Clock,
  DollarSign,
  User,
  Mail,
  Phone,
  CreditCard,
  Sparkles,
  Check
} from 'lucide-react';

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const services = [
  { id: 'haircut', name: 'Precision Haircut', price: 65, duration: 60 },
  { id: 'color', name: 'Color Treatment', price: 120, duration: 90 },
  { id: 'highlights', name: 'Highlights', price: 180, duration: 120 },
  { id: 'blowout', name: 'Blowout & Style', price: 45, duration: 45 },
  { id: 'treatment', name: 'Deep Conditioning', price: 85, duration: 75 },
];

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM'
];

interface ClientInfo {
  name: string;
  email: string;
  phone: string;
}

const BookingModal = ({ open, onOpenChange }: BookingModalProps) => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm<ClientInfo>({
    defaultValues: {
      name: '',
      email: '',
      phone: ''
    }
  });
  
  const clientInfo = watch();

  const selectedServiceData = services.find(s => s.id === selectedService);
  const depositAmount = selectedServiceData ? Math.round(selectedServiceData.price * 0.3) : 0;
  const totalAmount = selectedServiceData ? selectedServiceData.price : 0;

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleBooking = async () => {
    setIsProcessing(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Booking Confirmed! 🎉",
        description: `Your ${selectedServiceData?.name} appointment is secured for ${selectedDate && format(selectedDate, "MMM d, yyyy")} at ${selectedTime}. Confirmation email sent!`,
        duration: 5000,
      });
      
      onOpenChange(false);
      resetModal();
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "There was an issue processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const resetModal = () => {
    setStep(1);
    setSelectedService('');
    setSelectedDate(undefined);
    setSelectedTime('');
    setIsProcessing(false);
  };

  return (
    <Dialog open={open} onOpenChange={(open) => {
      onOpenChange(open);
      if (!open) resetModal();
    }}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-card border-luxury-gold/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text">
            Book Your Appointment
          </DialogTitle>
          <DialogDescription className="text-luxury-cream/70">
            Secure your spot with a deposit - only takes 2 minutes
          </DialogDescription>
        </DialogHeader>

        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                i <= step ? 'bg-luxury-gold text-luxury-black' : 'bg-luxury-charcoal text-luxury-cream/60'
              }`}>
                {i < step ? <Check className="h-4 w-4" /> : i}
              </div>
              {i < 4 && (
                <div className={`w-12 h-0.5 mx-2 transition-colors ${
                  i < step ? 'bg-luxury-gold' : 'bg-luxury-charcoal'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Service Selection */}
        {step === 1 && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-luxury-cream mb-4">Select Your Service</h3>
            <div className="grid gap-4">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedService === service.id
                      ? 'border-luxury-gold shadow-glow bg-luxury-gold/5'
                      : 'border-luxury-gold/10 hover:border-luxury-gold/30'
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-luxury-cream">{service.name}</h4>
                        <p className="text-sm text-luxury-cream/60">{service.duration} minutes</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-luxury-gold">${service.price}</div>
                        <div className="text-sm text-luxury-cream/60">
                          ${Math.round(service.price * 0.3)} deposit
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button
              onClick={handleNext}
              disabled={!selectedService}
              variant="cta"
              className="w-full"
            >
              Continue
              <Sparkles className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Step 2: Date & Time Selection */}
        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-luxury-cream mb-4">Choose Date & Time</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Date Picker */}
              <div>
                <Label className="text-luxury-cream mb-3 block">Select Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="premium"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !selectedDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Time Picker */}
              <div>
                <Label className="text-luxury-cream mb-3 block">Select Time</Label>
                <Select onValueChange={setSelectedTime} value={selectedTime}>
                  <SelectTrigger className="bg-luxury-charcoal border-luxury-gold/20 text-luxury-cream">
                    <SelectValue placeholder="Choose time" />
                  </SelectTrigger>
                  <SelectContent className="bg-luxury-charcoal border-luxury-gold/20">
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time} className="text-luxury-cream hover:bg-luxury-gold/20">
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex gap-3">
              <Button onClick={handleBack} variant="premium" className="flex-1">
                Back
              </Button>
              <Button
                onClick={handleNext}
                disabled={!selectedDate || !selectedTime}
                variant="cta"
                className="flex-1"
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Client Information */}
        {step === 3 && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-luxury-cream mb-4">Your Information</h3>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-luxury-cream">Full Name *</Label>
                <Input
                  id="name"
                  {...register('name', { required: 'Full name is required' })}
                  className={`bg-luxury-charcoal border-luxury-gold/20 text-luxury-cream mt-1 ${
                    errors.name ? 'border-red-500' : ''
                  }`}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="email" className="text-luxury-cream">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Please enter a valid email address'
                    }
                  })}
                  className={`bg-luxury-charcoal border-luxury-gold/20 text-luxury-cream mt-1 ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-luxury-cream">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register('phone', { 
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[\+]?[1-9][\d]{0,15}$/,
                      message: 'Please enter a valid phone number'
                    }
                  })}
                  className={`bg-luxury-charcoal border-luxury-gold/20 text-luxury-cream mt-1 ${
                    errors.phone ? 'border-red-500' : ''
                  }`}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div className="flex gap-3">
              <Button onClick={handleBack} variant="premium" className="flex-1">
                Back
              </Button>
              <Button
                onClick={handleNext}
                disabled={!isValid || !clientInfo.name || !clientInfo.email || !clientInfo.phone}
                variant="cta"
                className="flex-1"
              >
                Review Booking
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Payment & Confirmation */}
        {step === 4 && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-luxury-cream mb-4">Confirm & Pay Deposit</h3>
            
            {/* Booking Summary */}
            <Card className="bg-luxury-charcoal/50 border-luxury-gold/20">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-luxury-cream">Service:</span>
                  <span className="text-luxury-gold font-medium">{selectedServiceData?.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-luxury-cream">Date & Time:</span>
                  <span className="text-luxury-gold">
                    {selectedDate && format(selectedDate, "MMM d, yyyy")} at {selectedTime}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-luxury-cream">Total Service Price:</span>
                  <span className="text-luxury-cream">${totalAmount}</span>
                </div>
                <div className="border-t border-luxury-gold/20 pt-4">
                  <div className="flex items-center justify-between text-lg font-semibold">
                    <span className="text-luxury-cream">Deposit Required:</span>
                    <span className="text-luxury-gold">${depositAmount}</span>
                  </div>
                  <p className="text-sm text-luxury-cream/60 mt-1">
                    Remaining ${totalAmount - depositAmount} due at appointment
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Payment Info */}
            <div className="bg-luxury-gold/10 border border-luxury-gold/20 rounded-lg p-4">
              <div className="flex items-center gap-2 text-luxury-gold mb-2">
                <CreditCard className="h-4 w-4" />
                <span className="font-medium">Secure Payment</span>
              </div>
              <p className="text-sm text-luxury-cream/70">
                Your payment is processed securely. You'll receive a confirmation email and SMS reminder before your appointment.
              </p>
            </div>

            {/* Terms */}
            <div className="text-xs text-luxury-cream/60 bg-luxury-charcoal/30 p-3 rounded-lg">
              <p className="mb-2">
                <strong>Deposit Policy:</strong> Deposits are non-refundable but can be transferred to reschedule up to 24 hours before your appointment.
              </p>
              <p>
                By confirming this booking, you agree to our terms of service and cancellation policy.
              </p>
            </div>

            <div className="flex gap-3">
              <Button onClick={handleBack} variant="premium" className="flex-1" disabled={isProcessing}>
                Back
              </Button>
              <Button 
                onClick={handleBooking} 
                variant="hero" 
                className="flex-1 relative"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-luxury-black mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    Pay Deposit ${depositAmount}
                    <CreditCard className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;