"use client"

import { useEffect, useRef, useState } from "react"

export default function ParticlesBackground() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const [isMouseMoving, setIsMouseMoving] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationFrameId
    let mouseTimeout

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Mouse tracking
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      setIsMouseMoving(true)

      clearTimeout(mouseTimeout)
      mouseTimeout = setTimeout(() => {
        setIsMouseMoving(false)
      }, 150)
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Enhanced particles array with different types
    const particles = []
    const particleCount = 80
    const particleTypes = ["circle", "square", "triangle"]

    // Create particles with enhanced properties
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        size: Math.random() * 4 + 1,
        originalSize: Math.random() * 4 + 1,
        type: particleTypes[Math.floor(Math.random() * particleTypes.length)],
        opacity: Math.random() * 0.5 + 0.1,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        pulsePhase: Math.random() * Math.PI * 2,
        trail: [],
        magnetism: Math.random() * 0.0008 + 0.0002,
      })
    }

    // Draw different particle shapes
    const drawParticle = (particle) => {
      ctx.save()
      ctx.translate(particle.x, particle.y)
      ctx.rotate(particle.rotation)
      ctx.globalAlpha = particle.opacity

      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size)
      gradient.addColorStop(0, `rgba(0, 0, 0, ${particle.opacity})`)
      gradient.addColorStop(1, `rgba(0, 0, 0, 0)`)

      switch (particle.type) {
        case "circle":
          ctx.beginPath()
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2)
          ctx.fillStyle = gradient
          ctx.fill()

          // Add inner glow
          ctx.beginPath()
          ctx.arc(0, 0, particle.size * 0.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity * 0.3})`
          ctx.fill()
          break

        case "square":
          ctx.fillStyle = gradient
          ctx.fillRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2)

          // Add border
          ctx.strokeStyle = `rgba(0, 0, 0, ${particle.opacity * 0.8})`
          ctx.lineWidth = 0.5
          ctx.strokeRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2)
          break

        case "triangle":
          ctx.beginPath()
          ctx.moveTo(0, -particle.size)
          ctx.lineTo(-particle.size, particle.size)
          ctx.lineTo(particle.size, particle.size)
          ctx.closePath()
          ctx.fillStyle = gradient
          ctx.fill()

          // Add outline
          ctx.strokeStyle = `rgba(0, 0, 0, ${particle.opacity * 0.6})`
          ctx.lineWidth = 0.5
          ctx.stroke()
          break
      }

      ctx.restore()
    }

    // Draw particle trail
    const drawTrail = (particle) => {
      if (particle.trail.length < 2) return

      ctx.save()
      ctx.globalCompositeOperation = "lighter"

      for (let i = 1; i < particle.trail.length; i++) {
        const current = particle.trail[i]
        const previous = particle.trail[i - 1]
        const alpha = (i / particle.trail.length) * particle.opacity * 0.3

        ctx.beginPath()
        ctx.moveTo(previous.x, previous.y)
        ctx.lineTo(current.x, current.y)
        ctx.strokeStyle = `rgba(100, 100, 100, ${alpha})`
        ctx.lineWidth = particle.size * (i / particle.trail.length) * 0.5
        ctx.stroke()
      }

      ctx.restore()
    }

    // Enhanced connection drawing with different line styles
    const drawConnections = (particle, otherParticles) => {
      otherParticles.forEach((otherParticle) => {
        const dx = particle.x - otherParticle.x
        const dy = particle.y - otherParticle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 120

        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 0.15

          // Mouse proximity effect
          const mouseDistance = Math.sqrt(
            Math.pow(mouseRef.current.x - (particle.x + otherParticle.x) / 2, 2) +
              Math.pow(mouseRef.current.y - (particle.y + otherParticle.y) / 2, 2),
          )

          const mouseEffect = mouseDistance < 150 ? (150 - mouseDistance) / 150 : 0
          const finalOpacity = opacity + mouseEffect * 0.3

          ctx.save()

          // Create gradient line
          const gradient = ctx.createLinearGradient(particle.x, particle.y, otherParticle.x, otherParticle.y)
          gradient.addColorStop(0, `rgba(0, 0, 0, ${finalOpacity * particle.opacity})`)
          gradient.addColorStop(0.5, `rgba(128, 128, 128, ${finalOpacity * 0.5})`)
          gradient.addColorStop(1, `rgba(0, 0, 0, ${finalOpacity * otherParticle.opacity})`)

          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(otherParticle.x, otherParticle.y)
          ctx.strokeStyle = gradient
          ctx.lineWidth = mouseEffect > 0 ? 1.5 : 0.5

          // Add line dash effect for enhanced visual
          if (mouseEffect > 0.3) {
            ctx.setLineDash([5, 5])
          }

          ctx.stroke()
          ctx.setLineDash([])

          // Add connection nodes
          if (distance < 60) {
            const midX = (particle.x + otherParticle.x) / 2
            const midY = (particle.y + otherParticle.y) / 2

            ctx.beginPath()
            ctx.arc(midX, midY, 1, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(0, 0, 0, ${finalOpacity * 2})`
            ctx.fill()
          }

          ctx.restore()
        }
      })
    }

    // Mouse interaction effects
    const applyMouseEffects = (particle) => {
      const dx = mouseRef.current.x - particle.x
      const dy = mouseRef.current.y - particle.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      const maxDistance = 200

      if (distance < maxDistance) {
        const force = (maxDistance - distance) / maxDistance

        // Repulsion effect
        const repulsionForce = force * particle.magnetism * 50
        particle.vx -= (dx / distance) * repulsionForce
        particle.vy -= (dy / distance) * repulsionForce

        // Size pulsing effect
        particle.size = particle.originalSize * (1 + force * 0.8)

        // Opacity enhancement
        particle.opacity = Math.min(particle.opacity + force * 0.3, 0.9)

        // Add to trail when mouse is near
        if (isMouseMoving && particle.trail.length < 8) {
          particle.trail.push({ x: particle.x, y: particle.y })
        }
      } else {
        // Return to original state
        particle.size = particle.originalSize
        particle.opacity = Math.max(particle.opacity - 0.01, 0.1)
      }
    }

    // Animation loop
    const animate = () => {
      // Create subtle background gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height),
      )
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.02)")
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.01)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Apply mouse effects
        applyMouseEffects(particle)

        // Update position with enhanced physics
        particle.x += particle.vx
        particle.y += particle.vy

        // Add subtle gravity effect
        particle.vy += 0.001

        // Boundary collision with bounce effect
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.8
          particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.8
          particle.y = Math.max(0, Math.min(canvas.height, particle.y))
        }

        // Update rotation and pulsing
        particle.rotation += particle.rotationSpeed
        particle.pulsePhase += 0.02

        // Subtle size pulsing
        if (!isMouseMoving) {
          particle.size = particle.originalSize + Math.sin(particle.pulsePhase) * 0.3
        }

        // Update trail
        if (particle.trail.length > 0) {
          particle.trail = particle.trail.slice(-6) // Keep last 6 positions
        }

        // Apply velocity damping
        particle.vx *= 0.999
        particle.vy *= 0.999

        // Draw trail first (behind particle)
        drawTrail(particle)

        // Draw connections
        drawConnections(particle, particles.slice(index + 1))

        // Draw particle
        drawParticle(particle)
      })

      // Add mouse cursor effect
      if (isMouseMoving) {
        const gradient = ctx.createRadialGradient(
          mouseRef.current.x,
          mouseRef.current.y,
          0,
          mouseRef.current.x,
          mouseRef.current.y,
          100,
        )
        gradient.addColorStop(0, "rgba(0, 0, 0, 0.1)")
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = gradient
        ctx.fillRect(mouseRef.current.x - 100, mouseRef.current.y - 100, 200, 200)
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      clearTimeout(mouseTimeout)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
