"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { Github, Linkedin, Mail, FileText } from "lucide-react"

const roles = [
  "QA Engineer",
  "Automation Test Engineer",
  "Selenium & Playwright Specialist",
  "API Testing Engineer",
  "AI-Native QA Engineer",
  "SDET Enthusiast",
]

const TYPE_MS = 90
const DELETE_MS = 45
const HOLD_MS = 1800

type Phase = "typing" | "holding" | "deleting"

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [phase, setPhase] = useState<Phase>("typing")
  const reducedMotion = useReducedMotion()

  // A single timer drives the machine; every transition happens in the
  // callback, and the timeout is cleared before the next one is scheduled.
  useEffect(() => {
    if (reducedMotion) return

    const role = roles[roleIndex]
    const delay =
      phase === "holding" ? HOLD_MS : phase === "typing" ? TYPE_MS : DELETE_MS

    const timeout = setTimeout(() => {
      if (phase === "holding") {
        setPhase("deleting")
      } else if (phase === "typing") {
        if (displayed.length < role.length) {
          setDisplayed(role.slice(0, displayed.length + 1))
        } else {
          setPhase("holding")
        }
      } else if (displayed.length > 0) {
        setDisplayed(displayed.slice(0, -1))
      } else {
        setRoleIndex((index) => (index + 1) % roles.length)
        setPhase("typing")
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [displayed, phase, roleIndex, reducedMotion])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden">
      {/* Backdrop: masked grid plus two drifting colour orbs. */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute -top-24 left-1/4 h-105 w-105 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] animate-drift" />
        <div className="absolute -bottom-24 right-1/4 h-90 w-90 translate-x-1/2 rounded-full bg-primary/10 blur-[120px] animate-drift-slow" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to QA Automation &amp; SDET roles
          </div>

          <p className="text-primary font-mono text-sm mb-4">Hello, I&apos;m</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-linear-to-br from-foreground via-foreground to-primary bg-clip-text text-transparent pb-2">
            Naveen Kumar S
          </h1>
        </div>

        <div className="animate-fade-in-up-delay-1">
          <div className="h-12 sm:h-14 md:h-16 flex items-center justify-center mb-6">
            {/* Static copy for screen readers; the animated version is decorative. */}
            <span className="sr-only">{roles.join(", ")}</span>
            <span
              aria-hidden="true"
              className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-mono"
            >
              {reducedMotion ? roles[0] : displayed}
              <span className="animate-caret text-primary">|</span>
            </span>
          </div>
        </div>

        <div className="animate-fade-in-up-delay-2">
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-base sm:text-lg leading-relaxed">
            QA Engineer with 2.5+ years of experience in{" "}
            <span className="text-foreground font-medium">Manual Testing</span>,{" "}
            <span className="text-foreground font-medium">
              Automation Testing
            </span>
            , <span className="text-foreground font-medium">API Validation</span>
            , and{" "}
            <span className="text-foreground font-medium">CI/CD workflows</span>
            , now expanding into{" "}
            <span className="text-foreground font-medium">
              AI-native QA
            </span>
            . Skilled in building scalable automation frameworks with Selenium,
            Java, Playwright and TestNG while ensuring high-quality delivery in
            Agile environments.
          </p>
        </div>

        <div className="animate-fade-in-up-delay-3 flex flex-wrap justify-center gap-3 sm:gap-4">
          <Button asChild size="lg" className="gap-2">
            <a
              href="/Naveen_Kumar_QA.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="h-4 w-4" />
              View Resume
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="gap-2">
            <a href="#contact">
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="gap-2">
            <a
              href="https://github.com/naveenkumar24020203"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="gap-2">
            <a
              href="https://www.linkedin.com/in/naveen-kumar-s-021946225/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </div>

        <div className="mt-16 animate-bounce">
          <a
            href="#about"
            aria-label="Scroll to About"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
