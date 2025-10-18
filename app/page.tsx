'use client';

import { Badge } from "@/components/ui/badge"
import { useTranslations } from "@/hooks/use-translations"

export default function HomePage() {
  const { t } = useTranslations()
  const skills = [
    "React",
    "Vue",
    "微信小程序",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
  ]

  return (
    <div className="space-y-12">
      <section>
        <p className="text-sm text-muted-foreground mb-4">{t("home.greeting")}</p>
        <h2 className="text-4xl font-bold mb-6 text-balance">{t("home.title")}</h2>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-muted-foreground">{t("home.intro")}</p>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">{t("home.currentWork")}</h3>
        <div className="space-y-4">
          <div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-sm text-muted-foreground">{t("home.currentWorkPeriod")}</span>
              <span className="text-sm text-muted-foreground">·</span>
              <span className="font-medium">{t("home.currentWorkTitle")}</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">{t("home.currentWorkDescription")}</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">{t("home.skills")}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">{t("home.aboutMe")}</h3>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-muted-foreground leading-relaxed">{t("home.aboutMeText1")}</p>
          <p className="text-muted-foreground leading-relaxed mt-4">{t("home.aboutMeText2")}</p>
        </div>
      </section>
    </div>
  )
}
