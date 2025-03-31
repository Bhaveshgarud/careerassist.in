import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Button } from "src/components/ui/button";
import { Brain, BookOpen, Laptop, Users, CheckCircle, Star, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const assistMeServices = [
    {
      title: "AI Guidance",
      description: "Learn to use AI tools effectively for your projects and tasks.",
      icon: <Brain className="h-8 w-8 text-primary" />,
    },
    {
      title: "Study Partner",
      description: "Get help understanding complex topics and preparing for exams.",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
    {
      title: "Tech Support",
      description: "Receive assistance with technical issues and digital troubleshooting.",
      icon: <Laptop className="h-8 w-8 text-primary" />,
    },
    {
      title: "Elderly Tech Assistance",
      description: "Patient guidance for seniors learning to navigate digital devices.",
      icon: <Users className="h-8 w-8 text-primary" />,
    }
  ];

  const testimonials = [
    {
      name: "Priya S.",
      role: "Student",
      content: "AssistMe helped me understand complex AI concepts for my project. The personalized guidance was exactly what I needed!",
      rating: 5
    },
    {
      name: "Rahul M.",
      role: "Professional",
      content: "I was struggling with integrating AI tools into my workflow. The AI Guidance session was incredibly helpful and practical.",
      rating: 5
    },
    {
      name: "Anita P.",
      role: "Senior Citizen",
      content: "The patience and clear explanations during my Elderly Tech Assistance session helped me finally feel comfortable using my new tablet.",
      rating: 5
    }
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <motion.div 
        className="flex flex-col md:flex-row items-center gap-12 py-20"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Introducing <span className="text-primary">AssistMe</span>: Your Personal Digital Guide
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Get one-on-one assistance with AI tools, studying, tech support, and more. 
            Navigate the digital world with confidence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link to="/assistme">Learn More</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/onetomany">Explore OneToMany</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <img 
            src="/images/assistme-hero.jpg" 
            alt="AssistMe Service" 
            className="rounded-lg shadow-lg w-full h-auto"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg?height=400&width=600";
            }}
          />
        </div>
      </motion.div>

      {/* About CareerAssist Section */}
      <motion.div 
        className="py-16 bg-gray-50 rounded-lg my-20 p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold text-center mb-8">About CareerAssist</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <p className="text-lg mb-4">
              CareerAssist was founded with a mission to simplify the job search process for students, 
              recent graduates, and professionals seeking career changes.
            </p>
            <p className="text-lg mb-4">
              Our flagship service, OneToMany, handles the time-consuming task of applying to multiple 
              companies, allowing you to focus on preparing for interviews and showcasing your talents.
            </p>
            <p className="text-lg">
              Now, we're expanding our offerings with AssistMe, providing personalized assistance 
              across various digital needs to help you thrive in today's technology-driven world.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img 
              src="/images/new_logo.png" 
              alt="CareerAssist Logo" 
              className="max-w-xs"
            />
          </div>
        </div>
      </motion.div>

      {/* New Service: AssistMe Section */}
      <motion.div 
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <h2 className="text-3xl font-bold text-center mb-4">New Service: AssistMe</h2>
        <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          Personalized, one-on-one assistance across a range of digital needs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {assistMeServices.map((service, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="h-full hover:shadow-md transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="p-2 bg-primary/10 rounded-full w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Link to="/assistme" className="text-primary flex items-center gap-1 text-sm font-medium">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/assistme">Explore AssistMe</Link>
          </Button>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div 
        className="py-16 bg-gray-50 rounded-lg my-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div 
        className="py-16 mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto p-3 bg-primary/10 rounded-full mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <a href="mailto:careerassist.in@gmail.com" className="text-primary hover:underline">
                careerassist.in@gmail.com
              </a>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto p-3 bg-primary/10 rounded-full mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <a href="tel:+917972968137" className="text-primary hover:underline">
                +91 7972968137
              </a>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto p-3 bg-primary/10 rounded-full mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Ulhasnagar, Maharashtra</p>
              <p>India</p>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        className="text-center bg-primary/10 p-12 rounded-lg mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Explore our services and find the perfect solution for your needs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link to="/assistme">Try AssistMe</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/onetomany">Explore OneToMany</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}