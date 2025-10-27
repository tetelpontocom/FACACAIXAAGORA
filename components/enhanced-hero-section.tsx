"use client"

import { Button } from "@/components/ui/button"
import { BarChart3, Users, TrendingUp } from "lucide-react"

export default function EnhancedHeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center mb-8 animate-fadeInUp">
            <img src="/images/tetel-online-logo.svg" alt="Tetel Digital" className="h-12" />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            Transforme seu{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Instagram
            </span>{" "}
            em uma máquina de autoridade
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fadeInUp">
            Análise profissional baseada em 25+ anos de experiência em tecnologia
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fadeInUp">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <BarChart3 className="w-8 h-8 mb-4 mx-auto text-pink-400" />
              <h3 className="font-semibold mb-2">Análise Completa</h3>
              <p className="text-sm text-gray-300">Relatório detalhado do seu perfil</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Users className="w-8 h-8 mb-4 mx-auto text-blue-400" />
              <h3 className="font-semibold mb-2">Audiência</h3>
              <p className="text-sm text-gray-300">Entenda seu público-alvo</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <TrendingUp className="w-8 h-8 mb-4 mx-auto text-green-400" />
              <h3 className="font-semibold mb-2">Crescimento</h3>
              <p className="text-sm text-gray-300">Estratégias para expandir</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 text-lg">
              Analisar Meu Instagram
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg bg-transparent"
            >
              Ver Exemplo de Análise
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-center animate-fadeInUp">
            <p className="text-gray-300 mb-4">Mais de 1.000 perfis analisados</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <span className="text-sm">✓ Análise Profissional</span>
              <span className="text-sm">✓ Relatório Detalhado</span>
              <span className="text-sm">✓ Suporte Especializado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
