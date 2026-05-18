"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Bot, Users, HeartPulse, Building2, Chrome } from "lucide-react"

type ProjectCategory = "all" | "automation" | "manual" | "api"

const projects = [
  {
    id: 1,
    title: "Neubird",
    subtitle: "AI Infrastructure Reliability Platform",
    description:
      "Worked on testing AI-driven infrastructure monitoring and incident management workflows. Developed automation scripts, validated APIs, and improved regression testing efficiency across enterprise-level applications.",
    icon: Bot,
    category: ["automation", "api"],
    testingType: "Manual + Automation + API Testing",
    tools: [
      "Playwright",
      "JavaScript",
      "Postman",
      "SQL",
      "GitHub Actions",
      "JIRA",
    ],
    highlights: [
      "Playwright automation framework",
      "API validation & backend testing",
      "CI/CD pipeline integration",
      "Regression suite execution",
    ],
  },
  {
    id: 2,
    title: "Neohire",
    subtitle: "Hiring & Recruitment Platform",
    description:
      "Automated candidate workflows, interview stages, and hiring processes using Selenium-based frameworks. Improved regression coverage and reduced repetitive manual testing efforts.",
    icon: Users,
    category: ["automation"],
    testingType: "Automation Testing",
    tools: [
      "Selenium",
      "TestNG",
      "Cucumber",
      "Java",
      "Extent Reports",
    ],
    highlights: [
      "Workflow automation testing",
      "Regression automation coverage",
      "Interview stage validations",
      "Automated reporting integration",
    ],
  },
  {
    id: 3,
    title: "OneCare",
    subtitle: "Healthcare Management Platform",
    description:
      "Executed end-to-end testing across healthcare modules including telehealth, patient records, and inventory systems. Validated APIs and reduced regression execution time using reusable automation suites.",
    icon: HeartPulse,
    category: ["automation", "api"],
    testingType: "E2E + API Testing",
    tools: [
      "Selenium",
      "TestNG",
      "Postman",
      "YouTrack",
      "SQL",
    ],
    highlights: [
      "Telehealth workflow testing",
      "Reusable automation suites",
      "API request validation",
      "Regression cycle optimization",
    ],
  },
  {
    id: 4,
    title: "ArenaCX",
    subtitle: "Vendor Management Platform",
    description:
      "Worked on automation and manual testing for vendor management and customer support workflows. Collaborated with Agile teams to validate routing logic and user experience flows.",
    icon: Building2,
    category: ["automation", "manual"],
    testingType: "Manual + Automation Testing",
    tools: [
      "Playwright",
      "Postman",
      "ClickUp",
      "JavaScript",
    ],
    highlights: [
      "Vendor workflow validation",
      "Routing logic automation",
      "Agile sprint testing",
      "Cross-functional QA collaboration",
    ],
  },
  {
    id: 5,
    title: "Prodege",
    subtitle: "Browser Extensions & Rewards Platform",
    description:
      "Performed end-to-end testing for browser extensions including reward flows, installations, and UI validations across multiple browsers. Identified and tracked UI/UX defects using JIRA.",
    icon: Chrome,
    category: ["manual"],
    testingType: "Manual Testing",
    tools: [
      "JIRA",
      "Chrome DevTools",
      "Postman",
      "JSON",
    ],
    highlights: [
      "Cross-browser testing",
      "Extension installation testing",
      "UI/UX defect tracking",
      "Reward flow validations",
    ],
  },
]

const categories = [
  { id: "all", label: "All Projects" },
  { id: "automation", label: "Automation" },
  { id: "manual", label: "Manual" },
  { id: "api", label: "API Testing" },
]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")

  const filteredProjects = projects.filter((project) => 
    activeCategory === "all" ? true : project.category.includes(activeCategory)
  )

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Projects</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Featured QA projects involving automation testing, API validation, CI/CD workflows, and scalable quality engineering practices
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id as ProjectCategory)}
                className="transition-all"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="bg-card/50 border-border hover:border-primary/50 transition-all hover:shadow-lg group overflow-hidden"
            >
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
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{project.description}</p>
                
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
                  {project.highlights.slice(0, 3).map((highlight) => (
                    <li key={highlight} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
