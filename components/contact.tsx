"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { PhoneIcon, MailIcon, MapPinIcon, ArrowRightIcon } from "@/components/icons"

const contactInfo = [
  {
    icon: PhoneIcon,
    label: "Telefono",
    value: "+39 080 362 9757",
    href: "tel:+390803629757",
  },
  {
    icon: PhoneIcon,
    label: "Cellulare",
    value: "+39 349 062 7401",
    href: "tel:+393490627401",
  },
  {
    icon: MailIcon,
    label: "Email",
    value: "nuovamisurascale@libero.it",
    href: "mailto:nuovamisurascale@libero.it",
  },
  {
    icon: MapPinIcon,
    label: "Sede Operativa",
    value: "SP85 per Bisceglie, Km 11.900 - 70037 Ruvo di Puglia (BA)",
    href: "https://maps.google.com/?q=Ruvo+di+Puglia+BA+Italy",
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contatti" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-6">Contattaci</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6 text-balance">
            Che Stai Aspettando? <span className="text-primary">Prenota un Appuntamento!</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Ci prenderemo carico della tua richiesta e ti accompagneremo in ogni fase del progetto.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Informazioni di Contatto</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</div>
                      <div className="text-foreground group-hover:text-primary transition-colors">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="aspect-video rounded-2xl overflow-hidden border border-border">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="Mappa sede Nuova Misura Scale"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Richiedi un Preventivo</h3>
              <div className="grid gap-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome e Cognome *</Label>
                    <Input
                      id="name"
                      placeholder="Mario Rossi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefono *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+39 xxx xxx xxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="mario@esempio.it"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Messaggio *</Label>
                  <Textarea
                    id="message"
                    placeholder="Descrivi il tuo progetto..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Invia Richiesta
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
