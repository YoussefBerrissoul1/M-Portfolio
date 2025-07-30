import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import HolographicText from './HolographicText';
import CyberButton from './CyberButton';
import profileImage from '../assets/youssef.jpg';

const Hero = () => {
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

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/src/assets/CV_Berrissoul_Youssef_2025.pdf';
    link.download = 'CV_Berrissoul_Youssef_2025.pdf';
    link.click();
  };

  const handleContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {/* Text Content */}
          <motion.div className="space-y-8 hero-content" variants={itemVariants}>
            <motion.p
                              className="text-lg text-visible-light"
              variants={itemVariants}
            >
              {t('hero.greeting')}
            </motion.p>

            <HolographicText size="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" typing className="hero-name holographic-text">
              {t('hero.name')}
            </HolographicText>

            <motion.div className="space-y-4" variants={itemVariants}>
              <h2 className="text-2xl lg:text-3xl font-bold text-primary">
                {t('hero.title')}
              </h2>
              <h3 className="text-xl text-accent">
                {t('hero.subtitle')}
              </h3>
              <p className="text-lg text-visible-light max-w-2xl">
                {t('hero.description')}
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <CyberButton
                variant="primary"
                size="lg"
                onClick={handleDownloadCV}
                icon={Download}
              >
                {t('hero.downloadCV')}
              </CyberButton>
              
              <CyberButton
                variant="outline"
                size="lg"
                onClick={handleContact}
                icon={Mail}
              >
                {t('hero.contactMe')}
              </CyberButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex space-x-6"
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com/YoussefBerrissoul1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-visible-light hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/youssef-berrissoul"
                target="_blank"
                rel="noopener noreferrer"
                className="text-visible-light hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={24} />
              </motion.a>
              
              <motion.a
                href="mailto:youssef.berrissoul.15@edu.uiz.ac.ma"
                className="text-visible-light hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Main image */}
              <motion.div
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/50"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profileImage}
                  alt="Youssef Berrissoul"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </motion.div>

              {/* Floating orbs */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full blur-sm"
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/30 rounded-full blur-sm"
                animate={{
                  y: [10, -10, 10],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1
                }}
              />

              {/* Rotating ring */}
              <motion.div
                className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />

              {/* Pulse effect */}
              <motion.div
                className="absolute inset-0 border border-primary/20 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeOut'
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

