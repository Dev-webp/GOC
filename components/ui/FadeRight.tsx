"use client";

import { createContext, useContext, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface FadeRightProps {
    children: ReactNode;
    className?: string; // Ensure className can be passed for layout purposes
}

interface FadeRightStaggerProps {
    faster?: boolean;
    children: ReactNode;
    className?: string; // Allow className to pass for styling
}

const FadeRightStaggerContext = createContext(false);

const viewport = { once: true, margin: "0px 0px -200px" };

const FadeRight: React.FC<FadeRightProps> = ({ children, className, ...props }) => {
    const shouldReduceMotion = useReducedMotion();
    const isInStaggerGroup = useContext(FadeRightStaggerContext);

    return (
        <motion.div
            className={className} // Pass the className for layout
            variants={{
                hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -24 }, // Start from left
                visible: { opacity: 1, x: 0 }, // Move to final position
            }}
            transition={{ duration: 0.6 }}
            {...(isInStaggerGroup
                ? {}
                : {
                    initial: "hidden",
                    whileInView: "visible",
                    viewport,
                })}
            {...props} // Spread any additional props like `style`
        >
            {children}
        </motion.div>
    );
};

export const FadeRightStagger: React.FC<FadeRightStaggerProps> = ({ faster = false, className, children, ...props }) => {
    return (
        <FadeRightStaggerContext.Provider value={true}>
            <motion.div
                className={className} // Ensure the className for layout is passed
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
                {...props} // Spread additional props
            >
                {children}
            </motion.div>
        </FadeRightStaggerContext.Provider>
    );
};

export default FadeRight;
