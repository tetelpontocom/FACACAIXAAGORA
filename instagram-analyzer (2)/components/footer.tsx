"use client"

import { Instagram, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/images/tetel-logo.svg" alt="Tetel Digital" className="h-8 mr-2" />
            </div>
            <p className="text-gray-400 mb-4">Transformando perfis Instagram em máquinas de autoridade digital.</p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Mail className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Phone className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Análise de Perfil
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Auditoria Completa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Consultoria
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Estratégia de Conteúdo
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cases de Sucesso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  LGPD
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 Tetel Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
