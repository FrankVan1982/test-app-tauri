import Link from "next/link"
import { Button } from "@/components/ui/button"
import { StairsIcon, SpiralIcon, RailingIcon, WoodIcon, ArrowRightIcon } from "@/components/icons"

const services = [
  {
    icon: StairsIcon,
    title: "Scale a Giorno",
    description: "Scale moderne e funzionali, realizzate su misura in legno e metallo per interni eleganti e luminosi.",
    image: "/modern-open-staircase-wood-and-metal-design-italia.jpg",
  },
  {
    icon: SpiralIcon,
    title: "Scale a Chiocciola",
    description:
      "Soluzioni salvaspazio di grande impatto estetico, perfette per ambienti che richiedono eleganza e funzionalità.",
    image: "/elegant-spiral-staircase-wrought-iron-and-wood-ita.jpg",
  },
  {
    icon: RailingIcon,
    title: "Ringhiere e Balaustre",
    description:
      "Elementi di sicurezza e design che completano ogni scala, realizzati con cura artigianale in metallo.",
    image: "/artisan-metal-railing-balustrade-italian-craftsman.jpg",
  },
  {
    icon: WoodIcon,
    title: "Rivestimenti in Legno",
    description: "Trasformiamo scale esistenti in opere d'arte, con rivestimenti in legno pregiato su misura.",
    image: "/wooden-staircase-cladding-renovation-premium-wood-.jpg",
  },
]

export function Services() {
  return (
    <section id="lavorazioni" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-6">
            Le Nostre Lavorazioni
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6 text-balance">
            Siamo <span className="text-primary">Ciò di Cui Hai Bisogno</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Offriamo soluzioni personalizzate per ogni esigenza, dalla progettazione alla costruzione e
            all&apos;installazione, garantendo sempre la massima attenzione ai dettagli.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 lg:p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <Link
                  href="#contatti"
                  className="inline-flex items-center text-primary text-sm font-medium hover:gap-2 transition-all"
                >
                  Scopri di più
                  <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="#contatti">
              Richiedi un Preventivo Gratuito
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
