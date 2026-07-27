"use client"

import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

/**
 * A Card that tracks the cursor and renders a soft primary-coloured glow
 * beneath its content. Falls back to a plain Card when the pointer never moves.
 */
export function SpotlightCard({
  className,
  onMouseMove,
  ...props
}: React.ComponentProps<typeof Card>) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (el) {
      const rect = el.getBoundingClientRect()
      el.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`)
      el.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`)
    }
    onMouseMove?.(event)
  }

  return (
    <Card
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn("spotlight", className)}
      {...props}
    />
  )
}
