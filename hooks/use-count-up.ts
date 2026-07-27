"use client"

import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

type CountUpOptions = {
  duration?: number
  /** Decimal places to keep, so fractional targets like 2.5 count correctly. */
  decimals?: number
}

/**
 * Counts from 0 to `target` the first time the returned ref scrolls into view.
 * Attach `ref` to the element that displays `value`.
 */
export function useCountUp(
  target: number,
  { duration = 1400, decimals = 0 }: CountUpOptions = {},
) {
  const ref = useRef<HTMLSpanElement>(null)
  const [animated, setAnimated] = useState(0)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || reducedMotion) return

    let frame = 0
    let start: number | null = null

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        const step = (now: number) => {
          start ??= now
          const progress = Math.min((now - start) / duration, 1)
          // easeOutExpo — fast out of the gate, settles onto the final number.
          const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
          setAnimated(Number((eased * target).toFixed(decimals)))
          if (progress < 1) frame = requestAnimationFrame(step)
        }

        frame = requestAnimationFrame(step)
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [target, duration, decimals, reducedMotion])

  return {
    ref,
    value: (reducedMotion ? target : animated).toFixed(decimals),
  }
}
