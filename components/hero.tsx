import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, ChevronDownIcon } from "@/components/icons"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/elegant-wooden-spiral-staircase-in-luxury-italian-.jpg"
          alt="Scale artigianali su misura"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
      </div>

      {/* Content - Aligned to left instead of center */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/10 backdrop-blur-sm rounded-full text-background text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Artigiani dal 1984
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-background mb-6 leading-tight text-balance">
            Scale, Balaustre e Rivestimenti <span className="italic text-background/80">Artigianali</span> su Misura
          </h1>

          <p className="text-lg md:text-xl text-background/80 mb-10 max-w-xl leading-relaxed text-pretty">
            Cooperativa artigianale specializzata nella fabbricazione su misura di scale a giorno e scale a chiocciola
            in legno e metallo. Rendi funzionale ed esteticamente accattivante il tuo spazio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="group">
              <Link href="#contatti">
                Richiedi un Preventivo
                <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="bg-background/10 border-background/30 text-background hover:bg-background/20 hover:text-background"
            >
              <Link href="#lavorazioni">Scopri le Lavorazioni</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Positioned to bottom-left to match layout */}
      <div className="absolute bottom-8 left-4 md:left-8 z-10">
        <Link
          href="#chi-siamo"
          className="flex items-center gap-3 text-background/60 hover:text-background transition-colors"
        >
          <ChevronDownIcon className="w-5 h-5 animate-bounce" />
          <span className="text-xs uppercase tracking-widest">Scopri di più</span>
        </Link>
      </div>
    </section>
  )
}
