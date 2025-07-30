import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/YoussefBerrissoul1',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/youssef-berrissoul',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:youssef.berrissoul.15@edu.uiz.ac.ma',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'experience', href: '#experience' },
    { key: 'skills', href: '#skills' },
    { key: 'projects', href: '#projects' },
    { key: 'contact', href: '#contact' }
  ];

  return (
    <footer className="relative bg-card/50 border-t border-border/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2">
              <motion.div
                className="text-3xl font-bold text-primary"
                whileHover={{ scale: 1.1 }}
              >
                YB
              </motion.div>
              <div className="text-lg font-semibold">Youssef Berrissoul</div>
            </div>
            <p className="text-visible-light">
              Cybersecurity Engineer & IT Security Student passionate about building secure and innovative solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-secondary/20 rounded-lg text-visible-light hover:text-primary hover:bg-primary/20 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-accent">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.key}
                  href={link.href}
                  className="text-visible-light hover:text-primary transition-colors py-1"
                  whileHover={{ x: 5 }}
                >
                  {t(`nav.${link.key}`)}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-secondary">Contact</h3>
                          <div className="space-y-2 text-visible-light">
              <p>Fès, Morocco</p>
              <a 
                href="mailto:youssef.berrissoul.15@edu.uiz.ac.ma"
                className="hover:text-primary transition-colors block"
              >
                youssef.berrissoul.15@edu.uiz.ac.ma
              </a>
              <a 
                href="tel:+212630388137"
                className="hover:text-primary transition-colors block"
              >
                +212-6 30 38 81 37
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-border/50 mt-8 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-visible-light text-sm">
              <span>© {currentYear} Youssef Berrissoul.</span>
              <span>{t('footer.rights')}</span>
            </div>

            {/* Made with love */}
            <div className="flex items-center space-x-2 text-visible-light text-sm">
              <span>{t('footer.madeWith')}</span>
              <span>{t('footer.by')} Youssef</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </motion.button>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full"
             style={{
               backgroundImage: `
                 linear-gradient(rgba(101, 163, 13, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(101, 163, 13, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '40px 40px'
             }}
        />
      </div>
    </footer>
  );
};

export default Footer;

