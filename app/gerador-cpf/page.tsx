'use client';

import { useState } from 'react';
import Link from 'next/link';


function gerarCPF() {
  const n = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
  const mod = (base: number[], peso: number) => {
    const soma = base.reduce((acc, val, idx) => acc + val * (peso - idx), 0);
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };

  const base = Array.from({ length: 9 }, () => n(0, 9));
  base.push(mod(base, 10));
  base.push(mod(base, 11));

  return base.join('');
}

export default function GeradorCPF() {
  const [cpf, setCpf] = useState('');

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-neutral-900 text-neutral-100 px-4">
      <div className="bg-neutral-800 border border-neutral-700 rounded-2xl shadow-lg p-8 max-w-3xl w-full">
        <Link href="/" className="text-red-400 hover:underline">&larr; Voltar</Link>

        <h1 className="text-4xl font-bold mb-4">🧾 Gerador de CPF</h1>
        <p className="mb-6 text-neutral-400">
          Gera números de CPF válidos para uso em testes e desenvolvimento.
        </p>

        <button
          onClick={() => setCpf(gerarCPF())}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg mb-6 transition"
        >
          Gerar CPF
        </button>

        {cpf && (
          <div className="text-xl">
            <p><strong>CPF Gerado:</strong> {cpf}</p>
          </div>
        )}
      </div>
    </main>
  );
}
