"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Gift } from "lucide-react"

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [hasShown])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full relative animate-fadeInUp">
        <Button variant="ghost" size="icon" className="absolute top-2 right-2" onClick={() => setIsVisible(false)}>
          <X className="w-4 h-4" />
        </Button>

        <CardHeader className="text-center">
          <div className="mx-auto bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <Gift className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl">Espere!</CardTitle>
          <p className="text-gray-600">Antes de sair, que tal um desconto especial?</p>
        </CardHeader>

        <CardContent className="text-center space-y-4">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-lg">
            <p className="text-2xl font-bold">30% OFF</p>
            <p className="text-sm">Na sua primeira análise</p>
          </div>

          <p className="text-sm text-gray-600">
            Use o cupom <strong>PRIMEIRA30</strong> e economize na análise do seu Instagram
          </p>

          <div className="space-y-2">
            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Quero o Desconto!
            </Button>
            <Button variant="ghost" className="w-full text-gray-500" onClick={() => setIsVisible(false)}>
              Não, obrigado
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
