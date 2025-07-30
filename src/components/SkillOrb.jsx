import { motion } from 'framer-motion';

const SkillOrb = ({ skill, level, icon: Icon, color = 'primary' }) => {
  const orbVariants = {
    initial: { 
      scale: 1,
      rotateY: 0,
      boxShadow: `0 0 20px rgba(101, 163, 13, 0.3)`
    },
    hover: {
      scale: 1.1,
      rotateY: 360,
      boxShadow: `0 0 30px rgba(101, 163, 13, 0.6)`,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const getColorClasses = (colorName) => {
    const colors = {
      primary: 'from-primary/20 to-primary/40 border-primary/50',
      accent: 'from-accent/20 to-accent/40 border-accent/50',
      secondary: 'from-secondary/20 to-secondary/40 border-secondary/50',
      destructive: 'from-destructive/20 to-destructive/40 border-destructive/50'
    };
    return colors[colorName] || colors.primary;
  };

  return (
    <motion.div
      className="flex flex-col items-center space-y-3 group cursor-pointer"
      variants={orbVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
    >
      {/* 3D Orb */}
      <div className="relative">
        <motion.div
          className={`
            w-20 h-20 rounded-full border-2 
            bg-gradient-to-br ${getColorClasses(color)}
            flex items-center justify-center
            relative overflow-hidden
          `}
          style={{
            transformStyle: 'preserve-3d',
            background: `
              radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2), transparent 50%),
              linear-gradient(135deg, rgba(101, 163, 13, 0.1), rgba(101, 163, 13, 0.3))
            `
          }}
        >
          {/* Inner glow */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/10 to-transparent" />
          
          {/* Icon */}
          <Icon size={28} className="text-foreground z-10 drop-shadow-lg" />
          
          {/* Rotating ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-primary/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
        
        {/* Level indicator */}
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center text-xs font-bold text-accent-foreground">
          {level}
        </div>
      </div>
      
      {/* Skill name */}
      <motion.span 
        className="text-sm font-medium text-center text-visible-light group-hover:text-foreground transition-colors"
        initial={{ opacity: 0.7 }}
        whileHover={{ opacity: 1 }}
      >
        {skill}
      </motion.span>
      
      {/* Hover effect particles */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + (i % 2) * 20}%`,
            }}
            animate={{
              y: [-5, -15, -5],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SkillOrb;

