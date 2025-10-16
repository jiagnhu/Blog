import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { TranslationsProvider } from "@/hooks/use-translations"

export const metadata: Metadata = {
  title: "个人博客 - 开发者作品集",
  description: "分享技术文章、项目经验和个人思考",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <TranslationsProvider>
              <Suspense fallback={null}>
                <div className="min-h-screen flex flex-col md:flex-row">
                  <Navigation />
                  <main className="flex-1 px-6 py-12 md:px-12 lg:px-24 max-w-5xl">{children}</main>
                </div>
              </Suspense>
              <Analytics />
            </TranslationsProvider>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
