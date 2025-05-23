'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ContadorCaracteres() {
  const [texto, setTexto] = useState('');

  const caracteres = texto.length;
  const palavras = texto.trim() === '' ? 0 : texto.trim().split(/\s+/).length;

  return (
    <main className="flex flex-col min-h-screen p-8 bg-gray-50">
      <Link href="/" className="mb-4 text-blue-600 hover:underline">&larr; Voltar</Link>
      <h1 className="text-3xl font-bold mb-4">📝 Contador de Caracteres</h1>
      <p className="mb-6 text-gray-700">Digite ou cole seu texto abaixo para contar caracteres e palavras.</p>
      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        rows={8}
        className="w-full p-4 border rounded-md mb-6 resize-none"
        placeholder="Digite seu texto aqui..."
      />
      <div className="flex gap-8 text-lg">
        <p><strong>Caracteres:</strong> {caracteres}</p>
        <p><strong>Palavras:</strong> {palavras}</p>
      </div>
    </main>
  );
}