
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setEmail('');
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
        <p className="text-white/80">Subscribe to our newsletter for health tips and product updates</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center border border-white/20 rounded-md bg-black/20 p-1 backdrop-blur-sm gradient-border">
          <Mail className="ml-3 text-white/60" size={20} />
          <Input
            type="email"
            placeholder="Your email address"
            className="border-none bg-transparent text-white focus-visible:ring-0 focus-visible:ring-offset-0"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <Button
          type="submit"
          className="w-full bg-white text-brand-blue hover:bg-white/90 transition-all glow"
          disabled={isLoading}
        >
          {isLoading ? 'Subscribing...' : 'Subscribe Now'}
        </Button>
      </form>
    </div>
  );
};

export default Newsletter;
