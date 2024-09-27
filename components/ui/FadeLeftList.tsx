import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const fadeLeftVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      delay: i * 0.2, // Stagger effect with 0.2 seconds between each item
    },
  }),
};

interface FadeLeftListProps {
  children: React.ReactNode;
}

const FadeLeftList: React.FC<FadeLeftListProps> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // triggers when section is near

  return (
    <div ref={ref}>
      {React.Children.map(children, (child, i) => (
        <motion.div
          key={i}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={i} // Apply stagger effect
          variants={fadeLeftVariants}
          style={{ display: 'flex' }} // Keep alignment intact
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};

export default FadeLeftList;
