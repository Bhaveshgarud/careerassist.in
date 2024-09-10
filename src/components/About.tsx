import React from 'react';
import { useScrollAnimation } from './useScrollAnimation';
import { CheckCircleIcon, Users, Target, Star, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "src/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";

function About() {
  const [headerRef, headerVisible] = useScrollAnimation()
  const [imageRef, imageVisible] = useScrollAnimation()
  const [featuresRef, featuresVisible] = useScrollAnimation()
  const [servicesRef, servicesVisible] = useScrollAnimation()
  const [missionRef, missionVisible] = useScrollAnimation()
  const [founderRef, founderVisible] = useScrollAnimation()
  const [teamRef, teamVisible] = useScrollAnimation()
  const [testimonialsRef, testimonialsVisible] = useScrollAnimation()

  return (
    <section className="w-full py-12 md:py-24 lg:py-3">
      <div className="container px-4 md:px-6">
        <div 
          ref={headerRef}
          className={`flex flex-col items-center justify-center space-y-4 text-center transition-opacity duration-1000 ease-in-out ${headerVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About OnetoMany</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              OnetoMany is our flagship service dedicated to simplifying your job search process. Our team of experts applies to multiple jobs on your behalf, ensuring you don't miss out on any opportunities.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div 
            ref={imageRef}
            className={`transition-all duration-1000 ease-in-out ${imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}
          >
            <img
              alt="Team working together"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="/images/resumee.jpg"
              width="550"
            />
          </div>
          <div 
            ref={featuresRef}
            className={`flex flex-col justify-center space-y-4 transition-all duration-1000 ease-in-out ${featuresVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
          >
            <ul className="grid gap-6">
              <li>
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  <h3 className="font-bold">100+ Companies</h3>
                </div>
                <p className="text-muted-foreground">We apply to over 100 companies on your behalf.</p>
              </li>
              <li>
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  <h3 className="font-bold">Time-Saving</h3>
                </div>
                <p className="text-muted-foreground">Focus on preparing for interviews while we handle the applications.</p>
              </li>
              <li>
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  <h3 className="font-bold">Personalized Service</h3>
                </div>
                <p className="text-muted-foreground">We tailor applications to match your skills and preferences.</p>
              </li>
            </ul>
          </div>
        </div>

        <div 
          ref={servicesRef}
          className={`my-12 transition-opacity duration-1000 ease-in-out ${servicesVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h3 className="text-2xl font-bold mb-2 text-center">Our Services</h3>
          <p className="text-center text-muted-foreground mb-6">Choose the plan that best fits your career goals and let us handle the rest.</p>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Ultimate</span>
                  <span className="text-2xl font-bold">₹7k</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    Resume revision
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    LinkedIn revision
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    Interview prep material
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    AutoApply job: 100 Applications
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Starter</span>
                  <span className="text-2xl font-bold">₹3k</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    Resume revision
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    AutoApply job: 50 Applications
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div 
          ref={missionRef}
          className={`my-12 transition-opacity duration-1000 ease-in-out ${missionVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="mr-2 h-6 w-6" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>At CareerAssist, our mission is to revolutionize the job search process for students, recent graduates, and professionals seeking a career change. We believe that everyone deserves a fair shot at their dream job, and we're here to level the playing field. By handling the time-consuming task of applying to multiple companies, we allow you to focus on what truly matters: preparing for interviews and showcasing your unique talents.</p>
            </CardContent>
          </Card>
        </div>

        <div 
        ref={founderRef}
        className={`my-12 transition-opacity duration-1000 ease-in-out ${founderVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-6 w-6" />
              Founder
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center space-x-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-full">
              <img
                src="/images/bhavesh-garud.jpg"
                alt="Bhavesh Garud"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-xl font-semibold">Bhavesh Garud</h4>
              <p className="text-muted-foreground">Founder of CareerAssist</p>
            </div>
          </CardContent>
        </Card>
      </div>


        <div 
          className={`my-12 transition-opacity duration-1000 ease-in-out ${missionVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="mr-2 h-6 w-6" />
                Questions about our services?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Reach out to us directly at: <a href="mailto:careerassist.in@gmail.com" className="text-blue-500 hover:underline">careerassist.in@gmail.com</a></p>
            </CardContent>
          </Card>
        </div>

        {/* Commented out team and testimonials sections */}
      </div>
    </section>
  )
}

export default About;