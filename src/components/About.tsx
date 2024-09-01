import React from 'react';
import { useScrollAnimation } from './useScrollAnimation';
import { CheckCircleIcon, Users, Target, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "src/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";

function About() {
  const [headerRef, headerVisible] = useScrollAnimation()
  const [imageRef, imageVisible] = useScrollAnimation()
  const [featuresRef, featuresVisible] = useScrollAnimation()
  const [missionRef, missionVisible] = useScrollAnimation()
  const [teamRef, teamVisible] = useScrollAnimation()
  const [testimonialsRef, testimonialsVisible] = useScrollAnimation()

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
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
              <p>At CareerAssist, our mission is to revolutionize the job search process for students, recent graduates, and professionals seeking a career change.. We believe that everyone deserves a fair shot at their dream job, and we're here to level the playing field. By handling the time-consuming task of applying to multiple companies, we allow you to focus on what truly matters: preparing for interviews and showcasing your unique talents.</p>
            </CardContent>
          </Card>
        </div>

        {/* <div 
          ref={teamRef}
          className={`my-12 transition-opacity duration-1000 ease-in-out ${teamVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Users className="mr-2 h-6 w-6" />
            Our Team
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Bhavesh Garud", role: "Founder & CEO", avatar: "/placeholder.svg?height=100&width=100" },
              { name: "Kunal Chhablani", role: "Head of Recruitment", avatar: "/placeholder.svg?height=100&width=100" },
              { name: "Hiten Gerella", role: "Lead Resume Writer", avatar: "/placeholder.svg?height=100&width=100" },
            ].map((member) => (
              <Card key={member.name}>
                <CardContent className="flex flex-col items-center pt-6">
                  <Avatar className="h-20 w-20 mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h4 className="font-semibold">{member.name}</h4>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        {/* <div 
          ref={testimonialsRef}
          className={`my-12 transition-opacity duration-1000 ease-in-out ${testimonialsVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Star className="mr-2 h-6 w-6" />
            What Our Clients Say
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { name: "Emily W.", text: "OnetoMany helped me land my dream job at a top tech company. Their personalized approach made all the difference!" },
              { name: "Michael T.", text: "I was skeptical at first, but the results speak for themselves. OnetoMany saved me countless hours and opened doors I didn't even know existed." },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p className="italic mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default About;