import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "src/components/ui/card";
import { Button } from "src/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "src/components/ui/avatar";
import { Video, Briefcase, Layout, Code, GraduationCap, Cpu, Book } from 'lucide-react';

export default function Portfolio() {
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
      <h1 className="text-4xl font-bold mb-8 text-center">Portfolio</h1>
      
      {/* Resume Section */}
      <div className="mb-16 p-8 bg-gray-100 rounded-lg shadow-md">
      <Avatar className="w-32 h-32 mb-4">
          <AvatarImage src="/images/PhotoCopy.jpg" alt="Bhavesh Garud" />
          <AvatarFallback>BG</AvatarFallback>
        </Avatar>
        <h2 className="text-3xl font-bold mb-6">Bhavesh Garud</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Profile</h3>
            <p className="text-gray-700 mb-4">
              As a multifaceted professional, I bring expertise in business development, product management, frontend development, and video editing. My passion lies in identifying market opportunities, developing innovative solutions, and driving growth across various domains. With a strong entrepreneurial mindset and client-focused approach, I excel in creating user-centric products and fostering strong business relationships.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <div className="mb-2">
              <div className="flex items-center">
                <GraduationCap className="w-5 h-5 mr-2" />
                <span className="font-semibold">B.E in Artificial Intelligence and Data Science</span>
              </div>
              <p className="text-gray-600">Thadomal Shahani Engineering College, Bandra (Present)</p>
            </div>
            <div>
              <div className="flex items-center">
                <GraduationCap className="w-5 h-5 mr-2" />
                <span className="font-semibold">Diploma in Computer Engineering</span>
              </div>
              <p className="text-gray-600">Vivekanand Education Society's Polytechnic, Chembur (2022)</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Business Development & Strategy</li>
              <li>Product Management</li>
              <li>Frontend Development (React.js, HTML, CSS, JavaScript)</li>
              <li>Video Editing</li>
              <li>Client Relationship Management</li>
              <li>Market Research & Analysis</li>
              <li>UI/UX Design (Figma, Adobe XD)</li>
              <li>Version Control (Git, GitHub)</li>
              <li>Project Management</li>
            </ul>
            
            <h3 className="text-2xl font-semibold mt-6 mb-4">Languages</h3>
            <p className="text-gray-700">English, Hindi, Sindhi</p>
            
            <h3 className="text-2xl font-semibold mt-6 mb-4">Interests</h3>
            <div className="flex items-center gap-4 text-gray-700">
              <span className="flex items-center"><Cpu className="w-4 h-4 mr-1" /> Cooking</span>
              <span className="flex items-center"><Book className="w-4 h-4 mr-1" /> Researching</span>
              <span className="flex items-center"><Book className="w-4 h-4 mr-1" /> Reading</span>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Cards */}
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

      {/* Portfolio Summary */}
      <div className="mt-16 p-8 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6">Portfolio Summary</h2>
        <p className="text-gray-700 mb-4">
          My diverse portfolio showcases a unique blend of skills across multiple domains:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li><strong>Video Editing:</strong> Crafting compelling visual narratives with advanced editing techniques, transitions, and effects.</li>
          <li><strong>Business Development:</strong> Identifying market opportunities, developing strategic plans, and fostering client relationships to drive business growth.</li>
          <li><strong>Product Management:</strong> Leading product development initiatives with a focus on user-centric solutions and market fit.</li>
          <li><strong>Frontend Development:</strong> Building responsive and interactive web applications using modern technologies like React.js.</li>
        </ul>
        <p className="text-gray-700">
          This combination of technical and business acumen allows me to approach projects holistically, ensuring both creative excellence and strategic alignment with business goals.
        </p>
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
}
