import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'slide-in-left' | 'slide-in-right';
  className?: string;
  threshold?: number;
  delay?: number;
}

const AnimatedSection = ({ 
  children, 
  animation = 'fade-in', 
  className = '', 
  threshold = 0.1,
  delay = 0 
}: AnimatedSectionProps) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`${className} ${inView ? `animate-${animation}` : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;