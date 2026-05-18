"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, FileText } from "lucide-react"

const roles = [
  "QA Engineer",
  "Automation Test Engineer",
  "Playwright & Selenium Specialist",
  "API Testing Engineer",
  "SDET Enthusiast",
]

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentRoleIndex])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <p className="text-primary font-mono text-sm mb-4">Hello, I&apos;m</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
            Naveen Kumar S
          </h1>
        </div>
        
        <div className="animate-fade-in-up-delay-1">
          <div className="h-12 sm:h-14 md:h-16 flex items-center justify-center mb-6">
            <span className="text-xl sm:text-2xl md:text-3xl text-muted-foreground">
              {displayedText}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </div>
        </div>

        <div className="animate-fade-in-up-delay-2">
<p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-base sm:text-lg leading-relaxed">
  QA Engineer with 2+ years of experience in{" "}
  <span className="text-foreground font-medium">Manual Testing</span>,{" "}
  <span className="text-foreground font-medium">Automation Testing</span>,{" "}
  <span className="text-foreground font-medium">API Validation</span>, and{" "}
  <span className="text-foreground font-medium">CI/CD workflows</span>.
  Skilled in building scalable automation frameworks using Playwright,
  Selenium, Java, and JavaScript while ensuring high-quality software delivery
  in Agile environments.
</p>
        </div>

        <div className="animate-fade-in-up-delay-3 flex flex-wrap justify-center gap-3 sm:gap-4">
          <Button asChild size="lg" className="gap-2">
            <a href="/Naveen_Kumar_QA.pdf" target="_blank" rel="noopener noreferrer">
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
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
