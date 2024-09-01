import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";
import { Card, CardContent } from "src/components/ui/card";
import { Mail, Clock } from "lucide-react";

// Contact Component
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    jobRole: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    if (submitMessage) {
      const timer = setTimeout(() => setSubmitMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitMessage]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("contact", formData.contact);
    formDataToSend.append("jobRole", formData.jobRole);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/contact",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        setSubmitMessage("Your application has been submitted successfully!");
        setFormData({
          name: "",
          email: "",
          contact: "",
          jobRole: "",
        });
      } else {
        setSubmitMessage(
          "There was an error submitting your application. Please try again."
        );
      }
    } catch (error) {
      setSubmitMessage(
        "There was an error submitting your application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-3">
      <div className="container px-4 md:px-6">
        {/* Banner */}
        <Card className="mb-8 bg-primary text-primary-foreground">
          <CardContent className="flex flex-col items-center justify-center p-6 text-center">
            <Mail className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-bold mb-2">
              careerassist.in@gmail.com
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

        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Contact Us
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ready to streamline your job search? Fill out the form below and
              we'll reach out to you.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-[800px] grid gap-6 py-12">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact">Contact No.</Label>
              <Input
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="jobRole">Job Role</Label>
              <Input
                id="jobRole"
                name="jobRole"
                value={formData.jobRole}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Details"}
            </Button>
          </form>
          {submitMessage && (
            <p
              className={`text-center ${
                submitMessage.includes("error")
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {submitMessage}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
