import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const stackSans = localFont({
  src: [
    {
      path: "./fonts/StackSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/StackSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/StackSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/StackSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-stack-sans",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
})

const hedvigLettersSerif = localFont({
  src: [
    {
      path: "./fonts/HedvigLettersSerif-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
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
