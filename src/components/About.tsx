'use client';

import {
  Award,
  Code,
  Coffee,
  Heart,
  Lightbulb,
  Sparkles,
  Users,
} from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className='w-8 h-8' />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code',
      color: 'bg-[#778da9]',
    },
    {
      icon: <Lightbulb className='w-8 h-8' />,
      title: 'Innovation',
      description: 'Always exploring new technologies and creative solutions',
      color: 'bg-[#415a77]',
    },
    {
      icon: <Users className='w-8 h-8' />,
      title: 'Collaboration',
      description: 'Working effectively in team environments',
      color: 'bg-[#778da9]',
    },
    {
      icon: <Award className='w-8 h-8' />,
      title: 'Excellence',
      description: 'Committed to delivering high-quality results',
      color: 'bg-[#415a77]',
    },
  ];

  return (
    <section id='about' className='py-20 bg-[#0d1b2a] relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-20 left-20 w-64 h-64 bg-[#778da9] rounded-full filter blur-3xl'></div>
        <div className='absolute bottom-20 right-20 w-64 h-64 bg-[#415a77] rounded-full filter blur-3xl'></div>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16 animate-fade-in-up'>
            <h2 className='text-5xl md:text-6xl font-bold mb-6'>
              <span className='text-[#778da9]'>About Me</span>
            </h2>
            <div className='w-24 h-1 bg-[#778da9] mx-auto rounded-full mb-6'></div>
            <p className='text-xl text-[#e0e1dd] max-w-3xl mx-auto leading-relaxed'>
              I&apos;m a passionate software developer with a strong foundation
              in full-stack development and a keen eye for creating
              user-centered solutions.
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-16 items-center mb-20'>
            <div className='animate-fade-in-left'>
              <h3 className='text-3xl font-bold text-[#e0e1dd] mb-6'>
                My Journey
              </h3>
              <p className='text-[#e0e1dd] mb-6 leading-relaxed'>
                With several years of experience in software development,
                I&apos;ve had the opportunity to work on diverse projects
                ranging from web applications to mobile solutions. My passion
                lies in creating intuitive, efficient, and scalable software
                that solves real-world problems.
              </p>
              <p className='text-[#e0e1dd] mb-8 leading-relaxed'>
                I believe in continuous learning and staying updated with the
                latest technologies and best practices in software development.
                My goal is to contribute to meaningful projects that make a
                positive impact on users&apos; lives.
              </p>

              <div className='flex items-center gap-4 mb-6'>
                <Heart className='w-6 h-6 text-[#778da9] animate-pulse' />
                <span className='text-[#e0e1dd] font-medium'>
                  Passionate about problem-solving
                </span>
              </div>
              <div className='flex items-center gap-4 mb-8'>
                <Coffee className='w-6 h-6 text-[#778da9]' />
                <span className='text-[#e0e1dd] font-medium'>
                  Fueled by coffee and curiosity
                </span>
              </div>

              <div className='flex flex-wrap gap-3'>
                <span className='bg-[#1b263b] border border-[#415a77] text-[#778da9] px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300'>
                  Problem Solver
                </span>
                <span className='bg-[#1b263b] border border-[#415a77] text-[#778da9] px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300'>
                  Team Player
                </span>
                <span className='bg-[#1b263b] border border-[#415a77] text-[#778da9] px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300'>
                  Quick Learner
                </span>
              </div>
            </div>

            <div className='relative animate-fade-in-right'>
              <div className='bg-[#1b263b] border border-[#415a77] rounded-3xl p-8 text-[#e0e1dd] shadow-2xl hover:shadow-[#778da9]/10 transition-all duration-500 hover:scale-105'>
                <h4 className='text-2xl font-bold mb-6 flex items-center gap-3 text-[#e0e1dd]'>
                  <Sparkles className='w-6 h-6 animate-pulse text-[#778da9]' />
                  What I Do
                </h4>
                <ul className='space-y-4'>
                  {[
                    'Full-Stack Web Development',
                    'Mobile App Development',
                    'UI/UX Design',
                    'Database Design',
                    'API Development',
                  ].map((item, index) => (
                    <li
                      key={index}
                      className='flex items-center gap-4 animate-fade-in-up'
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className='w-3 h-3 bg-[#778da9] rounded-full animate-pulse'></div>
                      <span className='text-lg'>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Floating decoration */}
              <div className='absolute -top-4 -right-4 w-24 h-24 bg-[#778da9] rounded-full opacity-20 animate-float'></div>
              <div className='absolute -bottom-4 -left-4 w-16 h-16 bg-[#415a77] rounded-full opacity-20 animate-float-delayed'></div>
            </div>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className='group text-center animate-fade-in-up hover:scale-105 transition-all duration-500'
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`${highlight.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#e0e1dd] shadow-lg group-hover:shadow-xl group-hover:rotate-6 transition-all duration-300`}
                >
                  {highlight.icon}
                </div>
                <h4 className='text-xl font-bold text-[#e0e1dd] mb-3'>
                  {highlight.title}
                </h4>
                <p className='text-[#e0e1dd] leading-relaxed'>
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
