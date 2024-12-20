import React, { useState } from 'react';
import FadeIn from '@/components/ui/FadeIn';
import FadeRight from '@/components/ui/FadeRight';
import Image from 'next/image';
import logo from '../public/logo-1.png'; 
import firstLogo from '../public/first.png'; 
import ContactForm from './ui/ContactForm';
import MagicButton from './MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';
import { BsTelephoneForward } from "react-icons/bs";

const Test = () => {
  const [isCallNowVisible, setIsCallNowVisible] = useState(false);
  return (
    <div className="relative">
      {/* Navigation Bar */}
      <div className="bg-black shadow-md flex items-center justify-between w-full fixed top-0 left-0 z-50 md:static">
        <div className="flex items-center space-x-4 w-full">
          {/* Container for logos */}
          <div className="flex flex-col md:flex-row items-center space-x-4 mx-auto md:mx-0 md:justify-start relative sm:top-4">
            <div className="flex items-center space-x-4">
              <Image 
                src={logo} 
                alt="Logo"
                width={60} // Adjust width for smaller screens
                height={20} // Adjust height for smaller screens
                className="object-contain z-10"
                style={{ width: 'auto', height: 'auto' }} 
              />
              <Image 
                src={firstLogo} 
                alt="First Logo"
                width={120} // Adjust width for smaller screens
                height={30} // Adjust height for smaller screens
                className="object-contain z-10"
                style={{ width: 'auto', height: 'auto' }} 
              />
            </div>
          </div>
        </div>

        <div className='mt-8 text-3xl hidden md:block'>
          <BsTelephoneForward />
        </div>
        
        {/* Toggle Button for Small Screens */}
        <button
          className="block md:hidden absolute top-4 right-4 bg-orange-600 text-white p-2 rounded-full shadow-lg"
          onClick={() => setIsCallNowVisible(!isCallNowVisible)}
        >
          ☰
        </button>

        {/* Contact Button for Small Screens */}
        {isCallNowVisible && (
            <div className="block md:hidden fixed top-36 left-0 w-full bg-slate-900 p-4 text-center">
              <a
                href="tel:9160449000"  // This triggers the call
                className="text-white font-semibold uppercase tracking-widest text-sm flex items-center justify-center" // Flexbox for alignment
              >
                <BsTelephoneForward className="text-white text-xl mr-2" /> {/* Margin to the right of the icon */}
                
                <br />
                <span className='lining-nums tracking-normal font-bold text-lg text-gray-100'>9160449000</span>
              </a>
            </div>
          )}


        {/* Contact Button hidden on larger devices */}
        <div className="hidden md:flex items-center py-1 px-2 rounded-md mt-8">
          <a
            href="tel:9160449000"  // This triggers the call
            className="text-white font-semibold uppercase tracking-widest text-sm"
          >
            <span className='ml-3'>Contact</span><br />
            <span className='lining-nums tracking-normal font-semibold text-gray-300 text-xs'>+91<span className='text-black'>#</span>9160449000</span>
          </a>
        </div>
      </div>

      {/* Black Background Div for Small Screens */}
      <div className="block md:hidden lg:hidden bg-black h-24"></div>

      {/* Main Content */}
      <div className='custom-container-height'>
        <div className="flex flex-col lg:flex-row items-center text-center lg:text-left mt-10">
          <FadeRight>
            <div className="px-4 sm:px-6 lg:px-0 mb-10">
              <h1 className="font-display text-5xl sm:text-5xl lg:text-7xl font-bold tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-orange to-red-600 [text-wrap:balance]">
                <span className="tracking-wider">Germany</span> Opportunity Card!
              </h1>
               <div className="block md:hidden lg:hidden bg-black h-1"></div>
              <div className="mt-4 sm:mt-5">
                <span className="block lg:hidden tracking-tight text-2xl font-normal uppercase text-neutral-100">
                  Unlock Your Future in Germany
                </span>
                <span className="hidden lg:block tracking-wider text-3xl font-normal uppercase text-neutral-100">
                  Unlock Your Future in Germany
                </span>
              </div>
              <div className="block md:hidden lg:hidden bg-black h-2"></div>
              <p className="mt-4 sm:mt-6 tracking-tight text-xs sm:text-xs md:text-sm lg:text-sm font-semibold text-neutral-400 break-words">
                The Germany Opportunity Card is a newly introduced visa scheme by the German government,
                designed to attract skilled professionals from non-EU countries.
                <span className="font-bold text-neutral-300">
                This points-based system allows qualified individuals to live and work in Germany without a prior job offer.
                </span>
                The Opportunity Card is the part of Germanys strategy to address its skilled labor shortage and provide opportunities globally.
              </p>
            </div>
          </FadeRight>
          
           <div className="block md:hidden lg:hidden h-2">
             <a href="mailto:vjcoverseas@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
           </div>

        <div className="block md:hidden lg:hidden bg-black h-10"></div>

          <FadeIn className="hidden lg:flex w-[33.75rem] flex-none lg:w-[33.75rem]">
            <ContactForm/>
          </FadeIn>

          <div className="block md:hidden lg:hidden bg-black h-20 mb-96 mr-3">
             <ContactForm/>
          </div>
           
        </div>
      </div>
    </div>
  );
};

export default Test;
