'use client';

import { useState } from 'react';
import Link from 'next/link';
import ComoUtilizar from '../components/ComoUtilizar';
export default function ConversorBase64() {
  const [input, setInput] = useState('');
  const [resultado, setResultado] = useState('');

  const encodeBase64 = () => {
    try {
      const encoded = btoa(input);
      setResultado(encoded);
    } catch (error) {
      alert('Erro ao codificar! Verifique seu texto.');
    }
  };

  const decodeBase64 = () => {
    try {
      const decoded = atob(input);
      setResultado(decoded);
    } catch (error) {
      alert('Base64 inválido!');
    }
  };

  const limpar = () => {
    setInput('');
    setResultado('');
  };

  const copiar = () => {
    navigator.clipboard.writeText(resultado);
    alert('Resultado copiado!');
  };

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-neutral-900 text-neutral-100 px-4">
      <div className="bg-neutral-800 border border-neutral-700 rounded-2xl shadow-lg p-8 max-w-4xl w-full">
        
        {/* Voltar */}
        <Link href="/" className="mb-4 text-red-400 hover:underline">&larr; Voltar</Link>

        {/* Título */}
        <h1 className="text-4xl font-bold mb-4">🔄 Conversor Base64</h1>
        <p className="mb-6 text-neutral-400">
          Codifique textos para <strong>Base64</strong> ou decodifique de <strong>Base64</strong> para texto normal.
        </p>

        {/* Input */}
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={5}
          className="w-full p-5 border border-neutral-600 rounded-xl mb-4 bg-neutral-900 text-neutral-100 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Digite ou cole seu texto aqui..."
        />

        {/* Botões */}
        <div className="flex flex-wrap gap-4 mb-6">
          <button
            onClick={encodeBase64}
            className="bg-neutral-700 border border-neutral-600 rounded-xl px-4 py-2 hover:bg-neutral-600 transition"
          >
            Codificar em Base64
          </button>
          <button
            onClick={decodeBase64}
            className="bg-neutral-700 border border-neutral-600 rounded-xl px-4 py-2 hover:bg-neutral-600 transition"
          >
            Decodificar de Base64
          </button>
          <button
            onClick={limpar}
            className="bg-neutral-700 border border-neutral-600 rounded-xl px-4 py-2 hover:bg-neutral-600 transition"
          >
            Limpar
          </button>
          <button
            onClick={copiar}
            disabled={!resultado}
            className={`${
              resultado ? 'hover:bg-neutral-600' : 'opacity-50 cursor-not-allowed'
            } bg-neutral-700 border border-neutral-600 rounded-xl px-4 py-2 transition`}
          >
            Copiar Resultado
          </button>
        </div>

        {/* Resultado */}
        <div className="border-t border-neutral-700 pt-6">
          <h2 className="text-2xl font-semibold mb-2">Resultado</h2>
          <textarea
            value={resultado}
            readOnly
            rows={5}
            className="w-full p-5 border border-neutral-600 rounded-xl bg-neutral-900 text-neutral-100 resize-none"
            placeholder="O resultado aparecerá aqui..."
          />
        </div>
        <ComoUtilizar
            itens={[
                'Digite ou cole seu texto na área <strong>“Digite ou cole seu texto aqui...”</strong>.',
                'Clique em <strong>“Codificar em Base64”</strong> para transformar seu texto em Base64.',
                'Clique em <strong>“Decodificar de Base64”</strong> se quiser converter um texto Base64 de volta para texto normal.',
                'O <strong>resultado</strong> aparecerá no campo abaixo dos botões.',
                'Clique em <strong>“Copiar Resultado”</strong> para copiar o conteúdo gerado.',
                'Use o botão <strong>“Limpar”</strong> para apagar os campos e começar um novo processo.',
            ]}
        />
      </div>
    </main>
  );
}
