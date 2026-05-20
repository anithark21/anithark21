import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Wifi, Battery, Search, Terminal, X } from 'lucide-react';

interface Skill {
  name: string;
  icon: string;
  experience: string[];
  impact: string;
  yearsOfExperience?: string;
}

const skills: Skill[] = [
  { 
    name: 'Java', 
    icon: 'https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png',
    experience: [
      '🏢 Amazon (2025-Present): Building Tier-1 search services and orchestration platforms powering 75%+ of Prime Video carousels using Java 17 for millions of global customers',
      '🏢 Schneider Electric (2018-2022): Architected full-stack solutions using Java and SpringBoot for Design Portal serving enterprise clients worldwide',
      '🏢 Honeywell (2018): Developed surveillance tracking systems using Java for facility security',
    ],
    impact: 'Led 4-member team, resolved 900+ technical issues, optimized database performance by 26%',
    yearsOfExperience: '6+ years'
  },
  { 
    name: 'Kotlin', 
    icon: 'https://img.icons8.com/color/48/000000/kotlin.png',
    experience: [
      '🏢 Amazon (2025-Present): Leveraging Kotlin for building modern, concise backend services and AWS Lambda functions supporting Prime Video infrastructure',
    ],
    impact: 'Supporting millions of concurrent users with high-performance microservices',
    yearsOfExperience: '1+ year'
  },
  { 
    name: 'TypeScript', 
    icon: 'https://img.icons8.com/?size=48&id=uJM6fQYqDaZK&format=png&color=000000',
    experience: [
      '🏢 Schneider Electric (2018-2022): Built enterprise-grade Design Portal frontend using TypeScript and Angular, serving customers globally for product configuration',
      '🏢 Personal Projects: Developed modern portfolio with React and TypeScript showcasing advanced UI/UX',
    ],
    impact: 'Improved type safety and code maintainability across large-scale applications',
    yearsOfExperience: '4+ years'
  },
  { 
    name: 'JavaScript', 
    icon: 'https://img.icons8.com/color/48/000000/javascript--v1.png',
    experience: [
      '🏢 Schneider Electric (2018-2022): Core frontend development for Design Portal with vanilla JavaScript and modern frameworks',
      '🏢 NYU Graduate Assistant (2023-2024): Automated department operations using Google Apps Script and JavaScript',
    ],
    impact: 'Delivered robust client-side solutions improving user engagement and operational efficiency',
    yearsOfExperience: '6+ years'
  },
  { 
    name: 'Python', 
    icon: 'https://img.icons8.com/color/48/000000/python--v1.png',
    experience: [
      '🏢 Amazon (2025-Present): Building AI/ML-powered oncall support bots and merchandising automation tools using Python to assist cross-team operations',
      '🏢 Data Analysis Projects: Utilized Python for ETL processes, data manipulation, and machine learning applications',
      '🎓 Academic Research: Applied Python for data science and analytics during Master\'s program at NYU',
    ],
    impact: 'Automated oncall support reducing response times by 40%, streamlined merchandising workflows through intelligent bots',
    yearsOfExperience: '4+ years'
  },
  { 
    name: 'Claude Code', 
    icon: 'https://mintlify.s3.us-west-1.amazonaws.com/anthropic/logo/light.svg',
    experience: [
      '🤖 Amazon (2025-Present): Leveraging Claude Code for efficient development with minimal token usage through well-crafted prompts',
      '🤖 Personal Projects: Using Claude Code to accelerate feature development while maintaining high code quality',
    ],
    impact: 'Increased coding efficiency by 60% through intelligent AI-assisted development and prompt engineering',
    yearsOfExperience: '1+ year'
  },
  { 
    name: 'Claude Architect', 
    icon: 'https://mintlify.s3.us-west-1.amazonaws.com/anthropic/logo/light.svg',
    experience: [
      '🤖 Amazon (2025-Present): Utilizing Claude Architect for system design, architecture planning, and token-efficient problem solving',
      '🤖 Complex Projects: Designing scalable architectures with AI-assisted planning reducing design time significantly',
    ],
    impact: 'Optimized architectural decisions and reduced planning overhead by 50% through strategic AI collaboration',
    yearsOfExperience: '1+ year'
  },
  { 
    name: 'AI/ML', 
    icon: 'https://img.icons8.com/color/48/000000/artificial-intelligence.png',
    experience: [
      '🏢 Amazon (2025-Present): Developing intelligent bots for oncall support automation and merchandising using Python, reducing manual intervention for cross-team operations',
      '🏢 Amazon (2025-Present): Applying ML techniques to content recommendation and trending analysis for Prime Video',
      '🎓 Academic Projects: Implemented ML algorithms for predictive analytics and pattern recognition',
    ],
    impact: 'Built oncall support bots saving 20+ hours/week for operations teams, enhanced personalization for millions of users',
    yearsOfExperience: '1+ year'
  },
  { 
    name: 'Node.js', 
    icon: 'https://img.icons8.com/color/48/000000/nodejs.png',
    experience: [
      '🏢 Chordify (2023): Optimized REST APIs reducing data retrieval times by 30-60%, deployed cloud-based microservices ensuring scalability',
    ],
    impact: 'Significantly enhanced platform performance during peak traffic periods',
    yearsOfExperience: '2+ years'
  },
  { 
    name: 'React', 
    icon: 'https://img.icons8.com/color/48/000000/react-native.png',
    experience: [
      '🏢 Amazon (2025-Present): Building internal tools and dashboards for Prime Video operations',
      '🏢 Personal Projects: Crafted interactive portfolio with advanced animations, glassmorphism, and innovative UI components',
    ],
    impact: 'Delivered modern, responsive web applications with exceptional user experiences',
    yearsOfExperience: '2+ years'
  },
  { 
    name: 'Angular', 
    icon: 'https://img.icons8.com/?size=48&id=j9DnICNnlhGk&format=png&color=000000',
    experience: [
      '🏢 Schneider Electric (2018-2022): Developed and maintained large-scale Design Portal frontend using Angular, serving enterprise customers for product configuration and quoting',
    ],
    impact: 'Led team to deploy customer support platform reducing support tickets by 20%',
    yearsOfExperience: '4+ years'
  },
  { 
    name: 'Spring Boot', 
    icon: 'https://img.icons8.com/?size=48&id=90519&format=png&color=000000',
    experience: [
      '🏢 Schneider Electric (2018-2022): Architected microservices and RESTful APIs using SpringBoot framework, improving cross-functional data sharing efficiency by 20%',
    ],
    impact: 'Built scalable backend systems handling thousands of concurrent enterprise users',
    yearsOfExperience: '4+ years'
  },
  { 
    name: 'Spring MVC', 
    icon: 'https://img.icons8.com/?size=48&id=90519&format=png&color=22A642',
    experience: [
      '🏢 Schneider Electric (2018-2022): Led 4-member team designing and deploying customer support platform using Java, Angular, and SpringMVC',
    ],
    impact: 'Reduced customer support tickets by 20% through efficient platform architecture',
    yearsOfExperience: '4+ years'
  },
  { 
    name: 'MongoDB', 
    icon: 'https://img.icons8.com/color/48/000000/mongodb.png',
    experience: [
      '🏢 Schneider Electric (2018-2022): Managed NoSQL database architecture for Design Portal, optimized queries and indexing for performance',
    ],
    impact: 'Optimized database performance by 26% through advanced procedures and indexing',
    yearsOfExperience: '4+ years'
  },
  { 
    name: 'MySQL', 
    icon: 'https://img.icons8.com/color/48/000000/mysql-logo.png',
    experience: [
      '🏢 Chordify (2023): Optimized SQL query calls reducing data retrieval times by 30-60%',
      '🏢 Multiple Projects: Designed normalized schemas for efficient data storage and retrieval',
    ],
    impact: 'Delivered high-performance database solutions for mission-critical applications',
    yearsOfExperience: '5+ years'
  },
  { 
    name: 'SQL Server', 
    icon: 'https://img.icons8.com/color/48/000000/microsoft-sql-server.png',
    experience: [
      '🏢 Schneider Electric (2018-2022): Managed SQL Server databases for Design Portal, implemented advanced stored procedures and indexing',
      '🏢 Mohawk Northeast (2024): Designed comprehensive database system for employee certifications with automated alert mechanisms',
    ],
    impact: 'Achieved 26% performance optimization and ensured data integrity across organizations',
    yearsOfExperience: '6+ years'
  },
  { 
    name: 'AWS', 
    icon: 'https://img.icons8.com/color/48/000000/amazon-web-services.png',
    experience: [
      '🏢 Amazon (2025-Present): Deploying and maintaining cloud infrastructure using AWS services including Lambda, CloudFormation, and IAM',
      '🏢 Chordify (2023): Contributed to deployment of cloud-based microservices ensuring scalability',
    ],
    impact: 'Supporting millions of Prime Video customers with reliable cloud infrastructure',
    yearsOfExperience: '2+ years'
  },
  { 
    name: 'AWS Lambda', 
    icon: 'https://img.icons8.com/?size=48&id=33039&format=png&color=000000',
    experience: [
      '🏢 Amazon (2025-Present): Building serverless functions powering Prime Video storefront automation and content curation systems',
    ],
    impact: 'Enabling scalable, event-driven architecture for global content delivery',
    yearsOfExperience: '1+ year'
  },
  { 
    name: 'Git', 
    icon: 'https://img.icons8.com/color/48/000000/git.png',
    experience: [
      '🏢 All Companies: Version control for all projects ensuring code quality and collaboration',
      '🏢 Schneider Electric (2018-2022): Managed repositories for multi-team collaboration',
    ],
    impact: 'Maintained clean commit history and facilitated seamless team collaboration',
    yearsOfExperience: '6+ years'
  },
  { 
    name: 'GitHub', 
    icon: 'https://img.icons8.com/glyph-neue/48/ffffff/github.png',
    experience: [
      '🏢 Open Source & Personal Projects: Hosting portfolio and collaborative projects',
      '🏢 Professional Development: Code reviews and pull request workflows',
    ],
    impact: 'Established efficient CI/CD workflows and code review processes',
    yearsOfExperience: '6+ years'
  },
  { 
    name: 'Jenkins', 
    icon: 'https://img.icons8.com/color/48/000000/jenkins.png',
    experience: [
      '🏢 Schneider Electric (2018-2022): Configured CI/CD pipelines for automated builds, tests, and deployments',
    ],
    impact: 'Streamlined development workflow reducing deployment time significantly',
    yearsOfExperience: '4+ years'
  },
  { 
    name: 'Jira', 
    icon: 'https://img.icons8.com/color/48/000000/jira.png',
    experience: [
      '🏢 Schneider Electric (2018-2022): Tracked 900+ technical issues, managed sprints and agile workflows',
      '🏢 Amazon (2025-Present): Sprint planning and ticket management for feature development',
    ],
    impact: 'Improved project visibility and team coordination through agile methodologies',
    yearsOfExperience: '6+ years'
  },
  { 
    name: 'HTML5', 
    icon: 'https://img.icons8.com/color/48/000000/html-5--v1.png',
    experience: [
      '🏢 All Frontend Projects: Semantic HTML for accessible, SEO-friendly web applications',
      '🏢 Schneider Electric (2018-2022): Enterprise portal development',
    ],
    impact: 'Built standards-compliant web applications with excellent accessibility',
    yearsOfExperience: '6+ years'
  },
  { 
    name: 'CSS3', 
    icon: 'https://img.icons8.com/color/48/000000/css3.png',
    experience: [
      '🏢 Personal Portfolio: Advanced CSS including animations, gradients, glassmorphism, and responsive design',
      '🏢 All Frontend Projects: Modern styling with Tailwind CSS and CSS-in-JS',
    ],
    impact: 'Created visually stunning, responsive interfaces that delight users',
    yearsOfExperience: '6+ years'
  },
  { 
    name: 'Android', 
    icon: 'https://img.icons8.com/color/48/000000/android-os.png',
    experience: [
      '🏢 Lifetrenz (2017): Developed mobile application with user-friendly UI including patient data visualization graphs',
    ],
    impact: 'Delivered intuitive mobile experiences for healthcare professionals',
    yearsOfExperience: '1+ year'
  },
  { 
    name: 'Power BI', 
    icon: 'https://img.icons8.com/color/48/000000/power-bi.png',
    experience: [
      '🏢 Mohawk Northeast (2024): Generated dynamic reports providing insights into certification statuses across organization',
    ],
    impact: 'Enabled data-driven decision making through interactive visualizations',
    yearsOfExperience: '1+ year'
  },
  { 
    name: 'Power Apps', 
    icon: 'https://img.icons8.com/?size=48&id=L2cWyCdu9LWq&format=png&color=000000',
    experience: [
      '🏢 Mohawk Northeast (2024): Created user-friendly interface with role-based access for certification management',
    ],
    impact: 'Streamlined data input processes across multiple organizational teams',
    yearsOfExperience: '1+ year'
  },
  { 
    name: 'Power Automate', 
    icon: 'https://img.icons8.com/?size=48&id=VOnEKbhIXNSS&format=png&color=000000',
    experience: [
      '🏢 Mohawk Northeast (2024): Implemented automated alert mechanisms at 6-month, 3-month, and 1-month thresholds before certification expirations',
    ],
    impact: 'Prevented compliance issues through proactive automated notifications',
    yearsOfExperience: '1+ year'
  },
  { 
    name: 'Excel', 
    icon: 'https://img.icons8.com/color/48/000000/ms-excel.png',
    experience: [
      '🏢 NYU Graduate Assistant (2023-2024): Maintained department databases and complex spreadsheets',
      '🏢 Harvard Business School CORe (2020): Advanced data analysis and financial modeling',
    ],
    impact: 'Automated complex analyses saving hours of manual work weekly',
    yearsOfExperience: '6+ years'
  },
  { 
    name: 'Data Analysis', 
    icon: 'https://img.icons8.com/?size=48&id=55251&format=png&color=000000',
    experience: [
      '🏢 Mohawk Northeast (2024): Analyzed certification data to identify compliance trends',
      '🏢 Biotechpro (2024): Conducted comprehensive market research for product positioning',
    ],
    impact: 'Drove strategic decisions through actionable insights from complex datasets',
    yearsOfExperience: '4+ years'
  },
  { 
    name: 'ETL', 
    icon: 'https://img.icons8.com/color/48/000000/data-configuration.png',
    experience: [
      '🏢 Mohawk Northeast (2024): Designed ETL pipelines for certification database system',
      '🏢 Various Projects: Transformed and loaded data across multiple systems',
    ],
    impact: 'Ensured data integrity and consistency across enterprise systems',
    yearsOfExperience: '3+ years'
  },
  { 
    name: 'DevOps', 
    icon: 'https://img.icons8.com/?size=48&id=3628&format=png&color=000000',
    experience: [
      '🏢 Chordify (2023): Contributed to deployment and maintenance of cloud-based microservices',
      '🏢 Schneider Electric (2018-2022): Implemented CI/CD pipelines and monitoring solutions',
    ],
    impact: 'Reduced deployment failures and improved system reliability significantly',
    yearsOfExperience: '4+ years'
  },
  { 
    name: 'CI/CD', 
    icon: 'https://img.icons8.com/?size=48&id=vk5HKlQlkcOR&format=png&color=000000',
    experience: [
      '🏢 Schneider Electric (2018-2022): Automated build, test, and deployment pipelines using Jenkins',
      '🏢 Chordify (2023): Maintained continuous delivery practices for microservices',
    ],
    impact: 'Accelerated release cycles while maintaining high code quality standards',
    yearsOfExperience: '4+ years'
  },
  { 
    name: 'RESTful APIs', 
    icon: 'https://img.icons8.com/?size=48&id=21888&format=png&color=5A834A',
    experience: [
      '🏢 Schneider Electric (2018-2022): Integrated RESTful APIs automating cross-functional data sharing, improving efficiency by 20%',
      '🏢 Chordify (2023): Optimized REST APIs reducing data retrieval times by 30-60%',
    ],
    impact: 'Built scalable API architectures serving thousands of requests per second',
    yearsOfExperience: '6+ years'
  },
  { 
    name: 'Agile', 
    icon: 'https://img.icons8.com/?size=48&id=aPFPvI9iSUKn&format=png&color=000000',
    experience: [
      '🏢 Schneider Electric (2018-2022): Led agile sprints and ceremonies for 4-member development team',
      '🏢 Amazon (2025-Present): Participating in agile workflows for rapid feature delivery',
    ],
    impact: 'Delivered projects 30% faster through iterative development and continuous feedback',
    yearsOfExperience: '6+ years'
  },
  { 
    name: 'SDLC', 
    icon: 'https://img.icons8.com/?size=48&id=iFag1p40O89x&format=png&color=A82A2A',
    experience: [
      '🏢 All Engineering Roles: Full lifecycle development from requirements to deployment',
      '🏢 Schneider Electric (2018-2022): Managed complete SDLC for enterprise applications',
    ],
    impact: 'Ensured quality deliverables through structured development processes',
    yearsOfExperience: '6+ years'
  },
  { 
    name: 'TDD', 
    icon: 'https://img.icons8.com/?size=48&id=40886&format=png&color=4E86B3',
    experience: [
      '🏢 Amazon (2025-Present): Writing tests before implementation for robust, maintainable code',
      '🏢 Schneider Electric (2018-2022): Implemented TDD practices improving system stability by 25%',
    ],
    impact: 'Reduced bugs in production and increased developer confidence in refactoring',
    yearsOfExperience: '5+ years'
  },
  { 
    name: 'Unit Testing', 
    icon: 'https://img.icons8.com/color/48/000000/test-tube.png',
    experience: [
      '🏢 Amazon (2025-Present): Comprehensive unit test coverage for all services',
      '🏢 Schneider Electric (2018-2022): Established testing standards achieving 80%+ code coverage',
    ],
    impact: 'Improved system stability by 25% through rigorous testing practices',
    yearsOfExperience: '6+ years'
  },
  { 
    name: 'Code Review', 
    icon: 'https://img.icons8.com/color/48/000000/code.png',
    experience: [
      '🏢 Amazon (2025-Present): Conducting thorough code reviews ensuring best practices',
      '🏢 Schneider Electric (2018-2022): Led code reviews for team maintaining coding standards',
    ],
    impact: 'Maintained high code quality and facilitated knowledge sharing across team',
    yearsOfExperience: '6+ years'
  },
  { 
    name: 'Product Management', 
    icon: 'https://img.icons8.com/color/48/000000/product.png',
    experience: [
      '🏢 Biotechpro (2024): Developed pitch decks, created go-to-market strategies, conducted market research',
      '🏢 Mohawk Northeast (2024): Managed product lifecycle for certification management system',
    ],
    impact: 'Successfully positioned products leading to increased client engagement',
    yearsOfExperience: '1+ year'
  },
  { 
    name: 'Project Management', 
    icon: 'https://img.icons8.com/color/48/000000/project-management.png',
    experience: [
      '🏢 Schneider Electric (2018-2022): Led 4-member team delivering customer support platform',
      '🏢 Multiple Projects: Coordinated cross-functional teams ensuring on-time delivery',
    ],
    impact: 'Delivered complex projects on schedule while maintaining stakeholder satisfaction',
    yearsOfExperience: '4+ years'
  },
  { 
    name: 'Leadership', 
    icon: 'https://img.icons8.com/color/48/000000/leadership.png',
    experience: [
      '🏢 Schneider Electric (2018-2022): Led 4-member team in designing, planning, and deploying new platform reducing support tickets by 20%',
      '🏢 NYU Graduate Assistant (2023-2024): Mentored students and coordinated department initiatives',
    ],
    impact: 'Built high-performing teams and fostered culture of excellence and innovation',
    yearsOfExperience: '4+ years'
  },
  { 
    name: 'Time Management', 
    icon: 'https://img.icons8.com/?size=48&id=58853&format=png&color=D5C138',
    experience: [
      '🏢 All Roles: Balanced multiple projects and priorities while meeting tight deadlines',
      '🏢 NYU Student (2023-2024): Managed full-time studies, graduate assistantship, and internships',
    ],
    impact: 'Consistently delivered high-quality work ahead of schedule',
    yearsOfExperience: '6+ years'
  },
  { 
    name: 'Organization', 
    icon: 'https://img.icons8.com/?size=48&id=PV2NAkRVK2rH&format=png&color=000000',
    experience: [
      '🏢 NYU Graduate Assistant (2023-2024): Maintained department databases, calendars, and forms',
      '🏢 All Roles: Structured workflows and documentation ensuring team efficiency',
    ],
    impact: 'Improved team productivity through systematic organization of resources',
    yearsOfExperience: '6+ years'
  },
  { 
    name: 'Adaptability', 
    icon: 'https://img.icons8.com/?size=48&id=SO25c7WqMWBh&format=png&color=000000',
    experience: [
      '🏢 Career Journey: Successfully transitioned across multiple roles, companies, and countries',
      '🏢 Tech Stack Evolution: Quickly mastered new technologies as needed for each role',
    ],
    impact: 'Thrived in diverse environments from startup to enterprise to big tech',
    yearsOfExperience: '6+ years'
  }
];

