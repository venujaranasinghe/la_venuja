"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let progressInterval

    // Simulate progress during loading
    const updateProgress = () => {
      setProgress((prev) => {
        if (prev < 90) {
          return prev + Math.random() * 10
        }
        return prev
      })
    }

    // Start progress simulation
    progressInterval = setInterval(updateProgress, 200)

    // Listen for actual page load completion
    const handleLoad = () => {
      // Complete the progress
      setProgress(100)

      // Hide loading screen after a brief delay
      setTimeout(() => {
        setIsVisible(false)
        if (onComplete) {
          onComplete()
        }
      }, 500)

      clearInterval(progressInterval)
    }

    // Check if page is already loaded
    if (document.readyState === "complete") {
      handleLoad()
    } else {
      // Listen for window load event (all resources loaded)
      window.addEventListener("load", handleLoad)

      // Also listen for DOMContentLoaded as fallback
      document.addEventListener("DOMContentLoaded", () => {
        setProgress(70) // Set to 70% when DOM is ready
      })
    }

    // Cleanup
    return () => {
      clearInterval(progressInterval)
      window.removeEventListener("load", handleLoad)
    }
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            <div className="w-1 h-1 bg-purple-400 rounded-full opacity-60"></div>
          </div>
        ))}
      </div>

      {/* Main loading content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animate-pulse">
            la_venuja
          </h1>
          <div className="mt-2 h-1 w-32 mx-auto bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
        </div>

        {/* Loading spinner */}
        <div className="mb-6">
          <div className="relative w-16 h-16 mx-auto">
            <div className="absolute inset-0 border-4 border-purple-200 rounded-full opacity-20"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-purple-500 rounded-full animate-spin"></div>
            <div
              className="absolute inset-2 border-2 border-transparent border-t-pink-500 rounded-full animate-spin"
              style={{ animationDirection: "reverse", animationDuration: "0.8s" }}
            ></div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-64 mx-auto mb-4">
          <div className="flex justify-between text-sm text-purple-300 mb-2">
            <span>Loading Portfolio</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Loading text */}
        <div className="text-purple-300 text-sm animate-pulse">
          {progress < 30 && "Initializing..."}
          {progress >= 30 && progress < 60 && "Loading components..."}
          {progress >= 60 && progress < 90 && "Preparing portfolio..."}
          {progress >= 90 && "Almost ready..."}
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 w-20 h-20 border border-purple-500 rounded-full opacity-20 animate-ping"></div>
        <div
          className="absolute -bottom-10 -right-10 w-16 h-16 border border-pink-500 rounded-full opacity-20 animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    </div>
  )
}
