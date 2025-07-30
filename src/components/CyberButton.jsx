import { motion } from 'framer-motion';

const CyberButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  icon: Icon,
  ...props 
}) => {
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 border-primary/50',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90 border-secondary/50',
    accent: 'bg-accent text-accent-foreground hover:bg-accent/90 border-accent/50',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
    ghost: 'text-primary hover:bg-primary/10 border-transparent'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const buttonVariants = {
    initial: { 
      scale: 1,
      boxShadow: '0 0 0 rgba(101, 163, 13, 0)'
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 0 20px rgba(101, 163, 13, 0.4)',
      transition: {
        duration: 0.2,
        ease: 'easeOut'
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  const glitchVariants = {
    initial: { x: 0, y: 0 },
    hover: {
      x: [0, -1, 1, 0],
      y: [0, 1, -1, 0],
      transition: {
        duration: 0.2,
        repeat: 2,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <motion.button
      className={`
        relative font-medium rounded-md border transition-all duration-200
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
        overflow-hidden
      `}
      variants={buttonVariants}
      initial="initial"
      whileHover={!disabled ? 'hover' : 'initial'}
      whileTap={!disabled ? 'tap' : 'initial'}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...props}
    >
      {/* Background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Scan line effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full"
        whileHover={{ translateX: '200%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
      
      {/* Content */}
      <motion.div
        className="relative z-10 flex items-center justify-center space-x-2"
        variants={glitchVariants}
      >
        {Icon && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />}
        <span>{children}</span>
      </motion.div>
      
      {/* Corner brackets */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-current opacity-50" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-current opacity-50" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-current opacity-50" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-current opacity-50" />
      
      {/* Pulse effect on hover */}
      <motion.div
        className="absolute inset-0 border border-current rounded-md opacity-0"
        whileHover={{
          opacity: [0, 0.5, 0],
          scale: [1, 1.05, 1.1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'easeOut'
        }}
      />
    </motion.button>
  );
};

export default CyberButton;

