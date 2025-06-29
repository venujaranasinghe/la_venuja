"use client"

import { useState, useEffect } from "react"

export default function LiveClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const hours = time.getHours().toString().padStart(2, "0")
  const minutes = time.getMinutes().toString().padStart(2, "0")
  const seconds = time.getSeconds().toString().padStart(2, "0")

  return (
    <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="relative">
        {/* Main clock container */}
        <div className="bg-black/90 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
          <div className="flex items-center justify-center space-x-1">
            {/* Hours */}
            <div className="text-white font-light text-2xl tracking-wider">{hours}</div>

            {/* Animated separator */}
            <div className="flex flex-col space-y-1 mx-2">
              <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
            </div>

            {/* Minutes */}
            <div className="text-white font-light text-2xl tracking-wider">{minutes}</div>

            {/* Seconds - smaller and subtle */}
            <div className="text-white/60 font-light text-sm ml-3 min-w-[2rem]">{seconds}</div>
          </div>
        </div>

        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-white/5 rounded-full blur-xl -z-10"></div>

        {/* Corner accent dots */}
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-white rounded-full opacity-40"></div>
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-40"></div>
      </div>
    </div>
  )
}
