
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible!",
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <div>
        <Input
          placeholder="Your Name"
          className="bg-black/20 border-white/20 text-white placeholder-white/50 focus:border-white"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Your Email"
          className="bg-black/20 border-white/20 text-white placeholder-white/50 focus:border-white"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Textarea
          placeholder="Your Message"
          className="bg-black/20 border-white/20 text-white placeholder-white/50 focus:border-white min-h-[150px]"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-white text-brand-blue hover:bg-white/90 transition-all glow"
        disabled={isLoading}
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
