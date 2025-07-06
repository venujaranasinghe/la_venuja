"use client";

import { createContext, useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";

const FadeInStaggerContext = createContext(false);

const viewport = { once: true, margin: "0px 0px -200px" };

// Enhanced animation variants with more visual flair
const getAnimationVariants = (direction = "up", shouldReduceMotion = false) => {
  if (shouldReduceMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    };
  }

  const variants = {
    up: {
      hidden: { 
        opacity: 0, 
        y: 40, 
        scale: 0.95,
        filter: "blur(4px)"
      },
      visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        filter: "blur(0px)"
      }
    },
    down: {
      hidden: { 
        opacity: 0, 
        y: -40, 
        scale: 0.95,
        filter: "blur(4px)"
      },
      visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        filter: "blur(0px)"
      }
    },
    left: {
      hidden: { 
        opacity: 0, 
        x: -40, 
        scale: 0.95,
        rotateY: -15
      },
      visible: { 
        opacity: 1, 
        x: 0, 
        scale: 1,
        rotateY: 0
      }
    },
    right: {
      hidden: { 
        opacity: 0, 
        x: 40, 
        scale: 0.95,
        rotateY: 15
      },
      visible: { 
        opacity: 1, 
        x: 0, 
        scale: 1,
        rotateY: 0
      }
    },
    scale: {
      hidden: { 
        opacity: 0, 
        scale: 0.8,
        filter: "blur(6px)"
      },
      visible: { 
        opacity: 1, 
        scale: 1,
        filter: "blur(0px)"
      }
    },
    rotate: {
      hidden: { 
        opacity: 0, 
        scale: 0.9,
        rotate: -10,
        filter: "blur(3px)"
      },
      visible: { 
        opacity: 1, 
        scale: 1,
        rotate: 0,
        filter: "blur(0px)"
      }
    }
  };

  return variants[direction] || variants.up;
};

// Enhanced spring transition configurations
const getTransition = (type = "default", delay = 0) => {
  const transitions = {
    default: {
      type: "spring",
      damping: 25,
      stiffness: 120,
      duration: 0.6,
      delay
    },
    bouncy: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      duration: 0.8,
      delay
    },
    smooth: {
      type: "tween",
      ease: [0.25, 0.46, 0.45, 0.94],
      duration: 0.5,
      delay
    },
    dramatic: {
      type: "spring",
      damping: 20,
      stiffness: 80,
      duration: 1,
      delay
    }
  };

  return transitions[type] || transitions.default;
};

const FadeIn = ({ 
  direction = "up", 
  transition = "default", 
  delay = 0,
  hover = false,
  ...props 
}) => {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  const hoverVariants = hover ? {
    hover: { 
      scale: 1.05, 
      y: -5,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  } : {};

  return (
    <motion.div
      variants={{
        ...getAnimationVariants(direction, shouldReduceMotion),
        ...hoverVariants
      }}
      transition={getTransition(transition, delay)}
      whileHover={hover ? "hover" : undefined}
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

export const FadeInStagger = ({ 
  faster = false, 
  staggerDelay,
  direction = "up",
  transition = "default",
  ...props 
}) => {
  const customStaggerDelay = staggerDelay || (faster ? 0.08 : 0.15);
  
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ 
          staggerChildren: customStaggerDelay,
          delayChildren: 0.1
        }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  );
};

// New component for text animations with character-by-character reveal
export const FadeInText = ({ 
  text, 
  className = "",
  delay = 0,
  staggerDelay = 0.03,
  ...props 
}) => {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <div className={className} {...props}>{text}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ staggerChildren: staggerDelay, delayChildren: delay }}
      {...props}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { 
              opacity: 0, 
              y: 20,
              filter: "blur(4px)"
            },
            visible: { 
              opacity: 1, 
              y: 0,
              filter: "blur(0px)"
            }
          }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 120
          }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

// New component for reveal animations with mask effect
export const FadeInReveal = ({ 
  children, 
  direction = "up",
  ...props 
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div style={{ overflow: "hidden" }} {...props}>
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { 
          opacity: 0, 
          y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
          x: direction === "left" ? 100 : direction === "right" ? -100 : 0
        }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={viewport}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 100,
          duration: 0.8
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FadeIn;
