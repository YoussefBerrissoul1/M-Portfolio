import { Shield, Lock, Code, Database, Network, Cpu } from 'lucide-react';

const FloatingElements = () => {
  const elements = [
    { Icon: Shield, delay: 0, x: '10%', y: '20%' },
    { Icon: Lock, delay: 1, x: '80%', y: '15%' },
    { Icon: Code, delay: 2, x: '15%', y: '70%' },
    { Icon: Database, delay: 3, x: '85%', y: '75%' },
    { Icon: Network, delay: 4, x: '50%', y: '10%' },
    { Icon: Cpu, delay: 5, x: '90%', y: '45%' },
  ];

  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      {elements.map(({ Icon, delay, x, y }, index) => (
        <div
          key={index}
          className="absolute opacity-20 text-primary"
          style={{
            left: x,
            top: y,
            animationDelay: `${delay}s`,
          }}
        >
          <div className="float-animation">
            <Icon 
              size={32} 
              className="drop-shadow-lg filter blur-[0.5px]" 
            />
          </div>
        </div>
      ))}
      
      {/* Additional geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-primary/30 rotate-45 float-animation opacity-30" 
           style={{ animationDelay: '6s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-12 h-12 border border-accent/30 rotate-12 float-animation opacity-30" 
           style={{ animationDelay: '7s' }} />
      <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-primary/20 rounded-full float-animation" 
           style={{ animationDelay: '8s' }} />
    </div>
  );
};

export default FloatingElements;

