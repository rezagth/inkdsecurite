"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Shield, Moon, Sun } from 'lucide-react'
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
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-background/95 backdrop-blur-sm shadow-md py-3' 
        : 'bg-transparent py-5'
    )}>
      <div className="container px-4 mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <Shield className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold">INKD SECURITE</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-foreground/80 hover:text-primary transition-colors">
            Accueil
          </Link>
          <Link href="/services" className="text-foreground/80 hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/blog" className="text-foreground/80 hover:text-primary transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-foreground/80 hover:text-primary transition-colors">
            Contact
          </Link>
          <Button onClick={toggleTheme} variant="ghost" size="icon">
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
            <Link href="/contact">Get Protected</Link>
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
          <Link href="/" className="text-foreground hover:text-primary transition-colors" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/services" className="text-foreground hover:text-primary transition-colors" onClick={closeMenu}>
            Services
          </Link>
          <Link href="/about" className="text-foreground hover:text-primary transition-colors" onClick={closeMenu}>
            About
          </Link>
          <Link href="/blog" className="text-foreground hover:text-primary transition-colors" onClick={closeMenu}>
            Blog
          </Link>
          <Link href="/contact" className="text-foreground hover:text-primary transition-colors" onClick={closeMenu}>
            Contact
          </Link>
          <Button asChild className="bg-red-600 hover:bg-red-700 text-white w-44">
            <Link href="/contact" onClick={closeMenu}>Get Protected</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header