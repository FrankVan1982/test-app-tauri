const galleryImages = [
  {
    src: "/luxury-wooden-staircase-italian-villa-interior-des.jpg",
    alt: "Scala in legno pregiato",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/modern-metal-and-glass-staircase-italian-design.jpg",
    alt: "Scala moderna in metallo",
    span: "",
  },
  {
    src: "/traditional-curved-wooden-handrail-detail-craftsma.jpg",
    alt: "Corrimano curvo artigianale",
    span: "",
  },
  {
    src: "/outdoor-metal-staircase-garden-italian-architectur.jpg",
    alt: "Scala per esterni",
    span: "col-span-2",
  },
  {
    src: "/spiral-staircase-wrought-iron-elegant-italian-home.jpg",
    alt: "Scala a chiocciola in ferro battuto",
    span: "row-span-2",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "Rivestimento scale in legno",
    span: "",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "Balaustra in metallo",
    span: "",
  },
]

export function Gallery() {
  return (
    <section id="galleria" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-6">
            I Nostri Lavori
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6 text-balance">
            Galleria delle <span className="text-primary">Realizzazioni</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Ogni progetto è unico, pensato e realizzato su misura per soddisfare le esigenze specifiche di ogni cliente.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className={`relative group rounded-xl overflow-hidden ${image.span}`}>
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-primary-foreground text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
