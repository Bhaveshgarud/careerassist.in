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
import { BadgeCheck, Briefcase, Users, TrendingUp, Target, UserCheck, MessageSquare } from "lucide-react";

const BusinessDevelopmentPortfolio = () => {
  const achievements = [
    {
      title: "CareerAssist Founder",
      description: "Developed and launched a new service from the ground up, overseeing all aspects of growth and operations",
      icon: <Briefcase className="w-6 h-6" />,
      metrics: "Successfully launched and grew the platform"
    },
    {
      title: "Market Opportunity Identification",
      description: "Created strategic plans to target potential clients and expand customer base through data-driven approaches",
      icon: <Target className="w-6 h-6" />,
      metrics: "Identified and captured new market segments"
    },
    {
      title: "Client Acquisition",
      description: "Led successful client acquisition efforts building strong relationships and securing partnerships",
      icon: <Users className="w-6 h-6" />,
      metrics: "Built lasting client relationships"
    },
    {
      title: "Business Growth",
      description: "Implemented strategic initiatives to drive business growth and market expansion",
      icon: <TrendingUp className="w-6 h-6" />,
      metrics: "Achieved consistent growth in client base"
    }
  ];

  const skills = [
    "Strategic Planning",
    "Market Analysis",
    "Client Relationship Management",
    "Business Development",
    "Partnership Building",
    "Sales Strategy",
    "Negotiation",
    "Market Research",
    "Lead Generation",
    "Growth Strategy"
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Business Development Portfolio
      </h1>
      
      <div className="flex flex-col items-center mb-12">
        <Avatar className="w-32 h-32 mb-4">
          <AvatarImage src="/images/PhotoCopy2.jpg" alt="Bhavesh Garud" />
          <AvatarFallback>BG</AvatarFallback>
        </Avatar>
        <h2 className="text-2xl font-semibold mb-2">Bhavesh Garud</h2>
        <p className="text-xl text-center text-muted-foreground max-w-2xl">
          Passionate business developer with expertise in identifying market opportunities, 
          client acquisition, and strategic planning to drive business growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {achievements.map((achievement, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {achievement.icon}
                </div>
                <div>
                  <CardTitle>{achievement.title}</CardTitle>
                  <CardDescription>{achievement.metrics}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{achievement.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <UserCheck className="w-6 h-6" />
              </div>
              <CardTitle>Client Proof</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-zinc-900 p-4 rounded-lg">
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <img 
                  src="/images/client-proof-1.png"
                  alt="Chat conversation with a satisfied client discussing their interview success"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="mt-4 text-muted-foreground">Client expressing interest and confirming participation in our services, demonstrating trust in our solutions.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MessageSquare className="w-6 h-6" />
              </div>
              <CardTitle>Happy Clients</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-zinc-900 p-4 rounded-lg">
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <img 
                  src="/images/client-proof-2.png"
                  alt="Chat conversation with a client confirming service subscription"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="mt-4 text-muted-foreground">Real conversation with a client showing successful interview outcomes and satisfaction with our services.</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Key Skills & Expertise</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full"
              >
                <BadgeCheck className="w-4 h-4 text-primary" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Collaborate?</h2>
        <p className="text-xl mb-8 text-muted-foreground">
          Let's discuss how I can help drive your business growth
        </p>
        <Link to="/contact">
          <Button size="lg">Get in Touch</Button>
        </Link>
      </div>
    </div>
  );
};

export default BusinessDevelopmentPortfolio;