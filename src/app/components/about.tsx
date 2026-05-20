import React from 'react';
import { motion } from 'motion/react';
import { User } from 'lucide-react';
import profileImage from 'figma:asset/fab771ee7407842399c9055021727af7e2849571.png';

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 flex items-center gap-4">
            <User className="text-purple-400" size={40} />
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
                <img
                  src={profileImage}
                  alt="Anitha Rajasena Kurup"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-white mb-4">Hello!</h3>

              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  I grew up in Dubai, later lived in India, and now I am exploring New York City!
                  I thrive on creativity, problem-solving, and continuous learning.
                  Outside of tech, I enjoy music, drawing, reading, and city walks.
                  I also like learning new things; I am currently learning to animate on Enve.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
