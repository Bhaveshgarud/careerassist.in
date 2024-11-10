import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "src/components/ui/card";
import { Button } from "src/components/ui/button";
import { Video, Briefcase, Layout, Code } from 'lucide-react';

const Services = () => {
  const portfolios = [
    {
      title: "Video Editing",
      description: "Showcasing my skills in video editing, including transitions, effects, and storytelling.",
      icon: <Video className="w-6 h-6" />,
      link: "/video-editing"
    },
    {
      title: "Business Development",
      description: "Highlighting my experience in growing businesses and identifying market opportunities.",
      icon: <Briefcase className="w-6 h-6" />,
      link: "/business-development"
    },
    {
      title: "Product Management",
      description: "Demonstrating my ability to lead product development and drive user-centric solutions.",
      icon: <Layout className="w-6 h-6" />,
      link: "/product-management"
    },
    {
      title: "Frontend Development",
      description: "Showcasing my skills in creating responsive and interactive web applications.",
      icon: <Code className="w-6 h-6" />,
      link: "/frontend-development"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">My Services & Portfolio</h1>
      <p className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Explore my diverse skill set across various domains. Each portfolio showcases my expertise and projects in different areas.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolios.map((portfolio, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                {portfolio.icon}
              </div>
              <CardTitle>{portfolio.title}</CardTitle>
              <CardDescription>{portfolio.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Button asChild>
                <Link to={portfolio.link}>View Portfolio</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Looking for Job Application Assistance?</h2>
        <p className="text-xl mb-8 text-muted-foreground">
          Check out our OneToMany service for comprehensive job search support.
        </p>
        <Button asChild size="lg">
          <Link to="/onetomany">Learn About OneToMany</Link>
        </Button>
      </div>
    </div>
  );
};

export default Services;