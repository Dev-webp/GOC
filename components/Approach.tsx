import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import FadeIn from "./ui/FadeIn";


import { MdArrowForward } from "react-icons/md"; 

const Arrow = () => (
  <div className="flex justify-center items-center">
    <MdArrowForward className="h-10 w-20 text-white" />
  </div>
);



const Approach = () => {
  return (
    <section className="w-full py-20">
      <FadeIn>
       <div className="w-full absolute left-0">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>
      <h1 className="heading  mb-10 capitalize">
        Our <span className="text-gradient ">approach </span>
        to Visa and Immigration process
      </h1>
      {/* Grid layout for the cards */}
     <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
  {/* First Card */}
  <div className="flex justify-center items-start">
    <Card
      title="Planning & Strategy"
      icon={<AceternityIcon order="Phase 1" />}
      des="We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements."
    >
      <CanvasRevealEffect
        animationSpeed={5.1}
        containerClassName="bg-emerald-900 rounded-2xl overflow-hidden"
      />
    </Card>
  </div>

  {/* Arrow between the two cards */}
  <Arrow />

  {/* Second Card */}
  <div className="flex justify-center items-start">
    <Card
      title="Development & Launch"
      icon={<AceternityIcon order="Phase 2" />}
      des="This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up."
    >
      <CanvasRevealEffect
        animationSpeed={3}
        containerClassName="bg-emerald-900 rounded-2xl overflow-hidden"
        colors={[[125, 211, 252]]}
      />
    </Card>
  </div>

  {/* Center Card */}
  <div className="flex justify-center items-center lg:col-span-3">
    <Card
      title="Testing & Quality Assurance"
      icon={<AceternityIcon order="Phase 3" />}
      des="After development, we rigorously test the website to ensure everything works perfectly across all devices and browsers. Quality assurance is key to a successful launch."
    >
      <CanvasRevealEffect
        animationSpeed={4}
        containerClassName="bg-sky-600 rounded-2xl overflow-hidden"
      />
    </Card>
  </div>

  {/* Remaining Cards */}
  <div className="flex justify-center items-start">
    <Card
      title="Maintenance & Support"
      icon={<AceternityIcon order="Phase 4" />}
      des="Post-launch, we offer ongoing support and maintenance to ensure your website remains up-to-date and secure. We’re here to address any issues and make improvements as needed."
    >
      <CanvasRevealEffect
        animationSpeed={3}
        containerClassName="bg-emerald-900 rounded-2xl overflow-hidden"
      />
    </Card>
  </div>

  {/* Arrow between the cards */}
  <Arrow />

  <div className="flex justify-center items-start">
    <Card
      title="Client Feedback & Iterations"
      icon={<AceternityIcon order="Phase 5" />}
      des="We value your feedback and use it to make any necessary adjustments or iterations to the website. Your satisfaction is our priority, and we aim to exceed your expectations."
    >
      <CanvasRevealEffect
        animationSpeed={3}
        containerClassName="bg-emerald-900 rounded-2xl overflow-hidden"
      />
    </Card>
  </div>
</div>

      </FadeIn>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2] max-w-xs w-full mx-auto p-4 relative h-[16rem] lg:h-[10rem] lg:w-[32rem] rounded-2xl"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <Icon className="absolute h-5 w-5 -top-1 -left-1 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-5 w-5 -bottom-1 -left-1 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-5 w-5 -top-1 -right-1 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-5 w-5 -bottom-1 -right-1 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-4">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          className="dark:text-white text-center text-lg opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-3 font-extrabold group-hover/canvas-card:text-white
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        <p
          className="text-xs opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-2 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-2 py-1 text-purple backdrop-blur-3xl font-bold text-base"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};