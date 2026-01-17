import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckIcon, ArrowRightIcon } from "@/components/icons"

const features = [
  "Progettazione personalizzata per ogni ambiente",
  "Materiali di alta qualità: legno e metallo",
  "Lavorazione artigianale curata nei dettagli",
  "Installazione professionale inclusa",
  "Garanzia sulla qualità dei materiali",
  "Assistenza post-vendita dedicata",
]

export function SpiralStairs() {
  return (
    <section id="scale-chiocciola" className="py-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <div className="inline-block px-3 py-1 bg-primary-foreground/10 text-primary-foreground text-sm rounded-full mb-6">
              Scale a Chiocciola
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 leading-tight text-balance">
              L&apos;Arte delle <span className="italic">Scale a Chiocciola</span>
            </h2>

            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              La presenza di numerosi artigiani dotati di notevole esperienza nella lavorazione dei metalli e del legno
              ci permette di offrire un servizio di qualità e di realizzare prodotti curati nei minimi particolari, in
              grado di arricchire e valorizzare qualsiasi ambiente.
            </p>

            {/* Features */}
            <ul className="grid gap-3 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckIcon className="w-3 h-3" />
                  </div>
                  <span className="text-primary-foreground/90">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <Link href="#contatti">
                Prenota un Appuntamento
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src="/spiral-staircase-from-above-looking-down-wooden-st.jpg"
                    alt="Scala a chiocciola vista dall'alto"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="/spiral-staircase-detail-wrought-iron-railing-craft.jpg"
                    alt="Dettaglio ringhiera"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="/wooden-spiral-staircase-central-pole-detail-italia.jpg"
                    alt="Dettaglio palo centrale"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src="/elegant-spiral-staircase-in-modern-italian-villa-n.jpg"
                    alt="Scala a chiocciola in villa"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
