'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ContadorCaracteres() {
  const [texto, setTexto] = useState('');

  const caracteres = texto.length;
  const palavras = texto.trim() === '' ? 0 : texto.trim().split(/\s+/).length;

  return (
    <main className="flex flex-col min-h-screen p-8">

      <div className="bg-neutral-800 border border-neutral-700 rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
        <Link href="/" className="mb-4 text-red-400 hover:underline">&larr; Voltar</Link>
        <h1 className="text-4xl font-bold mb-4">📝 Contador de Caracteres</h1>
        <p className="mb-6 text-neutral-400">Digite ou cole seu texto abaixo para contar caracteres e palavras.</p>

        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          rows={8}
          className="w-full p-4 border border-neutral-600 rounded-lg mb-6 bg-neutral-900 text-neutral-100 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Digite seu texto aqui..."
        />

        <div className="flex gap-8 text-xl">
          <p><strong>Caracteres:</strong> {caracteres}</p>
          <p><strong>Palavras:</strong> {palavras}</p>
        </div>
      </div>
    </main>
  );
}