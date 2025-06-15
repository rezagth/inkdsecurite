"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PhoneCall, MessageCircle, Clock, Shield } from 'lucide-react'

const CallToAction = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16 text-red-500" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Prêt à Sécuriser Votre <span className="text-red-500">Avenir</span> ?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Contactez INKD SÉCURITÉ dès aujourd'hui pour une consultation gratuite et personnalisée. 
            Nos experts analysent vos besoins et vous proposent la solution de sécurité la plus adaptée.
          </p>
          
          {/* Contact options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-800/50 rounded-xl p-6 text-center"
            >
              <PhoneCall className="w-8 h-8 text-red-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Appel d'Urgence</h3>
              <p className="text-slate-300 text-sm mb-3">Intervention immédiate 24h/24</p>
              <a href="tel:+33760451972" className="text-red-400 font-bold text-lg hover:text-red-300 transition-colors">
                07 60 45 19 72
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-slate-800/50 rounded-xl p-6 text-center"
            >
              <MessageCircle className="w-8 h-8 text-red-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Devis Gratuit</h3>
              <p className="text-slate-300 text-sm mb-3">Étude personnalisée de vos besoins</p>
              <span className="text-red-400 font-bold">Réponse sous 2h</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-slate-800/50 rounded-xl p-6 text-center"
            >
              <Clock className="w-8 h-8 text-red-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Disponibilité</h3>
              <p className="text-slate-300 text-sm mb-3">Service client et interventions</p>
              <span className="text-red-400 font-bold">24h/24 - 7j/7</span>
            </motion.div>
          </div>
          
          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
          >
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4">
              <Link href="/contact">
                Demander un Devis Gratuit
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <Link href="tel:+33760451972">
                <PhoneCall className="mr-2 h-5 w-5" />
                Appeler Maintenant
              </Link>
            </Button>
          </motion.div>
          
          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-slate-400 text-center"
          >
            <p className="mb-2">
              <strong className="text-white">Intervention d'urgence :</strong> Nos équipes sont mobilisables en moins de 15 minutes 
              sur Paris et la petite couronne.
            </p>
            <p>
              <strong className="text-white">Devis gratuit :</strong> Étude personnalisée sans engagement avec recommandations d'experts.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction