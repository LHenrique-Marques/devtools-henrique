'use client';

import { useState } from 'react';
import Link from 'next/link';
import ComoUtilizar from '../components/ComoUtilizar';
import Resultado from '../components/Resultado';
import { Botao,GrupoBotoes } from '../components/Botoes';

export default function ContadorCaracteresClient() {
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
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)] px-4">
      <div className="bg-neutral-800 border border-neutral-700 rounded-2xl shadow-lg p-8 max-w-3xl w-full">
        <Link href="/" className="text-red-400 hover:underline">&larr; Voltar</Link>

        <h1 className="text-4xl font-bold mb-4">📝 Contador de Caracteres</h1>
        <p className="mb-6 text-neutral-400">
          Conte <strong>caracteres</strong>, <strong>palavras</strong> e <strong>linhas</strong> no seu texto.
        </p>

        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          rows={8}
          className="w-full p-5 border border-neutral-600 rounded-xl mb-4 bg-neutral-900 text-neutral-100 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Digite seu texto aqui..."
        />

        <GrupoBotoes>
          <Botao onClick={limpar}>Limpar</Botao>
          <Botao onClick={copiar} disabled={!texto}>Copiar</Botao>
        </GrupoBotoes>

        <Resultado
          resultados={[
            { label: 'Caracteres', valor: caracteres.toString() },
            { label: 'Palavras', valor: palavras.toString() },
            { label: 'Linhas', valor: linhas.toString() },
          ]}
        />

        <ComoUtilizar
          itens={[
            'Digite ou cole seu texto na área indicada.',
            'O campo <strong>"Caracteres"</strong> mostra a quantidade total de caracteres, incluindo espaços.',
            'O campo <strong>"Palavras"</strong> conta o número de palavras separadas por espaço.',
            'O campo <strong>"Linhas"</strong> conta as quebras de linha no texto.',
            'Use <strong>Limpar</strong> para apagar tudo e começar novamente.',
            'Use <strong>Copiar</strong> para copiar o texto.',
          ]}
        />
      </div>
    </main>
  );
}
