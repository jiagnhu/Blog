"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Github, Linkedin, Mail, Globe } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { useTranslations } from "@/hooks/use-translations"

export function Navigation() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { locale, setLocale } = useLanguage()
  const { t } = useTranslations()
  const [isClient, setIsClient] = useState(false)
  
  // 解决服务端渲染与客户端渲染不匹配的问题
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  const navItems = [
    { href: "/", label: isClient ? t('navigation.about') : 'About' },
    { href: "/blog", label: isClient ? t('navigation.blog') : 'Blog' },
    { href: "/projects", label: isClient ? t('navigation.projects') : 'Projects' },
  ]
  
  const socialLinks = [
    { href: "https://github.com/jiagnhu", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
    // { href: "mailto:hello@example.com", icon: Mail, label: "Email" },
  ]

  // 切换语言（不依赖路由）
  const switchLanguage = () => {
    const newLocale = locale === 'en' ? 'zh' : 'en'
    setLocale(newLocale)
    // 不需要路由跳转，直接通过Context更新语言
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="w-full md:w-64 lg:w-80 border-b md:border-r md:border-b-0 border-border px-6 py-8 md:py-12 md:sticky md:top-0 md:h-screen flex flex-col">
      <div className="flex-1">
        <div className="mb-12">
          <h1 className="text-2xl font-bold mb-2 text-balance">Kai</h1>
          <p className="text-muted-foreground text-sm">全栈开发工程师</p>
          <p className="text-muted-foreground text-sm mt-2">热爱创造优雅的数字体验</p>
        </div>

        <div className="space-y-1 mb-12">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block px-3 py-2 rounded-md text-sm transition-colors",
                pathname === item.href
                  ? "bg-secondary text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <Button
              key={link.label}
              variant="ghost"
              size="icon"
              asChild
              className="text-muted-foreground hover:text-foreground"
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                <link.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>

        {mounted && (
          <div className="space-y-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-full"
            >
              {theme === "dark" ? (
                <>
                  <Sun className="h-4 w-4 mr-2" />
                  {isClient ? t('navigation.lightMode') : 'Light Mode'}
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4 mr-2" />
                  {isClient ? t('navigation.darkMode') : 'Dark Mode'}
                </>
              )}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={switchLanguage}
              className="w-full"
            >
              <Globe className="h-4 w-4 mr-2" />
              {locale === 'en' 
                ? (isClient ? t('navigation.switchToChinese') : '切换到中文') 
                : (isClient ? t('navigation.switchToEnglish') : 'Switch to English')}
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
