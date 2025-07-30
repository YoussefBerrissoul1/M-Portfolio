import { motion } from 'framer-motion';

const HolographicText = ({ 
  children, 
  className = '', 
  size = 'text-4xl',
  typing = false,
  glitch = false 
}) => {
  const textVariants = {
    initial: { 
      opacity: 0,
      y: 20,
      filter: 'blur(10px)'
    },
    animate: { 
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1,
        ease: 'easeOut'
      }
    }
  };

  const glitchVariants = {
    initial: { x: 0 },
    animate: {
      x: [0, -2, 2, 0],
      transition: {
        duration: 0.2,
        repeat: Infinity,
        repeatDelay: 3,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <motion.div
      className={`relative ${className}`}
      variants={textVariants}
      initial="initial"
      animate="animate"
    >
      {/* Main text */}
      <motion.h1
        className={`
          ${size} font-bold bg-gradient-to-r from-primary via-accent to-primary 
          bg-clip-text text-transparent bg-300% animate-gradient-x
          ${typing ? 'typing-effect' : ''}
          ${glitch ? 'glitch-effect' : ''}
          relative z-10 break-words
        `}
        variants={glitch ? glitchVariants : {}}
        animate={glitch ? 'animate' : ''}
        style={{
          textShadow: `
            0 0 10px rgba(101, 163, 13, 0.5),
            0 0 20px rgba(101, 163, 13, 0.3),
            0 0 30px rgba(101, 163, 13, 0.1)
          `
        }}
      >
        {children}
      </motion.h1>
      
      {/* Holographic layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Red layer */}
        <motion.h1
          className={`${size} font-bold text-red-500/20 absolute`}
          style={{ transform: 'translate(-2px, -1px)' }}
          animate={glitch ? { x: [-2, 2, -2] } : {}}
          transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 2 }}
        >
          {children}
        </motion.h1>
        
        {/* Blue layer */}
        <motion.h1
          className={`${size} font-bold text-blue-500/20 absolute`}
          style={{ transform: 'translate(2px, 1px)' }}
          animate={glitch ? { x: [2, -2, 2] } : {}}
          transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 2.5 }}
        >
          {children}
        </motion.h1>
      </div>
      
      {/* Scan lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-1"
          animate={{ y: ['-100%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      
      {/* Glow effect */}
      <div 
        className="absolute inset-0 blur-xl opacity-30 pointer-events-none"
        style={{
          background: `linear-gradient(45deg, 
            rgba(101, 163, 13, 0.3), 
            rgba(34, 197, 94, 0.3), 
            rgba(101, 163, 13, 0.3)
          )`
        }}
      />
    </motion.div>
  );
};

export default HolographicText;

