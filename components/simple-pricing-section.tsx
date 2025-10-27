"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"

export default function SimplePricingSection() {
  const plans = [
    {
      name: "Análise Básica",
      price: "R$ 97",
      originalPrice: "R$ 197",
      description: "Perfeito para começar",
      features: [
        "Análise completa do perfil",
        "Relatório em PDF",
        "Métricas de engajamento",
        "Recomendações básicas",
        "Suporte por email",
      ],
      popular: false,
    },
    {
      name: "Análise Profissional",
      price: "R$ 197",
      originalPrice: "R$ 397",
      description: "Mais completa e detalhada",
      features: [
        "Tudo da Análise Básica",
        "Análise de concorrentes",
        "Estratégia de hashtags",
        "Calendário de conteúdo",
        "Consultoria de 30min",
        "Suporte prioritário",
      ],
      popular: true,
    },
    {
      name: "Análise Premium",
      price: "R$ 397",
      originalPrice: "R$ 797",
      description: "Solução completa",
      features: [
        "Tudo da Análise Profissional",
        "Auditoria completa",
        "Plano de crescimento 90 dias",
        "Templates personalizados",
        "2 consultorias de 1h",
        "Suporte WhatsApp",
        "Revisão após 30 dias",
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Escolha seu Plano</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Investimento que se paga com o crescimento do seu Instagram
          </p>
          <div className="mt-6">
            <Badge variant="destructive" className="text-lg px-4 py-2">
              🔥 Oferta Limitada - 50% OFF
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? "ring-2 ring-purple-600 shadow-xl" : "shadow-lg"}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-purple-600 text-white px-4 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Mais Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                <p className="text-gray-600">{plan.description}</p>
                <div className="mt-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-3xl font-bold text-purple-600">{plan.price}</span>
                    <span className="text-lg text-gray-400 line-through">{plan.originalPrice}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Pagamento único</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full mt-6 ${plan.popular ? "bg-purple-600 hover:bg-purple-700" : "bg-gray-900 hover:bg-gray-800"}`}
                  size="lg"
                >
                  Escolher {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">💳 Aceitamos PIX, cartão de crédito e débito</p>
          <p className="text-sm text-gray-500">
            ✅ Garantia de 7 dias • ✅ Entrega em até 48h • ✅ Suporte especializado
          </p>
        </div>
      </div>
    </section>
  )
}
