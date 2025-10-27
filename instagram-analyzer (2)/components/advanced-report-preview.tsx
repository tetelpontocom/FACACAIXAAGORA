"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Users, Heart, MessageCircle } from "lucide-react"

export default function AdvancedReportPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Veja o que você receberá</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Um relatório completo e profissional com insights acionáveis
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Performance Overview */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  Performance Geral
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Taxa de Engajamento</span>
                    <span className="text-sm text-gray-600">4.2%</span>
                  </div>
                  <Progress value={42} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Qualidade do Conteúdo</span>
                    <span className="text-sm text-gray-600">8.5/10</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Consistência</span>
                    <span className="text-sm text-gray-600">7.8/10</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Audience Insights */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  Insights da Audiência
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Seguidores</span>
                  <Badge variant="secondary">12.5K</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Faixa Etária Principal</span>
                  <Badge variant="outline">25-34 anos</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Localização Top</span>
                  <Badge variant="outline">São Paulo, BR</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Melhor Horário</span>
                  <Badge variant="outline">19h-21h</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Content Analysis */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-600" />
                  Análise de Conteúdo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Posts com melhor performance</span>
                  <Badge variant="secondary">Carrossel</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Hashtags mais eficazes</span>
                  <Badge variant="outline">#marketing</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Frequência ideal</span>
                  <Badge variant="outline">1x/dia</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-purple-600" />
                  Recomendações
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">✓ Aumentar uso de Stories</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">✓ Melhorar CTAs nos posts</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-sm text-purple-800">✓ Criar mais conteúdo educativo</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
