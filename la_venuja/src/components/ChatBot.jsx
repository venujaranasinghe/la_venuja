"use client";
import { useState, useEffect } from 'react';
import { FaRobot } from 'react-icons/fa';

// Predefined Q&A pairs
const QA_PAIRS = [
  {
    question: "What are your technical skills?",
    answer: "I'm proficient in web development technologies including React, Next.js, Node.js, and various databases. I also have experience with Python and Java programming."
  },
  {
    question: "What projects have you worked on?",
    answer: "I've worked on various projects including web applications, mobile apps, and software solutions. Each project demonstrates my ability to solve real-world problems through technology."
  },
  {
    question: "What is your educational background?",
    answer: "I'm an undergraduate computer science student at SLIIT (Sri Lanka Institute of Information Technology), where I'm developing a strong foundation in computer science principles and practical programming skills."
  },
  {
    question: "Are you available for freelance work?",
    answer: "Yes, I'm currently available to take on new projects. I'm particularly interested in web development, mobile app development, and innovative technology solutions."
  },
  {
    question: "How can I contact you?",
    answer: "You can reach out to me through the contact form on this website, or connect with me on professional networks. I'm always open to discussing new opportunities and collaborations."
  }
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (isTyping && currentAnswerIndex < currentAnswer.length) {
      timeout = setTimeout(() => {
        setCurrentAnswerIndex(prev => prev + 1);
      }, 30); // Adjust typing speed here (milliseconds)
    }
    return () => clearTimeout(timeout);
  }, [isTyping, currentAnswerIndex, currentAnswer]);

  const handleQuestionClick = async (qa) => {
    // Add user's question immediately
    setMessages(prev => [...prev, { text: qa.question, sender: 'user' }]);
    
    // Start typing animation
    setIsTyping(true);
    setCurrentAnswer(qa.answer);
    setCurrentAnswerIndex(0);

    // Wait for typing to complete
    await new Promise(resolve => {
      const checkTyping = setInterval(() => {
        if (currentAnswerIndex >= qa.answer.length) {
          clearInterval(checkTyping);
          resolve();
        }
      }, 100);
    });

    // Add complete answer to messages
    setMessages(prev => [...prev, { text: qa.answer, sender: 'bot' }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-neutral-950 text-white rounded-full p-4 shadow-lg hover:bg-neutral-800 transition-colors"
      >
        <FaRobot size={24} />
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-96 h-[500px] bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-200 bg-neutral-950 text-white rounded-t-lg">
            <h3 className="font-medium">Select a question below:</h3>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${message.sender === 'user' ? 'bg-neutral-950 text-white' : 'bg-gray-100 text-black'}`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-lg p-3 bg-gray-100 text-black">
                  {currentAnswer.substring(0, currentAnswerIndex)}
                  <span className="animate-pulse">|</span>
                </div>
              </div>
            )}
          </div>

          {/* Questions */}
          <div className="p-4 border-t border-gray-200 space-y-2">
            {QA_PAIRS.map((qa, index) => (
              <button
                key={index}
                onClick={() => handleQuestionClick(qa)}
                className="w-full text-left p-2 rounded hover:bg-gray-100 transition-colors text-sm"
                disabled={isTyping}
              >
                {qa.question}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}