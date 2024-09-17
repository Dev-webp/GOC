import React from 'react';
import FadeIn from '@/components/ui/FadeIn';
import FadeRight from '@/components/ui/FadeRight';
import Image from 'next/image';
import imageLaptop from '../public/flag-2.png';
import logo from '../public/logo-1.png'; 
import firstLogo from '../public/first.png'; 
import ContactForm from './ui/ContactForm';

const Test = () => {
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
                width={80} // Adjust width for smaller screens
                height={25} // Adjust height for smaller screens
                className="object-contain z-10"
              />
              <Image 
                src={firstLogo} 
                alt="First Logo"
                width={150} // Adjust width for smaller screens
                height={35} // Adjust height for smaller screens
                className="object-contain z-10"
              />
            </div>
          </div>
        </div>
        
        {/* Contact button hidden on smaller devices */}
        <div className="hidden md:flex items-center py-1 px-4 rounded-md mt-2">
          <a
            href="tel:8970667999"  // This triggers the call
            className="text-white font-medium uppercase tracking-widest text-sm"
          >
            CALL NOW<br />
            <span className='lining-nums tracking-normal font-semibold text-gray-300'>8970667999</span>
          </a>
        </div>

      </div>

      {/* Main Content */}
      <div className='custom-container-height'>
        <div className="flex flex-col lg:flex-row items-center text-center lg:text-left mt-10">
          <FadeRight>
            <div className="px-4 sm:px-6 lg:px-0 mb-10">
              <h1 className="font-display text-6xl sm:text-6xl lg:text-7xl font-bold tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-orange to-red-600 [text-wrap:balance]">
                <span className="tracking-wider">Germany</span> Opportunity Card!
              </h1>
              <div className="mt-4 sm:mt-5">
                <span className="block lg:hidden tracking-tight text-3xl font-normal uppercase text-neutral-100">
                  Unlock Your Future in Germany
                </span>
                <span className="hidden lg:block tracking-wider text-4xl font-normal uppercase text-neutral-100">
                  Unlock Your Future in Germany
                </span>
              </div>
              <p className="mt-4 sm:mt-6 tracking-tight text-base sm:text-sm font-semibold text-neutral-500 break-words">
                The Germany Opportunity Card is a newly introduced visa scheme by the German government,
                designed to attract skilled professionals from non-EU countries.
                <span className="font-bold text-neutral-400">
                This points-based system allows qualified individuals to live and work in Germany without a prior job offer.
                </span>
                The Opportunity Card is a part of Germanys strategy to address its skilled labor shortage and provide opportunities for global talent.
              </p>
            </div>
          </FadeRight>
          
          <FadeIn className="hidden lg:flex w-[33.75rem] flex-none lg:w-[33.75rem]">
            {/* <Image
              src={imageLaptop}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="w-full max-w-[60rem]  ml-12"
              alt="Laptop Image"
            /> */}
            <ContactForm/>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Test;
