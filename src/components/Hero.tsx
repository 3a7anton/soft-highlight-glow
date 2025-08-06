
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useGSAP } from '@/hooks/useGSAP';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const orbRef1 = useRef<HTMLDivElement>(null);
  const orbRef2 = useRef<HTMLDivElement>(null);
  const gsap = useGSAP();

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate hero content
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    )
    .fromTo(subtitleRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, 
      '-=0.7'
    )
    .fromTo(buttonsRef.current, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 
      '-=0.5'
    );

    // Animate floating orbs
    gsap.to(orbRef1.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none'
    });

    gsap.to(orbRef2.current, {
      rotation: -360,
      duration: 25,
      repeat: -1,
      ease: 'none'
    });

    // Parallax effect on scroll
    gsap.to(orbRef1.current, {
      y: -100,
      scrollTrigger: {
        trigger: orbRef1.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });

    gsap.to(orbRef2.current, {
      y: 100,
      scrollTrigger: {
        trigger: orbRef2.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });
  }, [gsap]);

  return (
    <div className="min-h-[85vh] flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Innovative Health Solutions for the Modern Age
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-xl text-white/80 mb-8"
          >
            Discover a new approach to wellness that combines cutting-edge technology with intuitive design. 
            Made for a generation that values both nostalgia and calm.
          </p>
          
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild
              className="bg-white text-brand-blue hover:bg-white/90 transition-all glow text-lg px-8 py-6 hover:scale-105 transform duration-200"
            >
              <Link to="/shop">
                Explore Our Products
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-brand-blue transition-all text-lg px-8 py-6 hover:scale-105 transform duration-200"
            >
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-main opacity-70 -z-10"></div>
      
      <div 
        ref={orbRef1}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 w-1/2 h-1/2 rounded-full blur-[150px] bg-brand-orange opacity-30 animate-soft-glow"
      ></div>
      
      <div 
        ref={orbRef2}
        className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-full blur-[150px] bg-brand-blue opacity-30 animate-soft-glow" 
        style={{ animationDelay: "1.5s" }}
      ></div>
    </div>
  );
};

export default Hero;
