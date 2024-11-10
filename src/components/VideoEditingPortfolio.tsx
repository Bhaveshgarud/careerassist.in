import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Button } from "src/components/ui/button";
import { Play, ExternalLink } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "src/components/ui/avatar";
import { Link } from "react-router-dom";

const VideoEditingPortfolio = () => {
  const portfolioItems = [
    {
      title: "Documentary Practice Video",
      description:
        "In this Video, I Practiced my Video Editing Skills, showcasing different cuts ",
      videoUrl:
        "https://player.vimeo.com/video/1028111464?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      tags: ["Storytelling", "Sound Editing"],
    },
    {
      title: "ASMR Highlights",
      description: "Practiced video editing skills on ASMR videos",
      videoUrl:
        "https://player.vimeo.com/video/1028116372?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      tags: ["Sleek Cuts", "Color Correction"],
    },
    {
      title: "MMA Edit Video",
      description:
        "Edited a MMA video for a client, used transitions and effects, Added a motivational music background",
      videoUrl: "https://www.youtube.com/embed/AKOqS6DgK7A?si=YDA14GuD97FcQQD1",
      tags: ["Transitions", "Sound Design"],
    },
    {
      title: "Gurukul Intro Video",
      description:
        "Introductory video for a gurukul. I used AI Image Generation Tools for Images, edited the Voice Over, added a beautiful music as a background",
      videoUrl: "https://www.youtube.com/embed/UtzDqzfZQLQ?si=BV7qfPbVNnoGJfyS",
      tags: ["Visual Effects", "Editing"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Video Editing Portfolio
      </h1>

      <div className="flex flex-col items-center mb-12">
        <Avatar className="w-32 h-29 mb-4">
          <AvatarImage src="/images/PhotoCopy.jpg" alt="Bhavesh Garud" />
          <AvatarFallback>YN</AvatarFallback>
        </Avatar>
        <h2 className="text-2xl font-semibold mb-2">Bhavesh Garud</h2>
        <p className="text-xl text-center text-muted-foreground">
          Showcasing my passion for storytelling through video editing
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioItems.map((item, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src={item.videoUrl}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-primary text-primary-foreground text-sm px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to bring your vision to life?
        </h2>
        <p className="text-xl mb-8 text-muted-foreground">
          Let's collaborate on your next video project
        </p>
        <Link to="/contact">
          <Button size="lg">Get in Touch</Button>
        </Link>
      </div>
    </div>
  );
};

export default VideoEditingPortfolio;
