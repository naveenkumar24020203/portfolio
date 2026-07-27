"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/portfolio/reveal"
import { SpotlightCard } from "@/components/portfolio/spotlight-card"
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"
import emailjs from "@emailjs/browser"

/** Overridable per-environment; the fallbacks are EmailJS's public
 *  browser identifiers, which are safe to ship to the client. */
const EMAILJS = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_qadnwoj",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_ol0jt97",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "TFIpy0XmrQBPHMpl9",
}

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

type Status = "idle" | "sending" | "sent" | "error"

const inputClasses =
  "w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"

export function Contact() {
  const [status, setStatus] = useState<Status>("idle")

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget

    // Honeypot: only bots fill a field humans cannot see.
    if (new FormData(form).get("company")) {
      setStatus("sent")
      form.reset()
      return
    }

    setStatus("sending")

    try {
      await emailjs.sendForm(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        form,
        EMAILJS.publicKey,
      )
      setStatus("sent")
      form.reset()
    } catch (error) {
      console.error("Contact form submission failed", error)
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-12">
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
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <Reveal key={item.label} delay={index * 70}>
                <SpotlightCard className="bg-card/50 border-border hover:border-primary/50 transition-all hover:shadow-lg group">
                  <CardContent className="p-4">
                    {item.href ? (
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
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
                </SpotlightCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <SpotlightCard className="bg-card/50 border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Send a Message
                </h3>

                <p className="text-sm text-muted-foreground mb-6">
                  I usually respond within 24 hours.
                </p>

                <form className="space-y-4" onSubmit={sendEmail}>
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
                      name="name"
                      autoComplete="name"
                      className={inputClasses}
                      placeholder="Enter your name"
                      required
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
                      name="email"
                      autoComplete="email"
                      className={inputClasses}
                      placeholder="your@email.com"
                      required
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
                      name="message"
                      rows={5}
                      className={`${inputClasses} resize-none`}
                      placeholder="Write your message here..."
                      required
                    />
                  </div>

                  {/* Honeypot — hidden from users, irresistible to bots. */}
                  <div aria-hidden="true" className="hidden">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gap-2 h-11"
                    disabled={status === "sending"}
                  >
                    <Send className="h-4 w-4" />
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </Button>

                  <p aria-live="polite" className="min-h-5">
                    {status === "sent" && (
                      <span className="flex items-center justify-center gap-1.5 text-sm text-emerald-500">
                        <CheckCircle2 className="h-4 w-4" />
                        Message sent — I&apos;ll be in touch shortly.
                      </span>
                    )}
                    {status === "error" && (
                      <span className="flex items-center justify-center gap-1.5 text-sm text-destructive">
                        <AlertCircle className="h-4 w-4" />
                        Something went wrong. Please email me directly.
                      </span>
                    )}
                  </p>
                </form>
              </CardContent>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
