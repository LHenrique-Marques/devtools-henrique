'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ConversorBase64() {
  const [texto, setTexto] = useState('');
  const [resultado, setResultado] = useState('');

  const toBase64 = () => setResultado(btoa(texto));
  const fromBase64 = () => {
    try {
      setResultado(atob(texto));
    } catch {
      setResultado('Base64 inválido');
    }
  };

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-neutral-900 text-neutral-100 px-4">
      <div className="bg-neutral-800 border border-neutral-700 rounded-2xl shadow-lg p-8 max-w-3xl w-full">
        <Link href="/" className="text-red-400 hover:underline">&larr; Voltar</Link>
        <h1 className="text-4xl font-bold mb-4">🔄 Conversor Base64</h1>
        <p className="mb-6 text-neutral-400">Converta texto para Base64 ou decodifique Base64.</p>

        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          rows={4}
          className="w-full p-4 border border-neutral-600 rounded-lg bg-neutral-900 text-neutral-100 mb-4"
          placeholder="Digite texto ou Base64"
        />

        <div className="flex gap-4 mb-4">
          <button onClick={toBase64} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">Para Base64</button>
          <button onClick={fromBase64} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg">De Base64</button>
        </div>

        {resultado && <div className="text-xl"><p><strong>Resultado:</strong> {resultado}</p></div>}
      </div>
    </main>
  );
}
