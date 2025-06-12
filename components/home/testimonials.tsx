"use client"

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "L'Hôpital La Porte Verte a considérablement renforcé sa sécurité grâce à votre équipe professionnelle et réactive. Nous sommes pleinement satisfaits du service.",
    author: "Jean Dupuis",
    position: "Directeur, Hôpital La Porte Verte"
  },
  {
    quote: "La Clinique Magnolias bénéficie désormais d&apos;une surveillance efficace et d&apos;une grande tranquillité d&apos;esprit. Merci pour votre sérieux et votre disponibilité.",
    author: "Sophie Martin",
    position: "Responsable sécurité, Clinique Magnolias"
  },
  {
    quote: "Nous faisons appel à vos agents pour la sécurité de plusieurs mairies et établissements publics. Le professionnalisme et la discrétion de vos équipes sont très appréciés.",
    author: "Pierre Lefèvre",
    position: "Directeur des services techniques, Ville de Saint-Ouen"
  },
  {
    quote: "Votre société assure la sécurité de nombreux hôpitaux et sites sensibles en sous-traitance. La qualité du service est toujours au rendez-vous.",
    author: "Claire Dubois",
    position: "Responsable des marchés publics, Groupement Hospitalier Parisien"
  },
  {
    quote: "Pour l'Accor Arena, vos agents ont su gérer la sécurité lors de grands événements avec efficacité et sang-froid.",
    author: "Julien Morel",
    position: "Responsable événementiel, Accor Arena"
  },
  {
    quote: "En tant que videur en boîte de nuit dans le 95, je peux compter sur votre soutien et votre réactivité en cas de besoin. Un vrai partenaire de confiance !",
    author: "Mickaël Benyahia",
    position: "Chef de sécurité, Club 95"
  },
  {
    quote: "Le Stade de France fait confiance à vos équipes pour la gestion de la sécurité lors des grands événements sportifs et concerts. Un service irréprochable !",
    author: "Laurent Petit",
    position: "Responsable sécurité, Stade de France"
  },
  {
    quote: "Votre présence en boîte de nuit garantit la sécurité de nos clients et du personnel. Merci pour votre professionnalisme et votre efficacité !",
    author: "Fatima Zeroual",
    position: "Gérante, Club Le Select 95"
  }
]

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }
  
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que nos clients disent</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Écoutez les témoignages de nos clients qui nous font confiance pour leur sécurité.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="h-full bg-background shadow-lg border-none">
                    <CardContent className="p-8">
                      <Quote className="w-12 h-12 text-red-500 mb-6" />
                      <p className="text-xl mb-8 italic">&quot;{testimonial.quote}&quot;</p>
                      <div>
                        <p className="font-bold">{testimonial.author}</p>
                        <p className="text-muted-foreground">{testimonial.position}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index 
                    ? 'bg-red-600' 
                    : 'bg-slate-300 dark:bg-slate-700'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials