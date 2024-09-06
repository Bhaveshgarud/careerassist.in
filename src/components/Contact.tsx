import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "src/components/ui/card";
import { Mail, Clock, Send } from "lucide-react";

// Contact Component
function Contact() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-3">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Contact Us
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Ready to streamline your job search? Reach out to us and we'll help you get started.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Email Card */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <Mail className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">
                <a href="mailto:careerassist.in@gmail.com" className="hover:underline">
                  careerassist.in@gmail.com
                </a>
              </h3>
              <p className="max-w-[500px] text-sm md:text-base">
                Have questions? Reach out to us directly.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span className="text-sm">Response within 24 hours</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Query Description Card */}
          <Card className="bg-secondary text-secondary-foreground">
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Send className="h-6 w-6 mr-2" />
                How to Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-4">When reaching out, please include:</p>
              <ul className="list-disc list-inside text-left space-y-2">
                <li>Your name and contact information</li>
                <li>The service you're interested in (Ultimate or Starter)</li>
                <li>Your current job search status</li>
                <li>Any specific questions you have</li>
              </ul>
              <p className="mt-4">
                We'll get back to you with personalized information and next steps.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Contact;