export function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section id="skills" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 flex items-center gap-4">
            <Code2 className="text-purple-400" size={40} />
            Skills & Abilities
          </h2>

          {/* Mac Desktop */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
            {/* Menu Bar */}
            <div className="bg-gray-800/95 backdrop-blur-md px-4 py-2 flex items-center justify-between border-b border-gray-700">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer"></div>
                </div>
                <div className="flex items-center gap-4 text-white text-sm">
                  <span className="font-semibold">🍎</span>
                  <span className="font-semibold">Finder</span>
                  <span className="text-gray-400">File</span>
                  <span className="text-gray-400">Edit</span>
                  <span className="text-gray-400">View</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white text-sm">
                <Search size={16} className="text-gray-400" />
                <Wifi size={16} />
                <Battery size={16} />
                <span className="text-xs">{formatDate(currentTime)}</span>
                <span className="font-medium">{formatTime(currentTime)}</span>
              </div>
            </div>

            {/* Desktop Area */}
            <div 
              className="relative bg-gradient-to-br from-purple-900 via-pink-900 to-purple-950 min-h-[600px] p-8"
              onClick={() => setSelectedSkill(null)}
            >
              {/* Wallpaper overlay pattern */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}></div>

              {/* Desktop Icons Grid */}
              <div className="relative grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-4 mb-20">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.03, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="relative"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSkill(skill);
                    }}
                  >
                    <motion.div
                      className={`flex flex-col items-center gap-2 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                        selectedSkill?.name === skill.name 
                          ? 'bg-purple-500/40 backdrop-blur-sm' 
                          : 'hover:bg-white/10'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Icon */}
                      <div className={`w-16 h-16 flex items-center justify-center rounded-xl transition-all duration-200 ${
                        selectedSkill?.name === skill.name ? 'bg-white/20' : 'bg-white/10'
                      }`}>
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="w-12 h-12 object-contain"
                          draggable={false}
                        />
                      </div>
                      {/* Label */}
                      <span className={`text-xs text-center max-w-full px-1 py-0.5 rounded transition-all duration-200 ${
                        selectedSkill?.name === skill.name 
                          ? 'bg-purple-600 text-white font-medium' 
                          : 'text-white bg-black/30'
                      }`}>
                        {skill.name}
                      </span>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Trash Icon */}
              <div className="absolute bottom-24 right-8">
                <motion.div
                  className="flex flex-col items-center gap-2 p-3 rounded-lg cursor-pointer hover:bg-white/10 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-xl">
                    <span className="text-4xl">🗑️</span>
                  </div>
                  <span className="text-xs text-white bg-black/30 px-1 py-0.5 rounded">
                    Trash
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Dock */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
              <motion.div 
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                className="bg-white/10 backdrop-blur-xl rounded-2xl px-4 py-3 border border-white/20 shadow-2xl"
              >
                <div className="flex items-end gap-2">
                  {/* Dock Icons */}
                  {['📁', '💼', '🎨', '⚙️', '📊', '🌐', '📝'].map((icon, index) => (
                    <motion.div
                      key={index}
                      className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl cursor-pointer hover:bg-white/30 transition-all"
                      whileHover={{ 
                        scale: 1.3, 
                        y: -10,
                        transition: { type: "spring", stiffness: 400, damping: 10 }
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {icon}
                    </motion.div>
                  ))}
                  
                  {/* Divider */}
                  <div className="w-0.5 h-12 bg-white/30 mx-1"></div>
                  
                  {/* Trash in dock */}
                  <motion.div
                    className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl cursor-pointer hover:bg-white/30 transition-all"
                    whileHover={{ 
                      scale: 1.3, 
                      y: -10,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    🗑️
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          <p className="text-center text-gray-400 mt-6 text-sm">
            Click on any skill icon to view detailed experience! 💻
          </p>
        </motion.div>
      </div>

      {/* macOS Terminal-style Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-black border border-gray-700 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] sm:max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Terminal Header */}
              <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setSelectedSkill(null)}
                      className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                    />
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Terminal size={16} />
                    <span className="text-sm font-mono">anitha@portfolio ~ skill_info</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Terminal Content */}
              <div className="bg-black p-6 font-mono text-sm overflow-y-auto max-h-[calc(80vh-60px)]">
                <div className="space-y-4">
                  {/* Command prompt */}
                  <div className="text-green-400">
                    anitha@portfolio:~$ skill_info --name "{selectedSkill.name}"
                  </div>

                  {/* Output */}
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <span className="text-cyan-400">╔══════════════════════════════════════════════════╗</span>
                      <br />
                      <span className="text-cyan-400">║</span>
                      <span className="text-yellow-400 font-bold"> SKILL: {selectedSkill.name}</span>
                      <span className="text-cyan-400"> {' '.repeat(Math.max(0, 46 - selectedSkill.name.length))}║</span>
                      <br />
                      <span className="text-cyan-400">╚══════════════════════════════════════════════════╝</span>
                    </div>

                    {selectedSkill.yearsOfExperience && (
                      <div>
                        <span className="text-purple-400">⏱  Experience:</span> 
                        <span className="text-white font-semibold"> {selectedSkill.yearsOfExperience}</span>
                      </div>
                    )}

                    <div>
                      <span className="text-purple-400">📋 Professional Experience:</span>
                      <div className="mt-2 space-y-3 pl-4">
                        {selectedSkill.experience.map((exp, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="border-l-2 border-green-500/50 pl-4 py-2"
                          >
                            <p className="text-gray-200 leading-relaxed">{exp}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-purple-400">🎯 Key Impact:</span>
                      <div className="mt-2 pl-4">
                        <p className="text-yellow-300 font-semibold">{selectedSkill.impact}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-700">
                      <span className="text-green-400">✓ Skill assessment completed successfully</span>
                    </div>

                    <div className="text-gray-500 text-xs pt-2">
                      <span className="text-cyan-400">Tip:</span> Click outside or press the red button to close
                    </div>
                  </div>

                  {/* Cursor */}
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">anitha@portfolio:~$</span>
                    <motion.span
                      className="inline-block w-2 h-4 bg-green-400"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}