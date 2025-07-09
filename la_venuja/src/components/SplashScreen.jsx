"use client"
import { useEffect, useState } from "react"

export default function SplashScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true)
  const [animationPhase, setAnimationPhase] = useState(0)
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    // Hide body scroll when splash is active
    document.body.style.overflow = "hidden"

    // Animation phases
    const timer1 = setTimeout(() => setAnimationPhase(1), 500)
    const timer2 = setTimeout(() => setAnimationPhase(2), 1200)
    const timer3 = setTimeout(() => setAnimationPhase(3), 2000)
    const timer4 = setTimeout(() => setAnimationPhase(4), 2800)

    // Loading progress animation
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 150)

    // Auto complete
    const autoComplete = setTimeout(() => {
      handleComplete()
    }, 4500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(autoComplete)
      clearInterval(progressInterval)
      // Restore body scroll
      document.body.style.overflow = "unset"
    }
  }, [])

  const handleComplete = () => {
    setIsVisible(false)
    if (onComplete) onComplete()
  }

  if (!isVisible) return null

  return (
    <div className="splash-container">
      {/* Animated Background */}
      <div className="background-layer">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Floating Code Elements */}
      <div className="code-elements">
        {["<div>", "const", "{}", "=>", "npm", "git", "jsx", "css"].map((code, i) => (
          <div key={i} className={`code-element code-${i + 1} ${animationPhase >= 1 ? "animate" : ""}`}>
            {code}
          </div>
        ))}
      </div>

      {/* Geometric Shapes */}
      <div className="geometric-shapes">
        <div className="shape triangle"></div>
        <div className="shape square"></div>
        <div className="shape circle"></div>
        <div className="shape hexagon"></div>
      </div>

      {/* Main Content */}
      <div className={`main-content ${animationPhase >= 2 ? "show" : ""}`}>
        <div className="logo-container">
          <div className={`name-wrapper ${animationPhase >= 3 ? "glow" : ""}`}>
            <h1 className="developer-name">
              <span className="first-name">VENUJA</span>
              <span className="last-name">RANASINGHE</span>
            </h1>
          </div>
          <div className={`role-container ${animationPhase >= 3 ? "show" : ""}`}>
            <div className="typing-animation">
              <span className="role-text">Full Stack Developer</span>
              <span className="cursor">|</span>
            </div>
          </div>
          <div className={`tagline ${animationPhase >= 4 ? "show" : ""}`}>
            <p>Crafting Digital Experiences</p>
          </div>
        </div>
      </div>

      {/* Modern Loading Bar */}
      <div className={`loading-section ${animationPhase >= 1 ? "show" : ""}`}>
        <div className="loading-container">
          <div className="loading-text">
            <span>INITIALIZING</span>
            <span className="loading-dots">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </div>
          <div className="progress-wrapper">
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${Math.min(loadingProgress, 100)}%` }}></div>
              <div className="progress-glow"></div>
            </div>
            <span className="progress-number">{Math.floor(Math.min(loadingProgress, 100))}%</span>
          </div>
        </div>
      </div>

      {/* Skip Button */}
      <button
        className="skip-btn"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          handleComplete()
        }}
      >
        <span>SKIP</span>
        <div className="skip-arrow">→</div>
      </button>

      {/* Particle System */}
      <div className="particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>

      <style jsx>{`
        .splash-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999999; /* Increased z-index */
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        /* Add backdrop to ensure nothing shows behind */
        .splash-container::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #0a0a0a;
          z-index: -1;
        }

        .splash-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.02) 0%, transparent 70%);
          z-index: -1;
        }

        /* Rest of your existing styles... */
        .background-layer {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
          animation: float 8s ease-in-out infinite;
        }

        .orb-1 {
          width: 300px;
          height: 300px;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 200px;
          height: 200px;
          background: linear-gradient(45deg, #a8e6cf, #ffd93d);
          top: 60%;
          right: 15%;
          animation-delay: 2s;
        }

        .orb-3 {
          width: 250px;
          height: 250px;
          background: linear-gradient(45deg, #ff8a80, #82b1ff);
          bottom: 20%;
          left: 60%;
          animation-delay: 4s;
        }

        .code-elements {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .code-element {
          position: absolute;
          color: rgba(255, 255, 255, 0.6);
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 14px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .code-element.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .code-1 { top: 15%; left: 20%; animation-delay: 0.2s; }
        .code-2 { top: 25%; right: 25%; animation-delay: 0.4s; }
        .code-3 { top: 35%; left: 80%; animation-delay: 0.6s; }
        .code-4 { top: 45%; left: 15%; animation-delay: 0.8s; }
        .code-5 { top: 55%; right: 20%; animation-delay: 1s; }
        .code-6 { top: 65%; left: 70%; animation-delay: 1.2s; }
        .code-7 { top: 75%; right: 60%; animation-delay: 1.4s; }
        .code-8 { top: 85%; left: 30%; animation-delay: 1.6s; }

        .geometric-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .shape {
          position: absolute;
          border: 1px solid rgba(255, 255, 255, 0.1);
          animation: rotate 20s linear infinite;
        }

        .triangle {
          width: 0;
          height: 0;
          border-left: 15px solid transparent;
          border-right: 15px solid transparent;
          border-bottom: 25px solid rgba(255, 255, 255, 0.1);
          top: 20%;
          right: 10%;
        }

        .square {
          width: 30px;
          height: 30px;
          top: 70%;
          left: 10%;
          animation-direction: reverse;
        }

        .circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          top: 30%;
          left: 85%;
        }

        .hexagon {
          width: 30px;
          height: 17px;
          background: rgba(255, 255, 255, 0.1);
          position: relative;
          top: 80%;
          right: 20%;
        }

        .hexagon:before,
        .hexagon:after {
          content: "";
          position: absolute;
          width: 0;
          border-left: 15px solid transparent;
          border-right: 15px solid transparent;
        }

        .hexagon:before {
          bottom: 100%;
          border-bottom: 8.5px solid rgba(255, 255, 255, 0.1);
        }

        .hexagon:after {
          top: 100%;
          border-top: 8.5px solid rgba(255, 255, 255, 0.1);
        }

        .main-content {
          text-align: center;
          z-index: 10;
          opacity: 0;
          transform: translateY(30px);
          transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .main-content.show {
          opacity: 1;
          transform: translateY(0);
        }

        .logo-container {
          position: relative;
        }

        .name-wrapper {
          position: relative;
          transition: all 0.8s ease;
        }

        .name-wrapper.glow {
          filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3));
        }

        .developer-name {
          margin: 0;
          font-weight: 100;
          line-height: 0.9;
        }

        .first-name,
        .last-name {
          display: block;
          font-size: 4rem;
          color: #ffffff;
          letter-spacing: 8px;
          background: linear-gradient(45deg, #ffffff, #cccccc, #ffffff);
          background-size: 200% 200%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s ease-in-out infinite;
        }

        .last-name {
          margin-top: 10px;
          opacity: 0.9;
        }

        .role-container {
          margin-top: 40px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .role-container.show {
          opacity: 1;
          transform: translateY(0);
        }

        .typing-animation {
          display: inline-flex;
          align-items: center;
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
          letter-spacing: 2px;
          font-weight: 300;
        }

        .cursor {
          animation: blink 1s infinite;
          margin-left: 2px;
          color: #4ecdc4;
        }

        .tagline {
          margin-top: 20px;
          opacity: 0;
          transform: translateY(15px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .tagline.show {
          opacity: 1;
          transform: translateY(0);
        }

        .tagline p {
          margin: 0;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
          letter-spacing: 3px;
          font-weight: 300;
        }

        .loading-section {
          position: absolute;
          bottom: 80px;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0;
          transition: opacity 1s ease;
        }

        .loading-section.show {
          opacity: 1;
        }

        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .loading-text {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.7);
          letter-spacing: 2px;
          font-weight: 300;
        }

        .loading-dots span {
          animation: loadingDots 1.5s infinite;
        }

        .loading-dots span:nth-child(2) { animation-delay: 0.2s; }
        .loading-dots span:nth-child(3) { animation-delay: 0.4s; }

        .progress-wrapper {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .progress-track {
          width: 200px;
          height: 2px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 1px;
          position: relative;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #4ecdc4, #44a08d);
          border-radius: 1px;
          transition: width 0.3s ease;
          position: relative;
        }

        .progress-fill::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 20px;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6));
          animation: progressShine 2s ease-in-out infinite;
        }

        .progress-number {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 300;
          min-width: 35px;
          text-align: right;
        }

        .skip-btn {
          position: absolute;
          top: 40px;
          right: 40px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.7);
          padding: 12px 20px;
          font-size: 0.75rem;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 300;
          display: flex;
          align-items: center;
          gap: 8px;
          border-radius: 2px;
        }

        .skip-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.4);
          color: #ffffff;
          transform: translateX(-2px);
        }

        .skip-arrow {
          transition: transform 0.3s ease;
        }

        .skip-btn:hover .skip-arrow {
          transform: translateX(3px);
        }

        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          animation: particleFloat 6s ease-in-out infinite;
        }

        .particle-1 { top: 10%; left: 15%; animation-delay: 0s; }
        .particle-2 { top: 20%; right: 20%; animation-delay: 0.5s; }
        .particle-3 { top: 30%; left: 80%; animation-delay: 1s; }
        .particle-4 { top: 40%; left: 10%; animation-delay: 1.5s; }
        .particle-5 { top: 50%; right: 15%; animation-delay: 2s; }
        .particle-6 { top: 60%; left: 70%; animation-delay: 2.5s; }
        .particle-7 { top: 70%; right: 25%; animation-delay: 3s; }
        .particle-8 { top: 80%; left: 30%; animation-delay: 3.5s; }
        .particle-9 { top: 15%; left: 60%; animation-delay: 4s; }
        .particle-10 { top: 35%; right: 35%; animation-delay: 4.5s; }
        .particle-11 { top: 55%; left: 50%; animation-delay: 5s; }
        .particle-12 { top: 75%; right: 45%; animation-delay: 5.5s; }
        .particle-13 { top: 25%; left: 40%; animation-delay: 0.8s; }
        .particle-14 { top: 45%; right: 60%; animation-delay: 1.3s; }
        .particle-15 { top: 65%; left: 20%; animation-delay: 1.8s; }
        .particle-16 { top: 85%; right: 70%; animation-delay: 2.3s; }
        .particle-17 { top: 5%; left: 75%; animation-delay: 2.8s; }
        .particle-18 { top: 95%; left: 55%; animation-delay: 3.3s; }
        .particle-19 { top: 35%; left: 5%; animation-delay: 3.8s; }
        .particle-20 { top: 75%; right: 5%; animation-delay: 4.3s; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        @keyframes loadingDots {
          0%, 20% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }

        @keyframes progressShine {
          0% { transform: translateX(-20px); }
          100% { transform: translateX(220px); }
        }

        @keyframes particleFloat {
          0%, 100% {
             opacity: 0.2;
             transform: translateY(0px) scale(1);
          }
          50% {
             opacity: 0.8;
             transform: translateY(-15px) scale(1.2);
          }
        }

        @media (max-width: 768px) {
          .first-name,
          .last-name {
            font-size: 2.5rem;
            letter-spacing: 4px;
          }

          .typing-animation {
            font-size: 1rem;
          }

          .tagline p {
            font-size: 0.8rem;
            letter-spacing: 2px;
          }

          .progress-track {
            width: 150px;
          }

          .skip-btn {
            top: 30px;
            right: 30px;
            padding: 10px 16px;
            font-size: 0.7rem;
          }

          .orb-1, .orb-2, .orb-3 {
            width: 200px;
            height: 200px;
          }
        }

        @media (max-width: 480px) {
          .first-name,
          .last-name {
            font-size: 2rem;
            letter-spacing: 3px;
          }

          .loading-section {
            bottom: 60px;
          }

          .progress-track {
            width: 120px;
          }

          .loading-text {
            font-size: 0.7rem;
          }

          .progress-number {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </div>
  )
}
