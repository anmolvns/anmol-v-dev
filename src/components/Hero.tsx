'use client';

import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0d1b2a]'
    >
      {/* Animated Background */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 left-20 w-96 h-96 bg-[#415a77] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob'></div>
        <div className='absolute top-40 right-20 w-96 h-96 bg-[#778da9] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000'></div>
        <div className='absolute bottom-20 left-1/2 w-96 h-96 bg-[#415a77] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000'></div>
      </div>

      {/* Floating Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-1/4 left-1/4 w-4 h-4 bg-[#778da9] rounded-full animate-float opacity-60'></div>
        <div className='absolute top-1/3 right-1/4 w-2 h-2 bg-[#415a77] rounded-full animate-float-delayed opacity-80'></div>
        <div className='absolute bottom-1/4 left-1/3 w-3 h-3 bg-[#778da9] rounded-full animate-float-slow opacity-70'></div>
        <div className='absolute top-1/2 right-1/3 w-2 h-2 bg-[#415a77] rounded-full animate-float opacity-60'></div>
      </div>

      {/* Navigation spacing to prevent overlap */}
      <div className='pt-20 container mx-auto px-6 text-center relative z-10'>
        <div className='max-w-5xl mx-auto'>
          {/* Greeting */}
          <div className='flex items-center justify-center gap-2 mb-6 animate-fade-in'>
            <Sparkles className='w-6 h-6 text-[#778da9] animate-pulse' />
            <span className='text-lg text-[#e0e1dd] font-medium'>
              Hello, I'm
            </span>
            <Sparkles className='w-6 h-6 text-[#778da9] animate-pulse' />
          </div>

          <h1 className='text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up'>
            <span className='text-[#e0e1dd]'>Anmol</span>
            <br />
            <span className='text-[#778da9] animate-gradient'>Vishwakarma</span>
          </h1>

          <div className='mb-8 animate-fade-in-up animation-delay-500'>
            <p className='text-2xl md:text-3xl text-[#e0e1dd] mb-4 font-light'>
              Full Stack Developer & Software Engineer
            </p>
            <div className='w-24 h-1 bg-[#778da9] mx-auto rounded-full animate-pulse'></div>
          </div>

          <p className='text-lg md:text-xl text-[#e0e1dd] mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-1000'>
            Crafting digital experiences with passion and precision. I transform
            ideas into beautiful, functional applications that make a
            difference.
          </p>

          <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up animation-delay-1500'>
            <button
              onClick={scrollToAbout}
              className='group bg-[#778da9] hover:bg-[#415a77] text-[#e0e1dd] px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-[#778da9]/25 hover:scale-105'
            >
              Discover My Work
              <ArrowDown size={20} className='group-hover:animate-bounce' />
            </button>

            <div className='flex gap-4'>
              <a
                href='https://github.com/anmolvns'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-[#1b263b] border border-[#415a77] hover:bg-[#778da9]/10 text-[#e0e1dd] hover:text-[#778da9] p-4 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg'
              >
                <Github size={24} />
              </a>
              <a
                href='https://linkedin.com/in/anmol-vishwakarma24'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-[#1b263b] border border-[#415a77] hover:bg-[#778da9]/10 text-[#e0e1dd] hover:text-[#778da9] p-4 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg'
              >
                <Linkedin size={24} />
              </a>
              <a
                href='mailto:anmoldev24@gmail.com'
                className='bg-[#1b263b] border border-[#415a77] hover:bg-[#778da9]/10 text-[#e0e1dd] hover:text-[#778da9] p-4 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg'
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow'>
        <div className='w-6 h-10 border-2 border-[#e0e1dd] rounded-full flex justify-center'>
          <div className='w-1 h-3 bg-[#778da9] rounded-full mt-2 animate-scroll-indicator'></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
