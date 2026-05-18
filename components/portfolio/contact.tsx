"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "naveen6382921040@gmail.com",
    href: "mailto:naveen6382921040@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/naveen-kumar-s",
    href: "https://www.linkedin.com/in/naveen-kumar-s-021946225/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/naveenkumar24020203",
    href: "https://github.com/naveenkumar24020203",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Coimbatore, Tamil Nadu, India",
    href: null,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Contact
          </Badge>

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let&apos;s Connect
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Open to QA Automation, SDET, and Software Testing opportunities.
            Feel free to reach out for collaborations, freelance work, or
            professional discussions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            {contactInfo.map((item) => (
              <Card
                key={item.label}
                className="bg-card/50 border-border hover:border-primary/50 transition-all hover:shadow-lg group"
              >
                <CardContent className="p-4">
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center gap-4"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>

                      <div>
                        <p className="text-xs text-muted-foreground">
                          {item.label}
                        </p>

                        <p className="text-foreground font-medium group-hover:text-primary transition-colors break-all">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>

                      <div>
                        <p className="text-xs text-muted-foreground">
                          {item.label}
                        </p>

                        <p className="text-foreground font-medium">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card/50 border-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Send a Message
              </h3>

              <p className="text-sm text-muted-foreground mb-6">
                I usually respond within 24 hours.
              </p>

              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none text-foreground"
                    placeholder="Write your message here..."
                  />
                </div>

                <Button className="w-full gap-2 h-11">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}