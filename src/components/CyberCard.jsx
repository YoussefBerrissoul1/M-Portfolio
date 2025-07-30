import { motion } from 'framer-motion';

const CyberCard = ({ 
  children, 
  className = '', 
  glitch = false, 
  neonGlow = false,
  hover3d = true,
  ...props 
}) => {
  const cardVariants = {
    initial: { 
      rotateX: 0, 
      rotateY: 0, 
      scale: 1,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    },
    hover: hover3d ? {
      rotateX: -5,
      rotateY: 5,
      scale: 1.02,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    } : {}
  };

  return (
    <motion.div
      className={`
        relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-6
        ${glitch ? 'glitch-effect' : ''}
        ${neonGlow ? 'neon-glow' : ''}
        ${className}
      `}
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      {...props}
    >
      {/* Cyber grid overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full"
             style={{
               backgroundImage: `
                 linear-gradient(rgba(101, 163, 13, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(101, 163, 13, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '20px 20px'
             }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/50" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/50" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/50" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/50" />
    </motion.div>
  );
};

export default CyberCard;

