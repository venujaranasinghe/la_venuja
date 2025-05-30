// components/TypingAnimation.jsx
"use client"; // Still needed if using Next.js 13+ with App Router

import { useEffect, useState } from 'react';

export default function TypingAnimation() {
  const greetings = [
    "Hello there!", // English
    "Hola!",        // Spanish
    "Bonjour!",     // French
    "Hallo!",       // German
    "Ciao!",        // Italian
    "ආයුබෝවන්!",     // Sri Lanka
    "こんにちは!",   // Japanese (Konnichiwa)
    "안녕하세요!",   // Korean (Annyeonghaseyo)
    "你好!",         // Chinese (Nǐ hǎo)
    "नमस्ते!",       // Hindi (Namaste)
    "Привет!",      // Russian (Privet)
  ];

  const [displayedText, setDisplayedText] = useState('');
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const pauseBetween = 1000;

    let timeout;

    if (isTyping) {
      if (displayedText.length < greetings[currentGreeting].length) {
        timeout = setTimeout(() => {
          setDisplayedText(greetings[currentGreeting].substring(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
          setIsDeleting(true);
        }, pauseBetween);
      }
    } else if (isDeleting) {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        setCurrentGreeting((currentGreeting + 1) % greetings.length);
        setIsDeleting(false);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, currentGreeting, isTyping, isDeleting, greetings]);

  return (
    <span className="inline-block">
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}