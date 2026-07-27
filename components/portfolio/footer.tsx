import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

const socials = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:naveen6382921040@gmail.com",
    external: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/naveen-kumar-s-021946225/",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/naveenkumar24020203",
    external: true,
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Naveen Kumar S
          </p>

          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}

            <a
              href="#"
              aria-label="Back to top"
              className="ml-2 inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
