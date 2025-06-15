"use client"

import type React from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  threshold?: number
  animation?: "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "fadeIn" | "scaleUp"
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  duration = 600,
  threshold = 0.1,
  animation = "slideUp",
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold, delay, duration })

  const getAnimationClass = () => {
    switch (animation) {
      case "slideUp":
        return isVisible ? "animate-slide-up-in" : "animate-slide-up-out"
      case "slideDown":
        return isVisible ? "animate-slide-down-in" : "animate-slide-down-out"
      case "slideLeft":
        return isVisible ? "animate-slide-left-in" : "animate-slide-left-out"
      case "slideRight":
        return isVisible ? "animate-slide-right-in" : "animate-slide-right-out"
      case "fadeIn":
        return isVisible ? "animate-fade-in" : "animate-fade-out"
      case "scaleUp":
        return isVisible ? "animate-scale-up-in" : "animate-scale-up-out"
      default:
        return isVisible ? "animate-slide-up-in" : "animate-slide-up-out"
    }
  }

  return (
    <div
      ref={ref}
      className={cn("transition-all", getAnimationClass(), className)}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
