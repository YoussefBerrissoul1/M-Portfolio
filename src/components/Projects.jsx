import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Database, Globe, Bot, ShoppingCart, BarChart3 } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import CyberCard from './CyberCard';
import CyberButton from './CyberButton';
import HolographicText from './HolographicText';

const Projects = () => {
  const { t } = useLanguage();

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const projects = [
    {
      title: 'HR & IT Support Chatbot',
      description: 'Conversational AI chatbot for automating HR and IT support using Python, deep learning libraries, and modern web frameworks.',
      icon: Bot,
      technologies: ['Python', 'Deep Learning', 'React', 'Next.js', 'NLP', 'TensorFlow'],
      status: 'In Progress',
      color: 'primary',
      github: 'https://github.com/YoussefBerrissoul1',
      demo: null,
      featured: true
    },
    {
      title: 'E-commerce Management Platform',
      description: 'Web application for managing purchases and orders for company personnel. Features include order tracking, inventory management, and user authentication.',
      icon: ShoppingCart,
      technologies: ['Web Development', 'Database', 'Authentication', 'UI/UX'],
      status: 'Completed',
      color: 'accent',
      github: 'https://github.com/YoussefBerrissoul1',
      demo: null,
      featured: true
    },
    {
      title: 'Tourism Quality Assessment Model',
      description: 'Decision-making IT model for evaluating service quality for tourism development in Fes. Includes data analysis and quality metrics.',
      icon: BarChart3,
      technologies: ['Data Analysis', 'Decision Models', 'Analytics', 'Research'],
      status: 'Completed',
      color: 'secondary',
      github: 'https://github.com/YoussefBerrissoul1',
      demo: null,
      featured: true
    },
    {
      title: 'OCP Web Application',
      description: 'Web application for centralized management of operational standards and document processes for OCP.',
      icon: Globe,
      technologies: ['Web Development', 'Process Management', 'Standards', 'Documentation'],
      status: 'Completed',
      color: 'destructive',
      github: 'https://github.com/YoussefBerrissoul1',
      demo: null,
      featured: false
    },
    {
      title: 'Calculator Application',
      description: 'Advanced calculator application built with C# featuring scientific calculations and user-friendly interface.',
      icon: Code,
      technologies: ['C#', 'Desktop App', 'UI/UX', 'Mathematics'],
      status: 'Completed',
      color: 'primary',
      github: 'https://github.com/YoussefBerrissoul1/Calculette-YoussefBerrissoul-CSharp',
      demo: null,
      featured: false
    },
    {
      title: 'Student Management System',
      description: 'Comprehensive student management system with Node.js backend for handling student data and academic records.',
      icon: Database,
      technologies: ['Node.js', 'Database', 'API', 'Management System'],
      status: 'Completed',
      color: 'accent',
      github: 'https://github.com/YoussefBerrissoul1/Node-JS-Student_management_System_LastVersion',
      demo: null,
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Title */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <HolographicText size="text-4xl lg:text-5xl">
              {t('projects.title')}
            </HolographicText>
          </motion.div>

          {/* Featured Projects */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Featured Projects</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <CyberCard 
                    className="p-8 h-full flex flex-col" 
                    neonGlow={project.status === 'In Progress'}
                    glitch={project.status === 'In Progress'}
                  >
                    <div className="flex-1 space-y-6">
                      {/* Project Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <project.icon className={`text-${project.color}`} size={32} />
                          <div>
                            <h4 className={`text-xl font-bold text-${project.color}`}>
                              {project.title}
                            </h4>
                            <span className={`text-sm px-2 py-1 rounded-full ${
                              project.status === 'In Progress' 
                                ? 'bg-primary/20 text-primary' 
                                : 'bg-accent/20 text-accent'
                            }`}>
                              {project.status}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-visible-light leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 bg-${project.color}/10 text-${project.color} text-sm rounded-full border border-${project.color}/30`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4 mt-6 pt-6 border-t border-border/50">
                      {project.github && (
                        <CyberButton
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(project.github, '_blank')}
                          icon={Github}
                          className="flex-1"
                        >
                          {t('projects.viewCode')}
                        </CyberButton>
                      )}
                      
                      {project.demo && (
                        <CyberButton
                          variant="primary"
                          size="sm"
                          onClick={() => window.open(project.demo, '_blank')}
                          icon={ExternalLink}
                          className="flex-1"
                        >
                          {t('projects.viewProject')}
                        </CyberButton>
                      )}
                    </div>
                  </CyberCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Projects */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-accent mb-8 text-center">Other Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <CyberCard className="p-6 h-full">
                    <div className="space-y-4">
                      {/* Project Header */}
                      <div className="flex items-center space-x-3">
                        <project.icon className={`text-${project.color}`} size={24} />
                        <h4 className={`text-lg font-bold text-${project.color}`}>
                          {project.title}
                        </h4>
                      </div>

                      {/* Description */}
                      <p className="text-visible-light text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs rounded-full tech-tag"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-xs rounded-full tech-tag">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Action Button */}
                      {project.github && (
                        <div className="pt-2">
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center space-x-2 text-${project.color} hover:text-${project.color}/80 transition-colors text-sm`}
                            whileHover={{ x: 5 }}
                          >
                            <Github size={16} />
                            <span>View Code</span>
                          </motion.a>
                        </div>
                      )}
                    </div>
                  </CyberCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* GitHub CTA */}
          <motion.div className="text-center mt-16" variants={itemVariants}>
            <CyberCard className="p-8 inline-block">
              <div className="space-y-4">
                <Github className="mx-auto text-primary" size={48} />
                <h3 className="text-2xl font-bold">Explore More Projects</h3>
                <p className="text-visible-light">
                  Check out my GitHub profile for more projects and contributions
                </p>
                <CyberButton
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('https://github.com/YoussefBerrissoul1', '_blank')}
                  icon={Github}
                >
                  Visit GitHub Profile
                </CyberButton>
              </div>
            </CyberCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

