"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"
import { useState, useEffect } from "react"

const projects = [
  {
    title: "K12教育SaaS平台前端架构",
    description:
      "为K12教育SaaS平台设计和实现的现代化前端架构，支持高并发访问和复杂的业务逻辑。采用微前端架构，实现了团队间的独立开发和部署。",
    tags: ["Vue3", "node.js", "TypeScript"],
    year: "2025",
    links: {
      demo: "https://mapps.saschina.org/",
      // github: "https://github.com",
    },
  },
  {
    title: "设计系统组件库",
    description:
      "从零构建的企业级设计系统和组件库，包含 50+ 可复用组件。提供完整的文档和示例，支持主题定制和暗色模式。",
    tags: ["Vue3", "Tailwind CSS", "Design System", "Accessibility"],
    year: "2024",
    links: {
      demo: "https://mapps.saschina.org/",
      // github: "https://github.com",
    },
  },
  {
    title: "家校互动SaaS平台",
    description:
      "基于 WebSocket 的实时家校沟通，支持多人同时聊天和评论功能。实现了PC端和移动端的双端适配。",
    tags: ["vue2", "WebSocket", "微信小程序", "Node.js"],
    year: "2023",
    links: {
      demo: "https://panda.school365.org.cn",
      // github: "https://github.com",
    },
  },
  {
    title: "数据可视化仪表板",
    description:
      "为企业客户开发的数据分析和可视化平台，支持实时数据更新、自定义图表和交互式探索。处理百万级数据点的渲染优化。",
    tags: ["React", "D3.js", "WebGL", "Data Visualization"],
    year: "2022",
    links: {
      demo: "https://example.com",
    },
  },
]

export default function ProjectsPage() {
  const { t } = useTranslations();
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-balance">
          {isClient ? t('projects.title') : '项目'}
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          {isClient ? t('projects.description') : '精选的个人和专业项目，展示我在不同领域的技术实践'}
        </p>
      </div>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex items-baseline gap-3">
                    <h2 className="text-xl font-semibold text-balance">{project.title}</h2>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{project.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2 pt-2">
                {project.links.demo && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {isClient ? t('projects.viewDemo') : '查看演示'}
                    </a>
                  </Button>
                )}
                {/* {project.links.github && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      {isClient ? t('projects.viewCode') : '源代码'}
                    </a>
                  </Button>
                )} */}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
