"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Lock, Eye, Users, Server, Gauge,  } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    title: "Gardiennage",
    description: "Surveillance de sites, protection des biens et des personnes, présence dissuasive 24h/24.",
    icon: Shield,
    link: "/services/gardiennage"
  },
  {
    title: "Sécurité cynophile (Maître-chien)",
    description: "Intervention de binômes agent cynophile et chien pour une sécurité renforcée sur vos sites.",
    icon: Users,
    link: "/services/maitre-chien"
  },
  {
    title: "Protection incendie (SSIAP)",
    description: "Agents SSIAP pour la prévention, la sécurité incendie, l'évacuation et l'assistance aux personnes.",
    icon: Gauge,
    link: "/services/ssiap"
  },
  {
    title: "Accompagnement de personnes",
    description: "Sécurisation et escorte de personnes lors de déplacements sensibles ou événements.",
    icon: Eye,
    link: "/services/accompagnement"
  },
  {
    title: "Rondes et interventions",
    description: "Rondes de surveillance, interventions sur alarme et levée de doute rapide.",
    icon: Server,
    link: "/services/rondes-interventions"
  },
  {
    title: "Contrôle d'accès",
    description: "Gestion des accès, filtrage, accueil et vérification des identités sur site.",
    icon: Lock,
    link: "/services/controle-acces"
  },
  {
    title: "Audit & Conseil sécurité",
    description: "Évaluation des risques, recommandations personnalisées et plans de sécurité adaptés.",
    icon: Shield,
    link: "/services/audit-conseil"
  },
  {
    title: "Sécurité événementielle",
    description: "Surveillance, filtrage et gestion des accès lors de tous vos événements publics ou privés.",
    icon: Users,
    link: "/services/evenementiel"
  },
  {
    title: "Intervention sur alarme",
    description: "Déplacement rapide d'un agent suite à un déclenchement d'alarme pour levée de doute et sécurisation.",
    icon: Shield,
    link: "/services/intervention-alarme"
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Solutions complètes adaptées à vos besoins en matière de sécurité, offrant protection et tranquillité d&apos;esprit.
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
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="bg-red-100 dark:bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-red-600 dark:text-red-500" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={service.link}>En savoir plus</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
            <Link href="/services">Voir tous les services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Services