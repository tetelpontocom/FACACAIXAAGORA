"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowRight, CheckCircle, Home } from "lucide-react"

/**
 * Faça Caixa Agora v2.1.3-Lite
 * ✅ Compatível com V0 Free (sem sessionStorage, document ou window direto fora do efeito)
 * ✅ Detecta origem via URL (?origem=tetelpontocom)
 * ✅ Exibe botão de retorno sem causar erros de render
 * ✅ SEO e pixel preservados
 */

export default function FacacaixaAgoraV213Lite() {
  const [isFromTetel, setIsFromTetel] = useState(false)

  // Detecta a origem apenas no cliente, de forma segura
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const url = window.location.href.toLowerCase()
        if (url.includes("origem=tetelpontocom")) {
          setIsFromTetel(true)
        }
      }
    } catch (e) {
      console.warn("Falha ao detectar origem:", e)
    }
  }, [])

  // Meta Pixel básico (não bloqueia o render)
  useEffect(() => {
    if (typeof window === "undefined") return
    if (!(window as any).fbq) {
      !((f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) => {
        if (f.fbq) return
        n = f.fbq = () => {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        }
        if (!f._fbq) f._fbq = n
        n.push = n
        n.loaded = !0
        n.version = "2.0"
        n.queue = []
        t = b.createElement(e)
        t.async = !0
        t.src = v
        s = b.getElementsByTagName(e)[0]
        s.parentNode.insertBefore(t, s)
      })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js")
      ;(window as any).fbq("init", "1305167264321996")
    }
    ;(window as any).fbq("track", "PageView")
  }, [])

  const lead = (label: string) => (window as any).fbq?.("track", "Lead", { label })

  const texto = isFromTetel
    ? {
        titulo: "Comece seu primeiro passo com propósito",
        subtitulo:
          "O Faça Caixa Agora é parte do ecossistema Tetel — criado para ajudar você a transformar ideias em resultados reais.",
        cta: "Explorar agora",
      }
    : {
        titulo: "Faça Caixa Agora",
        subtitulo:
          "Comece hoje mesmo a gerar renda com ideias simples, digitais e acessíveis. Tudo pronto para colocar em prática.",
        cta: "Quero começar agora",
      }

  return (
    <main className="min-h-screen bg-[#FFF6EF] text-[#1F1A17] flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Texto principal */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-3">{texto.titulo}</h1>
          <p className="text-[#4B423C] text-base mb-6">{texto.subtitulo}</p>

          <ul className="space-y-3 text-sm text-[#4B423C] mb-6">
            {[
              "Estratégias simples para começar a vender hoje mesmo.",
              "Sem experiência? Tudo pronto para aplicar passo a passo.",
              "Ideal para quem quer gerar renda real com propósito.",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-[#FF6B00] mt-0.5" />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://kiwify.com.br/faca-caixa-agora"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => lead("CTA - Faça Caixa Agora")}
            className="inline-flex items-center gap-2 rounded-2xl bg-[#1F1A17] text-white px-6 py-3 text-base shadow-sm hover:opacity-90 transition"
          >
            {texto.cta} <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        {/* Imagem ilustrativa */}
        <div className="flex justify-center">
          <Image
            src="/images/hero-facacaixaagora.png"
            alt="Faça Caixa Agora"
            width={450}
            height={500}
            className="rounded-2xl shadow-md"
            priority
          />
        </div>
      </div>

      {/* Botão de retorno */}
      {isFromTetel && (
        <div className="mt-16 text-center">
          <a
            href="https://tetelpontocom.tetel.online"
            className="inline-flex items-center gap-2 rounded-2xl bg-[#EEDFD2] text-[#1F1A17] px-6 py-3 text-base font-medium hover:bg-[#EBD2BF] transition"
          >
            <Home className="h-5 w-5" /> Voltar à TetelPontocom
          </a>
        </div>
      )}
    </main>
  )
}
