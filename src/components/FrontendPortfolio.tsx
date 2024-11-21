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
import { Code, Globe, Github, Layout, Cpu, Database,Linkedin, Mail } from "lucide-react";

export default function FrontendPortfolio() {
  const projects = [
    {
      title: "CareerAssist",
      description:
        "A full-featured website built with React.js",
      technologies: ["React.js", "Tailwind CSS", "Node.js"],
      features: [
        "Responsive design",
        "Card Components",
        "Scroll animations",
        "Modern design",
      ],
      link: "https://careerassist.in",
      github: "https://github.com/Bhaveshgarud/careerassist.in",
      image: "/images/CA.png",
    },
    {
      title: "Apple iPhone Website Clone",
      description:
        "A visually stunning clone of the Apple iPhone website showcasing modern web development practices",
      technologies: ["React.js", "Three.js", "GSAP"],
      features: [
        "3D animations",
        "Smooth scrolling effects",
        "Responsive layout",
        "Performance optimized",
      ],
      link: "https://jsm-phone.com/",
      github: "https://github.com/Bhaveshgarud/Apple-iPhone-website",
      image: "/images/clone.png",
    },
  ];

  const skills = {
    frontend: [
      "React.js",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "Three.js",
    ],
    tools: ["Git", "GitHub", "VS Code", "Figma", "Chrome DevTools"],
    concepts: [
      "Responsive Design",
      "Performance Optimization",
      "Web Accessibility",
      "SEO Best Practices",
    ],
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Frontend Portfolio
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
          Frontend Engineer specializing in building responsive, performant, and
          user-friendly web applications using modern technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mb-4">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <ul className="space-y-2 mb-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> Source Code
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              <CardTitle>Frontend Skills</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill, index) => (
                <span
                  key={index}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5" />
              <CardTitle>Tools</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((tool, index) => (
                <span
                  key={index}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5" />
              <CardTitle>Concepts</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skills.concepts.map((concept, index) => (
                <span
                  key={index}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                >
                  {concept}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          Interested in Working Together?
        </h2>
        <p className="text-xl mb-8 text-muted-foreground">
          I'm always open to discussing new projects and opportunities
        </p>
        <Link to="/contact">
          <Button size="lg">Get in Touch</Button>
        </Link>
      </div>
    </div>
  );
}
