"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  const reasons = [
    "20+ ans d'expérience dans l'industrie",
    "Professionnels de la sécurité certifiés",
    "Surveillance et réponse rapide 24h/24",
    "Solutions de sécurité personnalisées",
    "Dernières technologies et équipements",
    "Évaluation des risques exhaustive"
  ]
  
  return (
    <section className="py-24 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Security professionals at work" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-lg max-w-xs hidden md:block">
              <p className="text-2xl font-bold">20+</p>
              <p>Années de service de sécurité de confiance</p>
            </div>
          </motion.div>
          
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">À propos de INKD SECURITE</h2>
            <p className="text-lg mb-6 text-muted-foreground">
              Depuis 2008, INKD SECURITE est à l&apos;avant-garde de l&apos;industrie de la sécurité, 
              offrant des services de protection inégalés pour les entreprises, les organisations et les particuliers.
            </p>
            <p className="mb-8 text-muted-foreground">
              Notre équipe de professionnels de la sécurité certifiés combine des années d&apos;expérience avec 
              la technologie de pointe pour offrir des solutions de sécurité exhaustives qui répondent 
              à vos défis et vos exigences uniques.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
            
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link href="/about">En savoir plus sur nous</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About