
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  duration?: string;
  level?: string;
}

const ProgramCard = ({ title, description, image, link, duration, level }: ProgramCardProps) => {
  return (
    <div className="program-card group">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-bisht-navy mb-2">{title}</h3>
        
        {(duration || level) && (
          <div className="flex gap-4 mb-3 text-sm text-gray-600">
            {duration && <span>{duration}</span>}
            {level && <span>{level}</span>}
          </div>
        )}
        
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        <Link to={link}>
          <Button variant="outline" className="text-bisht-maroon border-bisht-maroon hover:bg-bisht-maroon hover:text-white transition-colors">
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;
