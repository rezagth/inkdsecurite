import Link from 'next/link'
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Clock, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-200">
      {/* Emergency banner */}
      <div className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-2 md:mb-0">
              <AlertTriangle className="w-6 h-6" />
              <span className="font-semibold text-lg">Urgence Sécurité 24h/24</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:+33760451972" className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
                <Phone className="w-5 h-5" />
                <span className="font-bold text-lg">07 60 45 19 72</span>
              </a>
              <span className="text-red-100">Intervention rapide garantie</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-red-600 p-2 rounded-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">INKD SÉCURITÉ</span>
                <div className="text-xs text-slate-400">Protection & Surveillance</div>
              </div>
            </div>
            <p className="mb-4 text-slate-300 leading-relaxed">
              Votre partenaire de confiance en sécurité privée depuis plus de 15 ans. 
              Nous protégeons ce qui compte le plus pour vous en Île-de-France.
            </p>
            <div className="flex space-x-3">
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

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Nos Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/gardiennage" className="text-slate-300 hover:text-red-400 transition-colors">Gardiennage & Surveillance</Link></li>
              <li><Link href="/services/maitre-chien" className="text-slate-300 hover:text-red-400 transition-colors">Sécurité Cynophile</Link></li>
              <li><Link href="/services/ssiap" className="text-slate-300 hover:text-red-400 transition-colors">Protection Incendie SSIAP</Link></li>
              <li><Link href="/services/accompagnement" className="text-slate-300 hover:text-red-400 transition-colors">Accompagnement VIP</Link></li>
              <li><Link href="/services/intervention-alarme" className="text-slate-300 hover:text-red-400 transition-colors">Intervention sur Alarme</Link></li>
              <li><Link href="/services/telesurveillance" className="text-slate-300 hover:text-red-400 transition-colors">Télésurveillance</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Liens Rapides</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-slate-300 hover:text-red-400 transition-colors">Accueil</Link></li>
              <li><Link href="/about" className="text-slate-300 hover:text-red-400 transition-colors">À propos</Link></li>
              <li><Link href="/blog" className="text-slate-300 hover:text-red-400 transition-colors">Conseils Sécurité</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-red-400 transition-colors">Contact</Link></li>
              <li><Link href="/devis" className="text-slate-300 hover:text-red-400 transition-colors">Devis Gratuit</Link></li>
              <li><Link href="/urgence" className="text-slate-300 hover:text-red-400 transition-colors">Urgence 24h/24</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div className="text-slate-300">
                  <div className="font-medium">Zone d'intervention</div>
                  <div>Paris et Île-de-France</div>
                  <div className="text-sm text-slate-400">Intervention sous 15min</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500" />
                <div>
                  <div className="text-slate-300 font-medium">07 60 45 19 72</div>
                  <div className="text-sm text-slate-400">Urgence 24h/24</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500" />
                <div>
                  <div className="text-slate-300">inkdsecurite@hotmail.fr</div>
                  <div className="text-sm text-slate-400">Réponse sous 2h</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-red-500" />
                <div>
                  <div className="text-slate-300 font-medium">Service 24h/24 - 7j/7</div>
                  <div className="text-sm text-slate-400">Interventions d'urgence</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Legal */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-3">Certifications & Agréments</h4>
              <div className="text-sm text-slate-400 space-y-1">
                <div>• Agrément Préfectoral AUT-075-2024-INKD</div>
                <div>• Certification APSAD R31</div>
                <div>• Norme ISO 9001:2015</div>
                <div>• Formation CNAPS certifiée</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">Zone d'Intervention</h4>
              <div className="text-sm text-slate-400 space-y-1">
                <div>• Paris (75) - Intervention < 10min</div>
                <div>• Petite Couronne (92, 93, 94) - < 15min</div>
                <div>• Grande Couronne (77, 78, 91, 95) - < 30min</div>
                <div>• Autres départements sur demande</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p className="mb-2">© {currentYear} INKD SÉCURITÉ. Tous droits réservés.</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/mentions-legales" className="hover:text-red-400 transition-colors">Mentions Légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-red-400 transition-colors">Politique de Confidentialité</Link>
            <Link href="/conditions-generales" className="hover:text-red-400 transition-colors">Conditions Générales</Link>
            <Link href="/cookies" className="hover:text-red-400 transition-colors">Gestion des Cookies</Link>
          </div>
          <p className="mt-4 text-xs">
            INKD SÉCURITÉ - Société de sécurité privée agréée par la préfecture de police de Paris. 
            Numéro d'agrément : AUT-075-2024-INKD. Assurance responsabilité civile professionnelle.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer