
import React from 'react';
import Hero from '../components/Hero';
import ModelViewer from '../components/ModelViewer';
import Newsletter from '../components/Newsletter';
import ContactForm from '../components/ContactForm';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Innovative Health Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-white/10 gradient-border hover:translate-y-[-5px] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 3D Model Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            Experience Our Technology
          </h2>
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-12">
            Interact with our 3D model to explore how our solutions combine innovative design with practical health benefits.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <ModelViewer />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
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
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-white/10 gradient-border">
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
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
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
      <section className="py-20" id="contact">
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
              <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-white/10 gradient-border h-full">
                <h3 className="text-2xl font-bold text-white mb-6">Our Information</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Address</h4>
                    <p className="text-white/70">
                      123 Innovation Way<br />
                      Tech District<br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
                    <p className="text-white/70">contact@softhighlight.com</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Phone</h4>
                    <p className="text-white/70">+1 (555) 123-4567</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Hours</h4>
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
