import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Faça Caixa Agora · Tetel — Aprenda a fazer caixa rápido",
  description:
    "Aprenda o método simples e comprovado para fazer caixa com o que você já sabe. Ação, clareza e resultado — por apenas R$ 9,90.",
  icons: {
    icon: "/favicon-capa.png",
    apple: "/favicon-capa.png",
  },
  openGraph: {
    title: "Faça Caixa Agora · Tetel",
    description: "Comece agora e faça caixa com o que você já sabe. Método simples, humano e direto ao ponto.",
    url: "https://facacaixaagora.tetel.online",
    siteName: "Faça Caixa Agora",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/favicon-capa.png",
        width: 1200,
        height: 630,
        alt: "Faça Caixa Agora",
      },
    ],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/png" href="/favicon-capa.png" />
        <link rel="apple-touch-icon" href="/favicon-capa.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
