"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CheckCircle, Users, Building, Award } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  const achievements = [
    "Plus de 15 ans d'expérience dans la sécurité privée",
    "Équipe de 50+ agents de sécurité certifiés et expérimentés", 
    "Intervention 24h/24 et 7j/7 en Île-de-France",
    "Solutions personnalisées selon vos besoins spécifiques",
    "Technologies de pointe et équipements dernière génération",
    "Partenariat avec les forces de l'ordre locales"
  ]
  
  const keyNumbers = [
    { icon: Users, number: "500+", label: "Clients satisfaits" },
    { icon: Building, number: "1000+", label: "Sites sécurisés" },
    { icon: Award, number: "99.8%", label: "Taux de satisfaction" }
  ]
  
  return (
    <section className="py-24 overflow-hidden bg-white dark:bg-slate-800" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
              <img 
                src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Équipe de sécurité professionnelle INKD SÉCURITÉ" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            {/* Floating achievement card */}
            <div className="absolute -bottom-8 -right-8 bg-red-600 text-white p-6 rounded-xl shadow-2xl max-w-xs">
              <div className="text-3xl font-bold mb-2">15+</div>
              <p className="text-red-100">Années d'expertise en sécurité privée en Île-de-France</p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-red-500/10 rounded-full blur-xl" />
            <div className="absolute top-1/2 -left-8 w-16 h-16 bg-red-500/20 rounded-full blur-lg" />
          </motion.div>
          
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              À propos d'<span className="text-red-600">INKD SÉCURITÉ</span>
            </h2>
            <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
              Fondée en 2008, INKD SÉCURITÉ s'est imposée comme un acteur majeur de la sécurité privée 
              en Île-de-France. Notre mission : protéger vos biens, vos collaborateurs et votre tranquillité d'esprit.
            </p>
            <p className="mb-8 text-muted-foreground leading-relaxed">
              Grâce à notre équipe d'experts certifiés et à nos technologies de pointe, nous offrons 
              des solutions de sécurité sur mesure qui s'adaptent parfaitement à vos défis et exigences spécifiques.
            </p>
            
            {/* Key numbers */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {keyNumbers.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg"
                >
                  <item.icon className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-600">{item.number}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </motion.div>
              ))}
            </div>
            
            {/* Achievements list */}
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{achievement}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4">
                <Link href="/about">Découvrir notre histoire</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About