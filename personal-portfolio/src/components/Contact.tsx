'use client';

import { useEffect, useRef, useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firtsname: '',
    lastname: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // EmailJS credentials
      const serviceId = 'service_fb1fvl1';
      const templateId = 'template_e75ttcp';
      const publicKey = 'cNpwItKK8du-F8jos';
      
      // Initialize EmailJS
      emailjs.init(publicKey);
      
      // Prepare template parameters
      const templateParams = {
        from_name: `${formData.firtsname} ${formData.lastname}`,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Dulaj Upananda',
        to_email: 'dulajupananda@gmail.com' // Add recipient email
      };
      
      // Send email
      await emailjs.send(serviceId, templateId, templateParams);
      
      // Reset form
      setFormData({
        firtsname: '',
        lastname: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setSubmitStatus('success');
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: 'Email',
      value: 'dulajupananda@icloud.com',
      href: 'mailto:dulajupananda@icloud.com'
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      value: '+94 76 832 3678',
      href: 'tel:+94768323678'
    },
    {
      icon: MapPinIcon,
      title: 'Location',
      value: 'Colombo, Sri Lanka',
      href: '#'
    }
  ];

  return (
    <section id="contact" ref={contactRef} className="flex-1 pt-36 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
       

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
             <div className="text-left mb-8">
          
          <p className="text-black text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl">
            Let&apos;s discuss your next project or just say hello!
          </p>
        </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={info.title}
                  href={info.href}
                  className={`flex items-center gap-6 p-4 rounded-lg  hover:border-purple-500/50 transition-all duration-300 group ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="p-3 bg-gray-200 rounded-lg transition-colors duration-300">
                    <info.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 text-base sm:text-lg md:text-xl font-semibold">{info.title}</h4>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firtsname" className="block text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firtsname"
                    name="firtsname"
                    value={formData.firtsname}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border text-sm sm:text-base md:text-lg lg:text-xl border-gray-200 rounded-lg text-gray-900 placeholder-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-colors duration-300"
                    placeholder="Your First Name"
                  />
                </div>
                <div>
                  <label htmlFor="lastname" className="block text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-2">
                    Last Name
                  </label>
                  <input
                    type="lastname"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 text-sm sm:text-base md:text-lg lg:text-xl rounded-lg text-gray-900 placeholder-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-colors duration-300"
                    placeholder="Your Last Name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 text-sm sm:text-base md:text-lg lg:text-xl rounded-lg text-gray-900 placeholder-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-colors duration-300"
                  placeholder="Your Email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3  border border-gray-200 text-sm sm:text-base md:text-lg lg:text-xl rounded-lg text-gray-900 placeholder-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-colors duration-300"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 text-sm sm:text-base md:text-lg lg:text-xl rounded-lg text-gray-900 placeholder-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-500 disabled:to-gray-600 text-sm sm:text-base md:text-lg lg:text-xl text-gray-900 font-regular py-3 px-6 rounded-lg transition-all duration-300 
                transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 disabled:transform-none disabled:shadow-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                  </>
                )}
              </button>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm sm:text-base md:text-lg">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm sm:text-base md:text-lg">
                  ❌ Failed to send message. Please try again or contact me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
