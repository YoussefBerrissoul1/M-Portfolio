import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { languages } from '../lib/i18n';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { language, changeLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'experience', href: '#experience' },
    { key: 'skills', href: '#skills' },
    { key: 'projects', href: '#projects' },
    { key: 'contact', href: '#contact' }
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    setIsLanguageOpen(false);
    
    // Petit délai pour permettre la fermeture du menu mobile
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const navHeight = window.innerWidth >= 1024 ? 100 : 80; // hauteur adaptée selon la taille d'écran
        const elementPosition = element.offsetTop - navHeight;
        window.scrollTo({
          top: Math.max(0, elementPosition),
          behavior: 'smooth'
        });
      }
    }, isOpen ? 300 : 0); // Plus de délai si le menu mobile était ouvert
  };

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage);
    setIsLanguageOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-card/98 backdrop-blur-md border-b border-border/50 shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center space-x-2 text-2xl font-bold text-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            <motion.div
              className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/30"
              whileHover={{ 
                backgroundColor: 'rgba(var(--primary), 0.3)',
                borderColor: 'rgba(var(--primary), 0.5)'
              }}
            >
              YB
            </motion.div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.key}
                href={item.href}
                className="text-visible-light hover:text-primary transition-colors relative group"
                whileHover={{ y: -2 }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {t(`nav.${item.key}`)}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
          </div>

          {/* Language Selector - Improved */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <motion.button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-4 py-2 bg-secondary/20 border border-secondary/30 rounded-lg text-foreground hover:bg-secondary/30 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Globe size={18} className="text-accent" />
                <span className="text-sm font-medium">{languages[language]}</span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} 
                />
              </motion.button>

              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    className="absolute top-full right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {Object.entries(languages).map(([code, name]) => (
                      <motion.button
                        key={code}
                        onClick={() => handleLanguageChange(code)}
                        className={`w-full px-4 py-3 text-left hover:bg-secondary/20 transition-colors flex items-center space-x-3 ${
                          language === code ? 'bg-primary/10 text-primary' : 'text-foreground'
                        }`}
                        whileHover={{ backgroundColor: 'rgba(var(--secondary), 0.3)' }}
                      >
                        <Globe size={16} className={language === code ? 'text-primary' : 'text-visible-medium'} />
                        <span className="font-medium">{name}</span>
                        {language === code && (
                          <motion.div
                            className="ml-auto w-2 h-2 bg-primary rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                          />
                        )}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Language Selector */}
            <div className="relative">
              <motion.button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 px-3 py-2 bg-secondary/20 border border-secondary/30 rounded-lg text-foreground"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Globe size={16} className="text-accent" />
                <span className="text-xs font-medium">{language.toUpperCase()}</span>
                <ChevronDown 
                  size={14} 
                  className={`transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} 
                />
              </motion.button>

              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    className="absolute top-full right-0 mt-2 w-40 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {Object.entries(languages).map(([code, name]) => (
                      <motion.button
                        key={code}
                        onClick={() => handleLanguageChange(code)}
                        className={`w-full px-3 py-2 text-left hover:bg-secondary/20 transition-colors flex items-center space-x-2 ${
                          language === code ? 'bg-primary/10 text-primary' : 'text-foreground'
                        }`}
                        whileHover={{ backgroundColor: 'rgba(var(--secondary), 0.3)' }}
                      >
                        <Globe size={14} className={language === code ? 'text-primary' : 'text-visible-medium'} />
                        <span className="text-sm font-medium">{name}</span>
                        {language === code && (
                          <motion.div
                            className="ml-auto w-1.5 h-1.5 bg-primary rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                          />
                        )}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
                              className="p-2 text-visible-light hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-md border-b border-border/50 shadow-lg z-40"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="px-4 py-6 space-y-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.key}
                    className="w-full text-left block text-visible-light hover:text-primary hover:bg-primary/10 transition-all py-3 px-4 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavClick(item.href)}
                  >
                    {t(`nav.${item.key}`)}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Click outside to close menus */}
      {(isLanguageOpen || isOpen) && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => {
            setIsLanguageOpen(false);
            setIsOpen(false);
          }}
        />
      )}
    </motion.nav>
  );
};

export default Navigation;

