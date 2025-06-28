"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

export default function WhatsAppButton({
  phoneNumber,
  message = "Hello! I'm interested in your services.",
  position = "bottom-right",
  size = "md",
}) {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6",
  }

  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-14 h-14",
    lg: "w-16 h-16",
  }

  const iconSizes = {
    sm: 20,
    md: 24,
    lg: 28,
  }

  return (
    <>
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          fixed z-50 ${positionClasses[position]} ${sizeClasses[size]}
          bg-green-500 hover:bg-green-600 text-white rounded-full
          shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out
          flex items-center justify-center group
          transform hover:scale-110 active:scale-95
          focus:outline-none focus:ring-4 focus:ring-green-300
        `}
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={iconSizes[size]} className="transition-transform duration-200 group-hover:rotate-12" />

        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
      </button>

      {/* Tooltip */}
      {isHovered && (
        <div
          className={`
            fixed z-40 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg
            shadow-lg pointer-events-none transition-opacity duration-200
            ${position.includes("right") ? "right-20" : "left-20"}
            ${position.includes("bottom") ? "bottom-8" : "top-8"}
          `}
        >
          Chat with us on WhatsApp
          <div
            className={`
              absolute w-2 h-2 bg-gray-900 transform rotate-45
              ${position.includes("right") ? "-right-1" : "-left-1"}
              ${position.includes("bottom") ? "bottom-2" : "top-2"}
            `}
          ></div>
        </div>
      )}
    </>
  )
}
