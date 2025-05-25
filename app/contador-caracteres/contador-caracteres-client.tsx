'use client';

import { useState } from 'react';
import Link from 'next/link';
import ComoUtilizar from '../components/ComoUtilizar';

export default function ContadorCaracteres() {
  const [texto, setTexto] = useState('');

  const caracteres = texto.length;
  const palavras = texto.trim() === '' ? 0 : texto.trim().split(/\s+/).length;
  const linhas = texto === '' ? 0 : texto.split(/\r\n|\r|\n/).length;

  const limpar = () => setTexto('');
  const copiar = () => {
    navigator.clipboard.writeText(texto);
    alert('Texto copiado!');
  };

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-neutral-900 text-neutral-100 px-4">
      <div className="bg-neutral-800 border border-neutral-700 rounded-2xl shadow-lg p-8 max-w-3xl w-full">
        
        {/* Link Voltar */}
        <Link href="/" className="mb-4 text-red-400 hover:underline">&larr; Voltar</Link>

        {/* Título */}
        <h1 className="text-4xl font-bold mb-4">📝 Contador de Caracteres</h1>
        <p className="mb-6 text-neutral-400">
          Digite ou cole seu texto abaixo para contar <strong>caracteres</strong>, <strong>palavras</strong> e <strong>linhas</strong>.
        </p>

        {/* Área de texto */}
        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          rows={8}
          className="w-full p-5 border border-neutral-600 rounded-xl mb-4 bg-neutral-900 text-neutral-100 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Digite seu texto aqui..."
        />

        {/* Botões */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={limpar}
            className="bg-neutral-700 border border-neutral-600 rounded-xl px-4 py-2 text-sm hover:bg-neutral-600 transition"
          >
            Limpar
          </button>
          <button
            onClick={copiar}
            className="bg-neutral-700 border border-neutral-600 rounded-xl px-4 py-2 text-sm hover:bg-neutral-600 transition"
          >
            Copiar
          </button>
        </div>

        {/* Contadores */}
        <div className="border-t border-neutral-700 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-neutral-900 rounded-xl p-4 border border-neutral-700">
            <p className="text-neutral-400 mb-1">Caracteres</p>
            <p className="text-2xl font-bold">{caracteres}</p>
          </div>
          <div className="bg-neutral-900 rounded-xl p-4 border border-neutral-700">
            <p className="text-neutral-400 mb-1">Palavras</p>
            <p className="text-2xl font-bold">{palavras}</p>
          </div>
          <div className="bg-neutral-900 rounded-xl p-4 border border-neutral-700">
            <p className="text-neutral-400 mb-1">Linhas</p>
            <p className="text-2xl font-bold">{linhas}</p>
          </div>
        </div>
        <ComoUtilizar
        itens={[
          'Digite ou cole seu texto na área indicada.',
          'O campo <strong>"Caracteres"</strong> mostra a quantidade total de caracteres, incluindo espaços.',
          'O campo <strong>"Palavras"</strong> conta o número de palavras, separadas por espaços.',
          'O campo <strong>"Linhas"</strong> indica quantas linhas existem no texto (cada quebra de linha conta).',
          'Use o botão <strong>Limpar</strong> para apagar tudo e começar novamente.',
          'Use o botão <strong>Copiar</strong> para copiar seu texto para a área de transferência.',
        ]}
      />

      </div>
    </main>
  );
}
