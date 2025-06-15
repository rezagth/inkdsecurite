"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Award, CheckCircle, FileCheck } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const certifications = [
  {
    icon: Shield,
    title: "Agrément Préfectoral",
    description: "Autorisation officielle délivrée par la préfecture pour exercer dans la sécurité privée",
    number: "AUT-075-2024-INKD"
  },
  {
    icon: Award,
    title: "Certification APSAD",
    description: "Certification qualité pour les services de surveillance et de gardiennage",
    number: "APSAD R31"
  },
  {
    icon: FileCheck,
    title: "Norme ISO 9001",
    description: "Système de management de la qualité certifié pour l'excellence du service",
    number: "ISO 9001:2015"
  },
  {
    icon: CheckCircle,
    title: "Formation CNAPS",
    description: "Tous nos agents sont formés et certifiés par le Conseil National des Activités Privées de Sécurité",
    number: "CNAPS Certifié"
  }
]

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Agréments</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            INKD SÉCURITÉ respecte toutes les réglementations en vigueur et dispose de l'ensemble 
            des certifications nécessaires pour vous garantir un service professionnel et légal.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <div className="bg-red-100 dark:bg-red-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition-colors">
                    <cert.icon className="w-8 h-8 text-red-600 dark:text-red-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{cert.description}</p>
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-2">
                    <span className="text-xs font-mono text-red-600 dark:text-red-400">{cert.number}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Additional compliance info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Conformité Réglementaire</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2 text-red-600">Code de la Sécurité Intérieure</h4>
                <p className="text-sm text-muted-foreground">Respect strict du livre VI du CSI régissant les activités privées de sécurité</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-red-600">Formation Continue</h4>
                <p className="text-sm text-muted-foreground">Mise à jour régulière des compétences et recyclage obligatoire tous les 5 ans</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-red-600">Assurance Professionnelle</h4>
                <p className="text-sm text-muted-foreground">Couverture complète responsabilité civile professionnelle et dommages</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications