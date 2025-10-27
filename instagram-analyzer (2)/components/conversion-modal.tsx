"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, CheckCircle, MessageCircle, Mail } from "lucide-react"

interface ConversionModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ConversionModal({ isOpen, onClose }: ConversionModalProps) {
  if (!isOpen) return null

  const handleWhatsAppClick = () => {
    const message = "Olá Tetel! Acabei de solicitar a análise do meu Instagram e gostaria de dar os próximos passos."
    const whatsappUrl = `https://wa.me/5511999176900?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full relative animate-fadeInUp">
        <Button variant="ghost" size="icon" className="absolute top-2 right-2" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>

        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-4">
            <img
              src="/images/founder.jpg"
              alt="Tetel"
              className="w-16 h-16 rounded-full mx-auto border-2 border-blue-200"
            />
          </div>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl">🎉</span>
            <CardTitle className="text-2xl">Dados Recebidos!</CardTitle>
          </div>
          <p className="text-gray-600">Obrigado pelo seu interesse</p>
          <div className="flex justify-center">
            <CheckCircle className="w-6 h-6 text-green-500" />
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Next Steps */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">📋 Próximos Passos:</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  1
                </span>
                <span>Análise do seu perfil</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  2
                </span>
                <span>Contato via WhatsApp em até 2h</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  3
                </span>
                <span>Consultoria estratégica</span>
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div className="bg-green-50 p-3 rounded-lg text-center">
            <p className="text-green-800 font-medium flex items-center justify-center gap-2">
              ⚡ Resposta em até 2 horas
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-green-600" />
              <div>
                <p className="font-medium">WhatsApp</p>
                <p className="text-gray-600">(82) 99917-6900</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">contato@tetel.online</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <Button onClick={handleWhatsAppClick} className="w-full bg-green-600 hover:bg-green-700 text-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            <Button variant="outline" className="w-full bg-transparent" onClick={onClose}>
              Fechar
            </Button>
          </div>

          {/* Footer Quote */}
          <div className="text-center text-xs text-gray-500 italic border-t pt-4">
            "Sua jornada digital começa agora!" — Tetel
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
