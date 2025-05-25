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
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)] px-4">
      <div className="bg-neutral-800 border border-neutral-700 rounded-2xl shadow-lg p-8 max-w-3xl w-full">
        <Link href="/" className="text-red-400 hover:underline">&larr; Voltar</Link>

        <h1 className="text-4xl font-bold mb-4">🆔 Gerador de UUID</h1>
        <p className="mb-6 text-neutral-400">
          Gere <strong>UUIDs aleatórios</strong> para utilizar como identificadores únicos em sistemas, bancos de dados e APIs.
        </p>

        <GrupoBotoes>
          <Botao onClick={gerar}>Gerar UUID</Botao>
          <Botao onClick={limpar}>Limpar</Botao>
          <Botao onClick={copiar} disabled={!uuid}>Copiar UUID</Botao>
        </GrupoBotoes>

        <Resultado
          resultados={[
            { label: 'UUID Gerado', valor: uuid },
          ]}
        />

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
