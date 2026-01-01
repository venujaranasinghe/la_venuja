"use client"

import { X } from "lucide-react"
import { useState } from "react"
import WhatsAppIcon from "./whatsapp-icon"

export default function WhatsAppButtonAdvanced({
  phoneNumber,
  businessName = "Support Team",
  welcomeMessage = "Hi! How can we help you today?",
  quickMessages = [
    "I need help with my order",
    "I have a question about pricing",
    "I want to know more about your services",
  ],
  avatar = "/placeholder.svg?height=40&width=40",
}) {
  const [isOpen, setIsOpen] = useState(false)

  const sendMessage = (message) => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
    setIsOpen(false)
  }

  return (
    <>
      {/* Chat Widget - Minimalistic */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 z-40 bg-white rounded-lg shadow-lg border border-gray-200">
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <WhatsAppIcon size={20} className="text-black" />
              <span className="text-sm font-medium text-black">{businessName}</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-black transition-colors"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Content */}
          <div className="p-3">
            <div className="bg-gray-50 rounded p-2 mb-3 text-xs text-gray-700">
              {welcomeMessage}
            </div>

            <div className="space-y-2 mb-3">
              {quickMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => sendMessage(msg)}
                  className="w-full text-left p-2 text-xs border border-gray-200 rounded hover:border-black hover:bg-gray-50 transition-colors text-gray-700"
                >
                  {msg}
                </button>
              ))}
            </div>

            <button
              onClick={() => sendMessage("Hello! I'd like to get in touch.")}
              className="w-full bg-black hover:bg-gray-800 text-white py-2 px-3 rounded text-xs transition-colors"
            >
              Start Chat
            </button>
          </div>
        </div>
      )}

      {/* Main Button - Icon Only */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 transition-transform hover:scale-110 active:scale-95 focus:outline-none"
        aria-label={isOpen ? "Close chat" : "Open WhatsApp chat"}
      >
        {isOpen ? (
          <X size={32} className="text-black" />
        ) : (
          <WhatsAppIcon size={32} className="text-black" />
        )}
      </button>
    </>
  )
}
