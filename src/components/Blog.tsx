import React from 'react';
import { useScrollAnimation } from './useScrollAnimation'; // Adjust the import path if `useScrollAnimation` is in a different file
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Link } from 'react-router-dom';

import { CheckCircleIcon } from 'lucide-react';
// Blog Component with Scroll Animations
function Blog() {
    const blogPosts = [
      { id: 1, title: "Top 10 Job Search Strategies", excerpt: "Discover the most effective ways to land your dream job..." },
      { id: 2, title: "How to Ace Your Next Interview", excerpt: "Prepare for success with these interview tips and tricks..." },
      { id: 3, title: "The Future of Work: Remote Jobs", excerpt: "Explore the growing trend of remote work and how it's changing..." },
    ]
  
    const [headerRef, headerVisible] = useScrollAnimation()
    const [postsRef, postsVisible] = useScrollAnimation()
  
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        {/* <div className="container px-4 md:px-6">
          <div 
            ref={headerRef}
            className={`flex flex-col items-center justify-center space-y-4 text-center transition-opacity duration-1000 ease-in-out ${headerVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Blog</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay updated with the latest job search tips and career advice.
              </p>
            </div>
          </div>
          <div 
            ref={postsRef}
            className={`mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 transition-all duration-1000 ease-in-out ${postsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {blogPosts.map(post => (
              <Card key={post.id}>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="text-[#0072E9] hover:underline mt-2 inline-block">
                    Read more
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}
        <div className='flex flex-col items-center justify-center '><h1>COMING SOON!</h1></div>
        
      </section>
    )
  }
  export default Blog;