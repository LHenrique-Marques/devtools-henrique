'use client';

import { useState } from 'react';
import Link from 'next/link';
import ComoUtilizar from '../components/ComoUtilizar';
import Resultado from '../components/Resultado';
import { Botao, GrupoBotoes } from '../components/Botoes';

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
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)] px-4 pt-24 pb-24">
      
      <div className="rounded-2xl shadow-lg p-8 max-w-3xl w-full bg-gradient-to-br from-purple-950 via-neutral-850 to-black border border-neutral-800">
        <h1 className="text-4xl font-bold mb-4 text-white text-center">Contador de Caracteres</h1>
        <p className="mb-6 text-neutral-400">
          Conte <strong>caracteres</strong>, <strong>palavras</strong> e <strong>linhas</strong> no seu texto.
        </p>

        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          rows={8}
          className="w-full p-5 border border-neutral-900 rounded-xl mb-4 bg-neutral-900 text-neutral-100 resize-none 
          focus:outline-none focus:ring-2 focus:ring-purple-750"
          placeholder="Digite seu texto aqui..."
        />

        <GrupoBotoes>
          <Botao onClick={limpar}>Limpar</Botao>
          <Botao onClick={copiar} disabled={!texto}>
            Copiar
          </Botao>
        </GrupoBotoes>

        <Resultado
          resultados={[
            { label: 'Caracteres', valor: caracteres.toString() },
            { label: 'Palavras', valor: palavras.toString() },
            { label: 'Linhas', valor: linhas.toString() },
          ]}
        />
                {/* Descrição SEO e Explicação */}
        <div className="mb-6 pt-24">
          <h2 className="text-2xl font-bold text-white mb-2">
            O que é um Contador de Caracteres?
          </h2>
          <p className="text-neutral-400 mb-2">
            O contador de caracteres é uma ferramenta online que permite contar rapidamente o número de <strong>caracteres</strong>, <strong>palavras</strong> e <strong>linhas</strong> em qualquer texto. É muito utilizado por redatores, desenvolvedores, criadores de conteúdo, estudantes e profissionais que precisam atender a limites de texto, como em redes sociais, descrições, artigos, códigos ou formulários.
          </p>
          <p className="text-neutral-400">
            Basta colar ou digitar seu texto na caixa e obter instantaneamente as contagens, de forma precisa e gratuita. Nenhum dado é armazenado e tudo funciona diretamente no seu navegador, sem necessidade de cadastro.
          </p>
        </div>

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
