"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Lock, Eye, Users, Server, Gauge, AlertTriangle, UserCheck, Camera } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    title: "Gardiennage & Surveillance",
    description: "Surveillance de sites, protection des biens et des personnes avec présence dissuasive 24h/24 et 7j/7.",
    icon: Shield,
    features: ["Rondes de sécurité", "Contrôle d'accès", "Surveillance périmétrique"],
    link: "/services/gardiennage"
  },
  {
    title: "Sécurité Cynophile",
    description: "Intervention de binômes agent cynophile et chien dressé pour une sécurité renforcée sur vos sites sensibles.",
    icon: Users,
    features: ["Détection d'intrusion", "Recherche de substances", "Dissuasion renforcée"],
    link: "/services/maitre-chien"
  },
  {
    title: "Protection Incendie SSIAP",
    description: "Agents SSIAP qualifiés pour la prévention, sécurité incendie, évacuation et assistance aux personnes.",
    icon: Gauge,
    features: ["Prévention incendie", "Évacuation d'urgence", "Formation du personnel"],
    link: "/services/ssiap"
  },
  {
    title: "Accompagnement VIP",
    description: "Protection rapprochée et escorte sécurisée pour personnalités, dirigeants et événements sensibles.",
    icon: UserCheck,
    features: ["Protection rapprochée", "Escorte sécurisée", "Analyse des risques"],
    link: "/services/accompagnement"
  },
  {
    title: "Intervention sur Alarme",
    description: "Intervention rapide 24h/24 suite à déclenchement d'alarme avec levée de doute et sécurisation immédiate.",
    icon: AlertTriangle,
    features: ["Intervention < 15min", "Levée de doute", "Rapport détaillé"],
    link: "/services/intervention-alarme"
  },
  {
    title: "Contrôle d'Accès",
    description: "Gestion professionnelle des accès, filtrage visiteurs, accueil et vérification d'identités.",
    icon: Lock,
    features: ["Filtrage visiteurs", "Gestion badges", "Contrôle véhicules"],
    link: "/services/controle-acces"
  },
  {
    title: "Télésurveillance",
    description: "Surveillance à distance avec caméras haute définition et centre de contrôle opérationnel 24h/24.",
    icon: Camera,
    features: ["Caméras HD", "Centre de contrôle", "Alerte temps réel"],
    link: "/services/telesurveillance"
  },
  {
    title: "Sécurité Événementielle",
    description: "Sécurisation complète de vos événements : concerts, manifestations, salons et réceptions privées.",
    icon: Eye,
    features: ["Filtrage entrées", "Gestion foule", "Coordination équipes"],
    link: "/services/evenementiel"
  },
  {
    title: "Audit & Conseil",
    description: "Évaluation complète des risques sécuritaires avec recommandations personnalisées et plan d'action.",
    icon: Server,
    features: ["Analyse des risques", "Recommandations", "Plan de sécurité"],
    link: "/services/audit-conseil"
  }
]

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services de Sécurité</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Solutions complètes et personnalisées pour tous vos besoins en matière de sécurité. 
              Nos experts certifiés vous accompagnent avec du matériel de pointe.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="h-full transition-all hover:shadow-xl hover:-translate-y-2 group border-l-4 border-l-red-500">
                <CardHeader>
                  <div className="bg-red-100 dark:bg-slate-800 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-500 transition-colors">
                    <service.icon className="w-7 h-7 text-red-600 dark:text-red-500 group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-red-600 transition-colors">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  
                  {/* Features list */}
                  <div className="mt-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardHeader>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full group-hover:bg-red-500 group-hover:text-white group-hover:border-red-500 transition-all">
                    <Link href={service.link}>En savoir plus</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4">
              <Link href="/services">Découvrir tous nos services</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services