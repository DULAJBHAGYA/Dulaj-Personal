'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ClockIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import blogDioImage from '@/assets/images/blog-dio.png';
import blogBlocImage from '@/assets/images/blog-bloc.png';
import blogMongoImage from '@/assets/images/blog-mongodb.png';
import blogNodeImage from '@/assets/images/blog-NodeCRUD.png';
import blogAIImage from '@/assets/images/blog-AI.jpg';
import blogWFHImage from '@/assets/images/blog-WFH.jpg';
import blogDockerKubernetesImage from '@/assets/images/blog-DockerVSKuber.png';

const Blogs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const blogsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (blogsRef.current) {
      observer.observe(blogsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const blogs = [
    {
      title: 'Kubernetes vs Docker Swarm for Full-Stack Apps — Practical Differences',
      excerpt: 'When building full-stack applications today, containerization has become an industry standard. It’s no longer optional...',
      content: 'When building full-stack applications today, containerization has become an industry standard. It’s no longer optional...',
      author: 'Dulaj Upananda',
      date: '2025-09-22',
      readTime: '5 min read',
      category: 'DevOps',
      image: blogDockerKubernetesImage,
      slug: 'kubernetes-vs-docker-swarm-for-full-stack-apps-practical-differences',
      link: 'https://medium.com/@dulajupananda/kubernetes-vs-docker-swarm-for-full-stack-apps-practical-differences-178dc0abd3db'
    },
    {
      title: 'Making HTTP Requests in Flutter: Using the Dio Package',
      excerpt: 'In modern app development, interacting with APIs is a crucial task. Flutter, with its rich ecosystem, provides several ways to...',
      content: 'In modern app development, interacting with APIs is a crucial task. Flutter, with its rich ecosystem, provides several ways to make HTTP requests. One of the most popular and powerful packages for this purpose is Dio...',
      author: 'Dulaj Upananda',
      date: '2024-01-15',
      readTime: '3 min read',
      category: 'Flutter',
      image: blogDioImage,
      slug: 'making-http-requests-flutter-dio-package',
      link: 'https://medium.com/@dulajupananda/making-http-requests-in-flutter-using-the-dio-package-09d2af361f36'
    },
    {
      title: 'Flutter BLoC State Management: A step-by-step guide',
      excerpt: 'In this blog post, we\'re going to take a detailed look at Flutter\'s BLoC (Business Logic Component) state management approach...',
      content: 'In this blog post, we\'re going to take a detailed look at Flutter\'s BLoC (Business Logic Component) state management approach. BLoC is a powerful pattern that helps you separate business logic from UI...',
      author: 'Dulaj Upananda',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Flutter',
      image: blogBlocImage,
      slug: 'flutter-bloc-state-management-guide',
      link: 'https://medium.com/@dulajupananda/flutter-bloc-state-management-a-step-by-step-guide-1f1ab1c358f7'
    },
    {
      title: 'Mastering MongoDB: Unleashing the Power of a Document Database',
      excerpt: 'MongoDB, a popular NoSQL database, has gained significant traction in recent years due to its flexibility, scalability...',
      content: 'MongoDB, a popular NoSQL database, has gained significant traction in recent years due to its flexibility, scalability, and ease of use. In this comprehensive guide, we\'ll explore the key concepts and features...',
      author: 'Dulaj Upananda',
      date: '2024-01-05',
      readTime: '5 min read',
      category: 'MongoDB',
      image: blogMongoImage,
      slug: 'mastering-mongodb-document-database',
      link: 'https://medium.com/@dulajupananda/simplifying-data-management-with-crud-operations-in-node-js-eb7da8ed61d9'
    },
    {
      title: 'Simplifying Data Management with CRUD Operations in Node.js',
      excerpt: 'Node.js has become a popular platform for building efficient and scalable web applications. One essential aspect of web...',
      content: 'Node.js has become a popular platform for building efficient and scalable web applications. One essential aspect of web development is data management through CRUD (Create, Read, Update, Delete) operations...',
      author: 'Dulaj Upananda',
      date: '2024-01-01',
      readTime: '2 min read',
      category: 'Node.js',
      image: blogNodeImage,
      slug: 'crud-operations-nodejs',
      link: 'https://medium.com/@dulajupananda/simplifying-data-management-with-crud-operations-in-node-js-eb7da8ed61d9'
    },
    {
      title: 'Emerging Trends in Artificial Intelligence (AI)',
      excerpt: 'Artificial Intelligence (AI) has emerged as a transformative technology, revolutionizing various industries and reshaping...',
      content: 'Artificial Intelligence (AI) has emerged as a transformative technology, revolutionizing various industries and reshaping the way we live and work. As we move forward, several exciting trends are emerging...',
      author: 'Dulaj Upananda',
      date: '2023-12-28',
      readTime: '3 min read',
      category: 'AI',
      image: blogAIImage,
      slug: 'emerging-trends-artificial-intelligence',
      link: 'https://medium.com/@dulajupananda/emerging-trends-in-artificial-inteligence-ai-784479b5e72a'
    },
    {
      title: 'The rise of remote work and its impact on the IT industry',
      excerpt: 'Due to the COVID-19 epidemic, there has been a significant change in how we work, with remote work now the norm for many...',
      content: 'Due to the COVID-19 epidemic, there has been a significant change in how we work, with remote work now the norm for many organizations. This shift has had profound implications for the IT industry...',
      author: 'Dulaj Upananda',
      date: '2023-12-25',
      readTime: '3 min read',
      category: 'Remote Work',
      image: blogWFHImage,
      slug: 'remote-work-impact-it-industry',
      link: 'https://medium.com/@dulajupananda/the-rise-of-remote-work-and-its-impact-on-the-it-industry-30c5a39fc60c'
    }
  ];



  return (
    <section id="blogs" ref={blogsRef} className="pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-left mb-10">
        
          <p className="text-black text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl">
            Thoughts, tutorials, and insights about Full-Stack Development , DevOps, AI, and Technologies
          </p>
        </div>


        {/* Blog List */}
        <div className="space-y-8">
          {blogs.map((blog, index) => (
            <article
              key={blog.slug}
              className={`bg-from-emerald-50 to-teal-50 rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Blog Image */}
                <div className="relative h-72 md:h-96 md:w-[42rem] overflow-hidden flex-shrink-0 rounded-3xl">
                  <Image 
                    src={blog.image.src} 
                    alt={blog.title}
                    className="object-cover"
                    fill
                  />
                </div>

                {/* Blog Content */}
                <div className="p-10 flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-4 line-clamp-2">
                  {blog.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm sm:text-base md:text-lg lg:text-xl line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Blog Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  
                    <div className="flex text-sm sm:text-base md:text-lg lg:text-xl items-center gap-1">
                      <ClockIcon className="w-6 h-6" />
                      <span>{blog.readTime}</span>
                    </div>
                </div>

                {/* Author and Read More */}
                <div className="flex items-center text-sm sm:text-base md:text-lg lg:text-xl justify-between">
                  
                  
                  <a 
                    href={blog.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                  >
                    Read More
                    <ArrowRightIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
              </div>
            </article>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Blogs;
