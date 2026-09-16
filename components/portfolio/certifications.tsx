"use client"

import { Badge } from "@/components/ui/badge"
import { CardContent } from "@/components/ui/card"
import { Reveal } from "@/components/portfolio/reveal"
import { SpotlightCard } from "@/components/portfolio/spotlight-card"
import { Award, ExternalLink } from "lucide-react"

type Certification = {
  id: number
  title: string
  issuer: string
  date: string
  /** Omitted where no public verification link is on file. */
  credentialUrl?: string
  description: string
  iconBg: string
  iconText: string
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "AI Capabilities and Limitations",
    issuer: "Anthropic",
    date: "Jun 2026",
    description:
      "Where large language models help, where they fail, and how to account for both when designing AI-assisted workflows.",
    iconBg: "bg-amber-500/10",
    iconText: "text-amber-500",
  },
  {
    id: 2,
    title: "Building with the Claude API",
    issuer: "Anthropic",
    date: "Mar 2026",
    credentialUrl: "https://verify.skilljar.com/c/stsu42gw7dy8",
    description:
      "Built AI-powered applications and workflows using the Claude API platform.",
    iconBg: "bg-blue-500/10",
    iconText: "text-blue-500",
  },
  {
    id: 3,
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    date: "Mar 2026",
    description:
      "Connecting models to external tools and data sources over MCP to build agentic workflows.",
    iconBg: "bg-cyan-500/10",
    iconText: "text-cyan-500",
  },
  {
    id: 4,
    title: "Selenium WebDriver with Java",
    issuer: "Test Automation University",
    date: "Jun 2025",
    description:
      "Core Selenium WebDriver automation in Java — locators, waits, and maintainable page objects.",
    iconBg: "bg-emerald-500/10",
    iconText: "text-emerald-500",
  },
  {
    id: 5,
    title: "Postman API Fundamentals",
    issuer: "Postman",
    date: "Apr 2025",
    description:
      "REST API testing fundamentals — requests, environments, assertions, and collection runs.",
    iconBg: "bg-orange-500/10",
    iconText: "text-orange-500",
  },
]

function CertCard({ cert }: { cert: Certification }) {
  const verifiable = Boolean(cert.credentialUrl)

  return (
    <SpotlightCard className="bg-card/50 border-border hover:border-primary/50 transition-all hover:shadow-lg group h-full">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-lg ${cert.iconBg}`}>
            <Award className={`h-6 w-6 ${cert.iconText}`} />
          </div>
          {verifiable && (
            <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          )}
        </div>

        <h3
          className={`font-semibold text-foreground mb-1 transition-colors ${
            verifiable ? "group-hover:text-primary" : ""
          }`}
        >
          {cert.title}
        </h3>
        <p className="text-sm text-primary font-medium mb-2">{cert.issuer}</p>
        <p className="text-xs text-muted-foreground mb-3 font-mono">
          {cert.date}
        </p>
        <p className="text-sm text-muted-foreground">{cert.description}</p>

        {verifiable && (
          <span className="sr-only">
            Verify credential (opens in a new tab)
          </span>
        )}
      </CardContent>
    </SpotlightCard>
  )
}

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-20 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Certifications
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Professional Credentials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning across test automation, API testing, and
            AI-native engineering
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Reveal key={cert.id} delay={index * 60} className="h-full">
              {cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <CertCard cert={cert} />
                </a>
              ) : (
                <CertCard cert={cert} />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
