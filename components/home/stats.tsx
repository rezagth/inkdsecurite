"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Building2, Clock, Award } from 'lucide-react'

const stats = [
  {
    value: "3,500+",
    label: "Clients Protected",
    icon: Users
  },
  {
    value: "24/7",
    label: "Monitoring & Support",
    icon: Clock
  },
  {
    value: "100+",
    label: "Corporate Partners",
    icon: Building2
  },
  {
    value: "35+",
    label: "Industry Awards",
    icon: Award
  }
]

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  return (
    <section className="py-20 bg-slate-900 text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-slate-800 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-red-500" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-slate-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats