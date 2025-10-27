"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function FounderSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Founder Image */}
          <div className="mb-8">
            <img
              src="/images/founder.jpg"
              alt="Tetel - Fundador"
              className="w-32 h-32 rounded-full mx-auto border-4 border-white/20 shadow-xl"
            />
          </div>

          {/* Personal Message */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-6">Uma Mensagem Pessoal Para Você</h2>
            <div className="text-left bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
              <p className="text-lg mb-4">
                <strong>Olá, sou o Tetel.</strong> Depois de 30+ anos no mundo da tecnologia, aprendi uma verdade
                fundamental:{" "}
                <span className="text-yellow-400 font-semibold">
                  não é sobre ter as melhores ferramentas, é sobre ter a estratégia certa.
                </span>
              </p>
              <p className="text-lg mb-4">
                Vi muitos líderes brilhantes - políticos com ideias transformadoras, empresários visionários - ficarem
                invisíveis no digital simplesmente porque
                <strong> ninguém os ensinou a construir autoridade de forma estratégica.</strong>
              </p>
              <p className="text-lg">
                Se você chegou até aqui, é porque reconhece que sua expertise merece ser vista e respeitada. Vamos fazer
                o mundo reconhecê-la.
              </p>
            </div>
          </div>

          {/* Commitment Section */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Meu Compromisso Com Você:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Estratégia personalizada para seu perfil</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Transparência total no processo</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Acompanhamento próximo e dedicado</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Suporte direto via WhatsApp</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Resultados mensuráveis e consistentes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Garantia de satisfação total</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-xl mb-2">A pergunta não é "se" você vai construir sua autoridade digital.</p>
            <p className="text-xl mb-8">
              A pergunta é: <span className="text-yellow-400 font-semibold">"Quando você vai começar?"</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg">
                ⚡ Quero Começar Agora, Tetel!
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg bg-transparent"
              >
                💬 Conversar Primeiro
              </Button>
            </div>

            <div className="flex justify-center items-center gap-8 text-sm opacity-80">
              <span>💬 Resposta garantida em até 2 horas</span>
              <span>🔒 Seus dados estão seguros</span>
            </div>

            <div className="mt-8 italic text-gray-300">
              <p className="text-lg">"Sua expertise já existe. Agora vamos fazer o mundo reconhecê-la."</p>
              <p className="font-semibold">— Tetel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
