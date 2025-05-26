import React from "react";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Imagem ou Banner */}
        <div className="lg:col-span-2">
          <img
            src="/banner-devtools.png" // 🔥 Coloque seu logo aqui
            alt="Logo DevTools"
            className="w-40"
          />
          <p className="text-sm text-neutral-400 mt-4">
            Ferramentas online, rápidas e gratuitas para desenvolvedores. Feito por Henrique.
          </p>

          <ul className="flex gap-4 mt-6">
            <li>
              <a href="https://github.com/LHenrique-Marques" target="_blank" rel="noreferrer">
                <Github className="size-5 text-neutral-400 hover:text-white transition" />
                <span className="sr-only">GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/marques.henriquevj/" target="_blank" rel="noreferrer">
                <Instagram className="size-5 text-neutral-400 hover:text-white transition" />
                <span className="sr-only">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/luis-henrique-marques-franque-flores-508ba126b/" target="_blank" rel="noreferrer">
                <Linkedin className="size-5 text-neutral-400 hover:text-white transition" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Menu */}
        <div>
          <h4 className="text-white font-semibold mb-4">Ferramentas</h4>
          <ul className="space-y-3 text-sm text-neutral-400">
            <li>
              <Link href="/char-counter" className="hover:text-white">
                Contador de Caracteres
              </Link>
            </li>
            <li>
              <Link href="/password-generator" className="hover:text-white">
                Gerador de Senhas
              </Link>
            </li>
            <li>
              <Link href="/base64" className="hover:text-white">
                Conversor Base64
              </Link>
            </li>
            <li>
              <Link href="/json-formatter" className="hover:text-white">
                JSON Formatter
              </Link>
            </li>
            <li>
              <Link href="/timestamp" className="hover:text-white">
                Conversor de Timestamp
              </Link>
            </li>
            <li>
              <Link href="/uuid-generator" className="hover:text-white">
                Gerador de UUID
              </Link>
            </li>
          </ul>
        </div>

        {/* Sobre */}
        <div>
          <h4 className="text-white font-semibold mb-4">Sobre</h4>
          <ul className="space-y-3 text-sm text-neutral-400">
            <li>
              <Link href="/sobre" className="hover:text-white">
                Sobre o projeto
              </Link>
            </li>
            <li>
              <Link href="/contato" className="hover:text-white">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-3 text-sm text-neutral-400">
            <li>
              <Link href="/cookies" className="hover:text-white">
                Termos de Uso
              </Link>
            </li>
            <li>
              <Link href="/privacidade" className="hover:text-white">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="/termos" className="hover:text-white">
                Política de Cookies
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-800 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} DevTools do Henrique. Todos os direitos reservados.
          </p>
          <p className="text-xs text-neutral-500">
            Feito por Henrique Marques
          </p>
        </div>
      </div>
    </footer>
  );
}
