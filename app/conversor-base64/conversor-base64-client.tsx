'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Botao, GrupoBotoes } from '../components/Botoes';
import Resultado from '../components/Resultado';
import ComoUtilizar from '../components/ComoUtilizar';

export default function ConversorBase64Client() {
  const [input, setInput] = useState('');
  const [resultado, setResultado] = useState('');

  const encodeBase64 = () => {
    try {
      const encoded = btoa(input);
      setResultado(encoded);
    } catch {
      alert('Erro ao codificar! Verifique seu texto.');
    }
  };

  const decodeBase64 = () => {
    try {
      const decoded = atob(input);
      setResultado(decoded);
    } catch {
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
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)] px-4">
      <div className="bg-neutral-800 border border-neutral-700 rounded-2xl shadow-lg p-8 max-w-4xl w-full">
        <Link href="/" className="text-red-400 hover:underline">&larr; Voltar</Link>

        <h1 className="text-4xl font-bold mb-4">🔄 Conversor Base64</h1>
        <p className="mb-6 text-neutral-400">
          Codifique textos para <strong>Base64</strong> ou decodifique de <strong>Base64</strong> para texto normal.
        </p>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={5}
          className="w-full p-5 border border-neutral-600 rounded-xl mb-4 bg-neutral-900 text-neutral-100 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Digite ou cole seu texto aqui..."
        />

        <GrupoBotoes>
          <Botao onClick={encodeBase64}>Codificar em Base64</Botao>
          <Botao onClick={decodeBase64}>Decodificar de Base64</Botao>
          <Botao onClick={limpar}>Limpar</Botao>
          <Botao onClick={copiar} disabled={!resultado}>
            Copiar Resultado
          </Botao>
        </GrupoBotoes>

        <Resultado
          resultados={[
            { label: 'Resultado', valor: resultado },
          ]}
        />

        <ComoUtilizar
          itens={[
            'Digite ou cole seu texto na área <strong>“Digite ou cole seu texto aqui...”</strong>.',
            'Clique em <strong>“Codificar em Base64”</strong> para transformar seu texto em Base64.',
            'Clique em <strong>“Decodificar de Base64”</strong> se quiser converter um texto Base64 de volta para texto normal.',
            'O <strong>resultado</strong> aparecerá no card abaixo dos botões.',
            'Clique em <strong>“Copiar Resultado”</strong> para copiar o conteúdo gerado.',
            'Use o botão <strong>“Limpar”</strong> para apagar os campos e começar um novo processo.',
          ]}
        />
      </div>
    </main>
  );
}
