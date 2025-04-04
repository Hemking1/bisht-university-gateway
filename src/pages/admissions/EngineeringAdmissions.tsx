
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Clock, GraduationCap, BookOpen, DollarSign, ClipboardCheck } from "lucide-react";

const EngineeringAdmissions = () => {
  const applicationSteps = [
    {
      title: "Research Programs",
      description: "Explore our engineering programs to find the right fit for your interests and career goals.",
      icon: BookOpen
    },
    {
      title: "Check Requirements",
      description: "Review admission requirements, including academic prerequisites, test scores, and application materials.",
      icon: ClipboardCheck
    },
    {
      title: "Prepare Application",
      description: "Gather necessary documents, write your personal statement, and secure recommendation letters.",
      icon: GraduationCap
    },
    {
      title: "Submit Application",
      description: "Complete and submit your application through our online portal before the deadline.",
      icon: CalendarDays
    },
    {
      title: "Track Status",
      description: "Monitor your application status through our applicant portal and respond to any additional requests.",
      icon: Clock
    },
    {
      title: "Financial Aid",
      description: "Explore scholarship opportunities and financial aid options to support your education.",
      icon: DollarSign
    },
  ];

  const faqs = [
    {
      question: "What are the minimum GPA requirements for engineering programs?",
      answer: "For undergraduate programs, we recommend a minimum high school GPA of 3.5 on a 4.0 scale, with strong performance in mathematics and science courses. For graduate programs, a minimum undergraduate GPA of 3.3 is typically expected, though the admissions committee considers the complete application package."
    },
    {
      question: "Are standardized tests required for admission?",
      answer: "Yes, undergraduate applicants should submit either SAT or ACT scores. For graduate programs, the GRE is required, with particular attention to the quantitative reasoning section. International students must also demonstrate English proficiency through TOEFL, IELTS, or equivalent tests."
    },
    {
      question: "Can I transfer credits from another institution?",
      answer: "Yes, Bisht University accepts transfer credits from accredited institutions. The number of transferable credits depends on course equivalency and program requirements. Transfer students should submit official transcripts for evaluation during the application process."
    },
    {
      question: "Are there any specific prerequisite courses for engineering programs?",
      answer: "Yes, undergraduate applicants should have completed advanced mathematics (including calculus), physics, chemistry, and computer science courses in high school. Graduate applicants should have a bachelor's degree in engineering or a related field with appropriate foundational coursework."
    },
    {
      question: "What scholarships are available for engineering students?",
      answer: "Bisht University offers merit-based scholarships, need-based financial aid, and department-specific scholarships for engineering students. These include the Engineering Excellence Scholarship, Women in Engineering Scholarship, and various research fellowships for graduate students."
    },
    {
      question: "Is work experience required for graduate engineering programs?",
      answer: "While not always required, relevant work experience strengthens graduate applications, especially for specialized programs. Research experience is particularly valuable for PhD applicants."
    }
  ];

  const importantDates = [
    {
      event: "Fall Semester Application Deadline",
      date: "February 1, 2026",
      description: "Regular decision deadline for fall admission"
    },
    {
      event: "Early Action Deadline",
      date: "November 1, 2025",
      description: "Early application deadline with non-binding admission decision"
    },
    {
      event: "Spring Semester Application Deadline",
      date: "October 1, 2025",
      description: "Deadline for spring semester admission"
    },
    {
      event: "Admission Decisions Released",
      date: "April 1, 2026",
      description: "Regular decision applicants notified of admission status"
    },
    {
      event: "Enrollment Confirmation Deadline",
      date: "May 1, 2026",
      description: "Deadline to confirm attendance and submit deposit"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Engineering Admissions"
        subtitle="Join our community of innovative problem-solvers and future technology leaders"
        backgroundImage="https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=1920&q=80"
      >
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link to="/apply">
            <Button className="btn-primary w-full sm:w-auto">Apply Now</Button>
          </Link>
          <Link to="/contact/admissions">
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto">
              Contact Admissions
            </Button>
          </Link>
        </div>
      </HeroSection>

      {/* Overview Section */}
      <section className="py-16">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Admission to the School of Engineering</h2>
            <p className="text-lg text-gray-600 mb-8">
              The School of Engineering at Bisht University seeks curious, creative, and motivated students who are passionate about using technology to solve real-world problems. Our rigorous programs prepare students for successful careers in a rapidly evolving field.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-10">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-bisht-navy mb-4">Undergraduate Admission</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-bisht-maroon mr-2">•</span>
                    <span>Strong academic background with focus on mathematics and sciences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bisht-maroon mr-2">•</span>
                    <span>SAT/ACT scores (recommended minimum: 1350 SAT, 29 ACT)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bisht-maroon mr-2">•</span>
                    <span>Personal statement highlighting interest in engineering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bisht-maroon mr-2">•</span>
                    <span>Extracurricular activities demonstrating leadership and innovation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bisht-maroon mr-2">•</span>
                    <span>Two letters of recommendation</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-bisht-navy mb-4">Graduate Admission</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-bisht-maroon mr-2">•</span>
                    <span>Bachelor's degree in engineering or related field</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bisht-maroon mr-2">•</span>
                    <span>GRE scores (minimum 155 Verbal, 165 Quantitative)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bisht-maroon mr-2">•</span>
                    <span>Statement of purpose outlining research interests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bisht-maroon mr-2">•</span>
                    <span>Three academic or professional references</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bisht-maroon mr-2">•</span>
                    <span>Research experience or relevant work experience</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="page-container">
          <h2 className="section-title text-center">Application Process</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Follow these steps to complete your application to the School of Engineering at Bisht University.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applicationSteps.map((step, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="bg-bisht-maroon/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-bisht-maroon" />
                  </div>
                  <h3 className="text-xl font-bold text-bisht-navy mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/apply">
              <Button className="btn-primary">Start Your Application</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16">
        <div className="page-container">
          <h2 className="section-title text-center">Important Dates</h2>
          <div className="max-w-3xl mx-auto mt-8">
            {importantDates.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row border-b border-gray-200 py-4 last:border-b-0"
              >
                <div className="md:w-1/3 font-bold text-bisht-navy mb-2 md:mb-0">{item.event}</div>
                <div className="md:w-1/4 text-bisht-maroon font-medium mb-2 md:mb-0">{item.date}</div>
                <div className="md:w-5/12 text-gray-600">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="page-container">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto mt-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm border border-gray-100">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold text-bisht-navy hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-bisht-navy text-white">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Have Questions?</h2>
              <p className="text-lg mb-8">
                Our admissions counselors are here to help you navigate the application process and answer any questions you may have about our engineering programs.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-bisht-gold mr-3" />
                  <span>Request an information packet</span>
                </div>
                <div className="flex items-center">
                  <CalendarDays className="h-5 w-5 text-bisht-gold mr-3" />
                  <span>Schedule a campus visit</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-bisht-gold mr-3" />
                  <span>Speak with a current engineering student</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact/admissions">
                  <Button className="btn-accent w-full sm:w-auto">Contact Admissions</Button>
                </Link>
                <Link to="/visit">
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto">
                    Schedule a Tour
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-bisht-navy mb-6">Contact Information</h3>
              <div className="space-y-6 text-gray-600">
                <div>
                  <p className="font-semibold text-bisht-maroon mb-1">Engineering Admissions Office</p>
                  <p>Bisht University Engineering Building</p>
                  <p>123 University Avenue</p>
                  <p>Bisht City, BC 12345</p>
                </div>
                <div>
                  <p className="font-semibold text-bisht-maroon mb-1">Email</p>
                  <p>engineering.admissions@bishtuniversity.edu</p>
                </div>
                <div>
                  <p className="font-semibold text-bisht-maroon mb-1">Phone</p>
                  <p>(555) 123-4567</p>
                </div>
                <div>
                  <p className="font-semibold text-bisht-maroon mb-1">Office Hours</p>
                  <p>Monday - Friday: 8:30 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM (by appointment)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EngineeringAdmissions;
