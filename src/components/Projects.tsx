"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  link?: string
  index: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  tags, 
  image, 
  link, 
  index 
}) => {
  return (
    <motion.div
      className="card group overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative w-full h-48 md:h-56 overflow-hidden rounded-t-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
        <div className="w-full h-full flex items-center justify-center bg-surface text-3xl font-bold">
          {/* Placeholder for project image */}
          {title.charAt(0)}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="px-2 py-1 bg-background/50 text-primary text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block text-sm text-primary hover:underline"
          >
            View Project &rarr;
          </a>
        )}
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [category, setCategory] = useState('all')

  const projects = [
    {
      title: "DevOps Automation Platform",
      description: "A comprehensive platform for automating CI/CD pipelines, infrastructure provisioning, and configuration management. Built with Terraform, Jenkins, and Kubernetes.",
      tags: ["DevOps", "Terraform", "Kubernetes", "CI/CD"],
      image: "/projects/project1.jpg",
      link: "https://github.com/ash-sxn/",
      category: "devops"
    },
    {
      title: "Cloud Migration Framework",
      description: "A framework for seamless migration of on-premises applications to cloud environments. Includes assessment, planning, migration, and optimization phases.",
      tags: ["Cloud", "AWS", "Migration", "Architecture"],
      image: "/projects/project2.jpg",
      link: "https://github.com/ash-sxn/",
      category: "cloud"
    },
    {
      title: "Microservices API Gateway",
      description: "A scalable API gateway for microservices architecture with authentication, rate limiting, and request routing capabilities.",
      tags: ["Java", "Spring Boot", "Microservices", "API"],
      image: "/projects/project3.jpg",
      link: "https://github.com/ash-sxn/",
      category: "backend"
    },
    {
      title: "Infrastructure Monitoring Solution",
      description: "A comprehensive monitoring solution for infrastructure and applications with real-time alerts and dashboards.",
      tags: ["Prometheus", "Grafana", "Monitoring", "DevOps"],
      image: "/projects/project4.jpg",
      link: "https://github.com/ash-sxn/",
      category: "devops"
    },
    {
      title: "Portfolio Website",
      description: "This website is built using Next.js, Tailwind CSS, and Framer Motion. It showcases my projects, skills, and experiences with modern animations and a responsive design.",
      tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      image: "/projects/project5.jpg",
      link: "https://github.com/ash-sxn/ash-sxn.github.io",
      category: "frontend"
    },
    {
      title: "Container Orchestration System",
      description: "A lightweight container orchestration system for managing containerized applications in development and production environments.",
      tags: ["Docker", "Kubernetes", "Go", "DevOps"],
      image: "/projects/project6.jpg",
      link: "https://github.com/ash-sxn/",
      category: "devops"
    },
  ]

  const filteredProjects = category === 'all' 
    ? projects 
    : projects.filter(p => p.category === category)

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'devops', name: 'DevOps' },
    { id: 'cloud', name: 'Cloud' },
    { id: 'backend', name: 'Backend' },
    { id: 'frontend', name: 'Frontend' },
  ]

  return (
    <section id="projects" className="container-custom bg-background/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-heading font-heading">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="section-subheading mx-auto">
          Showcasing my technical expertise through real-world applications.
        </p>
      </motion.div>

      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              category === cat.id
                ? 'bg-primary text-black'
                : 'bg-surface text-gray-300 hover:bg-primary/20'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={project.image}
            link={project.link}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects 