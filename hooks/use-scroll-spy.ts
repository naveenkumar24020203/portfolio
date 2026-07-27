"use client"

import { useEffect, useState } from "react"

/**
 * Returns the id of the section currently under the navbar.
 * Pass a stable (module-level) `ids` array — it is an effect dependency.
 */
export function useScrollSpy(ids: readonly string[], offset = 96) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      let current: string | null = null
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= offset) current = id
      }
      setActiveId(current)
    }

    // Deferred so the initial read happens after paint rather than as a
    // synchronous state update during the effect.
    const frame = requestAnimationFrame(handleScroll)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [ids, offset])

  return activeId
}
