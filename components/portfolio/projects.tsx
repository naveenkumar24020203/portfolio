"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/portfolio/reveal"
import { SpotlightCard } from "@/components/portfolio/spotlight-card"
import { Bot, Users, HeartPulse, Building2, Chrome } from "lucide-react"

type ProjectCategory = "all" | "automation" | "manual" | "api"

const projects = [
  {
    id: 1,
    title: "Neubird",
    subtitle: "AI Infrastructure Reliability Platform",
    description:
      "Tested monitoring and incident-management features for an AI-driven infrastructure platform. Validated backend data with SQL, automated regression scenarios in Selenium with TestNG, and worked with developers to reproduce and triage intermittent incident-alerting issues.",
    icon: Bot,
    category: ["automation", "api"],
    testingType: "Automation + API Testing",
    tools: ["Selenium", "TestNG", "Postman", "SQL", "Git"],
    highlights: [
      "Incident-alerting triage with developers",
      "Backend data validation via SQL",
      "Selenium + TestNG regression automation",
      "API testing with Postman",
    ],
  },
  {
    id: 2,
    title: "Neohire",
    subtitle: "Hiring & Recruitment Platform",
    description:
      "Automated job role creation and the full interview pipeline from screening through offer using Selenium and Cucumber. Expanded automation to roughly 70% of regression cases and emailed execution results to stakeholders automatically.",
    icon: Users,
    category: ["automation"],
    testingType: "Automation Testing",
    tools: [
      "Selenium",
      "Cucumber",
      "Test Runner",
      "ExtentReports",
      "Gmail SMTP",
    ],
    highlights: [
      "~70% regression coverage reached",
      "Screening-to-offer workflow automation",
      "ExtentReports emailed via Gmail SMTP",
      "Reusable Cucumber step definitions",
    ],
  },
  {
    id: 3,
    title: "OneCare",
    subtitle: "Healthcare Platform",
    description:
      "Executed end-to-end testing across telehealth, inventory, and patient lab modules. Cut regression cycle time by 30% with reusable TestNG suites and validated critical patient data workflows across integrated lab and inventory systems.",
    icon: HeartPulse,
    category: ["automation", "api"],
    testingType: "E2E + API Testing",
    tools: ["Selenium", "TestNG", "Postman", "YouTrack"],
    highlights: [
      "30% faster regression cycles",
      "Telehealth & patient lab coverage",
      "Reusable TestNG suites",
      "Patient data accuracy validation",
    ],
  },
  {
    id: 4,
    title: "ArenaCX",
    subtitle: "Vendor Management & Customer Support",
    description:
      "Scripted automated tests for BPO routing logic across multiple vendor workflows, and verified support-ticket routing accuracy against several vendor configurations while partnering with cross-functional Agile teams.",
    icon: Building2,
    category: ["automation", "manual"],
    testingType: "Manual + Automation Testing",
    tools: ["Playwright", "Postman", "ClickUp"],
    highlights: [
      "BPO routing logic automation",
      "Ticket routing accuracy checks",
      "Multi-vendor configuration testing",
      "Agile sprint collaboration",
    ],
  },
  {
    id: 5,
    title: "Prodege",
    subtitle: "Browser Extensions — Swagbucks, IDB, MyPoints",
    description:
      "Ran end-to-end testing for browser extensions covering reward flows and extension installs. Logged 50+ cross-browser UI/UX issues in JIRA to keep Chrome and Firefox releases clean, and validated reward-point calculation accuracy across user flows.",
    icon: Chrome,
    category: ["manual"],
    testingType: "Manual Testing",
    tools: ["JIRA", "JSON", "Chrome DevTools"],
    highlights: [
      "50+ cross-browser issues logged",
      "Chrome & Firefox release validation",
      "Extension install testing",
      "Reward-point accuracy checks",
    ],
  },
]

const categories = [
  { id: "all", label: "All Projects" },
  { id: "automation", label: "Automation" },
  { id: "manual", label: "Manual" },
  { id: "api", label: "API Testing" },
] as const

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")

  const countFor = (id: ProjectCategory) =>
    id === "all"
      ? projects.length
      : projects.filter((project) => project.category.includes(id)).length

  const filteredProjects = projects.filter((project) =>
    activeCategory === "all" ? true : project.category.includes(activeCategory),
  )

  return (
    <section id="projects" className="scroll-mt-20 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Featured QA projects involving automation testing, API validation,
            CI/CD workflows, and scalable quality engineering practices
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  activeCategory === category.id ? "default" : "outline"
                }
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={activeCategory === category.id}
                className="transition-all gap-1.5"
              >
                {category.label}
                <span className="text-xs opacity-60 tabular-nums">
                  {countFor(category.id)}
                </span>
              </Button>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            // Keyed on the filter too, so cards re-animate when the list changes.
            <Reveal
              key={`${activeCategory}-${project.id}`}
              delay={index * 70}
              className="h-full"
            >
              <SpotlightCard className="bg-card/50 border-border hover:border-primary/50 transition-all hover:shadow-lg group h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <project.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription>{project.subtitle}</CardDescription>
                      </div>
                    </div>
                    <span
                      aria-hidden="true"
                      className="font-mono text-xs text-muted-foreground/50 group-hover:text-primary/60 transition-colors"
                    >
                      {String(project.id).padStart(2, "0")}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  <div>
                    <Badge variant="outline" className="mb-3 text-xs">
                      {project.testingType}
                    </Badge>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.map((tool) => (
                        <Badge
                          key={tool}
                          variant="secondary"
                          className="text-xs bg-secondary/50"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <ul className="space-y-1.5">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-xs text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
