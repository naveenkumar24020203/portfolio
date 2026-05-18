"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Award, ExternalLink } from "lucide-react"

const certifications = [

  {
    id: 1,
    title: "Building with the Claude API",
    issuer: "Anthropic",
    date: "2025",
    credentialUrl: "https://verify.skilljar.com/c/stsu42gw7dy8",
    description:
      "Built AI-powered applications and workflows using the Claude API platform.",
    color: "bg-purple-500/10 text-purple-500 border-purple-500/30",
  },
  {
    id: 2,
    title: "Claude Code in Action",
    issuer: "Anthropic",
    date: "2025",
    credentialUrl: "https://verify.skilljar.com/c/uy3ebxetxtk5",
    description:
      "Hands-on experience using Claude for code generation, debugging, and developer workflows.",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/30",
  },
  {
    id: 3,
    title: "Introduction to Agent Skills",
    issuer: "Anthropic",
    date: "2025",
    credentialUrl: "https://verify.skilljar.com/c/e5icycnzeire",
    description:
      "Learned AI agent capabilities, workflows, and practical implementation concepts.",
    color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/30",
  },
  {
    id: 4,
    title: "GitHub Actions for Testing",
    issuer: "Test Automation University",
    date: "2025",
    credentialUrl:
      "https://testautomationu.applitools.com/certificate/?id=d657dff4",
    description:
      "Implemented automated testing pipelines using GitHub Actions and CI/CD workflows.",
    color: "bg-green-500/10 text-green-500 border-green-500/30",
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Certifications</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Professional Credentials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development certifications
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
{certifications.map((cert) => (
  <a
    key={cert.id}
    href={cert.credentialUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <Card 
      className="bg-card/50 border-border hover:border-primary/50 transition-all hover:shadow-lg group cursor-pointer h-full"
    >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${cert.color.split(' ')[0]}`}>
                    <Award className={`h-6 w-6 ${cert.color.split(' ')[1]}`} />
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-2">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground mb-3">{cert.date}</p>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card></a>
          ))}
        </div>
      </div>
    </section>
  )
}
