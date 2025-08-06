import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const gsapRef = useRef<typeof gsap>(gsap);

  useEffect(() => {
    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return gsapRef.current;
};

// Custom hook for fade in animations
export const useFadeIn = (ref: React.RefObject<HTMLElement>, delay = 0) => {
  const gsap = useGSAP();

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [gsap, delay]);
};

// Custom hook for slide in from left
export const useSlideInLeft = (ref: React.RefObject<HTMLElement>, delay = 0) => {
  const gsap = useGSAP();

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [gsap, delay]);
};

// Custom hook for slide in from right
export const useSlideInRight = (ref: React.RefObject<HTMLElement>, delay = 0) => {
  const gsap = useGSAP();

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [gsap, delay]);
};

// Custom hook for scale in animation
export const useScaleIn = (ref: React.RefObject<HTMLElement>, delay = 0) => {
  const gsap = useGSAP();

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [gsap, delay]);
};

// Custom hook for stagger animations
export const useStaggerAnimation = (refs: React.RefObject<HTMLElement>[], delay = 0) => {
  const gsap = useGSAP();

  useEffect(() => {
    const elements = refs.map(ref => ref.current).filter(Boolean);
    if (elements.length === 0) return;

    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: elements[0],
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [gsap, delay]);
};
