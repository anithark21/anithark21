import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'motion/react';
import { Briefcase, X } from 'lucide-react';

const experiences = [
  {
    title: 'Software Development Engineer',
    company: 'Amazon',
    period: 'Apr 2025 - Present',
    location: 'New York, NY · On-site',
    color: 'from-orange-400 to-yellow-500',
    height: 'h-64',
    description: [
      'Developing and maintaining a title querying orchestration platform powering 75%+ of Prime Video storefront carousels, enhancing content discovery for millions of customers globally',
      'Building and optimizing Tier-1 search query services supporting multiple product lines',
      'Implementing automated solutions for storefront curation to deliver personalized content recommendations and culturally relevant experiences',
      'Engineering data-driven systems to surface trending content based on customer preferences and seasonal events'
    ],
    skills: 'Java 17 · Kotlin · Amazon Web Services (AWS) · AWS Lambda · AWS CloudFormation · AWS Identity and Access Management (AWS IAM) · Unit Testing · Integration Testing · Machine Learning'
  },
  {
    title: 'Product Manager',
    company: 'Biotechpro Cleaners',
    period: 'Sep 2024 - Jan 2025',
    location: 'New York City Metropolitan Area',
    color: 'from-blue-400 to-cyan-600',
    height: 'h-50',
    description: [
      'Developing and delivering persuasive pitch decks for client presentations, showcasing the value and unique features of our product offerings',
      'Collaborating with marketing teams to create targeted campaigns, product positioning, and promotional strategies tailored to client needs and market trends',
      'Conducting comprehensive market research to identify opportunities for innovation and differentiation within the industry',
      'Ensuring all product and marketing documentation complies with U.S. regulatory standards and maintains a professional, client-focused approach'
    ],
    skills: 'Product Lifecycle Management · Product Management · Product Research · Market Research · Competitive Analysis · Go-to-Market Strategy · KPI Definition and Tracking · A/B Testing · Technical Requirements Gathering'
  },
  {
    title: 'Software Developer',
    company: 'Mohawk Northeast, Inc.',
    period: 'Sep 2024 - Dec 2024',
    location: 'New York City Metropolitan Area',
    color: 'from-teal-400 to-blue-600',
    height: 'h-52',
    description: [
      'Designing and developing a comprehensive database system to manage employee certifications and professional licenses',
      'Implementing automated alert mechanisms at 6-month, 3-month, 1-month, and after expiration thresholds before certification expirations',
      'Creating a user-friendly interface with role-based access for seamless data input and management by various teams',
      'Developed dynamic generation of detailed reports to provide insights into certification statuses across the organization in various categories',
      'Collaborating with stakeholders to align the solution with business requirements while ensuring data integrity and security'
    ],
    skills: 'Microsoft Power BI · Microsoft Power Pages · Microsoft Power Apps · Microsoft Power Automate · Product Management · Software Development Life Cycle (SDLC) · Extract, Transform, Load (ETL) · Data Analysis · Data Visualization · Software Development'
  },
  {
    title: 'Front Desk GSE',
    company: 'New York University',
    period: 'Jan 2024 - May 2024',
    location: 'Brooklyn, New York, United States · On-site',
    color: 'from-purple-500 to-indigo-600',
    height: 'h-48',
    description: [
      'Greet students and visitors and direct them to their destination. Direct deliveries to the recipient and/or contact the recipient',
      'Assist with monitoring student area(s) to make sure University protocols are being adhered to',
      'Assist AP with minor administrative tasks'
    ],
    skills: ''
  },
  {
    title: 'Graduate Assistant',
    company: 'New York University',
    period: 'Jan 2023 - May 2024',
    location: 'New York, United States',
    color: 'from-purple-500 to-indigo-600',
    height: 'h-56',
    description: [
      'Working at the department of Technology, Management, and Innovation',
      'Maintaining department databases and forms',
      'Assisting the Director of Academic Operations and Administration with special projects related to department operations and programming',
      'Assisting department faculty with various tasks',
      'Assisting the department administration with special events',
      'Fielding prospective and current student inquiries regarding department programs',
      'Maintaining appointment calendars for department faculty and administration'
    ],
    skills: 'Microsoft Excel · Leadership · JavaScript · Google Apps Script'
  },
  {
    title: 'Software Engineer Summer Associate',
    company: 'Chordify, Inc',
    period: 'May 2023 - Aug 2023',
    location: 'Sunnyvale, California, United States · Remote',
    color: 'from-green-400 to-emerald-600',
    height: 'h-52',
    description: [
      'Optimized the company\'s REST APIs, reducing data retrieval times by 30-60%. This improvement led to significant performance gains across the platform, enhancing the overall user experience and ensuring faster response times during peak traffic periods',
      'Contributed to the deployment and maintenance of cloud-based microservices, ensuring scalability and improved performance',
      'Optimized SQL query calls'
    ],
    skills: 'API Development · Project Management · DevOps · Node.js · Continuous Integration and Continuous Delivery (CI/CD)'
  },
  {
    title: 'Software Design Engineer',
    company: 'Schneider Electric',
    period: 'Jul 2018 - Jun 2022',
    location: 'Bengaluru, Karnataka, India',
    color: 'from-green-500 to-teal-600',
    height: 'h-60',
    description: [
      'As a part of the Design portal team, a full-stack engineer working with Java, Javascript, SpringBoot framework, Angular, Typescript, MongoDB, and SQL Server to create robust code to update and maintain Schneider\'s Design Portal which helps customers in designing, configuring, and quoting products and solutions efficiently',
      'Managed the database architecture for the Design Portal, optimizing performance by 26% through advanced stored procedures and indexing',
      'Resolved over 900 technical issues, utilizing root cause analysis, improving system stability by 25%',
      'Integrated RESTful APIs to automate cross-functional data sharing, resulting in a 20% improvement in overall efficiency',
      'Implemented cybersecurity protocols, conducting regular security audits and vulnerability assessments, collaborating with teams to enhance encryption, access control, and incident response plans',
      'Led a 4-member team in designing, planning, and deploying a new customer support platform using Java, Angular, and SpringMVC. Reduced support tickets by 20%'
    ],
    skills: 'Angular · HTML · Project Management Software · SQL Server Management Studio · Git · Spring Framework · Database Development · Reliability · Data Engineering · Databases · Analytical Skills · Coding Standards · Spring Boot · Spring MVC · Programming · Jenkins · Java · MongoDB · Leadership · TypeScript · API Documentation · SQL · Code Review · JavaScript · Agile Methodologies · Scalability · Jira'
  },
  {
    title: 'Software Engineer',
    company: 'Honeywell',
    period: 'Jan 2018 - Jun 2018',
    location: 'Bangalore',
    color: 'from-red-400 to-orange-600',
    height: 'h-44',
    description: [
      'In the Honeywell Technology Solutions EHBT department, contributed to the development of a program to track user movement through a facility using UIDs and surveillance footage'
    ],
    skills: 'Programming · Java'
  },
  {
    title: 'Mobile Application Developer',
    company: 'Lifetrenz',
    period: 'May 2017 - Jun 2017',
    location: 'Bengaluru Area, India',
    color: 'from-blue-400 to-cyan-600',
    height: 'h-40',
    description: [
      'Under the Android Team, developed my mobile application development skills by implementing user friendly UI including an easily readable graph of patient data'
    ],
    skills: 'Programming · Android · Mobile Application Development'
  }
];

