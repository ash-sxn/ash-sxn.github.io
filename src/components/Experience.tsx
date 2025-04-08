"use client"

import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: "DevOps Engineer",
      company: "Tech Solutions Inc.",
      period: "Jan 2022 - Present",
      description: "Leading infrastructure modernization efforts, implementing CI/CD pipelines, and managing Kubernetes clusters. Reduced deployment time by 60% and increased system reliability through automation and monitoring solutions."
    },
    {
      title: "Software Developer",
      company: "Innovative Systems",
      period: "Jun 2020 - Dec 2021",
      description: "Developed backend services using Java and Spring Boot. Implemented RESTful APIs and integrated with various third-party services. Collaborated with DevOps teams to streamline deployment processes."
    },
    {
      title: "Intern",
      company: "Cloud Solutions Ltd.",
      period: "Jan 2020 - May 2020",
      description: "Assisted in cloud migration projects and learned about infrastructure automation. Gained hands-on experience with AWS services and Docker containerization."
    },
  ]

  return (
    <section id="experience" className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-heading font-heading">
          My <span className="text-primary">Experience</span>
        </h2>
        <p className="section-subheading mx-auto">
          My professional journey in the world of technology.
        </p>
      </motion.div>

      <div className="relative mx-auto max-w-4xl">
        {/* Timeline center line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-primary/30 -translate-x-1/2"></div>
        
        {experiences.map((exp, index) => {
          const isEven = index % 2 === 0
          
          return (
            <motion.div
              key={index}
              className={`relative flex items-center justify-between md:justify-normal ${
                isEven ? 'md:flex-row-reverse' : ''
              } mb-12`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-surface border-2 border-primary -translate-x-1/2 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
              </div>
              
              {/* Content */}
              <div className={`card w-[calc(100%-2rem)] md:w-5/12 ml-12 md:ml-0 ${
                isEven ? 'md:ml-0 md:mr-12' : 'md:ml-12'
              }`}>
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                <div className="text-primary font-medium mb-1">{exp.company}</div>
                <div className="text-sm text-gray-400 mb-4">{exp.period}</div>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Experience 