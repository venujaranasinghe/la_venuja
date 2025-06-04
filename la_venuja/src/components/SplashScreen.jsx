"use client"

import { useEffect, useState } from "react"

export default function SplashScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true)
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationPhase(1), 500)
    const timer2 = setTimeout(() => setAnimationPhase(2), 1500)
    const timer3 = setTimeout(() => {
      setIsVisible(false)
      if (onComplete) onComplete()
    }, 3500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div className="splash-container">
      {/* Animated Background */}
      <div className="background-overlay" />

      {/* Geometric Shapes */}
      <div className="geometric-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
        <div className="shape shape-4" />
      </div>

      {/* Animated Lines */}
      <div className="animated-lines">
        <div className="line line-1" />
        <div className="line line-2" />
        <div className="line line-3" />
      </div>

      {/* Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`} />
        ))}
      </div>

      {/* Main Content */}
      <div className={`main-content ${animationPhase >= 1 ? "fade-in" : ""}`}>
        <div className={`logo-container ${animationPhase >= 2 ? "glow" : ""}`}>
          <h1 className="name">Venuja Ranasinghe</h1>
          <div className="divider" />
          <p className="title">Computer Science Undergrad</p>
        </div>
      </div>

      {/* Loading Indicator */}
      <div className={`loading-indicator ${animationPhase >= 1 ? "animate" : ""}`}>
        <div className="loading-bar" />
      </div>

      {/* Skip Button */}
      <button
        className="skip-button"
        onClick={() => {
          setIsVisible(false)
          if (onComplete) onComplete()
        }}
      >
        Skip
      </button>

      <style jsx>{`
        .splash-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          overflow: hidden;
        }

        .background-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 70%);
          animation: pulse 4s ease-in-out infinite;
        }

        .geometric-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .shape {
          position: absolute;
          border: 2px solid rgba(0, 255, 255, 0.3);
          border-radius: 50%;
        }

        .shape-1 {
          width: 200px;
          height: 200px;
          top: 20%;
          left: 10%;
          animation: rotate 20s linear infinite, glow 3s ease-in-out infinite alternate;
        }

        .shape-2 {
          width: 150px;
          height: 150px;
          top: 60%;
          right: 15%;
          border-radius: 0;
          transform: rotate(45deg);
          animation: rotate 15s linear infinite reverse, glow 2s ease-in-out infinite alternate;
        }

        .shape-3 {
          width: 100px;
          height: 100px;
          bottom: 20%;
          left: 20%;
          animation: float 6s ease-in-out infinite, glow 4s ease-in-out infinite alternate;
        }

        .shape-4 {
          width: 80px;
          height: 80px;
          top: 30%;
          right: 30%;
          border-radius: 0;
          animation: rotate 10s linear infinite, glow 2.5s ease-in-out infinite alternate;
        }

        .animated-lines {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .line {
          position: absolute;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.8), transparent);
          height: 2px;
        }

        .line-1 {
          width: 300px;
          top: 25%;
          left: -300px;
          animation: slideRight 3s ease-in-out infinite;
        }

        .line-2 {
          width: 200px;
          top: 75%;
          right: -200px;
          animation: slideLeft 4s ease-in-out infinite;
        }

        .line-3 {
          width: 250px;
          top: 50%;
          left: -250px;
          animation: slideRight 5s ease-in-out infinite;
          animation-delay: 1s;
        }

        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: rgba(0, 255, 255, 0.8);
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
        }

        .particle-1 { top: 10%; left: 20%; animation: twinkle 2s ease-in-out infinite; }
        .particle-2 { top: 20%; left: 80%; animation: twinkle 2.5s ease-in-out infinite; animation-delay: 0.5s; }
        .particle-3 { top: 30%; left: 60%; animation: twinkle 3s ease-in-out infinite; animation-delay: 1s; }
        .particle-4 { top: 40%; left: 30%; animation: twinkle 2.2s ease-in-out infinite; animation-delay: 1.5s; }
        .particle-5 { top: 50%; left: 90%; animation: twinkle 2.8s ease-in-out infinite; animation-delay: 2s; }
        .particle-6 { top: 60%; left: 10%; animation: twinkle 2.3s ease-in-out infinite; animation-delay: 0.8s; }
        .particle-7 { top: 70%; left: 70%; animation: twinkle 3.2s ease-in-out infinite; animation-delay: 1.2s; }
        .particle-8 { top: 80%; left: 40%; animation: twinkle 2.7s ease-in-out infinite; animation-delay: 1.8s; }
        .particle-9 { top: 15%; left: 50%; animation: twinkle 2.4s ease-in-out infinite; animation-delay: 0.3s; }
        .particle-10 { top: 35%; left: 85%; animation: twinkle 2.9s ease-in-out infinite; animation-delay: 1.3s; }
        .particle-11 { top: 45%; left: 15%; animation: twinkle 2.6s ease-in-out infinite; animation-delay: 0.7s; }
        .particle-12 { top: 55%; left: 75%; animation: twinkle 3.1s ease-in-out infinite; animation-delay: 1.7s; }
        .particle-13 { top: 65%; left: 25%; animation: twinkle 2.1s ease-in-out infinite; animation-delay: 0.4s; }
        .particle-14 { top: 75%; left: 95%; animation: twinkle 2.8s ease-in-out infinite; animation-delay: 1.4s; }
        .particle-15 { top: 85%; left: 55%; animation: twinkle 2.5s ease-in-out infinite; animation-delay: 0.9s; }
        .particle-16 { top: 25%; left: 35%; animation: twinkle 3.3s ease-in-out infinite; animation-delay: 1.9s; }
        .particle-17 { top: 5%; left: 65%; animation: twinkle 2.2s ease-in-out infinite; animation-delay: 0.6s; }
        .particle-18 { top: 90%; left: 20%; animation: twinkle 2.7s ease-in-out infinite; animation-delay: 1.1s; }
        .particle-19 { top: 12%; left: 45%; animation: twinkle 3.4s ease-in-out infinite; animation-delay: 1.6s; }
        .particle-20 { top: 68%; left: 82%; animation: twinkle 2.3s ease-in-out infinite; animation-delay: 0.2s; }

        .main-content {
          text-align: center;
          z-index: 10;
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease-out;
        }

        .main-content.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .logo-container {
          transition: all 0.8s ease-out;
        }

        .logo-container.glow {
          filter: drop-shadow(0 0 20px rgba(0, 255, 255, 0.5));
        }

        .name {
          font-size: 3.5rem;
          font-weight: 300;
          color: #ffffff;
          margin: 0;
          letter-spacing: 3px;
          font-family: 'Arial', sans-serif;
          text-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
        }

        .divider {
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #00ffff, transparent);
          margin: 20px auto;
          animation: expand 2s ease-out;
          animation-delay: 1.5s;
          animation-fill-mode: both;
        }

        .title {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
          letter-spacing: 2px;
          font-weight: 200;
          text-transform: uppercase;
        }

        .loading-indicator {
          position: absolute;
          bottom: 50px;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 2px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 1px;
          overflow: hidden;
        }

        .loading-bar {
          width: 0%;
          height: 100%;
          background: linear-gradient(90deg, #00ffff, #0080ff);
          border-radius: 1px;
          transition: width 3s ease-out;
        }

        .loading-indicator.animate .loading-bar {
          width: 100%;
        }

        .skip-button {
          position: absolute;
          top: 30px;
          right: 30px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(0, 255, 255, 0.3);
          color: rgba(255, 255, 255, 0.8);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .skip-button:hover {
          background: rgba(0, 255, 255, 0.1);
          border-color: rgba(0, 255, 255, 0.6);
          color: #ffffff;
          transform: translateY(-2px);
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes glow {
          from { 
            border-color: rgba(0, 255, 255, 0.3);
            box-shadow: 0 0 5px rgba(0, 255, 255, 0.3);
          }
          to { 
            border-color: rgba(0, 255, 255, 0.8);
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes slideRight {
          0% { left: -300px; }
          50% { left: calc(50% - 150px); }
          100% { left: 100%; }
        }

        @keyframes slideLeft {
          0% { right: -200px; }
          50% { right: calc(50% - 100px); }
          100% { right: 100%; }
        }

        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.5);
          }
        }

        @keyframes expand {
          from { width: 0; }
          to { width: 100px; }
        }

        @media (max-width: 768px) {
          .name {
            font-size: 2.5rem;
            letter-spacing: 2px;
          }
          
          .title {
            font-size: 1rem;
            letter-spacing: 1px;
          }
          
          .shape-1, .shape-2 {
            width: 120px;
            height: 120px;
          }
          
          .shape-3, .shape-4 {
            width: 60px;
            height: 60px;
          }

          .skip-button {
            top: 20px;
            right: 20px;
            padding: 6px 12px;
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .name {
            font-size: 2rem;
            letter-spacing: 1px;
          }
          
          .divider {
            width: 80px;
          }
        }
      `}</style>
    </div>
  )
}
