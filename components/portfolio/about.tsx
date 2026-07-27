"use client"

import { CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Reveal } from "@/components/portfolio/reveal"
import { SpotlightCard } from "@/components/portfolio/spotlight-card"
import { CheckCircle2, Briefcase, GraduationCap, Target } from "lucide-react"

const highlights = [
  "2.5+ years of QA experience",
  "Manual & Automation Testing",
  "Selenium, Playwright & TestNG",
  "AI-native QA workflows",
]

const cards = [
  {
    icon: Briefcase,
    title: "Professional Experience",
    body: "Enterprise web applications across AI infrastructure, healthcare, hiring and vendor management — automation, regression, API validation and release quality.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    body: (
      <>
        MCA (Pursuing) – Bharathiar University, Feb 2025 – Present
        <br />
        B.Sc. Computer Science with Data Analytics – Dr. N.G.P Arts and Science
        College, 2023
      </>
    ),
  },
  {
    icon: Target,
    title: "Current Focus",
    body: "Building AI agents into the QA workflow — automated defect capture and filing, and commit/PR review for QA-relevant changes — alongside prompt-driven test tooling.",
  },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            About Me
          </Badge>

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            QA Engineer Focused on Quality &amp; Automation
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about building reliable automation frameworks, improving
            product quality, and delivering smooth user experiences through
            modern QA practices.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Reveal className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I&rsquo;m a QA Engineer with 2.5+ years of experience in Manual and
              Automation Testing across SaaS, Healthcare, AI, and Vendor
              Management platforms. I have worked in Agile teams closely with
              developers, product managers, and business stakeholders to ensure
              high-quality software delivery.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My expertise includes{" "}
              <span className="text-foreground font-medium">
                Selenium with Java, Playwright, TestNG, Cucumber BDD, API
                Testing, SQL,
              </span>{" "}
              and CI/CD workflows using GitHub Actions. Lately I&rsquo;ve been
              expanding into{" "}
              <span className="text-foreground font-medium">
                AI-native QA
              </span>{" "}
              — building agent-based tooling that captures and files defects
              automatically and reviews commits for QA-relevant changes.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4">
            {cards.map((card, index) => (
              <Reveal key={card.title} delay={100 + index * 90}>
                <SpotlightCard className="bg-card/50 border-border hover:border-primary/50 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 ease-out">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                      <card.icon className="h-6 w-6 text-primary" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {card.title}
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        {card.body}
                      </p>
                    </div>
                  </CardContent>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
