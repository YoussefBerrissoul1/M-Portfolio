import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import CyberCard from './CyberCard';
import CyberButton from './CyberButton';
import HolographicText from './HolographicText';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'youssef.berrissoul.15@edu.uiz.ac.ma',
      href: 'mailto:youssef.berrissoul.15@edu.uiz.ac.ma',
      color: 'primary'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+212-6 30 38 81 37',
      href: 'tel:+212630388137',
      color: 'accent'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Fès, Morocco',
      href: null,
      color: 'secondary'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/YoussefBerrissoul1',
      color: 'primary'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/youssef-berrissoul',
      color: 'accent'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/212630388137',
      color: 'secondary'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
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
              {t('contact.title')}
            </HolographicText>
            <motion.p 
                              className="text-xl text-visible-light mt-4"
              variants={itemVariants}
            >
              {t('contact.subtitle')}
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <CyberCard className="p-8" neonGlow>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label 
                        htmlFor="name" 
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        {t('contact.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Your Name"
                      />
                    </div>

                    <div>
                      <label 
                        htmlFor="email" 
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        {t('contact.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label 
                        htmlFor="message" 
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        {t('contact.message')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        placeholder="Your message..."
                      />
                    </div>
                  </div>

                  <CyberButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    icon={Send}
                    className="w-full"
                  >
                    {isSubmitting ? t('contact.sending') : t('contact.send')}
                  </CyberButton>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      className="p-4 bg-accent/20 border border-accent/50 rounded-md text-accent text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {t('contact.success')}
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      className="p-4 bg-destructive/20 border border-destructive/50 rounded-md text-destructive text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {t('contact.error')}
                    </motion.div>
                  )}
                </form>
              </CyberCard>
            </motion.div>

            {/* Contact Information */}
            <motion.div className="space-y-8" variants={itemVariants}>
              {/* Contact Details */}
              <CyberCard className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={`p-3 bg-${info.color}/20 rounded-lg border border-${info.color}/30`}>
                        <info.icon className={`text-${info.color}`} size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.label}</h4>
                        {info.href ? (
                          <a
                            href={info.href}
                            className={`text-${info.color} hover:text-${info.color}/80 transition-colors`}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-visible-light">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CyberCard>

              {/* Social Links */}
              <CyberCard className="p-8">
                <h3 className="text-2xl font-bold text-accent mb-6">Connect With Me</h3>
                <div className="grid grid-cols-1 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-4 p-4 bg-${social.color}/10 border border-${social.color}/30 rounded-lg hover:bg-${social.color}/20 transition-all group`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <social.icon className={`text-${social.color} group-hover:scale-110 transition-transform`} size={24} />
                      <span className="font-medium text-foreground">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </CyberCard>

              {/* Availability */}
              <CyberCard className="p-8">
                <h3 className="text-2xl font-bold text-secondary mb-6">Availability</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-visible-light">Status</span>
                    <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
                      Available for Opportunities
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-visible-light">Response Time</span>
                    <span className="text-foreground">Within 24 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-visible-light">Preferred Contact</span>
                    <span className="text-foreground">Email</span>
                  </div>
                </div>
              </CyberCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

