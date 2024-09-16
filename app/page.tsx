"use client";

import React, { lazy, Suspense, ComponentType } from 'react';
import { navItems } from "@/data";

// Lazy load components
const loadableComponent = <T extends ComponentType<any>>(importFn: () => Promise<{ default: T }>) =>
  lazy(() => importFn().then(module => ({ default: module.default as T })));

const Hero = loadableComponent(() => import('@/components/Hero'));
const Grid = loadableComponent(() => import('@/components/Grid'));
const Footer = loadableComponent(() => import('@/components/Footer'));
const Clients = loadableComponent(() => import('@/components/Clients'));
const Approach = loadableComponent(() => import('@/components/Approach'));
const Experience = loadableComponent(() => import('@/components/Experience'));
import { FloatingNav } from "@/components/ui/FloatingNavbar";
const Test = loadableComponent(() => import('@/components/Test'));
const Form = loadableComponent(() => import('@/components/Form'));
const WhatsAppIcon = loadableComponent(() => import('@/components/WhatsAppIcon'));

const Home = () => {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Suspense fallback={<div></div>}>
          <FloatingNav navItems={navItems} />
          <div className="mt-2">
            <Test />
          </div>
          <div className="md:mb-14">
            <Hero />
          </div>
          <div className="mt-28">
            <Grid />
          </div>
          <Clients />
          <Experience />
          <Approach />
          <Form />
          <Footer />
          <WhatsAppIcon />
        </Suspense>
      </div>
    </main>
  );
};

export default Home;



