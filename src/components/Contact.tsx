'use client';

import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Twitter,
} from 'lucide-react';
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <Mail className='w-6 h-6' />,
      label: 'Email',
      value: 'anmoldev24@gmail.com',
      link: 'mailto:anmoldev24@gmail.com',
      color: 'bg-[#778da9]',
    },
    // {
    //   icon: <Phone className='w-6 h-6' />,
    //   label: 'Phone',
    //   value: '+1 (555) 123-4567',
    //   link: 'tel:+15551234567',
    //   color: 'bg-[#415a77]',
    // },
    {
      icon: <MapPin className='w-6 h-6' />,
      label: 'Location',
      value: 'India',
      link: null,
      color: 'bg-[#778da9]',
    },
  ];

  const socialLinks = [
    {
      icon: <Github className='w-6 h-6' />,
      label: 'GitHub',
      url: 'https://github.com/anmolvns',
      color: 'hover:bg-[#778da9]/20',
    },
    {
      icon: <Linkedin className='w-6 h-6' />,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/anmol-vishwakarma24',
      color: 'hover:bg-[#778da9]/20',
    },
    {
      icon: <Twitter className='w-6 h-6' />,
      label: 'Twitter',
      url: 'https://twitter.com/anmolvish24',
      color: 'hover:bg-[#778da9]/20',
    },
  ];

  return (
    <section
      id='contact'
      className='py-20 bg-[#0d1b2a] text-[#e0e1dd] relative overflow-hidden'
    >
      {/* Background Elements */}
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute top-20 left-20 w-96 h-96 bg-[#778da9] rounded-full filter blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 right-20 w-96 h-96 bg-[#415a77] rounded-full filter blur-3xl animate-pulse animation-delay-2000'></div>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16 animate-fade-in-up'>
            <h2 className='text-5xl md:text-6xl font-bold mb-6'>
              <span className='text-[#778da9]'>Get In Touch</span>
            </h2>
            <div className='w-24 h-1 bg-[#778da9] mx-auto rounded-full mb-6'></div>
            <p className='text-xl text-[#e0e1dd] max-w-3xl mx-auto leading-relaxed'>
              I&apos;m always open to discussing new opportunities, interesting
              projects, or just having a chat about technology and development
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-16'>
            {/* Contact Information */}
            <div className='animate-fade-in-left'>
              <div className='flex items-center gap-3 mb-8'>
                <MessageCircle className='w-8 h-8 text-[#778da9]' />
                <h3 className='text-3xl font-bold text-[#e0e1dd]'>
                  Let&apos;s Connect
                </h3>
              </div>

              <div className='space-y-6 mb-12'>
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className='group flex items-center gap-6 p-4 bg-[#1b263b] border border-[#415a77] rounded-2xl hover:bg-[#778da9]/5 transition-all duration-300 animate-fade-in-up'
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className={`${info.color} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className='text-[#e0e1dd]'>{info.icon}</div>
                    </div>
                    <div>
                      <p className='text-[#e0e1dd] text-sm font-medium'>
                        {info.label}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className='text-[#e0e1dd] hover:text-[#778da9] transition-colors duration-200 font-medium text-lg'
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className='text-[#e0e1dd] font-medium text-lg'>
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className='text-2xl font-semibold mb-6 flex items-center gap-3 text-[#e0e1dd]'>
                  <span className='w-2 h-2 bg-[#778da9] rounded-full animate-pulse'></span>
                  Follow Me
                </h4>
                <div className='flex gap-4'>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-[#1b263b] border border-[#415a77] p-4 rounded-xl text-[#e0e1dd] transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg hover:text-[#778da9] animate-fade-in-up'
                      style={{ animationDelay: `${index * 0.1}s` }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className='animate-fade-in-right'>
              <div className='bg-[#1b263b] border border-[#415a77] rounded-2xl p-8 shadow-2xl'>
                <h3 className='text-3xl font-bold mb-8 flex items-center gap-3 text-[#e0e1dd]'>
                  <Send className='w-8 h-8 text-[#778da9]' />
                  Send Me a Message
                </h3>

                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                      <label
                        htmlFor='name'
                        className='block text-sm font-medium mb-2 text-[#e0e1dd]'
                      >
                        Name
                      </label>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='w-full px-4 py-3 bg-[#0d1b2a] border border-[#415a77] rounded-xl focus:border-[#778da9] focus:outline-none transition-all duration-300 text-[#e0e1dd] placeholder-[#e0e1dd]'
                        placeholder='Your name'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium mb-2 text-[#e0e1dd]'
                      >
                        Email
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='w-full px-4 py-3 bg-[#0d1b2a] border border-[#415a77] rounded-xl focus:border-[#778da9] focus:outline-none transition-all duration-300 text-[#e0e1dd] placeholder-[#e0e1dd]'
                        placeholder='your.email@example.com'
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='subject'
                      className='block text-sm font-medium mb-2 text-[#e0e1dd]'
                    >
                      Subject
                    </label>
                    <input
                      type='text'
                      id='subject'
                      name='subject'
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 bg-[#0d1b2a] border border-[#415a77] rounded-xl focus:border-[#778da9] focus:outline-none transition-all duration-300 text-[#e0e1dd] placeholder-[#e0e1dd]'
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium mb-2 text-[#e0e1dd]'
                    >
                      Message
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className='w-full px-4 py-3 bg-[#0d1b2a] border border-[#415a77] rounded-xl focus:border-[#778da9] focus:outline-none transition-all duration-300 resize-none text-[#e0e1dd] placeholder-[#e0e1dd]'
                      placeholder='Tell me about your project or just say hello!'
                    />
                  </div>

                  <button
                    type='submit'
                    className='w-full bg-[#778da9] hover:bg-[#415a77] text-[#e0e1dd] px-6 py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-[#778da9]/25 hover:scale-105'
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
