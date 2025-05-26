'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [search, setSearch] = useState('');

  const tools = [
    { name: 'Contador de Caracteres', href: '/contador-caracteres', desc: 'Conte palavras e caracteres rapidamente.' },
    { name: 'Calculadora de Porcentagem', href: '/calculadora-porcentagem', desc: 'Calcule porcentagens de forma simples.' },
    { name: 'Gerador de CPF', href: '/gerador-cpf', desc: 'Gere CPFs válidos para testes.'},
    { name: 'Validador de CPF', href: '/validador-cpf', desc: 'Verifique se um CPF é válido.' },
    { name: 'Gerador de Senhas', href: '/gerador-senha', desc: 'Gere senhas seguras e aleatórias.' },
    { name: 'Conversor Base64', href: '/conversor-base64', desc: 'Converta texto para Base64 e vice-versa.',},
    { name: 'JSON Formatter', href: '/json-formatter', desc: 'Valide e formate JSON.'},
    { name: 'Conversor Timestamp', href: '/conversor-timestamp', desc: 'Converta timestamp UNIX para data e vice-versa.' },
    { name: 'Gerador de UUID', href: '/gerador-uuid', desc: 'Gere UUIDs aleatórios facilmente.'},
  ];

  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)] pt-24 pb-24">
      <div className="max-w-6xl w-full ">

        {/* HERO */}
        <section className="text-center mb-14">
          <h1 className="text-5xl font-bold mb-4">
            DevTools
          </h1>
          <p className="text-lg text-neutral-400 mb-4">
            Conjunto de ferramentas online, rápidas e gratuitas <br />
            para desenvolvedores, criadores e o dia a dia.
          </p>
          <p className="text-neutral-500 mb-6">
            Atualmente temos <strong>{tools.length}</strong> ferramentas disponíveis!
          </p>
            <input
                type="text"
                placeholder="Buscar ferramenta..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full md:w-1/2 p-4 mb-4 rounded-2xl 
                border border-neutral-700 
                bg-gradient-to-br from-neutral-900 via-neutral-950 to-black 
                text-neutral-100 placeholder-neutral-500 
                focus:outline-none focus:ring-2 focus:ring-purple-600 
                transition"
            />

        </section>

        {/* LISTA DE FERRAMENTAS */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredTools.length > 0 ? (
              filteredTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="backdrop-blur-sm bg-gradient-to-br from-purple-950 via-neutral-900 to-black 
                border border-neutral-700 rounded-2xl p-6 shadow-md 
                hover:scale-[1.03] hover:shadow-xl hover:border-purple-600 
                transition-transform duration-300 flex flex-col gap-2"

              >
                <h2 className="text-xl font-bold text-white">{tool.name}</h2>
                <p className="text-neutral-400 text-sm">{tool.desc}</p>
              </Link>

              ))
            ) : (
              <p className="text-neutral-500 col-span-full">Nenhuma ferramenta encontrada.</p>
            )}
          </div>
        </section>

      </div>
    </main>
  );
}
