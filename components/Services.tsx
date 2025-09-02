'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    title: 'Brand Identity',
    description: 'Creating unique visual identities that capture your brand essence and resonate with your audience',
    icon: '◆'
  },
  {
    title: 'UI/UX Design',
    description: 'Crafting intuitive and beautiful user interfaces that enhance user experience and drive engagement',
    icon: '○'
  },
  {
    title: 'Animation',
    description: 'Bringing your ideas to life with captivating motion graphics and smooth animations',
    icon: '△'
  },
  {
    title: '3D Modeling',
    description: 'Creating stunning three-dimensional visuals that add depth and realism to your projects',
    icon: '□'
  },
  {
    title: 'Web Development',
    description: 'Building responsive, performant websites with modern technologies and best practices',
    icon: '◇'
  },
  {
    title: 'Creative Direction',
    description: 'Guiding your creative vision from concept to execution with strategic artistic leadership',
    icon: '✦'
  }
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Services</h2>
          <p className="text-xl text-gray-400 max-w-3xl">
            We combine creativity with technical expertise to deliver exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="p-8 border border-white/10 rounded-lg hover:border-white/30 transition-colors duration-300 bg-white/[0.02] backdrop-blur-sm"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}