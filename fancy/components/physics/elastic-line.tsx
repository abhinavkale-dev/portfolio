"use client"

import React, { useEffect, useRef, useState } from "react"
import {
  animate,
  motion,
  useAnimationFrame,
  useMotionValue,
  ValueAnimationTransition,
} from "motion/react"

import { useDimensions } from "@/hooks/use-dimensions"
import { useElasticLineEvents } from "@/hooks/use-elastic-line-events"

interface ElasticLineProps {
  isVertical?: boolean
  grabThreshold?: number
  releaseThreshold?: number
  strokeWidth?: number
  transition?: ValueAnimationTransition
  animateInTransition?: ValueAnimationTransition
  className?: string
}

const ElasticLine: React.FC<ElasticLineProps> = ({
  isVertical = false,
  grabThreshold = 5,
  releaseThreshold = 100,
  strokeWidth = 1,
  transition = {
    type: "spring",
    stiffness: 400,
    damping: 5,
  },
  animateInTransition = {
    duration: 0.3,
    ease: "easeInOut",
  },
  className,
}) => {
  const containerRef = useRef<SVGSVGElement>(null)
  const dimensions = useDimensions(containerRef as React.RefObject<SVGElement>)
  const pathRef = useRef<SVGPathElement>(null)
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false)

  // Clamp releaseThreshold to container dimensions
  const clampedReleaseThreshold = Math.min(
    releaseThreshold,
    isVertical ? dimensions.width / 2 : dimensions.height / 2
  )

  const { isGrabbed, controlPoint } = useElasticLineEvents(
    containerRef as React.RefObject<SVGSVGElement>,
    isVertical,
    grabThreshold,
    clampedReleaseThreshold
  )

  const x = useMotionValue(dimensions.width / 2)
  const y = useMotionValue(dimensions.height / 2)
  const pathLength = useMotionValue(0)

  useEffect(() => {
    // Initial draw animation
    if (!hasAnimatedIn && dimensions.width > 0 && dimensions.height > 0) {
      animate(pathLength, 1, {
        ...animateInTransition,
        onComplete: () => setHasAnimatedIn(true),
      })
    }
    x.set(dimensions.width / 2)
    y.set(dimensions.height / 2)
  }, [dimensions, hasAnimatedIn])

  useEffect(() => {
    if (!isGrabbed && hasAnimatedIn) {
      animate(x, dimensions.width / 2, transition)
      animate(y, dimensions.height / 2, transition)
    }
  }, [isGrabbed])

  useAnimationFrame(() => {
    if (isGrabbed) {
      const paddingX = dimensions.width * 0.1
      const paddingY = dimensions.height * 0.1
      const constrainedX = Math.max(paddingX, Math.min(controlPoint.x, dimensions.width - paddingX))
      const constrainedY = Math.max(paddingY, Math.min(controlPoint.y, dimensions.height - paddingY))
      x.set(constrainedX)
      y.set(constrainedY)
    }

    const controlX = hasAnimatedIn ? x.get() : dimensions.width / 2
    const controlY = hasAnimatedIn ? y.get() : dimensions.height / 2

    pathRef.current?.setAttribute(
      "d",
      isVertical
        ? `M${dimensions.width / 2} 0Q${controlX} ${controlY} ${
            dimensions.width / 2
          } ${dimensions.height}`
        : `M0 ${dimensions.height / 2}Q${controlX} ${controlY} ${
            dimensions.width
          } ${dimensions.height / 2}`
    )
  })

  return (
    <svg
      ref={containerRef}
      className={`w-full h-16 overflow-visible ${className}`}
      viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
      preserveAspectRatio="none"
    >
      <motion.path
        ref={pathRef}
        stroke="#E1E3E5"
        strokeWidth={strokeWidth}
        initial={{ pathLength: 0 }}
        style={{ pathLength }}
        fill="none"
      />
    </svg>
  )
}

export default ElasticLine
