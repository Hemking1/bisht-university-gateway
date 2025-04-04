
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const TestimonialSection = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "My experience at Bisht University has been transformative. The professors are world-class and the opportunities for research and internships are unparalleled.",
      name: "Sarah Johnson",
      role: "Computer Science, Class of 2024",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      quote: "The business program prepared me for the real world in ways I couldn't have imagined. The network I built and the mentorship I received have been invaluable to my career.",
      name: "Michael Chen",
      role: "MBA Graduate, 2022",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      quote: "As a medical student, I appreciate the state-of-the-art facilities and the emphasis on both theoretical knowledge and practical skills. Bisht University is truly a leader in medical education.",
      name: "Dr. Priya Sharma",
      role: "Medicine, Class of 2020",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&h=200&auto=format&fit=crop"
    }
  ];

  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="page-container">
        <h2 className="section-title text-center">What Our Students Say</h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                    <div className="mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
                      />
                      <h3 className="font-semibold text-lg text-bisht-navy">{testimonial.name}</h3>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                    <p className="text-gray-600 italic text-lg">"{testimonial.quote}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prev} 
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-bisht-navy" />
          </button>
          
          <button 
            onClick={next} 
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-bisht-navy" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
