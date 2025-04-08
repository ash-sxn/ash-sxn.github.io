"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { FadeContainer, popUp } from '@/utils/animations'

// Import ThreeScene dynamically to prevent SSR issues
const ThreeScene = dynamic(() => import('./ThreeScene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900/10 to-slate-900/30" />
})

const Hero: React.FC = () => {
  const circleCount = 10 // Reduced count for better performance

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden" id="home">
      {/* 3D Scene Background */}
      <ThreeScene />
      
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={FadeContainer}
          initial="hidden"
          animate="visible"
          className="absolute inset-0"
        >
          {Array.from({ length: circleCount }).map((_, index) => (
            <motion.div
              key={index}
              variants={popUp}
              className="absolute rounded-full bg-gradient-to-r from-primary-600/20 to-primary-400/10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 + 50}px`, 
                height: `${Math.random() * 200 + 50}px`,
                opacity: Math.random() * 0.15 + 0.05 // Lower opacity for subtle effect
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 py-20 z-10 text-center max-w-3xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300"
        >
          Crafting Digital Experiences
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-300 mb-10"
        >
          I build modern web applications with cutting-edge technologies.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="#projects" className="px-8 py-3 bg-primary-600 text-white font-medium rounded-full hover:bg-primary-700 transition-colors duration-300 inline-block">
            View My Work
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 