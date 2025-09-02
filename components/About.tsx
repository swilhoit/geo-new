'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 lg:px-16 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">About GEO</h2>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              Based in the heart of Los Angeles, GEO Studio is where creativity meets innovation. 
              We are a collective of designers, developers, and dreamers who believe in the power 
              of exceptional digital experiences.
            </p>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              Our approach combines strategic thinking with artistic excellence, ensuring every 
              project not only looks stunning but also achieves meaningful results for our clients.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              From startups to established brands, we partner with forward-thinking companies 
              to create digital experiences that inspire, engage, and endure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 rounded-lg backdrop-blur-sm"
                >
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-lg backdrop-blur-sm"
                >
                  <div className="text-4xl font-bold mb-2">5</div>
                  <div className="text-gray-400">Years Experience</div>
                </motion.div>
              </div>
              <div className="space-y-4 mt-8">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-green-500/20 to-blue-500/20 p-8 rounded-lg backdrop-blur-sm"
                >
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-orange-500/20 to-red-500/20 p-8 rounded-lg backdrop-blur-sm"
                >
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-gray-400">Creative Thinking</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}