export function Experience() {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0); // Default to first experience
  const carX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Transform car position to sky gradient (dawn to dusk)
  const skyProgress = useTransform(carX, [0, -2800], [0, 1]);
  const [skyGradient, setSkyGradient] = useState('from-orange-300 via-pink-300 to-blue-400');

  useEffect(() => {
    const unsubscribe = skyProgress.on('change', (latest) => {
      if (latest < 0.33) {
        // Dawn
        setSkyGradient('from-orange-300 via-pink-300 to-blue-400');
      } else if (latest < 0.66) {
        // Day
        setSkyGradient('from-blue-400 via-cyan-300 to-blue-500');
      } else {
        // Dusk
        setSkyGradient('from-purple-900 via-pink-700 to-orange-600');
      }
    });
    
    return () => unsubscribe();
  }, [skyProgress]);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <section id="experience" className="py-20 px-6 bg-black/20 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 flex items-center gap-4">
            <Briefcase className="text-purple-400" size={40} />
            Experience Journey
          </h2>
          <p className="text-gray-300 mb-8 text-center">
            Drag the car to explore my career journey from dawn to dusk 🚗 | Click or hover over buildings for details
          </p>

          {/* Interactive Scene */}
          <div 
            ref={containerRef}
            className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/20 cursor-grab active:cursor-grabbing"
            style={{ touchAction: 'none' }}
          >
            {/* Sky Background */}
            <motion.div 
              className={`absolute inset-0 bg-gradient-to-r ${skyGradient} transition-all duration-1000`}
            >
              {/* Sun/Moon */}
              <motion.div
                className="absolute top-10 left-20 w-16 h-16 rounded-full bg-yellow-300 shadow-lg shadow-yellow-500/50"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Clouds */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-20 w-24 h-12 bg-white/30 rounded-full"
                  style={{ left: `${20 + i * 25}%` }}
                  animate={{
                    x: [-50, 50],
                  }}
                  transition={{
                    duration: 20 + i * 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              ))}
            </motion.div>

            {/* Ground */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-800 to-green-600" />

            {/* Road */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gray-700">
              <div className="absolute top-1/2 left-0 right-0 h-1 border-t-4 border-dashed border-yellow-400" />
            </div>

            {/* Draggable Scene Container */}
            <motion.div
              drag="x"
              dragConstraints={{ left: -2800, right: 100 }}
              dragElastic={0.1}
              dragMomentum={false}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              style={{ x: carX }}
              className="absolute inset-0"
            >
              {/* Buildings representing experiences */}
              <div className="absolute bottom-20 left-0 flex gap-32 pl-96">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    {/* Building */}
                    <div 
                      className={`relative ${exp.height} w-40 bg-gradient-to-b ${exp.color} rounded-t-lg shadow-2xl transition-all duration-300 cursor-pointer ${selectedIndex === index ? 'scale-105 brightness-110 ring-2 ring-white/50' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedIndex(index);
                      }}
                    >
                      {/* Windows */}
                      <div className="grid grid-cols-3 gap-2 p-4">
                        {[...Array(9)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-8 h-6 bg-yellow-200 rounded-sm"
                            animate={{
                              opacity: selectedIndex === index ? 1 : [1, 0.3, 1],
                            }}
                            transition={{
                              duration: 2 + Math.random() * 2,
                              repeat: selectedIndex === index ? 0 : Infinity,
                              delay: Math.random() * 2
                            }}
                          />
                        ))}
                      </div>
                      
                      {/* Company Sign */}
                      <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg min-w-max">
                        <p className="text-xs font-bold text-gray-800">{exp.company}</p>
                        <p className="text-xs text-gray-600">{exp.title}</p>
                        <p className="text-xs text-gray-500">{exp.period}</p>
                      </div>

                      {/* Click indicator */}
                      {selectedIndex !== index && (
                        <motion.div
                          className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-purple-500/90 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-semibold whitespace-nowrap shadow-lg"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5, duration: 0.3 }}
                        >
                          👆 Click for details
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Walking People */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={`person-${i}`}
                  className="absolute bottom-20"
                  style={{ left: `${300 + i * 400}px` }}
                  animate={{
                    x: [-100, 100],
                  }}
                  transition={{
                    duration: 15 + i * 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear"
                  }}
                >
                  <div className="w-6 h-12 bg-blue-600 rounded-full relative">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-peach-300 rounded-full" style={{ backgroundColor: '#FCD5B5' }} />
                    <motion.div
                      className="absolute -bottom-8 left-0 w-2 h-8 bg-blue-800 rounded"
                      animate={{ rotate: [0, 20, 0, -20, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute -bottom-8 right-0 w-2 h-8 bg-blue-800 rounded"
                      animate={{ rotate: [0, -20, 0, 20, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
              ))}

              {/* Dogs */}
              {[...Array(2)].map((_, i) => (
                <motion.div
                  key={`dog-${i}`}
                  className="absolute bottom-20"
                  style={{ left: `${500 + i * 800}px` }}
                  animate={{
                    x: [0, 200, 0],
                  }}
                  transition={{
                    duration: 10 + i * 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="relative">
                    {/* Dog body */}
                    <div className="w-8 h-6 bg-amber-700 rounded-lg relative">
                      {/* Head */}
                      <div className="absolute -top-3 -right-2 w-4 h-4 bg-amber-700 rounded-full">
                        <div className="absolute top-0 right-0 w-2 h-3 bg-amber-800 rounded-t-full" />
                      </div>
                      {/* Tail */}
                      <motion.div
                        className="absolute -top-1 -left-1 w-1 h-4 bg-amber-800 rounded origin-bottom"
                        animate={{ rotate: [0, 20, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      />
                      {/* Legs */}
                      <div className="absolute -bottom-2 left-1 w-1 h-3 bg-amber-900 rounded" />
                      <div className="absolute -bottom-2 left-3 w-1 h-3 bg-amber-900 rounded" />
                      <div className="absolute -bottom-2 right-3 w-1 h-3 bg-amber-900 rounded" />
                      <div className="absolute -bottom-2 right-1 w-1 h-3 bg-amber-900 rounded" />
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Trees */}
              {[...Array(10)].map((_, i) => (
                <div
                  key={`tree-${i}`}
                  className="absolute bottom-20"
                  style={{ left: `${200 + i * 300}px` }}
                >
                  <div className="relative">
                    {/* Trunk */}
                    <div className="w-4 h-12 bg-amber-900 rounded mx-auto" />
                    {/* Leaves */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-12 h-12 bg-green-600 rounded-full" />
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-10 h-10 bg-green-500 rounded-full" />
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Car (Fixed position, scene moves instead) */}
            <motion.div
              className="absolute bottom-24 left-20 z-20"
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Car body */}
              <div className="relative">
                {/* Main body */}
                <div className="w-24 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg relative shadow-lg">
                  {/* Roof */}
                  <div className="absolute -top-6 left-6 w-12 h-8 bg-gradient-to-r from-red-600 to-red-700 rounded-t-lg" />
                  {/* Windows */}
                  <div className="absolute -top-5 left-7 w-4 h-6 bg-cyan-300 rounded-sm" />
                  <div className="absolute -top-5 left-13 w-4 h-6 bg-cyan-300 rounded-sm" />
                  {/* Headlights */}
                  <div className="absolute top-2 -right-1 w-2 h-2 bg-yellow-300 rounded-full shadow-lg shadow-yellow-300/50" />
                  <div className="absolute top-6 -right-1 w-2 h-2 bg-red-600 rounded-full" />
                </div>
                {/* Wheels */}
                <motion.div
                  className="absolute -bottom-2 left-2 w-6 h-6 bg-gray-900 rounded-full border-2 border-gray-600"
                  animate={{
                    rotate: isDragging ? [0, 360] : 0,
                  }}
                  transition={{
                    duration: 1,
                    repeat: isDragging ? Infinity : 0,
                    ease: "linear"
                  }}
                >
                  <div className="absolute inset-1 bg-gray-700 rounded-full" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-2 right-2 w-6 h-6 bg-gray-900 rounded-full border-2 border-gray-600"
                  animate={{
                    rotate: isDragging ? [0, 360] : 0,
                  }}
                  transition={{
                    duration: 1,
                    repeat: isDragging ? Infinity : 0,
                    ease: "linear"
                  }}
                >
                  <div className="absolute inset-1 bg-gray-700 rounded-full" />
                </motion.div>
              </div>
            </motion.div>

            {/* Instructions */}
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white text-sm">
              <p>👆 Drag the scene to explore!</p>
            </div>
          </div>

          {/* Experience Details Modal */}
          <AnimatePresence>
            {selectedIndex !== null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="mt-8 bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30 shadow-2xl"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{experiences[selectedIndex].title}</h3>
                    <p className="text-xl text-purple-300 mb-1">{experiences[selectedIndex].company}</p>
                    <p className="text-gray-400 text-sm mb-1">{experiences[selectedIndex].period}</p>
                    <p className="text-gray-400 text-sm">{experiences[selectedIndex].location}</p>
                  </div>
                  <button
                    onClick={() => setSelectedIndex(null)}
                    className="text-gray-400 hover:text-white transition-colors p-2"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-3 mb-6">
                  {experiences[selectedIndex].description.map((desc, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-3"
                    >
                      <span className="text-purple-400 mt-1">•</span>
                      <p className="text-gray-300 leading-relaxed">{desc}</p>
                    </motion.div>
                  ))}
                </div>

                {experiences[selectedIndex].skills && (
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm text-gray-400 mb-2">Skills:</p>
                    <p className="text-sm text-purple-300">{experiences[selectedIndex].skills}</p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}