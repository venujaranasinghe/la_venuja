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
      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 z-40 bg-white rounded-lg shadow-2xl border border-gray-300">
          {/* Header - Black and White */}
          <div className="bg-black text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
                  <WhatsAppIcon size={20} className="text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{businessName}</h3>
                  <p className="text-sm text-gray-300">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-gray-800 p-1 rounded transition-colors"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Content - Black and White */}
          <div className="p-4 bg-white">
            <div className="mb-4">
              <div className="bg-gray-100 rounded-lg p-3 mb-4 border border-gray-200">
                <p className="text-sm text-gray-800">{welcomeMessage}</p>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700 mb-2">Quick replies:</p>
                {quickMessages.map((msg, index) => (
                  <button
                    key={index}
                    onClick={() => sendMessage(msg)}
                    className="w-full text-left p-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-gray-800 bg-white"
                  >
                    {msg}
                  </button>
                ))}
              </div>

              <button
                onClick={() => sendMessage("Hello! I'd like to get in touch.")}
                className="w-full mt-4 bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-lg transition-colors font-medium flex items-center justify-center gap-2"
              >
                <WhatsAppIcon size={16} className="text-green-500" />
                Start Chat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Button - Green WhatsApp Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          fixed bottom-6 right-6 w-14 h-14 z-50
          bg-green-500 hover:bg-green-600 text-white rounded-full
          shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out
          flex items-center justify-center group
          transform hover:scale-110 active:scale-95
          focus:outline-none focus:ring-4 focus:ring-green-300
        `}
        aria-label={isOpen ? "Close chat" : "Open WhatsApp chat"}
      >
        {isOpen ? (
          <X size={24} className="transition-transform duration-200 text-white" />
        ) : (
          <WhatsAppIcon size={24} className="transition-transform duration-200 group-hover:rotate-12 text-white" />
        )}

        {!isOpen && <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>}
      </button>
    </>
  )
}
