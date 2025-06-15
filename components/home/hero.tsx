"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ChevronRight, ShieldCheck, Phone, Clock } from 'lucide-react'

const Hero = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/4471398/pexels-photo-4471398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          filter: "brightness(0.3)"
        }}
      />
      
      {/* Emergency contact bar */}
      <div className="absolute top-20 left-0 right-0 z-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-red-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-4 text-sm font-medium"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Urgence 24h/24</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+33760451972" className="hover:underline">
                07 60 45 19 72
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-24 relative z-10 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <ShieldCheck className="w-20 h-20 text-red-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Votre <span className="text-red-500">Sécurité</span><br />
              Notre <span className="text-red-500">Priorité</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              INKD SÉCURITÉ vous accompagne avec des solutions de sécurité sur mesure. 
              Gardiennage, surveillance, protection incendie et bien plus encore.
            </p>
            
            {/* Key benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="text-2xl font-bold text-red-400">24h/24</div>
                <div className="text-sm">Intervention d'urgence</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="text-2xl font-bold text-red-400">15+</div>
                <div className="text-sm">Années d'expérience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="text-2xl font-bold text-red-400">100%</div>
                <div className="text-sm">Agents certifiés</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white font-medium text-lg px-8 py-4">
                <Link href="/contact">
                  Devis Gratuit
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 py-4">
                <Link href="/services">
                  Nos Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Diagonal shape at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path 
            fill="currentColor" 
            className="text-background"
            d="M0,96L80,85.3C160,75,320,53,480,53.3C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero