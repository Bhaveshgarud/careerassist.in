import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  ChevronRight,
  ArrowRight,
  Briefcase,
  CheckCircle,
  Clock,
} from "lucide-react";
import { Badge } from "./ui/badge";

// Dummy data for features
const features = [
  {
    title: "Save Time",
    description:
      "Let us handle the job applications while you focus on interview preparations.",
  },
  {
    title: "Increase Interview Chances",
    description:
      "Our team ensures each application is customized to increase your chances.",
  },
];

// Timeline steps data
const timelineSteps = [
  {
    title: "Initial Consultation",
    description: "We start by understanding your needs and requirements.",
    details:
      "You'll complete a comprehensive questionnaire that helps us tailor our service to your specific career goals and preferences.",
  },
  {
    title: "Custom Resume and Cover Letter",
    description: "We create tailored resumes and cover letters for you.",
    details:
      "You'll receive 2-3 versions to choose from, including an option with a photo if desired. Each version is crafted to highlight your unique strengths and experiences.",
  },
  {
    title: "Job Application",
    description: "We apply to companies on your behalf.",
    details:
      "We will apply to the companies that you shortlist or provide. You have full control over which companies we apply to, ensuring that your applications align with your career goals. We handle the entire process of applying, so you can focus on preparing for interviews.",
  },
  {
    title: "Tracking and Updates",
    description: "We keep you informed throughout the application process.",
    details:
      "You'll receive access to a Google Sheet with a list of companies, roles, and the current status of your applications. This allows you to track progress in real-time.",
  },
];

function Home() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    // Animation for section fade-in
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <>
      {/* New Banner Section */}
      <div className="bg-primary text-primary-foreground">
        <div className="container px-4 py-3 mx-auto flex items-center justify-between flex-wrap">
          <div className="flex items-center">
            <Badge variant="secondary" className="mr-2">
              New
            </Badge>
            <span className="text-sm font-medium">
              Now serving Computer Science graduates!
            </span>
          </div>
          <Link
            to="/About"
            className="text-sm font-medium flex items-center hover:underline"
          >
            Learn more
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>

      <section
        ref={sectionRef}
        className="w-full py-12 md:py-24 lg:py-32 xl:py-4 opacity-0 transition-opacity duration-1000"
      >
        <div className="container px-4 md:px-6">
          {/* Main Content Banner */}
          <div className="mb-12 p-6 bg-muted rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Supercharge Your Job Search With OnetoMany
                </h2>
                <p className="text-muted-foreground">
                  Let us handle 100+ job applications while you focus on acing
                  interviews.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="Contact">
                  <Button className="flex items-center justify-center">
                    <Briefcase className="mr-2 h-4 w-4" />
                    Start Your Journey
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                <span className="text-sm">100+ Applications</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                <span className="text-sm">Tailored Resumes</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                <span className="text-sm">Interview Prep</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-8 text-center">
            {/* Upper Section */}
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                We Apply for Jobs on Your Behalf
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Streamline your job search. We assist students streamline the
                process of jobs, saving you time and effort.
              </p>
            </div>
            <div className="space-x-4">
              <Link to="/contact">
                <Button>Get Started</Button>
              </Link>
              <Link to="/about">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>

            {/* Feature Highlights */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="max-w-xs text-center">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Interactive Timeline */}
            <div className="w-full mt-16">
              <h2 className="text-2xl font-bold mb-6">
                OnetoMany Service Process
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {timelineSteps.map((step, index) => (
                  <Card
                    key={index}
                    className={`transition-all duration-300 ease-in-out transform hover:scale-105 ${
                      activeStep === index ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() =>
                      setActiveStep(activeStep === index ? null : index)
                    }
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-2">
                          {index + 1}
                        </span>
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{step.description}</CardDescription>
                      {activeStep === index && (
                        <p className="mt-4 text-sm text-muted-foreground">
                          {step.details}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
