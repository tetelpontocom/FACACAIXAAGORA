"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppFloatButton() {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de saber mais sobre a análise do Instagram."
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg z-50 animate-pulse"
      size="icon"
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  )
}
