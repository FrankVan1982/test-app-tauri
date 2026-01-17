import Link from "next/link"
import { StairsIcon } from "@/components/icons"

const footerLinks = {
  azienda: [
    { label: "Chi Siamo", href: "#chi-siamo" },
    { label: "Le Nostre Lavorazioni", href: "#lavorazioni" },
    { label: "Galleria", href: "#galleria" },
  ],
  servizi: [
    { label: "Scale a Giorno", href: "#lavorazioni" },
    { label: "Scale a Chiocciola", href: "#scale-chiocciola" },
    { label: "Ringhiere e Balaustre", href: "#lavorazioni" },
    { label: "Rivestimenti", href: "#lavorazioni" },
  ],
  contatti: [
    { label: "+39 080 362 9757", href: "tel:+390803629757" },
    { label: "+39 349 062 7401", href: "tel:+393490627401" },
    { label: "nuovamisurascale@libero.it", href: "mailto:nuovamisurascale@libero.it" },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center">
                <StairsIcon className="w-5 h-5 text-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm tracking-tight">Nuova Misura</span>
                <span className="text-xs text-background/60 -mt-0.5">Scale</span>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Cooperativa artigianale specializzata nella fabbricazione su misura di scale dal 1984.
            </p>
            <div className="text-sm text-background/50">
              <p>SP85 per Bisceglie, Km 11.900</p>
              <p>70037 Ruvo di Puglia (BA)</p>
            </div>
          </div>

          {/* Azienda */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6">Azienda</h4>
            <ul className="space-y-3">
              {footerLinks.azienda.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-background/70 hover:text-background text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servizi */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6">Servizi</h4>
            <ul className="space-y-3">
              {footerLinks.servizi.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-background/70 hover:text-background text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6">Contatti</h4>
            <ul className="space-y-3">
              {footerLinks.contatti.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-background/70 hover:text-background text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">© {currentYear} Nuova Misura Scale. Tutti i diritti riservati.</p>
          <p className="text-background/50 text-sm">P.IVA: 00000000000</p>
        </div>
      </div>
    </footer>
  )
}
