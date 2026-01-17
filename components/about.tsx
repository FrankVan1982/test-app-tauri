import { CalendarIcon, AwardIcon, UsersIcon, TargetIcon } from "@/components/icons"

const stats = [
  {
    icon: CalendarIcon,
    value: "1984",
    label: "Anno di Fondazione",
  },
  {
    icon: AwardIcon,
    value: "40+",
    label: "Anni di Esperienza",
  },
  {
    icon: UsersIcon,
    value: "500+",
    label: "Progetti Realizzati",
  },
  {
    icon: TargetIcon,
    value: "100%",
    label: "Su Misura",
  },
]

export function About() {
  return (
    <section id="chi-siamo" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img src="/italian-artisan-craftsman-working-on-wooden-stairc.jpg" alt="Artigiano al lavoro" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-6">Chi Siamo</div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight text-balance">
              Una Tradizione di <span className="text-primary">Eccellenza Artigianale</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                La cooperativa <strong className="text-foreground">Nuova Misura Scale</strong> è nata nel{" "}
                <strong className="text-foreground">1984</strong>, con l&apos;intento di fondere l&apos;esperienza di
                artigiani già operanti da molti anni nel settore della lavorazione del legno e del ferro.
              </p>
              <p>
                Con sede operativa a <strong className="text-foreground">Ruvo di Puglia (BA)</strong>, la nostra
                cooperativa è specializzata nella fabbricazione su misura di scale a giorno e di scale a chiocciola in
                legno e in metallo.
              </p>
              <p>
                Sfruttiamo <strong className="text-foreground">tecniche e strumentazioni tradizionali</strong>,
                garantendo lavorazioni di pregio e prodotti curati nei minimi particolari, in grado di arricchire e
                valorizzare qualsiasi ambiente.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-2xl font-semibold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
