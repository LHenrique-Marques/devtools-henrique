'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function JsonFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const formatar = () => {
    try {
      const obj = JSON.parse(input);
      setOutput(JSON.stringify(obj, null, 2));
    } catch {
      setOutput('JSON inválido');
    }
  };

  const minificar = () => {
    try {
      const obj = JSON.parse(input);
      setOutput(JSON.stringify(obj));
    } catch {
      setOutput('JSON inválido');
    }
  };

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-neutral-900 text-neutral-100 px-4">
      <div className="bg-neutral-800 border border-neutral-700 rounded-2xl shadow-lg p-8 max-w-3xl w-full">
        <Link href="/" className="text-red-400 hover:underline">&larr; Voltar</Link>
        <h1 className="text-4xl font-bold mb-4">🛠️ JSON Formatter & Validator</h1>
        <p className="mb-6 text-neutral-400">Valide, formate e minifique JSON.</p>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={6}
          className="w-full p-4 border border-neutral-600 rounded-lg bg-neutral-900 text-neutral-100 mb-4"
          placeholder="Cole seu JSON aqui..."
        />

        <div className="flex gap-4 mb-4">
          <button onClick={formatar} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">Formatar</button>
          <button onClick={minificar} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg">Minificar</button>
        </div>

        {output && <div className="text-xl whitespace-pre-wrap"><p><strong>Resultado:</strong> {output}</p></div>}
      </div>
    </main>
  );
}
