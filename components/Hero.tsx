import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <section id="why">
      <div className="relative pb-20 pt-28">
        {/* Spotlights */}
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="black"
          />
          <Spotlight
            className="left-80 top-28 h-[80vh] w-[50vw]"
            fill="black"
          />
        </div>

        {/* Background grid */}
        <div
          className="h-screen w-full dark:bg-gray-700 bg-white dark:bg-dotted-pattern-white/[0.03] bg-dotted-pattern-black-100/[0.03]
           absolute top-0 left-0 flex items-center justify-center"
        >
          {/* Radial gradient for faded look */}
          <div
            className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black
              [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>

        <div className="flex justify-center relative my-4 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            {/* TextGenerateEffect */}
            <TextGenerateEffect
              words="Why Choose VJC Overseas"
              className="text-center text-[32px] md:text-4xl lg:text-6xl"
            />
            <p className="uppercase mt-2 mb-4 tracking-widest text-base text-center text-blue-100 max-w-100">
              At VJC Overseas,
            </p>

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              We provide expert guidance through the Germany Opportunity Card application process. From document preparation to submission, our experienced team ensures a smooth and efficient experience. Start your journey to work and live in Germany with our professional support.
            </p>

            <a href="#contact">
              <MagicButton
                title="CONTACT US"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
