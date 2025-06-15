"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Building2, Clock, Award, Shield, CheckCircle } from 'lucide-react'

const stats = [
  {
    value: "500+",
    label: "Clients Protégés",
    icon: Users,
    description: "Entreprises et particuliers"
  },
  {
    value: "24/7",
    label: "Surveillance Continue",
    icon: Clock,
    description: "Intervention d'urgence"
  },
  {
    value: "15+",
    label: "Années d'Expérience",
    icon: Building2,
    description: "Dans la sécurité privée"
  },
  {
    value: "100%",
    label: "Agents Certifiés",
    icon: Award,
    description: "Formation continue"
  },
  {
    value: "< 15min",
    label: "Temps d'Intervention",
    icon: Shield,
    description: "En zone prioritaire"
  },
  {
    value: "99.8%",
    label: "Taux de Satisfaction",
    icon: CheckCircle,
    description: "Clients satisfaits"
  }
]

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">INKD SÉCURITÉ en Chiffres</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Des résultats concrets qui témoignent de notre expertise et de notre engagement
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-slate-800 p-6 rounded-xl mb-4 mx-auto w-20 h-20 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-red-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-red-400">{stat.value}</div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-slate-400 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-slate-800/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-red-400">Pourquoi nous faire confiance ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">Expertise Reconnue</h4>
                <p className="text-slate-300 text-sm">Agréé par la préfecture et certifié par les organismes professionnels</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technologie Avancée</h4>
                <p className="text-slate-300 text-sm">Équipements de pointe et systèmes de communication dernière génération</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Réactivité Garantie</h4>
                <p className="text-slate-300 text-sm">Intervention rapide et coordination avec les forces de l'ordre</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats