"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Heart } from "lucide-react"

export default function ResultsShowcaseSection() {
  const results = [
    {
      client: "@empresatech",
      industry: "Tecnologia",
      before: "2.1K seguidores",
      after: "15.8K seguidores",
      growth: "+650%",
      engagement: "De 1.2% para 5.8%",
      timeframe: "6 meses",
    },
    {
      client: "@consultoriadigital",
      industry: "Consultoria",
      before: "850 seguidores",
      after: "8.2K seguidores",
      growth: "+865%",
      engagement: "De 0.8% para 4.2%",
      timeframe: "4 meses",
    },
    {
      client: "@lojafashion",
      industry: "Moda",
      before: "5.2K seguidores",
      after: "28.5K seguidores",
      growth: "+448%",
      engagement: "De 2.1% para 6.8%",
      timeframe: "8 meses",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Resultados Comprovados</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Veja como nossos clientes transformaram seus perfis Instagram
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {results.map((result, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{result.client}</h3>
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    {result.industry}
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-400" />
                      <span className="text-sm">Seguidores</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-300">{result.before}</div>
                      <div className="font-semibold">{result.after}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm">Crescimento</span>
                    </div>
                    <div className="text-green-400 font-bold">{result.growth}</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-red-400" />
                      <span className="text-sm">Engajamento</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{result.engagement}</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <div className="text-center">
                      <span className="text-sm text-gray-300">Tempo: </span>
                      <span className="font-semibold">{result.timeframe}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">Quer ser o próximo case de sucesso?</p>
          <div className="flex justify-center space-x-8 text-sm">
            <span>✓ Análise Personalizada</span>
            <span>✓ Estratégia Customizada</span>
            <span>✓ Suporte Contínuo</span>
          </div>
        </div>
      </div>
    </section>
  )
}
