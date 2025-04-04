
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ProgramCard from "@/components/ProgramCard";
import TestimonialSection from "@/components/TestimonialSection";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, GraduationCap, BookOpen, Trophy, Building, Users } from "lucide-react";

const Index = () => {
  // Sample data for featured programs
  const engineeringPrograms = [
    {
      title: "Computer Science and Engineering",
      description: "Develop cutting-edge skills in programming, algorithms, artificial intelligence, and more with our comprehensive computer science and engineering program.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      link: "/academics/engineering/computer-science",
      duration: "4 Years",
      level: "Bachelor's Degree"
    },
    {
      title: "Mechanical Engineering",
      description: "Learn to design and analyze mechanical systems, from robotics to aerospace, with hands-on projects and industry partnerships.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
      link: "/academics/engineering/mechanical",
      duration: "4 Years",
      level: "Bachelor's Degree"
    },
    {
      title: "Civil Engineering",
      description: "Design sustainable infrastructure and solve complex environmental challenges through our acclaimed civil engineering program.",
      image: "https://images.unsplash.com/photo-1477927849362-0fb1e898b8a6?auto=format&fit=crop&w=800&q=80",
      link: "/academics/engineering/civil",
      duration: "4 Years",
      level: "Bachelor's Degree"
    }
  ];

  const businessPrograms = [
    {
      title: "Business Administration",
      description: "Gain essential management skills and business acumen to lead organizations across various industries with our comprehensive BBA program.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
      link: "/academics/business/administration",
      duration: "4 Years",
      level: "Bachelor's Degree"
    },
    {
      title: "Finance and Accounting",
      description: "Master financial analysis, investment strategies, and accounting principles to excel in the global financial sector.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      link: "/academics/business/finance",
      duration: "4 Years",
      level: "Bachelor's Degree"
    },
    {
      title: "Marketing Management",
      description: "Learn cutting-edge marketing strategies, consumer behavior analysis, and digital marketing tactics to drive business growth.",
      image: "https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?auto=format&fit=crop&w=800&q=80",
      link: "/academics/business/marketing",
      duration: "4 Years",
      level: "Bachelor's Degree"
    }
  ];

  const sciencePrograms = [
    {
      title: "Physics",
      description: "Explore the fundamental laws that govern the universe through theoretical study and hands-on laboratory research.",
      image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=800&q=80",
      link: "/academics/science/physics",
      duration: "4 Years",
      level: "Bachelor's Degree"
    },
    {
      title: "Chemistry",
      description: "Develop expertise in organic, inorganic, and physical chemistry with access to state-of-the-art laboratory facilities.",
      image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=800&q=80",
      link: "/academics/science/chemistry",
      duration: "4 Years",
      level: "Bachelor's Degree"
    },
    {
      title: "Biology",
      description: "Study living organisms and ecological systems with opportunities for fieldwork and cutting-edge research projects.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80",
      link: "/academics/science/biology",
      duration: "4 Years",
      level: "Bachelor's Degree"
    }
  ];

  const medicalPrograms = [
    {
      title: "Medicine (MBBS)",
      description: "Begin your journey to becoming a physician with our comprehensive medical program featuring clinical rotations and research opportunities.",
      image: "https://images.unsplash.com/photo-1587556930799-8dca6fad6d41?auto=format&fit=crop&w=800&q=80",
      link: "/academics/medical/medicine",
      duration: "5 Years",
      level: "Professional Degree"
    },
    {
      title: "Nursing",
      description: "Prepare for a rewarding career in healthcare with our nursing program that combines clinical practice with compassionate patient care.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      link: "/academics/medical/nursing",
      duration: "4 Years",
      level: "Bachelor's Degree"
    },
    {
      title: "Pharmacy",
      description: "Gain expertise in pharmaceutical sciences and medication management through laboratory work and clinical placements.",
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80",
      link: "/academics/medical/pharmacy",
      duration: "4 Years",
      level: "Bachelor's Degree"
    }
  ];

  // Featured news and events
  const newsAndEvents = [
    {
      title: "Bisht University Researchers Discover New Renewable Energy Material",
      date: "April 1, 2025",
      image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      title: "Annual Alumni Networking Gala Set for May 15",
      date: "March 28, 2025",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      title: "Business School Partners with Fortune 500 Companies for Internships",
      date: "March 25, 2025",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Shape Your Future at Bisht University"
        subtitle="Discover world-class education, groundbreaking research, and unparalleled opportunities."
        backgroundImage="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=1920&q=80"
      >
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link to="/apply">
            <Button className="btn-primary w-full sm:w-auto">Apply Now</Button>
          </Link>
          <Link to="/academics">
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto">
              Explore Programs
            </Button>
          </Link>
        </div>
      </HeroSection>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="page-container">
          <h2 className="section-title text-center">Why Choose Bisht University</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-bisht-maroon/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-bisht-maroon" />
              </div>
              <h3 className="text-xl font-bold text-bisht-navy mb-2">Academic Excellence</h3>
              <p className="text-gray-600">
                Our rigorous academic programs are designed to challenge and inspire, led by renowned faculty who are leaders in their fields.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-bisht-navy/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-bisht-navy" />
              </div>
              <h3 className="text-xl font-bold text-bisht-navy mb-2">Innovative Research</h3>
              <p className="text-gray-600">
                From groundbreaking scientific discoveries to transformative humanities research, our community is advancing knowledge across disciplines.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-bisht-gold/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-bisht-gold" />
              </div>
              <h3 className="text-xl font-bold text-bisht-navy mb-2">Global Recognition</h3>
              <p className="text-gray-600">
                Our graduates are sought after by top employers worldwide, and our programs consistently rank among the best internationally.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-bisht-navy/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-bisht-navy" />
              </div>
              <h3 className="text-xl font-bold text-bisht-navy mb-2">Modern Facilities</h3>
              <p className="text-gray-600">
                State-of-the-art laboratories, libraries, and learning spaces equipped with the latest technology to support your educational journey.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-bisht-maroon/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-bisht-maroon" />
              </div>
              <h3 className="text-xl font-bold text-bisht-navy mb-2">Diverse Community</h3>
              <p className="text-gray-600">
                Join a vibrant community of students and scholars from over 100 countries, bringing diverse perspectives and experiences.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-bisht-gold/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CalendarDays className="h-8 w-8 text-bisht-gold" />
              </div>
              <h3 className="text-xl font-bold text-bisht-navy mb-2">Career Support</h3>
              <p className="text-gray-600">
                Comprehensive career services, internship opportunities, and a powerful alumni network to help you achieve your professional goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Programs Section */}
      <section className="py-16">
        <div className="page-container">
          <h2 className="section-title text-center">Explore Our Programs</h2>
          
          <Tabs defaultValue="engineering" className="mt-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="engineering">Engineering</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="science">Science</TabsTrigger>
              <TabsTrigger value="medical">Medical</TabsTrigger>
            </TabsList>
            
            <TabsContent value="engineering">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {engineeringPrograms.map((program, index) => (
                  <ProgramCard key={index} {...program} />
                ))}
              </div>
              <div className="text-center mt-8">
                <Link to="/academics/engineering">
                  <Button variant="outline" className="text-bisht-navy border-bisht-navy hover:bg-bisht-navy hover:text-white transition-colors">
                    View All Engineering Programs
                  </Button>
                </Link>
              </div>
            </TabsContent>
            
            <TabsContent value="business">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {businessPrograms.map((program, index) => (
                  <ProgramCard key={index} {...program} />
                ))}
              </div>
              <div className="text-center mt-8">
                <Link to="/academics/business">
                  <Button variant="outline" className="text-bisht-navy border-bisht-navy hover:bg-bisht-navy hover:text-white transition-colors">
                    View All Business Programs
                  </Button>
                </Link>
              </div>
            </TabsContent>
            
            <TabsContent value="science">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sciencePrograms.map((program, index) => (
                  <ProgramCard key={index} {...program} />
                ))}
              </div>
              <div className="text-center mt-8">
                <Link to="/academics/science">
                  <Button variant="outline" className="text-bisht-navy border-bisht-navy hover:bg-bisht-navy hover:text-white transition-colors">
                    View All Science Programs
                  </Button>
                </Link>
              </div>
            </TabsContent>
            
            <TabsContent value="medical">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {medicalPrograms.map((program, index) => (
                  <ProgramCard key={index} {...program} />
                ))}
              </div>
              <div className="text-center mt-8">
                <Link to="/academics/medical">
                  <Button variant="outline" className="text-bisht-navy border-bisht-navy hover:bg-bisht-navy hover:text-white transition-colors">
                    View All Medical Programs
                  </Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* News & Events Section */}
      <section className="py-16">
        <div className="page-container">
          <h2 className="section-title text-center">Latest News & Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {newsAndEvents.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-bisht-maroon mb-2">{item.date}</div>
                  <h3 className="text-xl font-bold text-bisht-navy mb-4">{item.title}</h3>
                  <a 
                    href={item.link} 
                    className="text-bisht-maroon font-medium hover:text-bisht-maroon/80 transition-colors"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/news">
              <Button variant="outline" className="text-bisht-navy border-bisht-navy hover:bg-bisht-navy hover:text-white transition-colors">
                View All News & Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bisht-navy text-white">
        <div className="page-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Begin Your Journey at Bisht University</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Take the first step toward a transformative educational experience that will prepare you for success and leadership in a rapidly changing world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/apply">
              <Button className="btn-accent w-full sm:w-auto">Apply Now</Button>
            </Link>
            <Link to="/visit">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Schedule a Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
