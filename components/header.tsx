"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { StairsIcon, MenuIcon, XIcon, SunIcon, MoonIcon } from "@/components/icons"

const navItems = [
  { href: "#chi-siamo", label: "Chi Siamo" },
  { href: "#lavorazioni", label: "Lavorazioni" },
  { href: "#scale-chiocciola", label: "Scale a Chiocciola" },
  { href: "#galleria", label: "Galleria" },
  { href: "#contatti", label: "Contatti" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-foreground/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all group-hover:scale-105 ${
                isScrolled ? "bg-primary" : "bg-background/20"
              }`}
            >
              <StairsIcon className={`w-5 h-5 ${isScrolled ? "text-primary-foreground" : "text-background"}`} />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-semibold text-sm tracking-tight ${isScrolled ? "text-foreground" : "text-background"}`}
              >
                Nuova Misura
              </span>
              <span className={`text-xs -mt-0.5 ${isScrolled ? "text-muted-foreground" : "text-background/70"}`}>
                Scale
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm rounded-md transition-colors ${
                  isScrolled
                    ? "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    : "text-background/80 hover:text-background hover:bg-background/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`p-2 rounded-md transition-colors ${
                  isScrolled ? "text-foreground hover:bg-muted" : "text-background hover:bg-background/10"
                }`}
                aria-label="Cambia tema"
              >
                {theme === "dark" ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
              </button>
            )}
            <Button
              asChild
              variant={isScrolled ? "default" : "secondary"}
              className={!isScrolled ? "bg-background text-foreground hover:bg-background/90" : ""}
            >
              <Link href="#contatti">Richiedi Preventivo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`p-2 rounded-md transition-colors ${
                  isScrolled ? "text-foreground hover:bg-muted" : "text-background hover:bg-background/10"
                }`}
                aria-label="Cambia tema"
              >
                {theme === "dark" ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
              </button>
            )}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors ${
                isScrolled ? "text-foreground hover:bg-muted" : "text-background hover:bg-background/10"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu - Always solid background for readability */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors text-left"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-border">
                <Button asChild className="w-full">
                  <Link href="#contatti" onClick={() => setIsMobileMenuOpen(false)}>
                    Richiedi Preventivo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
