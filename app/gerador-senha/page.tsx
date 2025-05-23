'use client';
import { useState } from 'react';
import Link from 'next/link';

const caracteres = {
  maiusculas: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  minusculas: 'abcdefghijklmnopqrstuvwxyz',
  numeros: '0123456789',
  simbolos: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

function gerarSenha(tamanho: number) {
  const tudo = caracteres.maiusculas + caracteres.minusculas + caracteres.numeros + caracteres.simbolos;
  let senha = '';
  for (let i = 0; i < tamanho; i++) {
    senha += tudo.charAt(Math.floor(Math.random() * tudo.length));
  }
  return senha;
}

export default function GeradorSenha() {
  const [tamanho, setTamanho] = useState(12);
  const [senha, setSenha] = useState('');

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-neutral-900 text-neutral-100 px-4">
      <div className="bg-neutral-800 border border-neutral-700 rounded-2xl shadow-lg p-8 max-w-3xl w-full">
        <Link href="/" className="text-red-400 hover:underline">&larr; Voltar</Link>
        <h1 className="text-4xl font-bold mb-4">🔐 Gerador de Senhas</h1>
        <p className="mb-6 text-neutral-400">Gere senhas seguras e aleatórias.</p>

        <input
          type="number"
          min={4}
          max={64}
          value={tamanho}
          onChange={(e) => setTamanho(Number(e.target.value))}
          className="p-4 border border-neutral-600 rounded-lg bg-neutral-900 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-red-500 w-full mb-4"
          placeholder="Tamanho da senha"
        />

        <button
          onClick={() => setSenha(gerarSenha(tamanho))}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg mb-6 transition"
        >
          Gerar Senha
        </button>

        {senha && <div className="text-xl"><p><strong>Senha Gerada:</strong> {senha}</p></div>}
      </div>
    </main>
  );
}