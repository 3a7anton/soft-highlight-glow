
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useGSAP, useScaleIn } from '@/hooks/useGSAP';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const gsap = useGSAP();

  useScaleIn(containerRef);

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
      setEmail('');
      
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
      
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
    }, 1500);
  };

  return (
    <div ref={containerRef} className="w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
        <p className="text-white/80">Subscribe to our newsletter for health tips and product updates</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center border border-white/20 rounded-md bg-black/20 p-1 backdrop-blur-sm gradient-border hover:scale-105 transition-transform duration-200 focus-within:scale-105">
          <Mail className="ml-3 text-white/60 transition-colors duration-200" size={20} />
          <Input
            type="email"
            placeholder="Your email address"
            className="border-none bg-transparent text-white focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-white/50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
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
                <span>Subscribed!</span>
              </>
            ) : isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-brand-blue border-t-transparent rounded-full animate-spin"></div>
                <span>Subscribing...</span>
              </>
            ) : (
              <span>Subscribe Now</span>
            )}
          </span>
        </Button>
      </form>
      
      {/* Floating particles for visual interest */}
      <div className="absolute top-0 left-0 w-2 h-2 bg-brand-orange/30 rounded-full animate-pulse"></div>
      <div className="absolute top-4 right-0 w-1 h-1 bg-brand-blue/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-2 left-4 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
    </div>
  );
};

export default Newsletter;
