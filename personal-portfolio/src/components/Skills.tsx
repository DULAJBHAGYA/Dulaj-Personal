'use client';

import { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95, color: 'from-blue-400 to-blue-600' },
        { name: 'Next.js', level: 90, color: 'from-gray-400 to-gray-600' },
        { name: 'TypeScript', level: 88, color: 'from-blue-500 to-blue-700' },
        { name: 'Tailwind CSS', level: 92, color: 'from-cyan-400 to-cyan-600' },
        { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-yellow-600' },
        { name: 'HTML/CSS', level: 98, color: 'from-orange-400 to-orange-600' },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 90, color: 'from-green-400 to-green-600' },
        { name: 'Express.js', level: 85, color: 'from-gray-400 to-gray-600' },
        { name: 'Python', level: 80, color: 'from-yellow-500 to-yellow-700' },
        { name: 'PostgreSQL', level: 85, color: 'from-blue-500 to-blue-700' },
        { name: 'MongoDB', level: 82, color: 'from-green-500 to-green-700' },
        { name: 'REST APIs', level: 90, color: 'from-purple-400 to-purple-600' },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 92, color: 'from-orange-500 to-orange-700' },
        { name: 'Docker', level: 75, color: 'from-blue-400 to-blue-600' },
        { name: 'AWS', level: 70, color: 'from-yellow-500 to-orange-500' },
        { name: 'Figma', level: 85, color: 'from-pink-400 to-purple-600' },
        { name: 'VS Code', level: 95, color: 'from-blue-500 to-blue-700' },
        { name: 'Linux', level: 80, color: 'from-yellow-400 to-yellow-600' },
      ]
    }
  ];

  return (
    <section id="skills" ref={skillsRef} className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="text-purple-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm border border-slate-700/50 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-purple-500/25`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-bold text-white mb-8">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'UI/UX Design', 'Responsive Design', 'Agile Methodologies', 
              'Test-Driven Development', 'Code Review', 'Mentoring',
              'Project Management', 'Client Communication', 'Problem Solving'
            ].map((skill, index) => (
              <span
                key={skill}
                className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 px-4 py-2 rounded-full text-sm font-medium hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 cursor-default"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
