'use client';

import { useEffect, useRef, useState } from 'react';
import { CalendarIcon, ClockIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

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
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Learn how to structure large React applications using TypeScript for better type safety and developer experience.',
      content: 'In this comprehensive guide, we explore the best practices for building scalable React applications with TypeScript...',
      author: 'Dulaj Upananda',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'React',
      image: '/api/placeholder/400/250',
      slug: 'building-scalable-react-applications-typescript'
    },
    {
      title: 'Mastering CSS Grid: A Complete Guide',
      excerpt: 'Everything you need to know about CSS Grid layout, from basic concepts to advanced techniques.',
      content: 'CSS Grid has revolutionized how we create layouts on the web. This guide covers everything from basic grid concepts...',
      author: 'Dulaj Upananda',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'CSS',
      image: '/api/placeholder/400/250',
      slug: 'mastering-css-grid-complete-guide'
    },
    {
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Exploring the latest trends and technologies that will shape web development in 2024 and beyond.',
      content: 'As we move into 2024, several exciting trends are emerging in web development that developers should be aware of...',
      author: 'Dulaj Upananda',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Web Development',
      image: '/api/placeholder/400/250',
      slug: 'future-web-development-trends-2024'
    },
    {
      title: 'Optimizing Performance in Next.js Applications',
      excerpt: 'Best practices and techniques for improving the performance of your Next.js applications.',
      content: 'Next.js provides many built-in optimizations, but there are additional techniques you can use to further improve performance...',
      author: 'Dulaj Upananda',
      date: '2024-01-01',
      readTime: '10 min read',
      category: 'Next.js',
      image: '/api/placeholder/400/250',
      slug: 'optimizing-performance-nextjs-applications'
    }
  ];

  const categories = ['All', 'React', 'CSS', 'Web Development', 'Next.js', 'JavaScript'];

  return (
    <section id="blogs" ref={blogsRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Blogs</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development, design, and technology
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                category === 'All'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article
              key={blog.slug}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Blog Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {blog.category}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-white/20">
                    {blog.title.charAt(0)}
                  </div>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {blog.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Blog Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{new Date(blog.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ClockIcon className="w-4 h-4" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Author and Read More */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {blog.author.charAt(0)}
                    </div>
                    <span className="text-sm text-gray-600">{blog.author}</span>
                  </div>
                  
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200">
                    Read More
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Blogs Button */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
            View All Blogs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
