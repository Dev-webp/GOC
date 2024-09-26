"use client";

import React, { lazy, Suspense, ComponentType } from 'react';
import { navItems } from "@/data";

// Lazy load components
const loadableComponent = <T extends ComponentType<any>>(importFn: () => Promise<{ default: T }>) =>
  lazy(() => importFn().then(module => ({ default: module.default as T })));

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import CheckList from '@/components/CheckList';
const Test = loadableComponent(() => import('@/components/Test'));
const Hero = loadableComponent(() => import('@/components/Hero'));
const Grid = loadableComponent(() => import('@/components/Grid'));
const Clients = loadableComponent(() => import('@/components/Clients'));
const Experience = loadableComponent(() => import('@/components/Experience'));
const Approach = loadableComponent(() => import('@/components/Approach'));
const Form = loadableComponent(() => import('@/components/Form'));
const Footer = loadableComponent(() => import('@/components/Footer'));
const WhatsAppIcon = loadableComponent(() => import('@/components/WhatsAppIcon'));

const Home = () => {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Suspense fallback={<div></div>}>
          <FloatingNav navItems={navItems} />
          <div className="mt-10">
            <Test />
          </div>
          <div className="mt-56 sm:mt-2 md:mt-0 lg:mt-4">
            <Hero />
          </div>
          <Grid />
          <Clients />
          <Experience />
          <CheckList/>
          <Approach />
          <Form />
          <div className='mb-8'>
          <Footer />
          </div>
          <WhatsAppIcon />
        </Suspense>
      </div>
    </main>
  );
};

export default Home;



