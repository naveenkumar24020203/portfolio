"use client"

import { Badge } from "@/components/ui/badge"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Reveal } from "@/components/portfolio/reveal"
import { SpotlightCard } from "@/components/portfolio/spotlight-card"
import { TestTube2, Bot, Code2, Server, Sparkles, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Automation & Frameworks",
    icon: Bot,
    skills: [
      "Selenium with Java",
      "Playwright",
      "TestNG",
      "Cucumber (BDD)",
      "Page Object Model",
      "ExtentReports",
      "Cross Browser Testing",
    ],
  },
  {
    title: "AI-Native QA",
    icon: Sparkles,
    skills: [
      "Bug Logger Agent",
      "Git Checker Agent",
      "AI Agent Workflows",
      "Prompt-Driven Test Tooling",
      "Model Context Protocol",
    ],
  },
  {
    title: "Manual Testing",
    icon: TestTube2,
    skills: [
      "Test Case Design",
      "Bug Life Cycle",
      "SDLC/STLC",
      "UAT",
      "Agile Methodology",
      "Regression Testing",
      "Functional Testing",
    ],
  },
  {
    title: "API & Performance",
    icon: Server,
    skills: [
      "Postman",
      "Swagger",
      "REST API Testing",
      "JSON Validation",
      "Status Code Validation",
      "JMeter",
    ],
  },
  {
    title: "Programming & Tech",
    icon: Code2,
    skills: ["Java", "SQL", "HTML", "JSON", "Gherkin"],
  },
  {
    title: "Tools & CI/CD",
    icon: Wrench,
    skills: [
      "JIRA",
      "YouTrack",
      "ClickUp",
      "Linear",
      "Git",
      "GitHub Actions",
      "Chrome DevTools",
      "WordPress",
      "Tableau",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Skills
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Modern QA engineering skills focused on automation, API testing,
            CI/CD workflows, and scalable quality assurance practices
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 70} className="h-full">
              <SpotlightCard className="bg-card/50 border-border hover:border-primary/50 transition-all hover:shadow-lg group h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
