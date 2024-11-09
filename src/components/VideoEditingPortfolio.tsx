import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "src/components/ui/card"
import { Button } from "src/components/ui/button"
import { Play, ExternalLink } from 'lucide-react'

const VideoEditingPortfolio = () => {
  const portfolioItems = [
    {
      title: "Corporate Promo Video",
      description: "A sleek promotional video for a tech startup",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tags: ["Motion Graphics", "Color Grading"]
    },
    {
      title: "Wedding Highlights",
      description: "Emotional highlights from a beautiful wedding ceremony",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tags: ["Storytelling", "Color Correction"]
    },
    {
      title: "Product Launch",
      description: "Dynamic product reveal for a new smartphone",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tags: ["3D Animation", "Sound Design"]
    },
    {
      title: "Music Video",
      description: "Vibrant music video for an up-and-coming artist",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tags: ["Visual Effects", "Editing"]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Video Editing Portfolio</h1>
      <p className="text-xl text-center mb-12 text-muted-foreground">
        Showcasing my passion for storytelling through video editing
      </p>

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
                  <span key={tagIndex} className="bg-primary text-primary-foreground text-sm px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Play className="mr-2 h-4 w-4" /> Watch Full Video
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" /> Project Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to bring your vision to life?</h2>
        <p className="text-xl mb-8 text-muted-foreground">Let's collaborate on your next video project</p>
        <Button size="lg">
          Get in Touch
        </Button>
      </div>
    </div>
  )
}

export default VideoEditingPortfolio