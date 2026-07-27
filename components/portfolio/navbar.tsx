"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useScrollSpy } from "@/hooks/use-scroll-spy"
import { useHydrated } from "@/hooks/use-hydrated"
import { Moon, Sun, Menu, X } from "lucide-react"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
]

// Module-level so the identity stays stable across renders (effect dependency).
const sectionIds = navLinks.map((link) => link.href.slice(1))

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useHydrated()
  const activeId = useScrollSpy(sectionIds)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      setIsScrolled(scrolled > 20)
      setProgress(height > 0 ? Math.min(scrolled / height, 1) : 0)
    }

    // Deferred so the first paint isn't a synchronous state update; this also
    // catches browser scroll restoration on reload.
    const frame = requestAnimationFrame(handleScroll)
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  const toggleTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark")

  const themeIcon =
    mounted &&
    (resolvedTheme === "dark" ? (
      <Sun className="h-5 w-5" />
    ) : (
      <Moon className="h-5 w-5" />
    ))

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            href="#"
            className="text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            NK<span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.slice(1)
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative px-3 py-2 text-sm transition-colors rounded-md hover:bg-muted ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-px bg-primary" />
                  )}
                </Link>
              )
            })}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-2"
              aria-label="Toggle theme"
            >
              {themeIcon}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {themeIcon}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in-up">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeId === link.href.slice(1)
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    className={`px-3 py-2 text-sm transition-colors rounded-md hover:bg-muted ${
                      isActive
                        ? "text-foreground bg-muted/60"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* Reading progress */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-px w-full origin-left bg-primary transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </nav>
  )
}
