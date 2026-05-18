"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Briefcase, GraduationCap, Target } from "lucide-react";

const highlights = [
  "2+ years of QA experience",
  "Manual & Automation Testing",
  "Playwright & Selenium expertise",
  "API & CI/CD testing",
];

export function About() {
  return (
    <section id="about" className="py-20 px-4" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            About Me
          </Badge>

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            QA Engineer Focused on Quality & Automation
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about building reliable automation frameworks, improving
            product quality, and delivering smooth user experiences through
            modern QA practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I’m a QA Engineer with 2+ years of experience in Manual and
              Automation Testing across SaaS, Healthcare, AI, and Vendor
              Management platforms. I have worked in Agile teams closely with
              developers, product managers, and business stakeholders to ensure
              high-quality software delivery.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My expertise includes{" "}
              <span className="text-foreground font-medium">
                Playwright, Selenium, Java, JavaScript, TestNG, Cucumber BDD,
                API Testing, SQL,
              </span>{" "}
              and CI/CD workflows using GitHub Actions. I enjoy designing
              scalable automation frameworks, improving regression coverage, and
              exploring AI-driven QA solutions.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <Card
              data-aos="zoom-in"
              className="
    bg-card/50 border-border
    hover:border-primary/50
    hover:-translate-y-2
    hover:scale-[1.02]
    hover:shadow-2xl
    transition-all duration-300 ease-out
  "
            >
              {" "}
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Professional Experience
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Experience working on enterprise-level web applications with
                    focus on automation testing, regression testing, API
                    validation, and release quality.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card
              data-aos="zoom-in"
              className="
    bg-card/50 border-border
    hover:border-primary/50
    hover:-translate-y-2
    hover:scale-[1.02]
    hover:shadow-2xl
    transition-all duration-300 ease-out
  "
            >
              {" "}
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Education
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    MCA (Pursuing) – Bharathiar University
                    <br />
                    B.Sc. Computer Science with Data Analytics
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card
              data-aos="zoom-in"
              className="
    bg-card/50 border-border
    hover:border-primary/50
    hover:-translate-y-2
    hover:scale-[1.02]
    hover:shadow-2xl
    transition-all duration-300 ease-out
  "
            >
              {" "}
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Current Focus
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Building modern Playwright automation frameworks and
                    exploring AI-powered QA workflows, scalable testing
                    strategies, and advanced automation practices.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
