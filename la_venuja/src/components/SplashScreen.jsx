"use client"

import { useEffect, useState } from "react"

export default function SplashScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true)
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationPhase(1), 800)
    const timer2 = setTimeout(() => setAnimationPhase(2), 1800)
    const timer3 = setTimeout(() => setAnimationPhase(3), 2500)
    const timer4 = setTimeout(() => {
      setIsVisible(false)
      if (onComplete) onComplete()
    }, 4000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div className="splash-container">
      {/* Animated Background Grid */}
      <div className="grid-overlay" />

      {/* Geometric Elements */}
      <div className="geometric-elements">
        <div className="circle circle-1" />
        <div className="circle circle-2" />
        <div className="line-element line-1" />
        <div className="line-element line-2" />
        <div className="line-element line-3" />
        <div className="dot-pattern">
          {[...Array(12)].map((_, i) => (
            <div key={i} className={`dot dot-${i + 1}`} />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className={`main-content ${animationPhase >= 1 ? "fade-in" : ""}`}>
        <div className={`logo-section ${animationPhase >= 2 ? "animate" : ""}`}>
          <div className="name-container">
            <h1 className="first-name">VENUJA</h1>
            <h1 className="last-name">RANASINGHE</h1>
          </div>
          <div className={`divider-line ${animationPhase >= 2 ? "expand" : ""}`} />
          <p className={`subtitle ${animationPhase >= 3 ? "show" : ""}`}>WELLCOME TO MY PORTFOLIO!</p>
        </div>
      </div>

      {/* Professional Loading Bar */}
      <div className={`progress-container ${animationPhase >= 1 ? "show" : ""}`}>
        <div className="progress-label">LOADING</div>
        <div className="progress-bar">
          <div className={`progress-fill ${animationPhase >= 1 ? "animate" : ""}`} />
        </div>
        <div className="progress-percentage">100%</div>
      </div>

      {/* Skip Button */}
      <button
        className="skip-button"
        onClick={() => {
          setIsVisible(false)
          if (onComplete) onComplete()
        }}
      >
        SKIP
      </button>

      <style jsx>{`
        .splash-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }

        .geometric-elements {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .circle {
          position: absolute;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: rotate 30s linear infinite;
        }

        .circle-1 {
          width: 300px;
          height: 300px;
          top: 10%;
          left: -50px;
          border-width: 1px;
        }

        .circle-2 {
          width: 200px;
          height: 200px;
          bottom: 10%;
          right: -30px;
          border-width: 1px;
          animation-direction: reverse;
          animation-duration: 25s;
        }

        .line-element {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          transform-origin: center;
        }

        .line-element.line-1 {
          width: 200px;
          height: 1px;
          top: 20%;
          right: 10%;
          transform: rotate(45deg);
          animation: fadeInOut 4s ease-in-out infinite;
        }

        .line-element.line-2 {
          width: 150px;
          height: 1px;
          bottom: 25%;
          left: 8%;
          transform: rotate(-30deg);
          animation: fadeInOut 5s ease-in-out infinite;
          animation-delay: 1s;
        }

        .line-element.line-3 {
          width: 1px;
          height: 100px;
          top: 30%;
          left: 15%;
          animation: fadeInOut 3s ease-in-out infinite;
          animation-delay: 2s;
        }

        .dot-pattern {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .dot {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
        }

        .dot-1 { top: 15%; left: 25%; animation: pulse 3s ease-in-out infinite; }
        .dot-2 { top: 25%; right: 20%; animation: pulse 3.5s ease-in-out infinite; animation-delay: 0.5s; }
        .dot-3 { top: 35%; left: 80%; animation: pulse 2.8s ease-in-out infinite; animation-delay: 1s; }
        .dot-4 { top: 45%; left: 10%; animation: pulse 3.2s ease-in-out infinite; animation-delay: 1.5s; }
        .dot-5 { top: 55%; right: 15%; animation: pulse 2.5s ease-in-out infinite; animation-delay: 2s; }
        .dot-6 { top: 65%; left: 30%; animation: pulse 3.8s ease-in-out infinite; animation-delay: 0.8s; }
        .dot-7 { top: 75%; right: 25%; animation: pulse 2.2s ease-in-out infinite; animation-delay: 1.2s; }
        .dot-8 { top: 85%; left: 70%; animation: pulse 3.5s ease-in-out infinite; animation-delay: 1.8s; }
        .dot-9 { top: 18%; left: 60%; animation: pulse 2.9s ease-in-out infinite; animation-delay: 0.3s; }
        .dot-10 { top: 40%; right: 35%; animation: pulse 3.1s ease-in-out infinite; animation-delay: 1.3s; }
        .dot-11 { top: 60%; left: 50%; animation: pulse 2.7s ease-in-out infinite; animation-delay: 0.7s; }
        .dot-12 { top: 80%; right: 45%; animation: pulse 3.4s ease-in-out infinite; animation-delay: 1.7s; }

        .main-content {
          text-align: center;
          z-index: 10;
          opacity: 0;
          transform: translateY(20px);
          transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .main-content.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .logo-section {
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .logo-section.animate {
          transform: scale(1.02);
        }

        .name-container {
          margin-bottom: 30px;
        }

        .first-name,
        .last-name {
          font-size: 4rem;
          font-weight: 100;
          color: #ffffff;
          margin: 0;
          letter-spacing: 8px;
          line-height: 0.9;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .last-name {
          margin-top: 5px;
          opacity: 0.9;
        }

        .divider-line {
          width: 0;
          height: 1px;
          background: #ffffff;
          margin: 40px auto;
          transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .divider-line.expand {
          width: 120px;
        }

        .subtitle {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          letter-spacing: 3px;
          font-weight: 300;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .subtitle.show {
          opacity: 1;
          transform: translateY(0);
        }

        .progress-container {
          position: absolute;
          bottom: 80px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 20px;
          opacity: 0;
          transition: opacity 0.8s ease;
        }

        .progress-container.show {
          opacity: 1;
        }

        .progress-label,
        .progress-percentage {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
          letter-spacing: 2px;
          font-weight: 300;
        }

        .progress-bar {
          width: 200px;
          height: 1px;
          background: rgba(255, 255, 255, 0.2);
          position: relative;
          overflow: hidden;
        }

        .progress-fill {
          width: 0%;
          height: 100%;
          background: #ffffff;
          transition: width 3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .progress-fill.animate {
          width: 100%;
        }

        .skip-button {
          position: absolute;
          top: 40px;
          right: 40px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.7);
          padding: 12px 24px;
          font-size: 0.75rem;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 300;
        }

        .skip-button:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.4);
          color: #ffffff;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes fadeInOut {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }

        @keyframes pulse {
          0%, 100% { 
            opacity: 0.2; 
            transform: scale(1);
          }
          50% { 
            opacity: 0.8; 
            transform: scale(1.5);
          }
        }

        @media (max-width: 768px) {
          .first-name,
          .last-name {
            font-size: 2.5rem;
            letter-spacing: 4px;
          }
          
          .subtitle {
            font-size: 0.8rem;
            letter-spacing: 2px;
          }
          
          .circle-1 {
            width: 200px;
            height: 200px;
          }
          
          .circle-2 {
            width: 150px;
            height: 150px;
          }

          .progress-bar {
            width: 150px;
          }

          .skip-button {
            top: 30px;
            right: 30px;
            padding: 10px 20px;
            font-size: 0.7rem;
          }
        }

        @media (max-width: 480px) {
          .first-name,
          .last-name {
            font-size: 2rem;
            letter-spacing: 3px;
          }
          
          .divider-line.expand {
            width: 80px;
          }

          .progress-container {
            bottom: 60px;
            gap: 15px;
          }

          .progress-bar {
            width: 120px;
          }

          .progress-label,
          .progress-percentage {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </div>
  )
}
