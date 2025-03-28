"use client"

import type React from "react"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Code,
  Database,
  Layout,
  Server,
  Layers,
  Wrench,
  Palette,
  LineChart,
  HashIcon as Html,
  FileJson,
  Atom,
  Boxes,
  Wind,
  FileType,
  Cpu,
  FileCode2,
  Webhook,
  BarChart4,
  Workflow,
  Repeat,
  GitBranch,
  Container,
  Cloud,
  Cog,
  PenTool,
} from "lucide-react"

const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: <Layout className="w-4 h-4" />,
    skills: [
      { name: "HTML/CSS", level: 90, icon: <Html className="w-4 h-4" /> },
      { name: "JavaScript", level: 70, icon: <FileJson className="w-4 h-4" /> },
      { name: "React.js", level: 60, icon: <Atom className="w-4 h-4" /> },
      { name: "Next.js", level: 40, icon: <Boxes className="w-4 h-4" /> },
      { name: "Tailwind CSS", level: 85, icon: <Wind className="w-4 h-4" /> },
      { name: "TypeScript", level: 65, icon: <FileType className="w-4 h-4" /> },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: <Server className="w-4 h-4" />,
    skills: [
      { name: "Node.js", level: 75, icon: <Cpu className="w-4 h-4" /> },
      { name: "Express.js", level: 25, icon: <FileCode2 className="w-4 h-4" /> },
      { name: "PHP", level: 70, icon: <Code className="w-4 h-4" /> },
      { name: "Python", level: 65, icon: <FileCode2 className="w-4 h-4" /> },
      { name: "RESTful APIs", level: 10, icon: <Webhook className="w-4 h-4" /> },
    ],
  },
  {
    id: "database",
    label: "Database",
    icon: <Database className="w-4 h-4" />,
    skills: [
      { name: "MySQL", level: 85, icon: <Database className="w-4 h-4" /> },
      { name: "MongoDB", level: 80, icon: <Database className="w-4 h-4" /> },
      { name: "Firebase", level: 75, icon: <Workflow className="w-4 h-4" /> },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    icon: <Wrench className="w-4 h-4" />,
    skills: [
      { name: "Git & GitHub", level: 70, icon: <GitBranch className="w-4 h-4" /> },
      { name: "VScode", level: 85, icon: <Container className="w-4 h-4" /> },
      { name: "Xammp", level: 70, icon: <Cloud className="w-4 h-4" /> },
      { name: "CI/CD", level: 50, icon: <Repeat className="w-4 h-4" /> },
      { name: "Adobe", level: 65, icon: <Cog className="w-4 h-4" /> },
      { name: "Figma", level: 65, icon: <PenTool className="w-4 h-4" /> },
    ],
  },
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend")

  return (
    <div className="container mx-auto px-4 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="text-center mb-16 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto"></div>
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
          I've worked with a variety of technologies in the web development world. Here's an overview of my technical
          skills and expertise.
        </p>
      </div>

      <Tabs
        defaultValue="frontend"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full max-w-4xl mx-auto relative z-10"
      >
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 bg-card/50 backdrop-blur-sm border border-primary/10">
          {skillCategories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="flex items-center gap-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
            >
              {category.icon}
              <span className="hidden sm:inline">{category.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/10">
          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-primary">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2 bg-primary/10"
                      indicatorClassName="bg-gradient-to-r from-primary to-primary/70"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>

      <div className="mt-20 relative z-10">
        <h3 className="text-2xl font-semibold text-center mb-10">Other Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <SkillCard icon={<Code />} title="Problem Solving" />
          <SkillCard icon={<Layers />} title="System Design" />
          <SkillCard icon={<Palette />} title="UI/UX Design" />
          <SkillCard icon={<LineChart />} title="Performance Optimization" />
        </div>
      </div>
    </div>
  )
}

function SkillCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-lg shadow-sm border border-primary/10 hover:border-primary/30 transition-all hover:transform hover:-translate-y-1">
      <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">{icon}</div>
      <h4 className="font-medium text-center">{title}</h4>
    </div>
  )
}

