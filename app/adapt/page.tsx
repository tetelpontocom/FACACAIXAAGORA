"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowRight, CheckCircle, Home } from "lucide-react"

/**
 * Faça Caixa Agora v2.1.4-Safe+
 * ✅ Compatível com V0 Free (sem erros de render)
 * 🔄 Detecta origem via URL (?origem=tetelpontocom)
 * 💾 Usa sessionStorage/referrer automaticamente se o ambiente permitir
 * 🏠 Exibe botão "Voltar à TetelPontocom"
 * 📈 SEO e Pixel preservados
 */

export default function FacacaixaAgoraV214SafePlus() {
  const [mounted, setMounted] = useState(false)
  const [isFromTetel, setIsFromTetel] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    try {
      const url = window.location.href.toLowerCase()
      const params = new URLSearchParams(window.location.search)
      const origemQuery = params.get("origem")?.toLowerCase()
      const ref = document.referrer?.toLowerCase() ?? ""

      // Preferência: parâmetro → sessionStorage → referrer
      if (origemQuery === "tetelpontocom") {
        if (typeof sessionStorage !== "undefined") {
          sessionStorage.setItem("tetel_origem", "tetelpontocom")
        }
        setIsFromTetel(true)
        return
      }

      if (typeof sessionStorage !== "undefined") {
        const saved = sessionStorage.getItem("tetel_origem")
        if (saved === "tetelpontocom") {
          setIsFromTetel(true)
          return
        }
      }

      if (ref.includes("tetelpontocom.tetel.online")) {
        if (typeof sessionStorage !== "undefined") {
          sessionStorage.setItem("tetel_origem", "tetelpontocom")
        }
        setIsFromTetel(true)
        return
      }

      // Fallback total
      if (url.includes("origem=tetelpontocom")) {
        setIsFromTetel(true)
      }
    } catch (e) {
      console.warn("Origem não detectada:", e)
    }
  }, [mounted])

  useEffect(() => {
    if (!mounted) return

    try {
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
    } catch (e) {
      console.warn("Pixel não carregado:", e)
    }
  }, [mounted])

  const lead = (label: string) => {
    try {
      ;(window as any).fbq?.("track", "Lead", { label })
    } catch {}
  }

  if (!mounted) return null

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
