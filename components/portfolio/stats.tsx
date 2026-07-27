"use client"

import { Badge } from "@/components/ui/badge"
import { CardContent } from "@/components/ui/card"
import { Reveal } from "@/components/portfolio/reveal"
import { SpotlightCard } from "@/components/portfolio/spotlight-card"
import { TestRunTerminal } from "@/components/portfolio/test-run-terminal"
import { useCountUp } from "@/hooks/use-count-up"
import { Bug, CalendarClock, Gauge, ShieldCheck } from "lucide-react"

/** Every figure here is drawn from the Experience and Projects sections, which
 *  in turn track the résumé — so the numbers stay in step across the page. */
const stats = [
  {
    icon: CalendarClock,
    value: 2.5,
    decimals: 1,
    suffix: "+",
    label: "Years in QA",
  },
  {
    icon: ShieldCheck,
    value: 90,
    suffix: "%+",
    label: "Test coverage delivered",
  },
  { icon: Gauge, value: 30, suffix: "%", label: "Faster regression cycles" },
  { icon: Bug, value: 100, suffix: "+", label: "Issues tracked" },
]

function Stat({ stat }: { stat: (typeof stats)[number] }) {
  const { ref, value } = useCountUp(stat.value, { decimals: stat.decimals })

  return (
    <SpotlightCard className="bg-card/50 border-border hover:border-primary/50 transition-colors h-full">
      <CardContent className="p-5">
        <stat.icon className="h-5 w-5 text-primary mb-3" />
        <p className="text-3xl sm:text-4xl font-bold text-foreground tabular-nums">
          <span ref={ref}>{value}</span>
          {stat.suffix}
        </p>
        <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
      </CardContent>
    </SpotlightCard>
  )
}

export function Stats() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          <Reveal className="lg:col-span-3">
            <TestRunTerminal />
          </Reveal>

          <div className="lg:col-span-2">
            <Reveal delay={120}>
              <Badge variant="secondary" className="mb-4">
                By the numbers
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                Quality, measured
              </h2>
              <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                Regression suites that run green — across AI infrastructure,
                healthcare, hiring and vendor platforms.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Reveal key={stat.label} delay={180 + index * 80}>
                  <Stat stat={stat} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
