"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Search, BarChart, Target, Rocket } from "lucide-react"

export default function SimpleMethodologySection() {
  const steps = [
    {
      icon: Search,
      title: "Análise Profunda",
      description: "Examinamos cada aspecto do seu perfil Instagram com ferramentas avançadas",
    },
    {
      icon: BarChart,
      title: "Métricas Detalhadas",
      description: "Coletamos dados sobre engajamento, alcance e performance do conteúdo",
    },
    {
      icon: Target,
      title: "Identificação de Oportunidades",
      description: "Encontramos pontos de melhoria e estratégias personalizadas",
    },
    {
      icon: Rocket,
      title: "Plano de Ação",
      description: "Entregamos um roadmap claro para acelerar seu crescimento",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Nossa Metodologia Comprovada</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Um processo estruturado baseado em 25+ anos de experiência em tecnologia e marketing digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
