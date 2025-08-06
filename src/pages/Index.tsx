
import React, { useRef, useEffect } from 'react';
import Hero from '../components/Hero';
import LazyModelViewer from '../components/LazyModelViewer';
import Newsletter from '../components/Newsletter';
import ContactForm from '../components/ContactForm';
import { useFadeIn, useSlideInLeft, useSlideInRight, useStaggerAnimation } from '../hooks/useGSAP';
import { usePageTitle } from '../hooks/usePageTitle';

const Index = () => {
  usePageTitle('Home');
  
  const featuresRef = useRef<HTMLElement>(null);
  const featureRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const modelSectionRef = useRef<HTMLElement>(null);
  const aboutLeftRef = useRef<HTMLDivElement>(null);
  const aboutRightRef = useRef<HTMLDivElement>(null);
  const newsletterRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useFadeIn(featuresRef);
  useStaggerAnimation(featureRefs, 0.2);
  useFadeIn(modelSectionRef, 0.3);
  useSlideInLeft(aboutLeftRef, 0.2);
  useSlideInRight(aboutRightRef, 0.4);
  useFadeIn(newsletterRef, 0.2);
  useFadeIn(contactRef, 0.3);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <section ref={featuresRef} className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Innovative Health Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                ref={featureRefs[index]}
                className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-white/10 gradient-border hover:translate-y-[-5px] hover:scale-105 transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full blur-[120px] bg-brand-blue opacity-10 animate-soft-glow"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full blur-[120px] bg-brand-orange opacity-10 animate-soft-glow"></div>
      </section>
      
      {/* 3D Model Section */}
      <section ref={modelSectionRef} className="py-20 bg-black/20 backdrop-blur-sm relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            Experience Our Technology
          </h2>
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-12">
            Interact with our 3D model to explore how our solutions combine innovative design with practical health benefits.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <LazyModelViewer />
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-brand-orange/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-32 w-1 h-1 bg-brand-blue/50 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </section>
      
      {/* About Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div ref={aboutLeftRef}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                About Soft Highlight
              </h2>
              <p className="text-white/70 mb-4">
                We are a forward-thinking company researching innovative ways to improve health through technology. 
                Our solutions combine cutting-edge software with intuitive interfaces that anyone can use on the go.
              </p>
              <p className="text-white/70 mb-4">
                Founded with the millennial generation in mind, we understand the desire for nostalgia while maintaining 
                a calm, soothing approach to health management.
              </p>
              <p className="text-white/70">
                Our team of researchers and designers work tirelessly to bring you products that are not only effective 
                but also beautiful and easy to use.
              </p>
              
              {/* Stats section */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-orange">5+</div>
                  <div className="text-white/60 text-sm">Years Research</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-blue">10k+</div>
                  <div className="text-white/60 text-sm">Happy Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-orange">99%</div>
                  <div className="text-white/60 text-sm">Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div ref={aboutRightRef} className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-white/10 gradient-border hover:scale-105 transition-transform duration-500">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/70 mb-6">
                To create innovative health solutions that seamlessly integrate into your daily life, 
                promoting wellness while evoking a sense of nostalgia and calm.
              </p>
              
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/70">
                A world where technology enhances health experiences, making wellness accessible, 
                enjoyable, and tailored to individual needs and preferences.
              </p>
              
              {/* Progress bars for values */}
              <div className="mt-6 space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-white/70 mb-1">
                    <span>Innovation</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-brand-blue to-brand-orange h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-white/70 mb-1">
                    <span>User Experience</span>
                    <span>98%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-brand-blue to-brand-orange h-2 rounded-full" style={{width: '98%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-white/70 mb-1">
                    <span>Health Impact</span>
                    <span>92%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-brand-blue to-brand-orange h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section ref={newsletterRef} className="py-20 bg-black/20 backdrop-blur-sm relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            Join Our Newsletter
          </h2>
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-12">
            Stay updated with our latest products, research findings, and health tips. 
            Be the first to know when we launch new solutions.
          </p>
          
          <Newsletter />
        </div>
      </section>
      
      {/* Contact Us Section */}
      <section ref={contactRef} className="py-20" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            Contact Us
          </h2>
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-12">
            Have questions or want to learn more about our products? Reach out to us, and our team will get back to you as soon as possible.
          </p>
          
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <ContactForm />
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-white/10 gradient-border h-full hover:scale-105 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-white mb-6">Our Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-brand-blue/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-brand-blue" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Address</h4>
                      <p className="text-white/70">
                        123 Innovation Way<br />
                        Tech District<br />
                        San Francisco, CA 94103
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-brand-orange/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                      <p className="text-white/70">contact@softhighlight.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-brand-blue/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-brand-blue" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                      <p className="text-white/70">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-brand-orange/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Hours</h4>
                      <p className="text-white/70">
                        Monday - Friday: 9AM - 6PM PST<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Feature data
const features = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>,
    title: "Innovative Research",
    description: "We constantly research and develop new ways to improve health through technology and design."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>,
    title: "Mobile Friendly",
    description: "Our solutions are designed to be used on the go, wherever and whenever you need them."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>,
    title: "Wellness Focused",
    description: "Every feature we create is designed with your health and wellness as the top priority."
  }
];

export default Index;
