import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Button } from "src/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "src/components/ui/avatar";
import { Link } from "react-router-dom";
import { Video, Briefcase, Code, GraduationCap, Cpu, Book, Github, Linkedin, Mail } from 'lucide-react';
import { 
  Layout, 
  Users, 
  Target, 
  GitBranch,
  Lightbulb,
  BarChart,
  Workflow
} from "lucide-react";

const ProductManagerPortfolio = () => {
  const projects = [
    {
      title: "OneToMany",
      description: "Led the development and launch of a job search assistance platform",
      role: "Product Owner & Manager",
      achievements: [
        "Defined product vision and roadmap",
        "Managed development lifecycle",
        "Implemented user feedback loops",
        "Achieved product-market fit"
      ],
      icon: <Layout className="w-6 h-6" />
    },
    {
      title: "Apple iPhone Website Clone",
      description: "Managed the development of a visually stunning website clone",
      role: "Project Manager",
      achievements: [
        "Coordinated development team",
        "Ensured high-quality delivery",
        "Implemented modern UI/UX practices",
        "Optimized user experience"
      ],
      icon: <GitBranch className="w-6 h-6" />
    }
  ];

  const skills = [
    {
      category: "Product Strategy",
      items: [
        "Product Vision",
        "Roadmap Planning",
        "Market Analysis",
        "Feature Prioritization"
      ]
    },
    {
      category: "Technical Skills",
      items: [
        "Agile Methodology",
        "JIRA",
        "Product Analytics",
        "Technical Documentation"
      ]
    },
    {
      category: "Leadership",
      items: [
        "Team Management",
        "Stakeholder Communication",
        "Cross-functional Collaboration",
        "Decision Making"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Product Management Portfolio
      </h1>
      
      <div className="flex flex-col items-center mb-12">
        <Avatar className="w-32 h-32 mb-4">
          <AvatarImage src="/images/PhotoCopy2.jpg" alt="Bhavesh Garud" />
          <AvatarFallback>BG</AvatarFallback>
        </Avatar>
        <h2 className="text-3xl font-bold mb-2">Bhavesh Garud</h2>
            <div className="flex gap-4 mb-4">
              <a href="https://github.com/Bhaveshgarud" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/bhavesh-garud-759038238" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:bhaveshgarud18@gmail.com" className="text-gray-600 hover:text-gray-900">
                <Mail className="w-6 h-6" />
              </a>
            </div>
        <p className="text-xl text-center text-muted-foreground max-w-2xl">
          Product Manager with a passion for building user-centric solutions and 
          driving product success through data-driven decision making.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {project.icon}
                </div>
                <div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.role}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">{project.description}</p>
              <ul className="space-y-2">
                {project.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {skills.map((skillSet, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{skillSet.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {skillSet.items.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Build Something Amazing</h2>
        <p className="text-xl mb-8 text-muted-foreground">
          Looking to bring your product vision to life? Let's connect!
        </p>
        <Link to="/contact">
          <Button size="lg">Get in Touch</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductManagerPortfolio;