"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CalendarDays, ChevronRight } from 'lucide-react'

const blogPosts = [
  {
    title: "Les Obligations Légales en Sécurité Incendie pour les Entreprises",
    excerpt: "Comprenez les réglementations essentielles et les obligations à respecter pour assurer la sécurité incendie dans votre établissement.",
    date: "15 avril 2025",
    image: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "/blog/obligations-securite-incendie"
  },
  {
    title: "Comment Bien Choisir son Matériel de Sécurité Incendie",
    excerpt: "Extincteurs, alarmes, plans d'évacuation… Découvrez les critères pour sélectionner un matériel fiable et conforme à la législation.",
    date: "3 avril 2025",
    image: "https://images.pexels.com/photos/278259/pexels-photo-278259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "/blog/choisir-materiel-securite-incendie"
  },
  {
    title: "Formation SSIAP : Pourquoi et Comment Former vos Équipes ?",
    excerpt: "La formation SSIAP est un gage de sécurité pour vos locaux. Découvrez son importance et les étapes pour former efficacement votre personnel.",
    date: "22 mars 2025",
    image: "https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "/blog/formation-ssiap"
  }
]

const BlogPreview = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  return (
    <section className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Conseils Sécurité</h2>
            <p className="text-lg text-muted-foreground">
              Derniers articles, conseils et actualités de l&apos;industrie
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link href="/blog">
              Voir tous les articles
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    width="100%"
                    height="auto"
                    style={{ backgroundColor: '#f3f4f6', display: 'block' }}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    {post.date}
                  </div>
                  <CardTitle className="line-clamp-2">
                    <Link href={post.slug} className="hover:text-red-600 transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button asChild variant="ghost" className="p-0 h-auto font-medium hover:text-red-600">
                    <Link href={post.slug}>
                      En savoir plus
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogPreview