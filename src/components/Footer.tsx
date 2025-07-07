'use client';

import { Code, Github, Heart, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-[#1b263b] text-[#e0e1dd] py-16 relative overflow-hidden border-t border-[#415a77]'>
      {/* Background Elements */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-20 left-20 w-64 h-64 bg-[#778da9] rounded-full filter blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 right-20 w-64 h-64 bg-[#415a77] rounded-full filter blur-3xl animate-pulse animation-delay-2000'></div>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid md:grid-cols-3 gap-12'>
            {/* Brand */}
            <div className='animate-fade-in-up'>
              <div className='flex items-center gap-3 mb-6'>
                <Code className='w-8 h-8 text-[#778da9]' />
                <h3 className='text-2xl font-bold text-[#e0e1dd]'>
                  Anmol Vishwakarma
                </h3>
              </div>
              <p className='text-[#e0e1dd] mb-6 leading-relaxed'>
                Full Stack Developer passionate about creating innovative
                solutions and building exceptional digital experiences that make
                a difference.
              </p>
              <div className='flex gap-4'>
                <a
                  href='https://github.com/anmolvns'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-[#0d1b2a] border border-[#415a77] hover:bg-[#778da9]/10 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-12'
                  aria-label='GitHub'
                >
                  <Github
                    size={20}
                    className='text-[#e0e1dd] hover:text-[#778da9]'
                  />
                </a>
                <a
                  href='https://linkedin.com/in/anmol-vishwakarma24'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-[#0d1b2a] border border-[#415a77] hover:bg-[#778da9]/10 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-12'
                  aria-label='LinkedIn'
                >
                  <Linkedin
                    size={20}
                    className='text-[#e0e1dd] hover:text-[#778da9]'
                  />
                </a>
                <a
                  href='mailto:anmoldev24@gmail.com'
                  className='bg-[#0d1b2a] border border-[#415a77] hover:bg-[#778da9]/10 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-12'
                  aria-label='Email'
                >
                  <Mail
                    size={20}
                    className='text-[#e0e1dd] hover:text-[#778da9]'
                  />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className='animate-fade-in-up animation-delay-200'>
              <h4 className='text-xl font-semibold mb-6 text-[#e0e1dd]'>
                Quick Links
              </h4>
              <ul className='space-y-3'>
                {[
                  { href: '#home', label: 'Home' },
                  { href: '#about', label: 'About' },
                  { href: '#skills', label: 'Skills' },
                  { href: '#projects', label: 'Projects' },
                  { href: '#experience', label: 'Experience' },
                  { href: '#contact', label: 'Contact' },
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className='text-[#e0e1dd] hover:text-[#778da9] transition-colors duration-200 hover:translate-x-2 inline-block'
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className='animate-fade-in-up animation-delay-400'>
              <h4 className='text-xl font-semibold mb-6 text-[#e0e1dd]'>
                Services
              </h4>
              <ul className='space-y-3 text-[#e0e1dd]'>
                {[
                  'Full Stack Development',
                  'Mobile App Development',
                  'UI/UX Design',
                  'Database Design',
                  'API Development',
                  'Technical Consulting',
                ].map((service, index) => (
                  <li key={index} className='flex items-center gap-2'>
                    <div className='w-2 h-2 bg-[#778da9] rounded-full'></div>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='border-t border-[#415a77] mt-12 pt-8 text-center animate-fade-in-up animation-delay-600'>
            <p className='text-[#e0e1dd] flex items-center justify-center gap-2 text-lg'>
              © {currentYear} Anmol Vishwakarma. Made with
              <Heart size={18} className='text-[#778da9] animate-pulse' />
              and lots of coffee.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
