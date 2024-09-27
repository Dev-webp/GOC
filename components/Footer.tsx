import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import FadeIn from "./ui/FadeIn";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10">
      <FadeIn>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-center">
          Ready to unlock new opportunities and elevate your 
          <span className="text-gradient"> global journey</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to us today and let&apos;s discuss how we can help you
          achieve your goals.
        </p>
        <a href="mailto:vjcoverseas@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm flex justify-center w-full md:font-normal font-light">
          Copyright © 2024 VJC Overseas
        </p>
      </div>
      </FadeIn>
    </footer>
  );
};

export default Footer;
