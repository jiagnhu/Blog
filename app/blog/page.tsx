"use client"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"
import { useState, useEffect } from "react"

const blogPosts = [
  {
    id: "1",
    title: "构建高性能的 React 应用",
    description: "探讨如何通过代码分割、懒加载和性能监控来优化 React 应用的加载速度和运行时性能。",
    date: "2024-03-15",
    tags: ["React", "Performance", "Web Development"],
    readTime: "8 分钟",
  },
  {
    id: "2",
    title: "Next.js 15 新特性深度解析",
    description: "详细介绍 Next.js 15 带来的新功能，包括改进的服务器组件、增强的路由系统和更好的开发体验。",
    date: "2024-03-08",
    tags: ["Next.js", "React", "Framework"],
    readTime: "12 分钟",
  },
  {
    id: "3",
    title: "TypeScript 类型体操实战",
    description: "通过实际案例学习 TypeScript 的高级类型系统，掌握泛型、条件类型和映射类型的使用技巧。",
    date: "2024-02-28",
    tags: ["TypeScript", "Programming"],
    readTime: "15 分钟",
  },
  {
    id: "4",
    title: "现代 CSS 布局技术指南",
    description: "从 Flexbox 到 Grid，再到最新的容器查询，全面了解现代 CSS 布局的最佳实践。",
    date: "2024-02-20",
    tags: ["CSS", "Design", "Web Development"],
    readTime: "10 分钟",
  },
  {
    id: "5",
    title: "构建可访问的 Web 应用",
    description: "学习如何创建符合 WCAG 标准的无障碍 Web 应用，让每个人都能平等地访问你的网站。",
    date: "2024-02-12",
    tags: ["Accessibility", "Web Development"],
    readTime: "11 分钟",
  },
]

export default function BlogPage() {
  const { t } = useTranslations();
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-balance">
          {isClient ? t('blog.title') : '文章'}
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          {isClient ? t('blog.description') : '分享我在 Web 开发、技术架构和工程实践方面的思考与经验'}
        </p>
      </div>

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <Card className="group hover:border-accent transition-colors cursor-pointer mb-4">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="text-xl font-semibold group-hover:text-accent transition-colors text-balance">
                    {post.title}
                  </h2>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4 text-pretty">{post.description}</p>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  <span className="text-sm text-muted-foreground">·</span>
                  <span className="text-sm text-muted-foreground">
                    {post.readTime.split(' ')[0]} {isClient ? t('blog.readTime') : '分钟阅读'}
                  </span>
                  <div className="flex flex-wrap gap-2 ml-auto">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
