
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useScaleIn, useGSAP } from '@/hooks/useGSAP';
import { Send, Check } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const gsap = useGSAP();

  useScaleIn(formRef);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Add a subtle animation when user types
    gsap.to(e.target, {
      scale: 1.02,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut'
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Button animation during loading
    gsap.to(buttonRef.current, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1
    });
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      
      // Success animation
      gsap.fromTo(buttonRef.current, 
        { backgroundColor: '#ffffff' },
        { 
          backgroundColor: '#10B981', 
          duration: 0.3,
          onComplete: () => {
            setTimeout(() => {
              setIsSuccess(false);
              gsap.to(buttonRef.current, {
                backgroundColor: '#ffffff',
                duration: 0.3
              });
            }, 2000);
          }
        }
      );
      
      // Form reset animation
      gsap.to(formRef.current?.querySelectorAll('input, textarea'), {
        opacity: 0.3,
        duration: 0.2,
        onComplete: () => {
          setFormData({
            name: '',
            email: '',
            message: ''
          });
          gsap.to(formRef.current?.querySelectorAll('input, textarea'), {
            opacity: 1,
            duration: 0.3
          });
        }
      });
      
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible!",
      });
    }, 1500);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <div className="relative">
        <Input
          placeholder="Your Name"
          className="bg-black/20 border-white/20 text-white placeholder-white/50 focus:border-white hover:scale-105 transition-all duration-200 focus:scale-105"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <div className="absolute inset-0 rounded-md border border-transparent bg-gradient-to-r from-brand-blue to-brand-orange opacity-0 hover:opacity-20 transition-opacity duration-200 pointer-events-none"></div>
      </div>
      
      <div className="relative">
        <Input
          type="email"
          placeholder="Your Email"
          className="bg-black/20 border-white/20 text-white placeholder-white/50 focus:border-white hover:scale-105 transition-all duration-200 focus:scale-105"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <div className="absolute inset-0 rounded-md border border-transparent bg-gradient-to-r from-brand-blue to-brand-orange opacity-0 hover:opacity-20 transition-opacity duration-200 pointer-events-none"></div>
      </div>
      
      <div className="relative">
        <Textarea
          placeholder="Your Message"
          className="bg-black/20 border-white/20 text-white placeholder-white/50 focus:border-white min-h-[150px] hover:scale-105 transition-all duration-200 focus:scale-105"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <div className="absolute inset-0 rounded-md border border-transparent bg-gradient-to-r from-brand-blue to-brand-orange opacity-0 hover:opacity-20 transition-opacity duration-200 pointer-events-none"></div>
      </div>
      
      <Button
        ref={buttonRef}
        type="submit"
        className="w-full bg-white text-brand-blue hover:bg-white/90 transition-all glow hover:scale-105 transform duration-200 relative overflow-hidden"
        disabled={isLoading}
      >
        {isLoading && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        )}
        <span className="flex items-center justify-center space-x-2">
          {isSuccess ? (
            <>
              <Check size={16} />
              <span>Message Sent!</span>
            </>
          ) : isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-brand-blue border-t-transparent rounded-full animate-spin"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send size={16} />
              <span>Send Message</span>
            </>
          )}
        </span>
      </Button>
    </form>
  );
};

export default ContactForm;
