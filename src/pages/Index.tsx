
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import Solutions from '@/components/Solutions';
import Advantages from '@/components/Advantages';
import StudentStories from '@/components/StudentStories';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PainPoints />
      <Solutions />
      <Advantages />
      <StudentStories />
      <FAQ />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Index;
