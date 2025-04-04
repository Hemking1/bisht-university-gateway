
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ProgramCard from "@/components/ProgramCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";

const Engineering = () => {
  const undergraduatePrograms = [
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
    },
    {
      title: "Electrical Engineering",
      description: "Specialize in power systems, electronics, telecommunications, or control systems with our versatile electrical engineering program.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      link: "/academics/engineering/electrical",
      duration: "4 Years",
      level: "Bachelor's Degree"
    },
    {
      title: "Chemical Engineering",
      description: "Apply principles of chemistry, physics, biology, and mathematics to solve problems involving the production or use of chemicals and other products.",
      image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=800&q=80",
      link: "/academics/engineering/chemical",
      duration: "4 Years",
      level: "Bachelor's Degree"
    },
    {
      title: "Aerospace Engineering",
      description: "Design and develop aircraft, spacecraft, satellites, and missiles with our cutting-edge aerospace engineering program.",
      image: "https://images.unsplash.com/photo-1518184945-21b1fc87f535?auto=format&fit=crop&w=800&q=80",
      link: "/academics/engineering/aerospace",
      duration: "4 Years",
      level: "Bachelor's Degree"
    }
  ];

  const graduatePrograms = [
    {
      title: "Master of Computer Science",
      description: "Deepen your expertise in artificial intelligence, machine learning, data science, and software engineering with advanced research opportunities.",
      image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?auto=format&fit=crop&w=800&q=80",
      link: "/academics/engineering/ms-computer-science",
      duration: "2 Years",
      level: "Master's Degree"
    },
    {
      title: "Master of Mechanical Engineering",
      description: "Specialize in robotics, manufacturing, thermal systems, or mechanics with research-oriented advanced studies.",
      image: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=800&q=80",
      link: "/academics/engineering/ms-mechanical",
      duration: "2 Years",
      level: "Master's Degree"
    },
    {
      title: "PhD in Engineering",
      description: "Contribute to groundbreaking research and become a leader in your field with our doctoral programs in various engineering disciplines.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
      link: "/academics/engineering/phd",
      duration: "4-5 Years",
      level: "Doctoral Degree"
    }
  ];

  const facilities = [
    {
      name: "Advanced Computing Lab",
      description: "Equipped with high-performance computing clusters, AI research facilities, and specialized software for advanced simulations and data analysis."
    },
    {
      name: "Robotics and Automation Center",
      description: "State-of-the-art facilities for designing, testing, and researching robotic systems with industry-standard equipment."
    },
    {
      name: "Materials Testing Laboratory",
      description: "Comprehensive facilities for testing and analyzing materials properties, including tensile, compression, and hardness testing."
    },
    {
      name: "Fluid Dynamics Lab",
      description: "Wind tunnels, water channels, and advanced modeling software for studying fluid behavior and aerodynamics."
    },
    {
      name: "Electronics and Circuits Lab",
      description: "Equipped with the latest testing equipment, prototyping tools, and microelectronics facilities."
    },
    {
      name: "Engineering Design Studio",
      description: "Collaborative spaces with 3D printers, CAD workstations, and prototyping equipment for design projects."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="School of Engineering"
        subtitle="Innovate, design, and build solutions for tomorrow's challenges"
        backgroundImage="https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1920&q=80"
      >
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link to="/admissions/engineering">
            <Button className="btn-primary w-full sm:w-auto">Apply Now</Button>
          </Link>
          <Link to="/academics/engineering/research">
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto">
              Research Opportunities
            </Button>
          </Link>
        </div>
      </HeroSection>

      {/* Overview Section */}
      <section className="py-16">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Engineering Excellence at Bisht University</h2>
              <p className="text-gray-600 mb-6">
                The School of Engineering at Bisht University is dedicated to educating the next generation of engineering leaders and advancing cutting-edge research to address the world's most pressing challenges.
              </p>
              <p className="text-gray-600 mb-6">
                With a focus on innovation, hands-on learning, and interdisciplinary collaboration, our programs prepare students for successful careers in a rapidly evolving technological landscape. Our faculty includes renowned experts who are at the forefront of their fields.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-bisht-maroon mt-1 mr-2" />
                  <p>Top-ranked programs with ABET accreditation</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-bisht-maroon mt-1 mr-2" />
                  <p>State-of-the-art research and teaching facilities</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-bisht-maroon mt-1 mr-2" />
                  <p>Strong industry partnerships for internships and job placements</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-bisht-maroon mt-1 mr-2" />
                  <p>Interdisciplinary research opportunities</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-bisht-maroon mt-1 mr-2" />
                  <p>Global exchange programs with top engineering schools worldwide</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80" 
                alt="Engineering students working on a project" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="page-container">
          <h2 className="section-title text-center">Our Engineering Programs</h2>
          
          <Tabs defaultValue="undergraduate" className="mt-8">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="undergraduate">Undergraduate Programs</TabsTrigger>
              <TabsTrigger value="graduate">Graduate Programs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="undergraduate">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {undergraduatePrograms.map((program, index) => (
                  <ProgramCard key={index} {...program} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="graduate">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {graduatePrograms.map((program, index) => (
                  <ProgramCard key={index} {...program} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16">
        <div className="page-container">
          <h2 className="section-title text-center">World-Class Facilities</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Our engineering students have access to cutting-edge laboratories, workshops, and research centers that provide hands-on experience with the latest technologies and equipment.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-bisht-navy mb-3">{facility.name}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Spotlight */}
      <section className="py-16 bg-bisht-navy text-white">
        <div className="page-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Faculty Spotlight</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="Dr. Robert Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Dr. Robert Chen</h3>
              <p className="text-bisht-gold mb-3">Professor of Computer Science</p>
              <p className="text-gray-300 text-sm">
                Leading researcher in artificial intelligence and machine learning with over 200 published papers.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="Dr. Sarah Patel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Dr. Sarah Patel</h3>
              <p className="text-bisht-gold mb-3">Department Chair, Mechanical Engineering</p>
              <p className="text-gray-300 text-sm">
                Award-winning engineer specializing in sustainable energy systems and robotics.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="Dr. Michael Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Dr. Michael Johnson</h3>
              <p className="text-bisht-gold mb-3">Professor of Civil Engineering</p>
              <p className="text-gray-300 text-sm">
                Pioneering researcher in structural engineering with industry experience on major infrastructure projects.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/academics/engineering/faculty">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Meet All Faculty
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-bisht-gold">
        <div className="page-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-bisht-navy mb-4">Ready to Engineer the Future?</h2>
          <p className="text-xl text-bisht-navy/80 max-w-2xl mx-auto mb-8">
            Join our community of innovative thinkers and problem solvers at the School of Engineering.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/admissions/engineering">
              <Button className="btn-secondary w-full sm:w-auto">Apply Now</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="bg-transparent border-bisht-navy text-bisht-navy hover:bg-bisht-navy/10 w-full sm:w-auto">
                Contact an Advisor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Engineering;
