import type React from "react"
import type { Metadata } from "next"
import { Hedvig_Letters_Serif, Stack_Sans_Text} from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const stackSans = Stack_Sans_Text({
  variable: "--font-stack-sans",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
})

const hedvigLettersSerif = Hedvig_Letters_Serif({
  variable: "--font-hedvig",
  display: "swap",
  fallback: ["Georgia", "serif"],
})

export const metadata: Metadata = {
  title: "Nuova Misura Scale | Scale Artigianali su Misura",
  description:
    "Cooperativa artigianale specializzata nella fabbricazione su misura di scale a giorno e a chiocciola in legno e metallo. Scale, balaustre e rivestimenti dal 1984.",
  keywords: [
    "scale artigianali",
    "scale su misura",
    "scale a chiocciola",
    "balaustre",
    "ringhiere",
    "Corato",
    "Puglia",
  ],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className={`${stackSans.variable} ${hedvigLettersSerif.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
