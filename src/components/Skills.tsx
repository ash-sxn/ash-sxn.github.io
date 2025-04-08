"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface SkillCardProps {
  name: string
  icon: React.ReactNode
  description: string
  delay: number
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon, description, delay }) => {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center text-center p-2">
        <div className="text-primary text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </motion.div>
  )
}

interface ProgressBarProps {
  name: string
  percentage: number
  delay: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ name, percentage, delay }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium">{name}</span>
        <span className="text-sm font-medium text-gray-400">{percentage}%</span>
      </div>
      <div className="w-full bg-surface rounded-full h-2.5">
        <motion.div
          className="bg-primary h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </div>
  )
}

const Skills = () => {
  const skills = [
    {
      name: "DevOps",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      description: "Docker, Kubernetes, CI/CD, GitOps, Jenkins, and automation",
    },
    {
      name: "Cloud",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      description: "AWS, Azure, cloud architecture, and services",
    },
    {
      name: "Backend",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      description: "Java, Python, Node.js, REST APIs, and databases",
    },
    {
      name: "Infrastructure",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      description: "Terraform, infrastructure as code, and automation",
    },
  ]

  const progressBars = [
    { name: "Docker", percentage: 90 },
    { name: "Kubernetes", percentage: 85 },
    { name: "CI/CD", percentage: 80 },
    { name: "Cloud (AWS/Azure)", percentage: 75 },
    { name: "Linux", percentage: 85 },
    { name: "Java", percentage: 80 },
    { name: "Python", percentage: 75 },
    { name: "JavaScript/TypeScript", percentage: 70 },
    { name: "Terraform", percentage: 80 },
    { name: "Monitoring & Observability", percentage: 75 },
    { name: "Git", percentage: 90 },
    { name: "Prompt Engineering", percentage: 80 },
  ]

  return (
    <section id="skills" className="container-custom bg-background/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-heading font-heading">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="section-subheading mx-auto">
          A palette of skills for seamless tech solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">Technical Expertise</h3>
          <div className="space-y-6">
            {progressBars.map((skill, index) => (
              <ProgressBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6">Core Competencies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                description={skill.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 