import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const fadeLeftVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8, // Slower transition
      ease: "easeInOut", // Smoother easing
      delay: i * 0.25, // Slightly increased delay for more noticeable staggering
    },
  }),
};

interface FadeLeftStaggerProps {
  children: React.ReactNode;
}

const FadeLeftStagger: React.FC<FadeLeftStaggerProps> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // triggers when section is near

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {React.Children.map(children, (child, i) => (
        <motion.div variants={fadeLeftVariants} custom={i}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FadeLeftStagger;
