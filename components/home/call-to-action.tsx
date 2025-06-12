"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PhoneCall } from 'lucide-react'

const CallToAction = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  return (
    <section className="py-24 bg-slate-900 text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à améliorer votre sécurité ?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Contactez-nous aujourd&apos;hui pour une consultation gratuite et découvrez comment SecureForce peut protéger ce qui vous importe le plus.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link href="/contact">
                Obtenez un devis gratuit
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="tel:+33760451972">
                <PhoneCall className="mr-2 h-5 w-5" />
                Appelez-nous : 07 60 45 19 72
              </Link>
            </Button>
          </div>
          <p className="mt-8 text-slate-400">
            Nos experts en sécurité sont disponibles 24h/24 pour vous aider avec toutes vos questions ou préoccupations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction