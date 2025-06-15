"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Shield, Moon, Sun, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-red-600 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>🚨 Urgence 24h/24</span>
            <a href="tel:+33760451972" className="flex items-center space-x-1 hover:underline">
              <Phone className="w-4 h-4" />
              <span>07 60 45 19 72</span>
            </a>
          </div>
          <div className="hidden md:block">
            <span>Intervention rapide en Île-de-France</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={cn(
        'fixed top-10 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm shadow-lg py-3' 
          : 'bg-transparent py-5'
      )}>
        <div className="container px-4 mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <div className="bg-red-600 p-2 rounded-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold">INKD SÉCURITÉ</span>
              <div className="text-xs text-muted-foreground">Protection & Surveillance</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground/80 hover:text-red-600 transition-colors font-medium">
              Accueil
            </Link>
            <Link href="/services" className="text-foreground/80 hover:text-red-600 transition-colors font-medium">
              Services
            </Link>
            <Link href="/about" className="text-foreground/80 hover:text-red-600 transition-colors font-medium">
              À propos
            </Link>
            <Link href="/blog" className="text-foreground/80 hover:text-red-600 transition-colors font-medium">
              Conseils
            </Link>
            <Link href="/contact" className="text-foreground/80 hover:text-red-600 transition-colors font-medium">
              Contact
            </Link>
            <Button onClick={toggleTheme} variant="ghost" size="icon">
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="/contact">Devis Gratuit</Link>
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden space-x-4">
            <Button onClick={toggleTheme} variant="ghost" size="icon">
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-sm z-40 transition-transform duration-300 transform md:hidden",
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg">
            <Link href="/" className="text-foreground hover:text-red-600 transition-colors font-medium" onClick={closeMenu}>
              Accueil
            </Link>
            <Link href="/services" className="text-foreground hover:text-red-600 transition-colors font-medium" onClick={closeMenu}>
              Services
            </Link>
            <Link href="/about" className="text-foreground hover:text-red-600 transition-colors font-medium" onClick={closeMenu}>
              À propos
            </Link>
            <Link href="/blog" className="text-foreground hover:text-red-600 transition-colors font-medium" onClick={closeMenu}>
              Conseils
            </Link>
            <Link href="/contact" className="text-foreground hover:text-red-600 transition-colors font-medium" onClick={closeMenu}>
              Contact
            </Link>
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white w-44">
              <Link href="/contact" onClick={closeMenu}>Devis Gratuit</Link>
            </Button>
            
            {/* Emergency contact in mobile menu */}
            <div className="mt-8 text-center">
              <div className="text-sm text-muted-foreground mb-2">Urgence 24h/24</div>
              <a href="tel:+33760451972" className="text-red-600 font-bold text-xl">
                07 60 45 19 72
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header