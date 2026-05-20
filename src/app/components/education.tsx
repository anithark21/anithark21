import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Sparkles } from 'lucide-react';

const education = [
  {
    degree: 'Master of Science',
    field: 'Management of Technology',
    institution: 'New York University',
    years: '2022-2024'
  },
  {
    degree: 'Bachelor of Technology',
    field: 'Computer and Communication Engineering',
    institution: 'Manipal Institute of Technology',
    years: '2014-2018'
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 flex items-center gap-4">
            <GraduationCap className="text-purple-400" size={40} />
            Education
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                {/* Wall Background */}
                <div className="absolute -inset-8 bg-gradient-to-br from-purple-900/60 via-slate-800 to-pink-900/60 rounded-xl opacity-80" 
                     style={{
                       backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px), repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)'
                     }}>
                </div>

                {/* Hanging Wire */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-slate-400 to-slate-600"></div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-500 shadow-lg"></div>
                </div>

                {/* Frame Shadow - creates depth from wall */}
                <div className="absolute -inset-2 bg-black/40 blur-xl rounded-lg"></div>
                
                {/* Frame - Purple/Pink gradient instead of wood */}
                <div className="relative bg-gradient-to-br from-purple-900 via-pink-900 to-purple-950 p-4 rounded-lg shadow-2xl"
                     style={{
                       boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.1), inset 0 -2px 4px rgba(0,0,0,0.5), 0 20px 40px rgba(0,0,0,0.6)'
                     }}>
                  
                  {/* Metallic Texture */}
                  <div className="absolute inset-0 opacity-20 rounded-lg" style={{
                    backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(255,255,255,0.1) 3px, rgba(255,255,255,0.1) 6px)'
                  }}></div>

                  {/* Inner Frame Border */}
                  <div className="absolute inset-3 border-2 border-purple-600/50 rounded"></div>

                  {/* Mat Board */}
                  <div className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 p-3 sm:p-4 shadow-inner">
                    {/* Mat Board Inner Shadow */}
                    <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(147,51,234,0.1)]"></div>
                    
                    {/* Certificate/Diploma */}
                    <div className="relative bg-gradient-to-br from-purple-50/90 via-pink-50/90 to-purple-100/90 p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-purple-700 shadow-xl overflow-hidden">
                      {/* Parchment Texture Overlay */}
                      <div className="absolute inset-0 opacity-5" style={{
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.4"/%3E%3C/svg%3E")',
                      }}></div>

                      {/* Decorative Corner Elements */}
                      <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 border-l-2 border-t-2 sm:border-l-4 sm:border-t-4 border-purple-700 opacity-50"></div>
                      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 border-r-2 border-t-2 sm:border-r-4 sm:border-t-4 border-purple-700 opacity-50"></div>
                      <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 border-l-2 border-b-2 sm:border-l-4 sm:border-b-4 border-purple-700 opacity-50"></div>
                      <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 border-r-2 border-b-2 sm:border-r-4 sm:border-b-4 border-purple-700 opacity-50"></div>

                      {/* Ornamental Top Border */}
                      <div className="absolute top-0 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r from-transparent via-purple-700 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r from-transparent via-pink-700 to-transparent"></div>

                      {/* Sparkle Decorations */}
                      <Sparkles className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 text-purple-600 opacity-30" size={20} />
                      
                      {/* Content */}
                      <div className="relative z-10 text-center space-y-3 sm:space-y-4">
                        {/* Header with Icon */}
                        <div className="flex justify-center mb-3 sm:mb-4">
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-md opacity-50"></div>
                            <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-full p-3 sm:p-4 shadow-lg">
                              <GraduationCap className="text-white" size={24} />
                            </div>
                          </div>
                        </div>

                        {/* Decorative Line */}
                        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                          <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent to-purple-700"></div>
                          <Award className="text-purple-700" size={14} />
                          <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-l from-transparent to-purple-700"></div>
                        </div>

                        {/* Certificate Text */}
                        <div className="space-y-2 sm:space-y-3">
                          <h4 className="text-purple-900 font-bold text-lg sm:text-xl md:text-2xl tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
                            {edu.degree}
                          </h4>
                          <div className="h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
                          <h3 className="text-purple-950 text-base sm:text-lg md:text-xl font-semibold px-2 sm:px-4" style={{ fontFamily: 'Georgia, serif' }}>
                            {edu.field}
                          </h3>
                          <div className="pt-1 sm:pt-2">
                            <p className="text-purple-800 text-sm sm:text-base md:text-lg font-medium" style={{ fontFamily: 'Georgia, serif' }}>
                              {edu.institution}
                            </p>
                            <p className="text-pink-700 text-xs sm:text-sm mt-1 sm:mt-2 font-semibold tracking-wider">
                              {edu.years}
                            </p>
                          </div>
                        </div>

                        {/* Decorative Line */}
                        <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
                          <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent to-pink-700"></div>
                          <Award className="text-pink-700" size={14} />
                          <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-l from-transparent to-pink-700"></div>
                        </div>

                        {/* Seal/Stamp */}
                        <div className="flex justify-center mt-4 sm:mt-6">
                          <div className="relative">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 sm:border-4 border-purple-700 flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg">
                              <Award className="text-white" size={24} />
                            </div>
                            {/* Ribbon */}
                            <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 -translate-x-1/2 w-0.5 sm:w-1 h-4 sm:h-6 bg-gradient-to-b from-purple-700 to-pink-700"></div>
                            <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-4 sm:w-6 h-3 sm:h-4 flex gap-1">
                              <div className="w-2 sm:w-3 h-3 sm:h-4 bg-purple-700 clip-ribbon-left transform rotate-6"></div>
                              <div className="w-2 sm:w-3 h-3 sm:h-4 bg-pink-700 clip-ribbon-right transform -rotate-6"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Scrolled Edge Effect - Left */}
                      <div className="absolute left-0 top-0 bottom-0 w-2 sm:w-3 bg-gradient-to-r from-purple-800 to-transparent opacity-40"></div>
                      {/* Scrolled Edge Effect - Right */}
                      <div className="absolute right-0 top-0 bottom-0 w-2 sm:w-3 bg-gradient-to-l from-pink-800 to-transparent opacity-40"></div>
                    </div>
                  </div>

                  {/* Frame Highlights - 3D effect */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
                  <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-transparent to-transparent opacity-50"></div>
                </div>

                {/* Glass Reflection Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none rounded-lg"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}