import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, GraduationCap, User } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import CyberCard from './CyberCard';
import HolographicText from './HolographicText';

const About = () => {
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

  const stats = [
    { label: 'Years of Study', value: '3+', icon: GraduationCap },
    { label: 'Projects Completed', value: '15+', icon: User },
    { label: 'Technologies', value: '20+', icon: User },
    { label: 'Internships', value: '3', icon: User }
  ];

  return (
    <section id="about" className="py-20 relative">
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
              {t('about.title')}
            </HolographicText>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* About Content */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <CyberCard className="p-8" neonGlow>
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <User className="text-primary" size={24} />
                    <h3 className="text-2xl font-bold text-primary">Profile</h3>
                  </div>
                  
                  <p className="text-visible-light leading-relaxed">
                    {t('about.description')}
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-4 pt-6 border-t border-border/50">
                    <div className="flex items-center space-x-3 text-visible-light">
                      <MapPin size={18} className="text-primary" />
                      <span>{t('about.location')}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3 text-visible-light">
                      <Mail size={18} className="text-primary" />
                      <a 
                        href="mailto:youssef.berrissoul.15@edu.uiz.ac.ma"
                        className="hover:text-primary transition-colors"
                      >
                        {t('about.email')}
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3 text-visible-light">
                      <Phone size={18} className="text-primary" />
                      <span>{t('about.phone')}</span>
                    </div>
                  </div>
                </div>
              </CyberCard>

              {/* Education */}
              <CyberCard className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <GraduationCap className="text-accent" size={24} />
                    <h3 className="text-2xl font-bold text-accent">Education</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="border-l-2 border-primary/30 pl-6 relative">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                      <h4 className="font-semibold text-lg">Engineer in IT Security & Digital Trust</h4>
                      <p className="text-primary">École Nationale Supérieure de l'IA et Sciences des Données</p>
                      <p className="text-sm text-visible-light">2024 - Present</p>
                    </div>
                    
                    <div className="border-l-2 border-accent/30 pl-6 relative">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full"></div>
                      <h4 className="font-semibold text-lg">DUT in Computer Engineering</h4>
                      <p className="text-accent">École Supérieure de Technologie de Fès</p>
                      <p className="text-sm text-visible-light">2023 - 2024</p>
                    </div>
                    
                    <div className="border-l-2 border-secondary/30 pl-6 relative">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-secondary rounded-full"></div>
                      <h4 className="font-semibold text-lg">Secondary School Diploma</h4>
                      <p className="text-secondary">Lycée Ibn Haytam - Fès</p>
                      <p className="text-sm text-visible-light">2021 - 2022</p>
                    </div>
                  </div>
                </div>
              </CyberCard>
            </motion.div>

            {/* Stats and Interests */}
            <motion.div className="space-y-8" variants={itemVariants}>
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <CyberCard className="p-6 text-center" hover3d>
                      <stat.icon className="mx-auto mb-3 text-primary" size={32} />
                      <div className="text-3xl font-bold text-primary mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-visible-light">
                        {stat.label}
                      </div>
                    </CyberCard>
                  </motion.div>
                ))}
              </div>

              {/* Languages */}
              <CyberCard className="p-8">
                <h3 className="text-2xl font-bold text-accent mb-6">Languages</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Arabic</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-primary rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-medium">French</span>
                    <div className="flex space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-accent rounded-full"></div>
                      ))}
                      <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-medium">English</span>
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-secondary rounded-full"></div>
                      ))}
                      {[...Array(2)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-slate-600 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </CyberCard>

              {/* Interests */}
              <CyberCard className="p-8">
                <h3 className="text-2xl font-bold text-destructive mb-6">Interests</h3>
                <div className="flex flex-wrap gap-3">
                  {['Music', 'Football', 'Basketball', 'Video Games', 'Technology', 'Cybersecurity'].map((interest, index) => (
                    <motion.span
                      key={index}
                      className="px-4 py-2 bg-secondary/50 text-secondary-foreground rounded-full text-sm border border-secondary/30"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(var(--secondary), 0.8)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </CyberCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

