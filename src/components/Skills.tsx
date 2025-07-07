'use client';

import {
  Cloud,
  Code,
  Database,
  GitBranch,
  Palette,
  Smartphone,
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className='w-8 h-8' />,
      title: 'Frontend Development',
      color: 'bg-[#778da9]',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'HTML/CSS', level: 80 },
      ],
    },
    {
      icon: <Database className='w-8 h-8' />,
      title: 'Backend Development',
      color: 'bg-[#415a77]',
      skills: [
        { name: 'Spring Boot', level: 95 },
        { name: 'FastApi', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    {
      icon: <Smartphone className='w-8 h-8' />,
      title: 'Mobile Development',
      color: 'bg-[#778da9]',
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Flutter', level: 70 },
        // { name: 'Android', level: 75 },
        // { name: 'iOS', level: 65 },
      ],
    },
    {
      icon: <Cloud className='w-8 h-8' />,
      title: 'Cloud & DevOps',
      color: 'bg-[#415a77]',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 90 },
        { name: 'CI/CD', level: 80 },
        { name: 'Kubernetes', level: 50 },
      ],
    },
    {
      icon: <GitBranch className='w-8 h-8' />,
      title: 'Tools & Others',
      color: 'bg-[#778da9]',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Linux', level: 85 },
        { name: 'Agile', level: 90 },
        { name: 'Testing', level: 80 },
      ],
    },
    {
      icon: <Palette className='w-8 h-8' />,
      title: 'Design',
      color: 'bg-[#415a77]',
      skills: [
        { name: 'UI/UX Design', level: 80 },
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 75 },
        { name: 'Responsive Design', level: 90 },
      ],
    },
  ];

  return (
    <section
      id='skills'
      className='py-20 bg-[#1b263b] relative overflow-hidden'
    >
      {/* Background Elements */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-20 left-20 w-72 h-72 bg-[#778da9] rounded-full filter blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 right-20 w-72 h-72 bg-[#415a77] rounded-full filter blur-3xl animate-pulse animation-delay-2000'></div>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16 animate-fade-in-up'>
            <h2 className='text-5xl md:text-6xl font-bold mb-6'>
              <span className='text-[#778da9]'>Skills & Technologies</span>
            </h2>
            <div className='w-24 h-1 bg-[#778da9] mx-auto rounded-full mb-6'></div>
            <p className='text-xl text-[#e0e1dd] max-w-3xl mx-auto leading-relaxed'>
              A comprehensive overview of my technical skills and the
              technologies I work with
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className='group bg-[#0d1b2a] border border-[#415a77] rounded-2xl p-8 shadow-xl hover:shadow-[#778da9]/10 transition-all duration-500 hover:scale-105 animate-fade-in-up'
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className='flex items-center gap-4 mb-8'>
                  <div
                    className={`${category.color} p-4 rounded-xl text-[#e0e1dd] shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    {category.icon}
                  </div>
                  <h3 className='text-xl font-bold text-[#e0e1dd]'>
                    {category.title}
                  </h3>
                </div>

                <div className='space-y-6'>
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className='animate-fade-in-up'
                      style={{
                        animationDelay: `${index * 0.1 + skillIndex * 0.05}s`,
                      }}
                    >
                      <div className='flex justify-between items-center mb-2'>
                        <span className='text-[#e0e1dd] font-medium'>
                          {skill.name}
                        </span>
                        <span className='text-[#778da9] text-sm font-bold'>
                          {skill.level}%
                        </span>
                      </div>
                      <div className='w-full bg-[#415a77] rounded-full h-3 overflow-hidden'>
                        <div
                          className='bg-[#778da9] h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden'
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className='absolute inset-0 bg-[#e0e1dd]/20 animate-shimmer'></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
