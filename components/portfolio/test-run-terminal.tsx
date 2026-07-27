"use client"

import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

const COMMAND = "mvn test -DsuiteXmlFile=regression.xml"

/** Illustrative run built from the suites listed in the Projects section. */
const RESULT_LINES = [
  { kind: "muted", text: "[INFO] Running RegressionSuite" },
  { kind: "blank", text: "" },
  { kind: "pass", text: "Neubird — incident alerting", time: "4.2s" },
  { kind: "pass", text: "Neohire — screening to offer", time: "3.8s" },
  { kind: "pass", text: "OneCare — telehealth booking", time: "5.1s" },
  { kind: "pass", text: "ArenaCX — vendor routing", time: "2.9s" },
  { kind: "pass", text: "Prodege — reward flow", time: "1.4s" },
  { kind: "blank", text: "" },
  { kind: "muted", text: "Tests run: 5, Failures: 0, Skipped: 0" },
  { kind: "summary", text: "BUILD SUCCESS" },
] as const

const TYPE_MS = 42
const LINE_MS = 170

export function TestRunTerminal() {
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)
  const [typedChars, setTypedChars] = useState(0)
  const [revealedLines, setRevealedLines] = useState(0)
  const reducedMotion = useReducedMotion()

  // With reduced motion the finished run is rendered straight away.
  const typed = reducedMotion ? COMMAND.length : typedChars
  const revealed = reducedMotion ? RESULT_LINES.length : revealedLines
  const typingDone = typed >= COMMAND.length
  const runDone = revealed >= RESULT_LINES.length

  // Kick the animation off the first time the terminal scrolls into view.
  useEffect(() => {
    const el = ref.current
    if (!el || reducedMotion) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setStarted(true)
        observer.disconnect()
      },
      { threshold: 0.35 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [reducedMotion])

  // Type the command out one character at a time.
  useEffect(() => {
    if (!started || typingDone) return
    const timeout = setTimeout(() => setTypedChars((n) => n + 1), TYPE_MS)
    return () => clearTimeout(timeout)
  }, [started, typingDone, typedChars])

  // Then stream the result lines.
  useEffect(() => {
    if (!typingDone || runDone) return
    const timeout = setTimeout(() => setRevealedLines((n) => n + 1), LINE_MS)
    return () => clearTimeout(timeout)
  }, [typingDone, runDone, revealedLines])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="rounded-xl border border-border bg-card/70 shadow-lg overflow-hidden backdrop-blur-sm"
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
        <span className="h-3 w-3 rounded-full bg-red-500/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <span className="h-3 w-3 rounded-full bg-green-500/70" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">
          playwright — test run
        </span>
      </div>

      <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed min-h-70 sm:min-h-75">
        <div className="flex gap-2">
          <span className="text-primary shrink-0">$</span>
          <span className="text-foreground break-all">
            {COMMAND.slice(0, typed)}
            {!typingDone && (
              <span className="animate-caret text-primary">▋</span>
            )}
          </span>
        </div>

        <div className="mt-3 space-y-1">
          {RESULT_LINES.slice(0, revealed).map((line, index) => {
            if (line.kind === "blank") {
              return <div key={index} className="h-2" />
            }

            if (line.kind === "muted") {
              return (
                <div key={index} className="text-muted-foreground">
                  {line.text}
                </div>
              )
            }

            if (line.kind === "summary") {
              return (
                <div key={index} className="text-success font-semibold">
                  {line.text}
                </div>
              )
            }

            return (
              <div key={index} className="flex items-baseline gap-2">
                <span className="text-success shrink-0">✓</span>
                <span className="text-muted-foreground break-all">
                  {line.text}
                </span>
                <span className="ml-auto text-muted-foreground/60 shrink-0 pl-2">
                  {"time" in line ? line.time : null}
                </span>
              </div>
            )
          })}

          {typingDone && !runDone && (
            <span className="animate-caret text-primary">▋</span>
          )}
        </div>
      </div>
    </div>
  )
}
