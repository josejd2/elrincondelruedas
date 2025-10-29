import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jose Maria Lopez Villena | Desarrollador Full Stack - elrincondelruedas",
  description:
    "Portfolio personal de Jose Maria Lopez Villena. Desarrollador Full Stack especializado en React, Next.js y TypeScript. Creando experiencias web accesibles y centradas en el usuario.",
  keywords: [
    "Jose Maria Lopez Villena",
    "elrincondelruedas",
    "desarrollador full stack",
    "React",
    "Next.js",
    "TypeScript",
    "desarrollo web",
    "portfolio",
    "accesibilidad web",
  ],
  authors: [{ name: "Jose Maria Lopez Villena", url: "https://elrincondelruedas.com" }],
  creator: "Jose Maria Lopez Villena",
  publisher: "Jose Maria Lopez Villena",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://elrincondelruedas.com",
    title: "Jose Maria Lopez Villena | Desarrollador Full Stack",
    description:
      "Desarrollador Full Stack especializado en React, Next.js y TypeScript. Creando experiencias web accesibles y centradas en el usuario.",
    siteName: "elrincondelruedas",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jose Maria Lopez Villena - Desarrollador Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jose Maria Lopez Villena | Desarrollador Full Stack",
    description:
      "Desarrollador Full Stack especializado en React, Next.js y TypeScript. Creando experiencias web accesibles.",
    images: ["/og-image.jpg"],
    creator: "@josemaria",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
