'use client';

import { useState } from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { Botao, GrupoBotoes } from '../components/Botoes';
import Resultado from '../components/Resultado';
import ComoUtilizar from '../components/ComoUtilizar';

export default function GeradorUuidClient() {
  const [uuid, setUuid] = useState('');

  const gerar = () => {
    setUuid(uuidv4());
  };

  const limpar = () => {
    setUuid('');
  };

  const copiar = () => {
    navigator.clipboard.writeText(uuid);
    alert('UUID copiado!');
  };

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)] px-4 pt-24 pb-24">
      <div className="text-center rounded-2xl shadow-lg p-8 max-w-3xl w-full bg-gradient-to-br from-purple-800 via-neutral-950 to-black border border-neutral-800">

        <h1 className="text-4xl font-bold mb-4">Gerador de UUID</h1>
        <p className="mb-6 text-neutral-400">
          Gere <strong>UUIDs aleatórios</strong> para utilizar como identificadores únicos em sistemas, bancos de dados e APIs.
        </p>
        <div className='flex justify-center'>
        <GrupoBotoes>
          <Botao onClick={gerar}>Gerar UUID</Botao>
          <Botao onClick={limpar}>Limpar</Botao>
          <Botao onClick={copiar} disabled={!uuid}>Copiar UUID</Botao>
        </GrupoBotoes>
        </div>
        <Resultado
          resultados={[
            { label: 'UUID Gerado', valor: uuid },
          ]}
        />
        {/* Descrição SEO e Explicação */}
        <div className="mb-6 pt-24">
          <h2 className="text-2xl font-bold text-white mb-2">
            O que é um Gerador de UUID?
          </h2>
          <p className="text-neutral-400 mb-2">
            O Gerador de UUID é uma ferramenta online que cria <strong>UUIDs (Universally Unique Identifiers)</strong>, também conhecidos como identificadores únicos universais. Eles são amplamente utilizados no desenvolvimento de sistemas, bancos de dados, APIs e aplicações para garantir a criação de identificadores únicos, evitando conflitos de dados.
          </p>
          <p className="text-neutral-400">
            Utilize este gerador para obter UUIDs no padrão <strong>UUID v4</strong>, que são gerados de forma aleatória, garantindo unicidade e segurança. Tudo funciona diretamente no navegador, sem necessidade de cadastro, de forma gratuita, rápida e segura.
          </p>
        </div>

        <ComoUtilizar
          itens={[
            'Clique em <strong>“Gerar UUID”</strong> para gerar um identificador único aleatório.',
            'O UUID gerado aparecerá no card <strong>“UUID Gerado”</strong>.',
            'Clique em <strong>“Copiar UUID”</strong> para copiar o valor para a área de transferência.',
            'Clique em <strong>“Limpar”</strong> para remover o UUID atual e gerar um novo se desejar.',
            'UUIDs são amplamente utilizados como <strong>identificadores únicos</strong> em bancos de dados, APIs, sistemas e muito mais.',
          ]}
        />
      </div>
    </main>
  );
}
