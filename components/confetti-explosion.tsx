"use client"

import { useEffect, useState } from "react"
import confetti from "canvas-confetti"

interface ConfettiExplosionProps {
  duration?: number
  particleCount?: number
  spread?: number
  origin?: { x: number; y: number }
}

export function ConfettiExplosion({
  duration = 3000,
  particleCount = 100,
  spread = 70,
  origin = { x: 0.5, y: 0.5 },
}: ConfettiExplosionProps) {
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    if (isActive) {
      const end = Date.now() + duration

      const interval = setInterval(() => {
        if (Date.now() > end) {
          clearInterval(interval)
          setIsActive(false)
          return
        }

        confetti({
          particleCount: particleCount / 10,
          spread: spread,
          origin: origin,
          colors: ["#5D3FD3", "#FF5757", "#43AA8B", "#F9C74F", "#90BE6D"],
          disableForReducedMotion: true,
        })
      }, 250)

      return () => clearInterval(interval)
    }
  }, [isActive, duration, particleCount, spread, origin])

  return null
}

