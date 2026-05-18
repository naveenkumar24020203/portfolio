"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  TestTube2, 
  Bot, 
  Code2, 
  Server, 
  GitBranch, 
  Wrench 
} from "lucide-react"

const skillCategories = [
  {
    title: "Automation Testing",
    icon: Bot,
    skills: [
      "Playwright",
      "Selenium",
      "TestNG",
      "Cucumber BDD",
      "Page Object Model",
      "Data-Driven Testing",
      "Cross Browser Testing",
      "Extent Reports",
    ],
  },
  {
    title: "Manual Testing",
    icon: TestTube2,
    skills: [
      "Test Case Design",
      "Regression Testing",
      "Smoke Testing",
      "Functional Testing",
      "UAT",
      "Bug Reporting",
      "SDLC/STLC",
      "Agile Methodology",
    ],
  },
  {
    title: "API Testing",
    icon: Server,
    skills: [
      "Postman",
      "Swagger",
      "REST API Testing",
      "JSON Validation",
      "API Automation",
      "Status Code Validation",
      "Request/Response Testing",
    ],
  },
  {
    title: "Programming",
    icon: Code2,
    skills: [
      "Java",
      "JavaScript",
      "SQL",
      "HTML",
      "Gherkin",
      "Basic TypeScript",
    ],
  },
  {
    title: "CI/CD & Version Control",
    icon: GitBranch,
    skills: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "CI/CD Pipelines",
      "Automation Execution",
      "Build Validation",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      "JIRA",
      "YouTrack",
      "ClickUp",
      "Linear",
      "Chrome DevTools",
      "JMeter",
      "VS Code",
      "AI-assisted QA Tools",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Skills</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Modern QA engineering skills focused on automation, API testing, CI/CD workflows, and scalable quality assurance practices
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card 
              key={category.title} 
              className="bg-card/50 border-border hover:border-primary/50 transition-all hover:shadow-lg group"
            >
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
