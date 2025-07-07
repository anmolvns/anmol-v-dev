'use client';

import { Building2, Calendar, Code2, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Samyak Tech Labs',
      position: 'Software Engineer',
      location: 'Mumbai, India',
      duration: '2024 - Present',
      description:
        'Driving the development of high-performance web platforms and backend systems. Collaborating with cross-functional teams to deliver scalable solutions for clients across various industries.',
      achievements: [
        'Designed and implemented a scalable microservices-based architecture that improved system reliability by 50%',
        'Led a team of 8 developers to successfully deliver a custom business automation platform for a global client',
        'Migrated legacy systems to modern tech stacks, reducing infrastructure costs by 30%',
      ],
      technologies: [
        'Spring Boot',
        'Fast Api',
        'Next.js',
        'Postgres',
        'MongoDB',
        'AWS',
        'Docker',
      ],
      color: 'from-[#778da9] to-[#415a77]',
      icon: <Building2 className='w-6 h-6' />,
      stats: { projects: '5+', team: '8', impact: '50%' },
    },
    {
      company: 'Icon Sure Technologies',
      position: 'Full Stack Developer',
      location: 'Banglore, India',
      duration: '2023 - 2024',
      description:
        'Built secure and efficient web solutions for access control and visitor management systems. Developed a unique QR-based video calling platform for homeowners to verify guests at their doorstep.',
      achievements: [
        'Designed and developed a QR-based video calling system for door guest verification, enhancing home security',
        'Implemented secure authentication and real-time video communication between guests and homeowners',
        'Built an admin dashboard for system monitoring and configuration, deployed on Microsoft Azure',
      ],
      technologies: [
        'Spring Boot',
        'Next.js',
        'PostgreSQL',
        'WebRTC',
        'Socket.IO',
        'Azure',
      ],
      color: 'from-[#415a77] to-[#1b263b]',
      icon: <Code2 className='w-6 h-6' />,
      stats: { projects: '2+', team: '3', impact: 'Enhanced Home Security' },
    },
  ];

  return (
    <section
      id='experience'
      className='py-20 bg-[#1b263b] relative overflow-hidden'
    >
      {/* Background Elements */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-20 left-20 w-96 h-96 bg-[#778da9] rounded-full filter blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 right-20 w-96 h-96 bg-[#415a77] rounded-full filter blur-3xl animate-pulse animation-delay-2000'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#778da9] rounded-full filter blur-3xl opacity-10'></div>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-20 animate-fade-in-up'>
            <div className='inline-flex items-center gap-3 bg-[#0d1b2a] border border-[#415a77] rounded-full px-6 py-3 mb-8'>
              <Building2 className='w-5 h-5 text-[#778da9]' />
              <span className='text-[#778da9] font-medium'>
                Professional Journey
              </span>
            </div>
            <h2 className='text-5xl md:text-7xl font-bold mb-6'>
              <span className='bg-gradient-to-r from-[#778da9] to-[#415a77] bg-clip-text text-transparent'>
                Experience
              </span>
            </h2>
            <p className='text-xl text-[#e0e1dd] max-w-3xl mx-auto leading-relaxed'>
              My journey through different roles and companies, building
              expertise and contributing to meaningful projects
            </p>
          </div>

          <div className='relative'>
            {/* Timeline Line */}
            <div className='absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#778da9] via-[#415a77] to-[#778da9] transform md:-translate-x-1/2 rounded-full'></div>

            <div className='space-y-16'>
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start gap-8 animate-fade-in-up ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Node */}
                  <div className='absolute left-8 md:left-1/2 w-6 h-6 bg-[#778da9] rounded-full border-4 border-[#1b263b] transform md:-translate-x-1/2 z-10 shadow-lg'>
                    <div className='absolute inset-1 bg-[#e0e1dd] rounded-full animate-pulse'></div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`flex-1 ml-20 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                    }`}
                  >
                    <div className='group bg-[#0d1b2a] border border-[#415a77] rounded-3xl p-8 shadow-2xl hover:shadow-[#778da9]/20 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden'>
                      {/* Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-5 rounded-3xl`}
                      ></div>

                      {/* Header */}
                      <div className='relative z-10'>
                        <div className='flex items-start justify-between mb-6'>
                          <div className='flex items-center gap-4'>
                            <div
                              className={`p-4 rounded-2xl bg-gradient-to-br ${exp.color} shadow-lg`}
                            >
                              <div className='text-[#e0e1dd]'>{exp.icon}</div>
                            </div>
                            <div>
                              <h3 className='text-2xl font-bold text-[#e0e1dd] mb-1'>
                                {exp.position}
                              </h3>
                              <h4 className='text-xl font-semibold text-[#778da9] mb-2'>
                                {exp.company}
                              </h4>
                              <div className='flex flex-wrap gap-3'>
                                <div className='flex items-center gap-2 text-[#e0e1dd] bg-[#1b263b] border border-[#415a77] px-3 py-1 rounded-full text-sm'>
                                  <Calendar size={14} />
                                  <span>{exp.duration}</span>
                                </div>
                                <div className='flex items-center gap-2 text-[#e0e1dd] bg-[#1b263b] border border-[#415a77] px-3 py-1 rounded-full text-sm'>
                                  <MapPin size={14} />
                                  <span>{exp.location}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Stats Cards */}
                        <div className='grid grid-cols-3 gap-4 mb-6'>
                          <div className='bg-[#1b263b] border border-[#415a77] rounded-xl p-4 text-center'>
                            <div className='text-2xl font-bold text-[#778da9]'>
                              {exp.stats.projects}
                            </div>
                            <div className='text-sm text-[#e0e1dd]'>
                              Projects
                            </div>
                          </div>
                          <div className='bg-[#1b263b] border border-[#415a77] rounded-xl p-4 text-center'>
                            <div className='text-2xl font-bold text-[#778da9]'>
                              {exp.stats.team}
                            </div>
                            <div className='text-sm text-[#e0e1dd]'>
                              Team Size
                            </div>
                          </div>
                          <div className='bg-[#1b263b] border border-[#415a77] rounded-xl p-4 text-center'>
                            <div className='text-2xl font-bold text-[#778da9]'>
                              {exp.stats.impact}
                            </div>
                            <div className='text-sm text-[#e0e1dd]'>Impact</div>
                          </div>
                        </div>

                        <p className='text-[#e0e1dd] mb-6 leading-relaxed'>
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className='mb-6'>
                          <div className='flex items-center gap-2 mb-4'>
                            <TrendingUp className='w-5 h-5 text-[#778da9]' />
                            <h5 className='text-lg font-semibold text-[#e0e1dd]'>
                              Key Achievements
                            </h5>
                          </div>
                          <div className='space-y-3'>
                            {exp.achievements.map((achievement, achIndex) => (
                              <div
                                key={achIndex}
                                className='flex items-start gap-3 p-3 bg-[#1b263b] border border-[#415a77] rounded-xl'
                              >
                                <div className='w-2 h-2 bg-[#778da9] rounded-full mt-2 flex-shrink-0'></div>
                                <span className='text-[#e0e1dd] text-sm leading-relaxed'>
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h5 className='text-lg font-semibold text-[#e0e1dd] mb-4'>
                            Technologies
                          </h5>
                          <div className='flex flex-wrap gap-2'>
                            {exp.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className='bg-gradient-to-r from-[#778da9] to-[#415a77] text-[#e0e1dd] px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-lg'
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
