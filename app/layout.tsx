import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import { TranslationsProvider } from "@/hooks/use-translations"

// 仅在 Vercel 环境下注入 Analytics，避免非 Vercel 部署产生 404
const isVercel = process.env.VERCEL === "1"

export const metadata: Metadata = {
  title: "个人博客 - 开发者作品集",
  description: "分享技术文章、项目经验和个人思考",
  generator: "v0.app",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <TranslationsProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Suspense fallback={null}>
              <div className="min-h-screen flex flex-col md:flex-row">
                <Navigation />
                <main className="flex-1 px-6 py-12 md:px-12 lg:px-24 max-w-5xl">{children}</main>
              </div>
            </Suspense>
            {isVercel && <Analytics />}
          </ThemeProvider>
        </TranslationsProvider>
      </body>
    </html>
  )
}
