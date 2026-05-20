import React from 'react';
import { Navigation } from '@/app/components/navigation';
import { Hero } from '@/app/components/hero';
import { About } from '@/app/components/about';
import { Skills } from '@/app/components/skills';
import { Education } from '@/app/components/education';
import { Experience } from '@/app/components/experience';
import { Contact } from '@/app/components/contact';
import { Footer } from '@/app/components/footer';
import { ScrollToTop } from '@/app/components/scroll-to-top';
import { ChatBot } from '@/app/components/chatbot';

export default function App() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Contact />
      <Footer />
      <ScrollToTop />
      <ChatBot />
    </div>
  );
}