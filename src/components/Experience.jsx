import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import CyberCard from './CyberCard';
import HolographicText from './HolographicText';

const Experience = () => {
  const { t } = useLanguage();

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, x: -50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const experiences = [
    {
      title: 'IT Intern',
      company: 'Nestlé El Jadida',
      period: 'Current',
      location: 'El Jadida, Morocco',
      description: 'Development of a Conversational Chatbot for HR and IT Support Automation using Python, deep learning libraries, React/Next.js/Angular',
      technologies: ['Python', 'Deep Learning', 'React', 'Next.js', 'Angular', 'NLP'],
      current: true,
      color: 'primary'
    },
    {
      title: 'End-of-study Technical Intern',
      company: 'Nestlé El Jadida',
      period: 'May 2023 - June 2024',
      location: 'El Jadida, Morocco',
      description: 'Development of a web application for managing purchases and orders for company personnel. Creation of a platform similar to an e-commerce site, but reserved for personnel.',
      technologies: ['Web Development', 'E-commerce', 'Database Management', 'UI/UX'],
      current: false,
      color: 'accent'
    },
    {
      title: 'End-of-study Project',
      company: 'Independent Project',
      period: 'January 2024 - April 2024',
      location: 'Fès, Morocco',
      description: 'Decision-making IT model for evaluating service quality for the tourism development of Fes. Analysis of tourism, concepts of management and evaluation of service quality.',
      technologies: ['Data Analysis', 'Decision Models', 'Tourism Analytics', 'Quality Assessment'],
      current: false,
      color: 'secondary'
    },
    {
      title: 'Initiation Intern',
      company: 'OCP El Jadida',
      period: 'July 2023 - August 2023',
      location: 'El Jadida, Morocco',
      description: 'Design and deployment of a web application for OCP. Centralized management of operational standards. Simplification of documentary processes and reduction of paperwork.',
      technologies: ['Web Development', 'Process Optimization', 'Document Management', 'Standards'],
      current: false,
      color: 'destructive'
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
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
              {t('experience.title')}
            </HolographicText>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start space-x-8"
                  variants={itemVariants}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <motion.div
                      className={`w-16 h-16 rounded-full border-4 border-${exp.color} bg-background flex items-center justify-center`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Briefcase className={`text-${exp.color}`} size={24} />
                    </motion.div>
                    
                    {exp.current && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeOut'
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <CyberCard 
                      className="p-8" 
                      neonGlow={exp.current}
                      glitch={exp.current}
                    >
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div>
                            <h3 className={`text-2xl font-bold text-${exp.color} mb-2`}>
                              {exp.title}
                            </h3>
                            <div className="flex items-center space-x-2 text-lg font-semibold">
                              <span>{exp.company}</span>
                              {exp.current && (
                                <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
                                  {t('experience.current')}
                                </span>
                              )}
                            </div>
                          </div>
                          
                          <div className="text-sm text-visible-light space-y-1">
                            <div className="flex items-center space-x-2">
                              <Calendar size={16} />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin size={16} />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-visible-light leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 pt-4">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              className="px-3 py-1 text-sm rounded-full border transition-colors tech-tag"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>

                        {/* Link for current position */}
                        {exp.current && (
                          <motion.div className="pt-4">
                            <motion.a
                              href="#projects"
                              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                              whileHover={{ x: 5 }}
                            >
                              <span>View Related Projects</span>
                              <ExternalLink size={16} />
                            </motion.a>
                          </motion.div>
                        )}
                      </div>
                    </CyberCard>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

