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
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "src/components/ui/accordion";
import { Brain, BookOpen, Laptop, Users, CheckCircle, Calendar, MessageSquare, Clock } from 'lucide-react';

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

export default function AssistMe() {
  const services = [
    {
      title: "AI Guidance",
      description: "Get personalized guidance on using AI tools effectively for your projects and tasks.",
      icon: <Brain className="h-10 w-10 text-primary" />,
      features: [
        "Learn prompt engineering techniques",
        "Discover the best AI tools for your needs",
        "Get help with AI-powered content creation",
        "Understand AI limitations and capabilities"
      ]
    },
    {
      title: "Study Partner",
      description: "Have a dedicated partner to help you understand complex topics and prepare for exams.",
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      features: [
        "Personalized study plans",
        "Complex topic explanations",
        "Practice questions and feedback",
        "Exam preparation strategies"
      ]
    },
    {
      title: "Tech Support",
      description: "Receive assistance with technical issues, software setup, and digital troubleshooting.",
      icon: <Laptop className="h-10 w-10 text-primary" />,
      features: [
        "Software installation and setup",
        "Hardware troubleshooting",
        "Digital security guidance",
        "Performance optimization"
      ]
    },
    {
      title: "Elderly Tech Assistance",
      description: "Patient and clear guidance for seniors learning to navigate digital devices and services.",
      icon: <Users className="h-10 w-10 text-primary" />,
      features: [
        "Basic device operation",
        "Email and messaging setup",
        "Video calling assistance",
        "Online safety education"
      ]
    }
  ];

  const howItWorks = [
    {
      title: "Book a Session",
      description: "Choose the type of assistance you need and select a convenient time slot.",
      icon: <Calendar className="h-8 w-8 text-primary" />
    },
    {
      title: "Connect With Me",
      description: "Join a video call or chat session where we'll address your specific needs.",
      icon: <MessageSquare className="h-8 w-8 text-primary" />
    },
    {
      title: "Get Personalized Help",
      description: "Receive tailored guidance and solutions for your unique situation.",
      icon: <CheckCircle className="h-8 w-8 text-primary" />
    },
    {
      title: "Follow-Up Support",
      description: "Access additional resources and follow-up assistance as needed.",
      icon: <Clock className="h-8 w-8 text-primary" />
    }
  ];

  const pricingPlans = [
    {
      title: "Basic",
      price: "₹99",
      duration: "per session",
      features: [
        "30-minute one-on-one session",
        "Basic issue resolution",
        "Email follow-up",
        "Resource recommendations"
      ],
      isPopular: false
    },
    {
      title: "Standard",
      price: "₹199",
      duration: "per session",
      features: [
        "60-minute one-on-one session",
        "Comprehensive assistance",
        "3 days of follow-up support",
        "Personalized resource package",
        "Priority scheduling"
      ],
      isPopular: true
    },
    {
      title: "Premium",
      price: "₹499",
      duration: "monthly",
      features: [
        "Weekly 45-minute sessions",
        "Unlimited email support",
        "Custom learning materials",
        "24/7 priority assistance",
        "Monthly progress review"
      ],
      isPopular: false
    }
  ];

  const faqs = [
    {
      question: "What types of AI tools can you help me with?",
      answer: "I can help you with a wide range of AI tools including ChatGPT, DALL-E, Midjourney, Stable Diffusion, and various AI-powered productivity tools. Whether you need assistance with prompt engineering, understanding capabilities, or integrating AI into your workflow, I'm here to help."
    },
    {
      question: "How do the study partner sessions work?",
      answer: "Study partner sessions are personalized to your learning needs. We'll start by identifying your goals and challenges, then create a structured approach to help you understand complex topics. Sessions include explanations, practice problems, and strategies tailored to your learning style."
    },
    {
      question: "Do I need any special equipment for the tech support sessions?",
      answer: "For most tech support sessions, you'll just need your device (computer, phone, tablet) and a stable internet connection. For more complex issues, I may ask you to install screen sharing software so I can better assist you."
    },
    {
      question: "Is there a satisfaction guarantee?",
      answer: "Yes! If you're not satisfied with your session, I offer a 100% money-back guarantee. My goal is to ensure you receive valuable assistance that addresses your specific needs."
    },
    {
      question: "Can I change or reschedule my booking?",
      answer: "Yes, you can reschedule your session up to 24 hours before the scheduled time at no additional cost. Changes requested with less than 24 hours' notice may be subject to a rescheduling fee."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <motion.div 
        className="text-center mb-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">AssistMe: Your Personal Digital Guide</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Get personalized, one-on-one assistance with AI tools, studying, tech support, and more. 
          I'm here to help you navigate the digital world with confidence.
        </p>
        <Button size="lg" className="animate-pulse">
          Book a Session Now
        </Button>
      </motion.div>

      {/* Services Section */}
      <motion.div 
        className="mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <h2 className="text-3xl font-bold text-center mb-12">How Can I Assist You?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* How It Works Section */}
      <motion.div 
        className="mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {howItWorks.map((step, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto p-3 bg-primary/10 rounded-full mb-4">
                  {step.icon}
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Who Am I Section */}
      <motion.div 
        className="mb-20 bg-gray-100 p-8 rounded-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Avatar className="w-32 h-32">
            <AvatarImage src="/images/bhavesh-garud.jpg" alt="Bhavesh Garud" />
            <AvatarFallback>BG</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-3xl font-bold mb-4">Who Am I?</h2>
            <p className="text-lg mb-4">
              I'm Bhavesh Garud, a tech enthusiast and educator with expertise in AI, software development, and digital solutions. 
              With a background in Computer Engineering and ongoing studies in AI and Data Science, I combine technical knowledge with 
              a passion for helping others navigate the digital landscape.
            </p>
            <p className="text-lg">
              My approach is patient, clear, and tailored to your specific needs. Whether you're a student struggling with complex topics, 
              a professional looking to leverage AI tools, or someone needing tech support, I'm here to provide personalized assistance.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Pricing Section */}
      <motion.div 
        className="mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className={`h-full relative ${plan.isPopular ? 'border-primary shadow-lg' : ''}`}>
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.title}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className={`w-full ${plan.isPopular ? 'bg-primary' : ''}`}>
                    Choose {plan.title}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div 
        className="mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        className="text-center bg-primary/10 p-12 rounded-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Book your first session today and experience personalized assistance tailored to your needs.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          Book a Session Now
        </Button>
      </motion.div>
    </div>
  );
}