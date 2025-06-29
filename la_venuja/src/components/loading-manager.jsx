"use client"

import { useEffect, useState } from "react"
import SplashScreen from "./SplashScreen"

export default function LoadingManager({ children }) {
  const [loadingState, setLoadingState] = useState("loading") // loading, loaded, splash, complete
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    let progressInterval
    let resourcesLoaded = false
    let timeoutReached = false

    // Simulate loading progress
    progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 90 && !resourcesLoaded) return prev
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 10
      })
    }, 100)

    // Wait for all resources to load
    const handleLoad = () => {
      resourcesLoaded = true
      setLoadingProgress(100)

      setTimeout(() => {
        if (timeoutReached || document.readyState === "complete") {
          setLoadingState("loaded")
          hideInitialLoader()
        }
      }, 500)
    }

    // Fallback timeout (max 5 seconds)
    const fallbackTimeout = setTimeout(() => {
      timeoutReached = true
      resourcesLoaded = true
      setLoadingProgress(100)
      setLoadingState("loaded")
      hideInitialLoader()
    }, 5000)

    // Check if already loaded
    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
    }

    // Hide initial CSS loader
    const hideInitialLoader = () => {
      const initialLoader = document.getElementById("initial-loader")
      if (initialLoader) {
        initialLoader.style.opacity = "0"
        setTimeout(() => {
          initialLoader.style.display = "none"
          setLoadingState("splash")
        }, 500)
      }
    }

    return () => {
      clearInterval(progressInterval)
      clearTimeout(fallbackTimeout)
      window.removeEventListener("load", handleLoad)
    }
  }, [])

  // Update progress bar in real-time
  useEffect(() => {
    const progressFill = document.querySelector(".progress-fill")
    if (progressFill) {
      progressFill.style.width = `${loadingProgress}%`
    }
  }, [loadingProgress])

  const handleSplashComplete = () => {
    setLoadingState("complete")
  }

  return (
    <>
      {loadingState === "splash" && <SplashScreen onComplete={handleSplashComplete} />}
      {loadingState === "complete" && children}
    </>
  )
}
