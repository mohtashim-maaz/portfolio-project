import React from 'react'
import { motion } from 'framer-motion'
import Techstack from '../components/TechStack'
import Particle from '../components/Particle'

const AboutPage = () => {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <Particle />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-7xl font-black mb-4">
            Technical <span className="text-gradient">Abilities</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Deep diving into my tech stack and the tools I use to build robust, scalable applications.
          </p>
        </motion.div>

        <Techstack />
      </div>
    </main>
  )
}

export default AboutPage;