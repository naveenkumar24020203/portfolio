"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    id: 1,
    company: "Viamagus",
    role: "QA Engineer",
    period: "Jan 2026 – Present",
    location: "Remote",
    description:
      "Working on enterprise applications with focus on automation testing, API validation, regression testing, and scalable QA workflows. Contributing to quality improvements through modern testing practices and Agile collaboration.",
    tools: [
      "Playwright",
      "Selenium",
      "Postman",
      "TestNG",
      "GitHub Actions",
      "JIRA",
    ],
    current: true,
  },
  {
    id: 2,
    company: "Onedata Software Solutions",
    role: "QA Engineer",
    period: "Jan 2025 – Oct 2025",
    location: "Coimbatore, Tamil Nadu",
    description:
      "Designed and executed functional, regression, and API test cases for enterprise applications. Improved test coverage, tracked 100+ defects in YouTrack, and collaborated with developers during Agile sprint cycles.",
    tools: [
      "Selenium",
      "TestNG",
      "Postman",
      "YouTrack",
      "SQL",
      "JMeter",
    ],
    current: false,
  },
  {
    id: 3,
    company: "Techjays",
    role: "QA Engineer I",
    period: "Sept 2024 – Dec 2024",
    location: "Remote",
    description:
      "Developed and maintained automated test scripts for vendor management platforms using Playwright and Selenium. Supported UAT testing, bug validation, and release verification across cross-functional teams.",
    tools: [
      "Playwright",
      "Selenium",
      "Postman",
      "ClickUp",
      "JavaScript",
    ],
    current: false,
  },
  {
    id: 4,
    company: "Incentives Software Pvt Ltd",
    role: "QA Engineer",
    period: "Aug 2023 – Sept 2024",
    location: "Remote",
    description:
      "Created detailed manual test cases, executed end-to-end testing for browser extensions, and validated APIs using Swagger and Postman. Logged and tracked defects through JIRA workflows.",
    tools: [
      "Postman",
      "Swagger",
      "JIRA",
      "Manual Testing",
      "Regression Testing",
    ],
    current: false,
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Experience</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Professional Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
My career path in software quality assurance, automation testing, and modern QA engineering          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background transform md:-translate-x-1/2 hidden md:block z-10" />
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <Card className={`bg-card/50 border-border hover:border-primary/50 transition-all hover:shadow-lg ${exp.current ? 'border-primary/30' : ''}`}>
                    <CardContent className="p-6">
                      <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {exp.current && (
                          <Badge className="bg-primary/10 text-primary border-primary/30">Current</Badge>
                        )}
                      </div>
                      
                      <div className={`flex items-start gap-3 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                        <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                          <Building2 className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-lg">{exp.role}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                      </div>

                      <div className={`flex flex-wrap gap-3 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </span>
                      </div>

                      <p className={`text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {exp.description}
                      </p>

                      <div className={`flex flex-wrap gap-1.5 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {exp.tools.map((tool) => (
                          <Badge key={tool} variant="secondary" className="text-xs bg-secondary/50">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
