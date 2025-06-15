"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Clock, Users, Award, Phone, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const advantages = [
  {
    icon: Shield,
    title: "Agrément Préfectoral",
    description: "Société agréée par la préfecture avec toutes les autorisations légales requises pour exercer dans la sécurité privée."
  },
  {
    icon: Clock,
    title: "Disponibilité 24h/24",
    description: "Service d'urgence permanent avec intervention rapide partout en Île-de-France, même les weekends et jours fériés."
  },
  {
    icon: Users,
    title: "Équipe Expérimentée",
    description: "Agents de sécurité diplômés, formés régulièrement et dotés d'une expérience terrain dans tous les secteurs d'activité."
  },
  {
    icon: Award,
    title: "Certifications Qualité",
    description: "Respect des normes ISO et certifications professionnelles garantissant un service de qualité supérieure."
  }
]

const WhyChooseUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  return (
    <section className="py-24 bg-white dark:bg-slate-800" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pourquoi Choisir <span className="text-red-600">INKD SÉCURITÉ</span> ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Depuis plus de 15 ans, nous sommes le partenaire de confiance des entreprises et particuliers 
              en Île-de-France. Notre expertise reconnue et notre approche personnalisée font la différence.
            </p>
            
            <div className="space-y-6">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded-lg flex-shrink-0">
                    <advantage.icon className="w-6 h-6 text-red-600 dark:text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{advantage.title}</h3>
                    <p className="text-muted-foreground">{advantage.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 p-6 bg-slate-50 dark:bg-slate-700 rounded-xl"
            >
              <h3 className="font-semibold text-lg mb-4">Contact Direct</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-600" />
                  <span className="font-medium">07 60 45 19 72</span>
                  <span className="text-sm text-muted-foreground">- Urgences 24h/24</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span>Intervention dans toute l'Île-de-France</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden relative">
              <img 
                src="https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Agent de sécurité professionnel INKD SÉCURITÉ" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Floating cards */}
              <div className="absolute top-6 right-6">
                <Card className="bg-white/95 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-red-600">15+</div>
                    <div className="text-sm text-muted-foreground">Années d'expérience</div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="absolute bottom-6 left-6">
                <Card className="bg-white/95 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-red-600">24/7</div>
                    <div className="text-sm text-muted-foreground">Service d'urgence</div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-500/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-500/10 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs