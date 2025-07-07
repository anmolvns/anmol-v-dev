'use client';

import {
  Database,
  ExternalLink,
  Github,
  Globe,
  Smartphone,
  Star,
  Zap,
} from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'Monster ZER0 E-Commerce',
      description:
        'A modern full-stack e-commerce platform designed for seamless shopping experiences, featuring product browsing, cart management, order processing, and secure checkout.',
      image:
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'React', 'Zustand', 'MongoDB', 'Tailwind CSS'],
      liveUrl: 'https://monster-zero.vercel.app/',
      githubUrl: '',
      icon: <Globe className='w-6 h-6' />,
      category: 'web',
      gradient: 'from-[#778da9] to-[#415a77]',
      stats: { stars: 124, forks: 45, views: '2.3k' },
      featured: true,
    },
    {
      title: 'Feelings - A Social Media App',
      description:
        'A social media app that enables users to share posts, connect with friends, and engage with content, featuring real-time updates and Firebase integration.',
      image:
        'https://as1.ftcdn.net/v2/jpg/13/54/43/98/1000_F_1354439888_syxpyduolTEiIC8FLO5gPJmg3Pa5EB7K.jpg',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      liveUrl: '',
      githubUrl: 'https://github.com/anmolvns/feelings',
      icon: <Zap className='w-6 h-6' />,
      category: 'web',
      gradient: 'from-[#415a77] to-[#1b263b]',
      // stats: { stars: 0, forks: 0, views: '-' },
      featured: true,
    },
    {
      title: 'Yatra - Travel Booking App',
      description:
        'A responsive travel booking web app that allows users to search for destinations, explore travel packages, and book trips with an intuitive user interface.',
      image:
        'https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['React.js', 'Tailwind CSS', 'React Router'],
      liveUrl:
        'https://64b4e6a1dd121d3b6e4e7aa4--startling-crumble-39c601.netlify.app/',
      githubUrl: 'https://github.com/anmolvns/yatra',
      icon: <Globe className='w-6 h-6' />,
      category: 'web',
      gradient: 'from-[#415a77] to-[#1b263b]',
      stats: { stars: 75, forks: 20, views: '1.4k' },
      featured: false,
    },
    {
      title: 'Weather Mobile App',
      description:
        'A sleek mobile weather app providing real-time forecasts, interactive maps, and location-based weather alerts, built for fast and intuitive user experience.',
      image:
        'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Android', 'OpenWeather API', 'Java', 'XML'],
      liveUrl: '',
      githubUrl: 'https://github.com/anmolvns/weatherApp',
      icon: <Smartphone className='w-6 h-6' />,
      category: 'mobile',
      gradient: 'from-[#778da9] to-[#415a77]',
      // stats: { stars: 0, forks: 0, views: '-' },
      featured: false,
    },
    {
      title: 'Book Rental Manager',
      description:
        'A web-based application for managing book rentals, allowing users to browse books, rent them, track due dates, and manage rental history efficiently.',
      image:
        'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Spring Boot', 'Java', 'MySQL'],
      liveUrl: '',
      githubUrl: 'https://github.com/anmolvns/Book-Rental-Manager',
      icon: <Database className='w-6 h-6' />,
      category: 'web',
      gradient: 'from-[#778da9] to-[#415a77]',
      stats: { stars: 167, forks: 54, views: '2.9k' },
      featured: false,
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    {
      id: 'web',
      label: 'Web Apps',
      count: projects.filter((p) => p.category === 'web').length,
    },
    {
      id: 'mobile',
      label: 'Mobile Apps',
      count: projects.filter((p) => p.category === 'mobile').length,
    },
    {
      id: 'featured',
      label: 'Featured',
      count: projects.filter((p) => p.featured).length,
    },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  return (
    <section
      id='projects'
      className='py-20 bg-[#0d1b2a] relative overflow-hidden'
    >
      {/* Background Elements */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-40 left-20 w-96 h-96 bg-[#778da9] rounded-full filter blur-3xl animate-pulse'></div>
        <div className='absolute bottom-40 right-20 w-96 h-96 bg-[#415a77] rounded-full filter blur-3xl animate-pulse animation-delay-2000'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#778da9] rounded-full filter blur-3xl opacity-10'></div>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16 animate-fade-in-up'>
            <div className='inline-flex items-center gap-3 bg-[#1b263b] border border-[#415a77] rounded-full px-6 py-3 mb-8'>
              <Star className='w-5 h-5 text-[#778da9]' />
              <span className='text-[#778da9] font-medium'>
                Portfolio Showcase
              </span>
            </div>
            <h2 className='text-5xl md:text-7xl font-bold mb-6'>
              <span className='bg-gradient-to-r from-[#778da9] to-[#415a77] bg-clip-text text-transparent'>
                Featured Projects
              </span>
            </h2>
            <p className='text-xl text-[#e0e1dd] max-w-3xl mx-auto leading-relaxed'>
              A showcase of my recent work, demonstrating expertise in various
              technologies and innovative problem-solving approaches
            </p>
          </div>

          {/* Filter Tabs */}
          <div className='flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up animation-delay-200'>
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-[#778da9] to-[#415a77] text-[#e0e1dd] shadow-lg scale-105'
                    : 'bg-[#1b263b] border border-[#415a77] text-[#e0e1dd] hover:bg-[#415a77]/20 hover:scale-105'
                }`}
              >
                {filter.label}
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    activeFilter === filter.id
                      ? 'bg-[#e0e1dd]/20'
                      : 'bg-[#778da9]/20'
                  }`}
                >
                  {filter.count}
                </span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className='group relative bg-[#1b263b] border border-[#415a77] rounded-3xl shadow-2xl overflow-hidden hover:shadow-[#778da9]/20 transition-all duration-500 hover:scale-[1.02] animate-fade-in-up'
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className='absolute top-4 left-4 z-20 bg-gradient-to-r from-[#778da9] to-[#415a77] text-[#e0e1dd] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1'>
                    <Star className='w-3 h-3' />
                    Featured
                  </div>
                )}

                {/* Image Container */}
                <div className='relative overflow-hidden h-48'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                  ></div>

                  {/* Overlay Actions */}
                  <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[#0d1b2a]/80'>
                    <div className='flex gap-4'>
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='bg-[#778da9] hover:bg-[#415a77] text-[#e0e1dd] p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg'
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='bg-[#778da9] hover:bg-[#415a77] text-[#e0e1dd] p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg'
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className='p-6'>
                  {/* Header */}
                  <div className='flex items-center gap-3 mb-4'>
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-[#e0e1dd] shadow-lg`}
                    >
                      {project.icon}
                    </div>
                    <h3 className='text-xl font-bold text-[#e0e1dd] group-hover:text-[#778da9] transition-colors duration-300'>
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className='text-[#e0e1dd] mb-6 text-sm leading-relaxed line-clamp-3'>
                    {project.description}
                  </p>

                  {/* Stats */}
                  {/* <div className='flex items-center justify-between mb-6 p-3 bg-[#0d1b2a] border border-[#415a77] rounded-xl'>
                    <div className='flex items-center gap-1 text-[#778da9]'>
                      <Star className='w-4 h-4' />
                      <span className='text-sm font-medium'>
                        {project.stats.stars}
                      </span>
                    </div>
                    <div className='flex items-center gap-1 text-[#778da9]'>
                      <GitFork className='w-4 h-4' />
                      <span className='text-sm font-medium'>
                        {project.stats.forks}
                      </span>
                    </div>
                    <div className='flex items-center gap-1 text-[#778da9]'>
                      <Eye className='w-4 h-4' />
                      <span className='text-sm font-medium'>
                        {project.stats.views}
                      </span>
                    </div>
                  </div> */}

                  {/* Technologies */}
                  <div className='flex flex-wrap gap-2'>
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className='bg-[#0d1b2a] border border-[#415a77] text-[#778da9] px-3 py-1 rounded-full text-xs font-medium hover:scale-105 transition-transform duration-300'
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className='bg-[#778da9]/20 text-[#778da9] px-3 py-1 rounded-full text-xs font-medium'>
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
