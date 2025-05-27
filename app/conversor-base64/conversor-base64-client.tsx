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
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)] px-4 pt-24 pb-24">
      <div className="rounded-2xl shadow-lg p-8 max-w-3xl w-full bg-gradient-to-br from-purple-800 via-neutral-950 to-black border border-neutral-800">

        <h1 className="text-4xl font-bold mb-4"> Conversor Base64</h1>
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
        {/* Descrição SEO e Explicação */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">
            O que é um Conversor Base64?
          </h2>
          <p className="text-neutral-400 mb-2">
            O Conversor Base64 é uma ferramenta online que permite transformar qualquer texto em código Base64 e vice-versa. O Base64 é um método de codificação que converte dados em uma sequência de caracteres ASCII, frequentemente utilizado para transferir dados em formatos como JSON, XML e APIs, além de ser muito usado no desenvolvimento web para codificar imagens, arquivos e dados sensíveis.
          </p>
          <p className="text-neutral-400">
            Use esta ferramenta para codificar textos em Base64 ou decodificar de forma simples, rápida e gratuita, diretamente no seu navegador. Nenhum dado é armazenado e o processo é 100% seguro.
          </p>
        </div>


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
