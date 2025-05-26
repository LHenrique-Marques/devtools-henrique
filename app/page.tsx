'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [search, setSearch] = useState('');

  const tools = [
    { name: 'Contador de Caracteres', href: '/contador-caracteres', desc: 'Conte palavras e caracteres rapidamente.', emoji: '📝' },
    { name: 'Calculadora de Porcentagem', href: '/calculadora-porcentagem', desc: 'Calcule porcentagens de forma simples.', emoji: '📊' },
    { name: 'Gerador de CPF', href: '/gerador-cpf', desc: 'Gere CPFs válidos para testes.', emoji: '🧾' },
    { name: 'Validador de CPF', href: '/validador-cpf', desc: 'Verifique se um CPF é válido.', emoji: '🕵️‍♂️' },
    { name: 'Gerador de Senhas', href: '/gerador-senha', desc: 'Gere senhas seguras e aleatórias.', emoji: '🔐' },
    { name: 'Conversor Base64', href: '/conversor-base64', desc: 'Converta texto para Base64 e vice-versa.', emoji: '🔄' },
    { name: 'JSON Formatter', href: '/json-formatter', desc: 'Valide e formate JSON.', emoji: '🛠️' },
    { name: 'Conversor Timestamp', href: '/conversor-timestamp', desc: 'Converta timestamp UNIX para data e vice-versa.', emoji: '🕓' },
    { name: 'Gerador de UUID', href: '/gerador-uuid', desc: 'Gere UUIDs aleatórios facilmente.', emoji: '🆔' },
  ];

  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-neutral-900 text-neutral-100 px-4 pt-16">
      <div className="max-w-6xl w-full">

        {/* HERO */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
             DevTools
          </h1>
          <p className="text-lg text-neutral-400 mb-6">
            Conjunto de ferramentas online, rápidas e gratuitas <br />
            para desenvolvedores, criadores e o dia a dia.
          </p>
          <p className="text-neutral-500 mb-6">
            Hoje temos <strong>{tools.length}</strong> ferramentas disponíveis!
          </p>
          <input
            type="text"
            placeholder="🔍 Filtrar ferramentas..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 p-4 mb-4 rounded-xl border border-neutral-700 bg-neutral-800 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-red-500"
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
                  className="bg-neutral-800 border border-neutral-700 rounded-2xl p-6 shadow-md hover:scale-105 hover:shadow-lg hover:border-red-500 transition-transform"
                >
                  <h2 className="text-2xl font-semibold mb-2">
                    {tool.emoji} {tool.name}
                  </h2>
                  <p className="text-neutral-400">{tool.desc}</p>

                  <p></p>
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
