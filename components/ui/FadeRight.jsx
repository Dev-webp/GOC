"use client";

import { createContext, useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";

const FadeRightStaggerContext = createContext(false);

const viewport = { once: true, margin: "0px 0px -200px" };

const FadeRight = (props) => {
    const shouldReduceMotion = useReducedMotion();
    const isInStaggerGroup = useContext(FadeRightStaggerContext);

    return (
        <motion.div
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
            {...props}
        />
    );
};

export const FadeRightStagger = ({ faster = false, ...props }) => {
    return (
        <FadeRightStaggerContext.Provider value={true}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
                {...props}
            />
        </FadeRightStaggerContext.Provider>
    );
};

export default FadeRight;
