'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Globe } from 'lucide-react';

export default function SobreClient() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 ">
      {/* Cabeçalho */}
      <div className="rounded-2xl shadow-lg p-8 max-w-3xl w-full bg-gradient-to-br from-purple-800 via-neutral-950 to-black border border-neutral-800">
      <div className="flex items-center gap-4 mb-8">
        <Image
          src="/avatar.jpeg" // 👉 Coloca sua foto aqui
          alt="Foto de Henrique Marques"
          width={80}
          height={80}
          className="rounded-full border border-neutral-700"
        />
        <div>
          <h1 className="text-4xl font-bold">Henrique Marques</h1>
          <p className="text-neutral-400">Desenvolvedor e criador do DevTools</p>
        </div>
      </div>

      {/* Sobre o projeto */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Sobre o DevTools</h2>
        <p className="text-neutral-400 mb-4">
          O <strong>DevTools</strong> é um conjunto de ferramentas online, rápidas e gratuitas, 
          criadas para ajudar desenvolvedores, criadores de conteúdo e qualquer pessoa que 
          precise de utilitários práticos no dia a dia.
        </p>
        <p className="text-neutral-400 mb-4">
          Desenvolvido por <strong>Henrique Marques</strong>, este projeto nasceu da vontade de 
          centralizar ferramentas simples, mas essenciais, em um único lugar, acessível de qualquer dispositivo.
        </p>
        <p className="text-neutral-400">
          Este projeto é open-source, está em constante evolução, e recebe novas funcionalidades regularmente.
        </p>
      </div>

      {/* Tecnologias */}
      <div className="mb-8 pt-10">
        <h2 className="text-2xl font-semibold mb-4">Tecnologias Usadas</h2>
        <div className="flex flex-wrap gap-4">
          <span className="bg-neutral-800 px-4 py-2 rounded-full border border-neutral-700">Next.js</span>
          <span className="bg-neutral-800 px-4 py-2 rounded-full border border-neutral-700">React</span>
          <span className="bg-neutral-800 px-4 py-2 rounded-full border border-neutral-700">TailwindCSS</span>
          <span className="bg-neutral-800 px-4 py-2 rounded-full border border-neutral-700">Vercel</span>
        </div>
      </div>

      {/* Links */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Me encontre também</h2>
        <div className="flex gap-6">
          <Link
            href="https://github.com/LHenrique-Marques"
            className="flex items-center gap-2 hover:text-red-400 transition"
            target="_blank"
          >
            <Github size={20} /> GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/luis-henrique-marques-franque-flores-508ba126b/"
            className="flex items-center gap-2 hover:text-red-400 transition"
            target="_blank"
          >
            <Linkedin size={20} /> LinkedIn
          </Link>
          <Link
            href="https://portfolio-gamma-eight-31.vercel.app"
            className="flex items-center gap-2 hover:text-red-400 transition"
            target="_blank"
          >
            <Globe size={20} /> Portfólio
          </Link>
        </div>
      </div>
      </div>
    </main>
  );
}
