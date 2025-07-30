import { motion } from 'framer-motion';
import { 
  Code, 
  Globe, 
  Database, 
  Shield, 
  Wrench, 
  Brain,
  Terminal,
  Server,
  Lock,
  Network,
  Cpu,
  FileCode,
  Star
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import HolographicText from './HolographicText';
import CyberCard from './CyberCard';

const Skills = () => {
  const { t } = useLanguage();

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
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

  const skillCategories = [
    {
      title: t('skills.programming'),
      icon: Code,
      color: 'primary',
      skills: [
        { name: 'Python', level: 9, icon: Terminal },
        { name: 'Java', level: 8, icon: FileCode },
        { name: 'C++', level: 7, icon: Cpu },
        { name: 'C#', level: 7, icon: FileCode },
        { name: 'C', level: 6, icon: Terminal }
      ]
    },
    {
      title: t('skills.webDev'),
      icon: Globe,
      color: 'accent',
      skills: [
        { name: 'HTML/CSS', level: 9, icon: Globe },
        { name: 'JavaScript', level: 8, icon: Code },
        { name: 'React', level: 8, icon: Code },
        { name: 'Node.js', level: 7, icon: Server },
        { name: 'Express.js', level: 7, icon: Server }
      ]
    },
    {
      title: t('skills.databases'),
      icon: Database,
      color: 'cyber-purple',
      skills: [
        { name: 'SQL', level: 8, icon: Database },
        { name: 'MySQL', level: 8, icon: Database },
        { name: 'MongoDB', level: 6, icon: Database }
      ]
    },
    {
      title: t('skills.networks'),
      icon: Shield,
      color: 'destructive',
      skills: [
        { name: 'TCP/IP', level: 8, icon: Network },
        { name: 'Routing', level: 7, icon: Network },
        { name: 'VLSM', level: 7, icon: Network },
        { name: 'Security', level: 8, icon: Lock },
        { name: 'Cryptography', level: 7, icon: Shield }
      ]
    },
    {
      title: t('skills.tools'),
      icon: Wrench,
      color: 'cyber-yellow',
      skills: [
        { name: 'VS Code', level: 9, icon: Code },
        { name: 'Eclipse', level: 8, icon: Code },
        { name: 'MySQL Workbench', level: 8, icon: Database },
        { name: 'Matlab', level: 6, icon: Cpu },
        { name: 'Git', level: 8, icon: Terminal }
      ]
    },
    {
      title: t('skills.softSkills'),
      icon: Brain,
      color: 'secondary',
      skills: [
        { name: 'Critical Thinking', level: 9, icon: Brain },
        { name: 'Leadership', level: 8, icon: Brain },
        { name: 'Problem Solving', level: 9, icon: Brain },
        { name: 'Team Work', level: 8, icon: Brain },
        { name: 'Communication', level: 8, icon: Brain }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      'primary': 'text-primary',
      'accent': 'text-accent',
      'cyber-purple': 'text-purple-400',
      'destructive': 'text-red-400',
      'cyber-yellow': 'text-yellow-400',
      'secondary': 'text-secondary'
    };
    return colorMap[color] || 'text-primary';
  };

  const getBackgroundColorClasses = (color) => {
    const colorMap = {
      'primary': 'bg-primary',
      'accent': 'bg-accent', 
      'cyber-purple': 'bg-purple-400',
      'destructive': 'bg-red-400',
      'cyber-yellow': 'bg-yellow-400',
      'secondary': 'bg-secondary'
    };
    return colorMap[color] || 'bg-primary';
  };

  const getBorderColorClasses = (color) => {
    const colorMap = {
      'primary': 'border-primary/30',
      'accent': 'border-accent/30',
      'cyber-purple': 'border-purple-400/30',
      'destructive': 'border-red-400/30',
      'cyber-yellow': 'border-yellow-400/30',
      'secondary': 'border-secondary/30'
    };
    return colorMap[color] || 'border-primary/30';
  };

  const getBackgroundOpacityClasses = (color) => {
    const colorMap = {
      'primary': 'bg-primary/20',
      'accent': 'bg-accent/20',
      'cyber-purple': 'bg-purple-400/20',
      'destructive': 'bg-red-400/20',
      'cyber-yellow': 'bg-yellow-400/20',
      'secondary': 'bg-secondary/20'
    };
    return colorMap[color] || 'bg-primary/20';
  };

  const SkillBar = ({ skill, color }) => (
    <div className="space-y-2 skill-bar-container" style={{ opacity: 1, visibility: 'visible', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <skill.icon size={16} className={getColorClasses(color)} />
          <span className="text-sm font-medium text-foreground">{skill.name}</span>
        </div>
        <span className="text-xs text-visible-light">{skill.level}/10</span>
      </div>
      <div className="w-full bg-secondary/30 rounded-full h-3 overflow-hidden" style={{ minHeight: '12px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
        <motion.div
          className={`h-full ${getBackgroundColorClasses(color)} rounded-full relative`}
          style={{ 
            width: `${skill.level * 10}%`,
            opacity: 0.9,
            minHeight: '12px'
          }}
          initial={{ width: 0 }}
          animate={{ width: `${skill.level * 10}%` }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Section Title */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <HolographicText size="text-3xl sm:text-4xl lg:text-5xl">
              {t('skills.title')}
            </HolographicText>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="w-full"
              >
                <CyberCard className="p-4 sm:p-6 h-full skill-category-card" hover3d style={{ opacity: 1, visibility: 'visible' }}>
                  <div className="space-y-6" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {/* Category Header */}
                    <div className="flex items-center space-x-3 mb-6">
                      <div className={`p-3 ${getBackgroundOpacityClasses(category.color)} rounded-lg border ${getBorderColorClasses(category.color)}`}>
                        <category.icon className={getColorClasses(category.color)} size={24} />
                      </div>
                      <h3 className={`text-lg sm:text-xl font-bold ${getColorClasses(category.color)}`}>
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="skill-item" style={{ opacity: 1, visibility: 'visible' }}>
                          <SkillBar skill={skill} color={category.color} />
                        </div>
                      ))}
                    </div>
                  </div>
                </CyberCard>
              </motion.div>
            ))}
          </div>

          {/* Skills Summary */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CyberCard className="p-8 text-center" neonGlow>
              <div className="space-y-4">
                <Code className="mx-auto text-primary" size={48} />
                <h3 className="text-3xl font-bold text-primary">20+</h3>
                <p className="text-visible-light">Technologies Mastered</p>
              </div>
            </CyberCard>

            <CyberCard className="p-8 text-center" neonGlow>
              <div className="space-y-4">
                <Shield className="mx-auto text-accent" size={48} />
                <h3 className="text-3xl font-bold text-accent">3+</h3>
                <p className="text-visible-light">Years of Experience</p>
              </div>
            </CyberCard>

            <CyberCard className="p-8 text-center" neonGlow>
              <div className="space-y-4">
                <Brain className="mx-auto text-secondary" size={48} />
                <h3 className="text-3xl font-bold text-secondary">15+</h3>
                <p className="text-visible-light">Projects Completed</p>
              </div>
            </CyberCard>
          </motion.div>
          {/* Academic Modules */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <CyberCard className="p-4 sm:p-6 lg:p-8">
              <div className="text-center mb-6 lg:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">Academic Modules</h3>
                <p className="text-sm sm:text-base text-visible-light">Comprehensive curriculum in IT Security & Digital Trust</p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
                {[
                  { name: 'Python Programming', icon: Terminal, color: 'primary' },
                  { name: 'Operating Systems', icon: Cpu, color: 'accent' },
                  { name: 'Data Structures', icon: Database, color: 'secondary' },
                  { name: 'Computer Architecture', icon: Cpu, color: 'destructive' },
                  { name: 'Computer Networks', icon: Network, color: 'primary' },
                  { name: 'Digital Skills', icon: Globe, color: 'accent' },
                  { name: 'Java Algorithms & OOP', icon: FileCode, color: 'secondary' },
                  { name: 'Applied Mathematics', icon: Brain, color: 'destructive' },
                  { name: 'Software Architecture & UML', icon: Code, color: 'primary' },
                  { name: 'Cloud Computing', icon: Server, color: 'accent' },
                  { name: 'Operational Research', icon: Brain, color: 'secondary' },
                  { name: 'Quantum Computing', icon: Cpu, color: 'destructive' },
                  { name: 'Embedded Systems', icon: Cpu, color: 'primary' },
                  { name: 'Databases', icon: Database, color: 'accent' },
                  { name: 'Web Technologies', icon: Globe, color: 'secondary' },
                  { name: 'Applied Cryptography', icon: Lock, color: 'destructive' }
                ].map((module, index) => {
                  const moduleColorClasses = {
                    backgroundColor: getBackgroundOpacityClasses(module.color),
                    borderColor: getBorderColorClasses(module.color),
                    iconColor: getColorClasses(module.color)
                  };
                  
                  return (
                    <motion.div
                      key={index}
                      className={`p-3 sm:p-4 ${moduleColorClasses.backgroundColor} border ${moduleColorClasses.borderColor} rounded-lg text-center group hover:opacity-80 transition-all cursor-pointer`}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <module.icon className={`mx-auto mb-2 ${moduleColorClasses.iconColor} group-hover:scale-110 transition-transform`} size={18} />
                      <span className="text-xs sm:text-sm font-medium text-foreground leading-tight">{module.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </CyberCard>
          </motion.div>

          {/* Languages */}
          <motion.div 
            className="mt-6 lg:mt-8" 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CyberCard className="p-4 sm:p-6 lg:p-8">
              <div className="text-center mb-6 lg:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-accent mb-2">Languages</h3>
                <p className="text-sm sm:text-base text-visible-light">Multilingual communication skills</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                {[
                  { name: 'Arabic', level: 10, flag: '🇲🇦', description: 'Native' },
                  { name: 'French', level: 9, flag: '🇫🇷', description: 'Fluent' },
                  { name: 'English', level: 8, flag: '🇺🇸', description: 'Advanced' }
                ].map((lang, index) => (
                  <motion.div
                    key={index}
                    className="text-center space-y-3"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="text-4xl mb-2">{lang.flag}</div>
                    <h4 className="text-lg font-semibold text-foreground">{lang.name}</h4>
                    <p className="text-sm text-visible-light">{lang.description}</p>
                    <div className="flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < Math.floor(lang.level / 2) 
                              ? 'text-accent fill-current' 
                              : 'text-visible-medium'
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CyberCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

