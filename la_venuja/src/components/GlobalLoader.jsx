"use client"

import { useEffect, useState } from "react"

export default function GlobalLoader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    // Wait for page to fully load
    const handleLoad = () => {
      setProgress(100)
      setTimeout(() => {
        setLoading(false)
      }, 500)
    }

    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
    }

    return () => {
      clearInterval(interval)
      window.removeEventListener("load", handleLoad)
    }
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-[99999] bg-gradient-to-br from-neutral-900 via-neutral-950 to-black flex items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-150"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Logo or Brand Name */}
        <div className="mb-8">
          <h1 className="text-4xl font-light text-white tracking-wider">
            VENUJA
          </h1>
          <p className="text-neutral-400 text-sm mt-2 tracking-widest">
            PORTFOLIO
          </p>
        </div>

        {/* Modern spinner */}
        <div className="relative w-16 h-16 mx-auto mb-8">
          <div className="absolute inset-0 border-2 border-neutral-700 rounded-full"></div>
          <div className="absolute inset-0 border-2 border-transparent border-t-white border-r-white rounded-full animate-spin"></div>
        </div>

        {/* Progress bar */}
        <div className="w-64 mx-auto mb-4">
          <div className="flex justify-between text-xs text-neutral-400 mb-2">
            <span>Loading</span>
            <span>{Math.floor(progress)}%</span>
          </div>
          <div className="w-full bg-neutral-800 rounded-full h-1">
            <div 
              className="bg-gradient-to-r from-blue-400 to-teal-400 h-1 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Loading text */}
        <p className="text-neutral-500 text-xs tracking-wider">
          Preparing your experience...
        </p>
      </div>
    </div>
  )
}
