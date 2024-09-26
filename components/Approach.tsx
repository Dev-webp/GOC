import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import FadeRight from "./ui/FadeRight";

const Arrow = ({ color = "white" }: { color?: string }) => (
  <div className="flex justify-center items-center">
    <MdOutlineKeyboardDoubleArrowRight className="h-10 w-10" style={{ color }} />
  </div>
);

const Approach = () => {
  return (
    <section className="w-full py-2">
      <FadeRight>
      <h1 className="heading uppercase">
        Our Onboarding <br/> <span className="text-gradient">Process</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-8"> {/* Increased gap */}
        {/* Existing Cards */}
       <Card
          title="Eligibility Check"
          icon={<AceternityIcon order="Phase 1" />}
          des="Check if you qualify for a German Opportunity card. Know the points, document requirements, funds requirements, etc."
          arrow={<Arrow />} // Add the arrow here
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>

        <Card
          title="Sign up for process"
          icon={<AceternityIcon order="Phase 2" />}
          des="Sign up with us. A senior staff will be allocated to guide the end-to-end process. A detailed checklist will be shared."
          arrow={<Arrow />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="File Preparation"
          icon={<AceternityIcon order="Phase 3" />}
          des="A complete file, along with the motivation letter, will be created after you submit the documents to us. An online application file submission will be done on your behalf."
          arrow={<Arrow />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>

        {/* New Card 1 */}
        <Card
          title="File submission"
          icon={<AceternityIcon order="Phase 4" />}
          des="Your application will be submitted online. You will be required to visit the respective embassy for an interview (if asked)."
          arrow={<Arrow />}
        >
          <CanvasRevealEffect
            animationSpeed={4}
            containerClassName="bg-teal-700 rounded-3xl overflow-hidden"
            colors={[
              [0, 150, 136],
              [0, 188, 212],
            ]}
            dotSize={3}
          />
        </Card>

        {/* New Card 2 */}
        <Card
          title="Approval and Post landing"
          icon={<AceternityIcon order="Phase 5" />}
          des="After your interview, your visa will be granted in 6-8 weeks. You need to be prepared for landing in Germany."
        >
          <CanvasRevealEffect
            animationSpeed={4}
            containerClassName="bg-violet-800 rounded-3xl overflow-hidden"
            colors={[
              [128, 0, 128],
              [186, 85, 211],
            ]}
            dotSize={3}
          />
        </Card>
      </div>
      </FadeRight>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
  arrow, // Added arrow prop
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
  arrow?: React.ReactNode; // Type for arrow prop
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2]  w-full max-w-xs mx-auto p-4 rounded-3xl"
      style={{
               background: "linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(12, 14, 35, 1) 100%)",
backgroundColor: "linear-gradient(90deg, rgba(230, 230, 230, 0.3) 0%, rgba(240, 240, 240, 0.3) 100%)",

        height: "20rem", // Adjust height
      }}
    >
      {/* Optional Arrow Icon */}
      {arrow && (
        <div className="absolute right-0 top-[50%] translate-y-[-50%] text-3xl z-10">
          {arrow}
        </div>
      )}

      {/* Existing Icons */}
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

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

      <div className="relative z-20 px-2">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-center text-2xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-50 mt-4 group-hover/canvas-card:text-white text-center
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
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
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
