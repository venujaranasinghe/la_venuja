"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000000); // Splash screen will be visible for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-white"
      >
        Welcome to la_Venuja
      </motion.div>
    </motion.div>
  );
}