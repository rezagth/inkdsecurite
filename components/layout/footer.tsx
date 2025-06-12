import Link from 'next/link'
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-8 h-8 text-red-500" />
              <span className="text-xl font-bold text-white">INKD SECURITE</span>
            </div>
            <p className="mb-4 text-slate-300">
              Fournir des solutions de sécurité complètes pour protéger ce qui compte le plus depuis 2008.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Liens rapides</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-slate-300 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link href="/services" className="text-slate-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-slate-300 hover:text-white transition-colors">A propos</Link></li>
              <li><Link href="/blog" className="text-slate-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/careers" className="text-slate-300 hover:text-white transition-colors">Carrières</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Nos Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/physical-security" className="text-slate-300 hover:text-white transition-colors">Sécurité Physique</Link></li>
              <li><Link href="/services/cyber-security" className="text-slate-300 hover:text-white transition-colors">Sécurité Informatique</Link></li>
              <li><Link href="/services/surveillance" className="text-slate-300 hover:text-white transition-colors">Surveillance</Link></li>
              <li><Link href="/services/risk-assessment" className="text-slate-300 hover:text-white transition-colors">Évaluation des Risques</Link></li>
              <li><Link href="/services/executive-protection" className="text-slate-300 hover:text-white transition-colors">Protection Exécutive</Link></li>
              <li><Link href="/services/security-consulting" className="text-slate-300 hover:text-white transition-colors">Consulting en Sécurité</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contactez-nous</h3>
            <div className="space-y-4">
              {/* <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 mt-0.5" />
                <span className="text-slate-300">123 Security Avenue, Suite 500<br />New York, NY 10001</span>
              </div> */}
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500" />
                <span className="text-slate-300">07 60 45 19 72</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500" />
                <span className="text-slate-300">inkdsecurite@hotmail.fr</span>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Emergency:</h4>
                <span className="text-red-500 font-bold">07 60 45 19 72</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>© {currentYear} Inkd Securite. Tous droits réservés.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">Politique de confidentialité</Link>
            <Link href="/terms-of-service" className="text-slate-400 hover:text-white transition-colors">Conditions d&apos;utilisation</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer