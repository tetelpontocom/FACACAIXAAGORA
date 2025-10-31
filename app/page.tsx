"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Rocket, Sparkles, ShieldCheck, Star, Cpu } from "lucide-react"

declare global {
  interface Window {
    fbq: any
    _fbq: any
  }
}

export default function FacacaixaAgora() {
  // ====== META PIXEL OTIMIZADO ======
  useEffect(() => {
    // Evita duplicar o pixel
    if (!(window as any).fbq) {
      !((f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) => {
        if (f.fbq) return
        n = f.fbq = () => {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        }
        if (!f._fbq) f._fbq = n
        n.push = n
        n.loaded = true
        n.version = "2.0"
        n.queue = []
        t = b.createElement(e)
        t.async = true
        t.src = v
        s = b.getElementsByTagName(e)[0]
        s.parentNode!.insertBefore(t, s)
      })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js")
      ;(window as any).fbq("init", "1305167264321996") // ✅ seu Pixel ID
      ;(window as any).fbq("track", "PageView")
    } else {
      ;(window as any).fbq("track", "PageView")
    }

    // Evento customizado padrão Meta (substitui aviso antigo)
    const engagementEvent = () => {
      ;(window as any).fbq("trackCustom", "EngagementComplete", {
        status: "user_engaged",
        page: window.location.pathname,
      })
    }

    // Dispara evento customizado após 15s de permanência
    const timer = setTimeout(engagementEvent, 15000)

    return () => clearTimeout(timer)
  }, [])

  // ====== RASTREAMENTO DE EVENTOS ======
  useEffect(() => {
    const track = (name: string, params?: any) => {
      if (typeof window.fbq === "function") {
        window.fbq("track", name, params)
      }
    }

    // Rastreia cliques nos CTAs de checkout
    const ctas = document.querySelectorAll('[data-cta="checkout"]')
    ctas.forEach((el) =>
      el.addEventListener("click", () =>
        track("InitiateCheckout", {
          content_name: "Faça Caixa Agora",
          value: 9.9,
          currency: "BRL",
        }),
      ),
    )

    // Rastreia interesse no Minha IA (upsell)
    const miaLinks = document.querySelectorAll('[data-cta="minhaia"]')
    miaLinks.forEach((el) =>
      el.addEventListener("click", () =>
        track("ViewContent", {
          content_name: "Minha IA",
          content_type: "product",
        }),
      ),
    )

    return () => {
      ctas.forEach((el) => el.removeEventListener("click", () => {}))
      miaLinks.forEach((el) => el.removeEventListener("click", () => {}))
    }
  }, [])

  const container = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  const sectionTitle = "text-2xl sm:text-3xl font-semibold tracking-tight text-[#1a1a1a]"

  const CHECKOUT = "https://pay.kiwify.com.br/ArqCUqE"
  const MINHA_IA = "https://minhaia.tetel.online"
  const PRAVOCE = "https://pravoce.tetel.online"
  const INSTAGRAM = "https://instagram.com/tetelpontocom"

  return (
    <>
      {/* NoScript fallback para Meta Pixel */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1305167264321996&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      <div className="min-h-screen text-[#1a1a1a] font-sans bg-gradient-to-b from-[#FFD480] via-[#FFC2A6] to-[#FF8A80]">
        {/* HEADER */}
        <header className="sticky top-0 z-50 backdrop-blur bg-white/50 border-b border-white/40">
          <div className={`${container} flex items-center justify-between py-3`}>
            <div className="flex items-center gap-2">
              <Rocket className="h-5 w-5" />
              <span className="font-semibold">Faça Caixa Agora</span>
            </div>
            <a
              href={CHECKOUT}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="checkout"
              className="rounded-xl bg-[#1a1a1a] text-white px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
            >
              Começar agora
            </a>
          </div>
        </header>

        {/* HERO */}
        <section className="relative">
          <div className={`${container} py-12 md:py-20 grid md:grid-cols-2 items-center gap-10`}>
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-[#1a1a1a]">
                Aprenda a <span className="underline decoration-[#1a1a1a]/30">fazer caixa</span> rápido com o que você
                já tem.
              </h1>
              <p className="mt-4 text-lg text-[#222]">
                Método simples, humano e comprovado para transformar habilidades em renda real. Sem enrolação. Comece
                hoje por
                <strong> R$ 9,90</strong>.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-start justify-center">
                <a
                  href={CHECKOUT}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="checkout"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1a1a1a] text-white px-6 py-3 text-sm font-semibold hover:opacity-90 transition shadow-lg"
                >
                  Começar agora — R$ 9,90
                </a>
                <button
                  onClick={() => {
                    const el = document.getElementById("como-funciona")
                    el?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/80 text-[#1a1a1a] px-6 py-3 text-sm font-semibold hover:bg-white transition"
                >
                  Ver como funciona
                </button>
              </div>

              <div className="mt-4 flex items-center gap-4 justify-center md:justify-start text-sm text-[#1a1a1a]/80">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5" />
                  Garantia de 7 dias
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Acesso imediato
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full flex justify-center"
            >
              <img
                src="/images/hero-facacaixaagora.png"
                alt="Faça Caixa Agora - Libere renda extra"
                className="w-full max-w-md rounded-3xl shadow-xl"
              />
            </motion.div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" className="bg-white/80">
          <div className={`${container} py-16`}>
            <h2 className={sectionTitle}>Como funciona (simples de verdade)</h2>
            <p className="mt-2 text-neutral-700 max-w-2xl">
              Você não precisa inventar nada. Só aplicar o método no que já sabe — e colocar pra rodar.
            </p>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <Step
                n={1}
                title="Aprenda o método"
                desc="Aula direta ao ponto e roteiro prático. Você entende o essencial em pouco tempo."
              />
              <Step
                n={2}
                title="Aplique no que já faz"
                desc="Mapeie o que você já sabe (ou já faz) e transforme em oferta simples e vendável."
              />
              <Step
                n={3}
                title="Gere suas primeiras vendas"
                desc="Use o plano de ação e coloque no ar. Resultado real, não teoria."
              />
            </div>
          </div>
        </section>

        {/* O QUE VOCÊ RECEBE */}
        <section className="bg-white">
          <div className={`${container} py-16`}>
            <h2 className={sectionTitle}>O que você recebe por R$ 9,90</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <Card
                title="Aula direta + roteiro"
                desc="Material enxuto e objetivo com roteiro acionável para você seguir sem travar."
              />
              <Card
                title="Plano de ação"
                desc="Checklist com passos práticos (sem jargões). Tirar do papel ficou fácil."
              />
              <Card title="Modelo de oferta" desc="Template pra apresentar sua ideia de forma clara e vendável." />
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 items-center">
              <a
                href={CHECKOUT}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="checkout"
                className="rounded-2xl bg-[#1a1a1a] text-white px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
              >
                Quero começar agora — R$ 9,90
              </a>
              <span className="text-sm text-neutral-700">Acesso imediato · Garantia de 7 dias</span>
            </div>
          </div>
        </section>

        {/* PONTE PARA O ORDER BUMP */}
        <section className="bg-[#fff7f2]">
          <div className={`${container} py-16`}>
            <div className="flex items-start gap-3">
              <Cpu className="h-6 w-6 mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Quer multiplicar seus resultados?</h3>
                <p className="text-neutral-700 mt-1">
                  No próximo passo (checkout), você pode <strong>adicionar o Minha IA por R$ 27,00</strong> e aprender a
                  usar IA no seu trabalho — pra produzir melhor, mais rápido e com mais qualidade.
                </p>
                <a
                  href={MINHA_IA}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="minhaia"
                  className="mt-4 inline-block rounded-xl border border-[#1a1a1a]/15 px-4 py-2 text-sm hover:bg-white transition"
                >
                  Conhecer o Minha IA
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="bg-white">
          <div className={`${container} py-16`}>
            <h2 className={sectionTitle}>Quem começou, aprovou</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <Depo
                name="Carla M."
                text="Finalmente consegui transformar meu trabalho em renda extra. O método é simples e direto."
              />
              <Depo
                name="Rafael S."
                text="Eu já tinha habilidade, faltava clareza. Em uma semana fechei meus primeiros pedidos."
              />
              <Depo
                name="Bianca A."
                text="Paguei menos de um lanche e destravei algo que eu enrolava há meses. Valeu demais!"
              />
            </div>
          </div>
        </section>

        {/* SELOS */}
        <section className="bg-white/80">
          <div className={`${container} py-12`}>
            <div className="grid md:grid-cols-3 gap-6 items-center justify-items-center">
              <Selo img="/images/garantia-7-dias.png" label="Garantia de 7 dias" />
              <Selo img="/images/pagamento-seguro.png" label="Pagamento Seguro" />
              <Selo img="/images/kiwify-checkout-seguro.png" label="Checkout Seguro Kiwify" />
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-[#1a1a1a] text-white">
          <div className={`${container} py-16 text-center`}>
            <h3 className="text-2xl sm:text-3xl font-bold">Agora é com você.</h3>
            <p className="mt-2 text-white/80 max-w-xl mx-auto">
              Dê o primeiro passo pra fazer caixa com o que você já tem. Simples, humano e direto ao ponto.
            </p>
            <a
              href={CHECKOUT}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="checkout"
              className="mt-6 inline-flex items-center justify-center rounded-2xl bg-white text-[#1a1a1a] px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
            >
              Começar agora — R$ 9,90
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-white/70 border-t border-white/40">
          <div
            className={`${container} py-8 text-sm text-neutral-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-4`}
          >
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span>Ecossistema Tetel</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href={PRAVOCE} target="_blank" rel="noopener noreferrer" className="hover:text-[#1a1a1a]">
                PraVocê · Tetel
              </a>
              <a href={MINHA_IA} target="_blank" rel="noopener noreferrer" className="hover:text-[#1a1a1a]">
                Minha IA
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-[#1a1a1a]">
                @tetelpontocom
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

function Step({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-white/60">
      <div className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center font-semibold">{n}</div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-neutral-700">{desc}</p>
    </div>
  )
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-white/60">
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-neutral-700">{desc}</p>
    </div>
  )
}

function Depo({ name, text }: { name: string; text: string }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-white/60">
      <div className="flex items-center gap-2 text-amber-600">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
        ))}
      </div>
      <p className="mt-3 text-sm text-neutral-800">{text}</p>
      <div className="mt-3 text-xs text-neutral-600">— {name}</div>
    </div>
  )
}

function Selo({ img, label }: { img: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <img src={img || "/placeholder.svg"} alt={label} className="h-24 w-24 object-contain" />
      </div>
      <span className="text-xs text-neutral-600 font-medium">{label}</span>
    </div>
  )
}
