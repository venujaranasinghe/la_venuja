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
  const seconds = time.getSeconds()
  const secondsProgress = (seconds / 60) * 100

  // Calculate angles for analog clock
  const secondAngle = seconds * 6 - 90 // 6 degrees per second
  const minuteAngle = time.getMinutes() * 6 + seconds * 0.1 - 90 // 6 degrees per minute + smooth seconds
  const hourAngle = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5 - 90 // 30 degrees per hour + smooth minutes

  return (
    <div className="fixed top-12 left-1/2 transform -translate-x-1/2 z-50 px-4">
      {/* Digital Clock - Desktop Only (smaller size) */}
      <div className="hidden sm:block relative group">
        <div className="bg-white/95 backdrop-blur-md rounded-xl px-4 py-3 border border-black/10 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
          <div className="flex items-center justify-center space-x-2">
            {/* Hours */}
            <div className="font-mono text-xl font-medium text-black tracking-wider">{hours}</div>

            {/* Animated separator */}
            <div className="flex flex-col space-y-0.5">
              <div
                className="w-1 h-1 bg-black rounded-full transition-all duration-300"
                style={{ opacity: seconds % 2 === 0 ? 1 : 0.3 }}
              ></div>
              <div
                className="w-1 h-1 bg-black rounded-full transition-all duration-300"
                style={{ opacity: seconds % 2 === 0 ? 1 : 0.3 }}
              ></div>
            </div>

            {/* Minutes */}
            <div className="font-mono text-xl font-medium text-black tracking-wider">{minutes}</div>

            {/* Seconds indicator */}
            <div className="ml-2 flex flex-col items-center">
              <div className="text-xs text-black/60 font-medium mb-0.5">{seconds.toString().padStart(2, "0")}</div>
              <div className="w-6 h-0.5 bg-black/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-black rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${secondsProgress}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-black/20 rounded-full"></div>
        </div>

        {/* Corner dots */}
        <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-black/20 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
        <div className="absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 bg-black/20 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
      </div>

      {/* Analog Clock - Mobile Only (Much Smaller) */}
      <div className="block sm:hidden relative group">
        <div className="bg-white/95 top-30 backdrop-blur-md rounded-full p-2.5 border border-black/10 shadow-lg hover:shadow-xl transition-all duration-500">
          {/* Clock face - Much smaller */}
          <div className="relative w-14 h-14">
            {/* Hour markers - smaller */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-px h-2 bg-black/30 rounded-full"
                style={{
                  top: "1px",
                  left: "50%",
                  transformOrigin: "50% 27px",
                  transform: `translateX(-50%) rotate(${i * 30}deg)`,
                }}
              ></div>
            ))}

            {/* Main hour markers (12, 3, 6, 9) - smaller */}
            {[0, 3, 6, 9].map((i) => (
              <div
                key={`main-${i}`}
                className="absolute w-0.5 h-2.5 bg-black/60 rounded-full"
                style={{
                  top: "0.5px",
                  left: "50%",
                  transformOrigin: "50% 27.5px",
                  transform: `translateX(-50%) rotate(${i * 30}deg)`,
                }}
              ></div>
            ))}

            {/* Hour hand - shorter */}
            <div
              className="absolute w-px h-4 bg-black rounded-full transition-transform duration-1000 ease-out"
              style={{
                bottom: "50%",
                left: "50%",
                transformOrigin: "50% 100%",
                transform: `translateX(-50%) rotate(${hourAngle}deg)`,
              }}
            ></div>

            {/* Minute hand - shorter */}
            <div
              className="absolute w-px h-5 bg-black rounded-full transition-transform duration-1000 ease-out"
              style={{
                bottom: "50%",
                left: "50%",
                transformOrigin: "50% 100%",
                transform: `translateX(-50%) rotate(${minuteAngle}deg)`,
              }}
            ></div>

            {/* Second hand - thinner and shorter */}
            <div
              className="absolute w-px h-6 bg-red-500 rounded-full transition-transform duration-75 ease-out"
              style={{
                bottom: "50%",
                left: "50%",
                transformOrigin: "50% 100%",
                transform: `translateX(-50%) rotate(${secondAngle}deg)`,
              }}
            ></div>

            {/* Center dot - smaller */}
            <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          {/* Smaller digital time display */}
          <div className="text-center mt-1">
            <div className="text-xs font-mono text-black/50 leading-none">
              {hours}:{minutes}
            </div>
          </div>
        </div>

        {/* Smaller mobile corner accents */}
        <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-black/20 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
        <div className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-black/20 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
      </div>
    </div>
  )
}
