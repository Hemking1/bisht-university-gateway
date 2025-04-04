
import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  children?: ReactNode;
}

const HeroSection = ({ title, subtitle, backgroundImage, children }: HeroSectionProps) => {
  return (
    <div 
      className="relative h-[80vh] flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay"></div>
      <div className="relative z-10 text-center text-white px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl mb-8">{subtitle}</p>}
        {children}
      </div>
    </div>
  );
};

export default HeroSection;
