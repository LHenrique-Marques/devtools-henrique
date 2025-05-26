'use client';

import { useState } from 'react';
import { Botao, GrupoBotoes } from '../components/Botoes';
import Resultado from '../components/Resultado';
import ComoUtilizar from '../components/ComoUtilizar';

function gerarCPF() {
  const rand = () => Math.floor(Math.random() * 9);
  const n = Array.from({ length: 9 }, rand);

  const d1 =
    11 -
    ((n[0] * 10 +
      n[1] * 9 +
      n[2] * 8 +
      n[3] * 7 +
      n[4] * 6 +
      n[5] * 5 +
      n[6] * 4 +
      n[7] * 3 +
      n[8] * 2) %
      11);
  const dig1 = d1 >= 10 ? 0 : d1;

  const d2 =
    11 -
    ((n[0] * 11 +
      n[1] * 10 +
      n[2] * 9 +
      n[3] * 8 +
      n[4] * 7 +
      n[5] * 6 +
      n[6] * 5 +
      n[7] * 4 +
      n[8] * 3 +
      dig1 * 2) %
      11);
  const dig2 = d2 >= 10 ? 0 : d2;

  return `${n.join('')}${dig1}${dig2}`;
}

export default function GeradorCpfClient() {
  const [cpf, setCpf] = useState('');

  const gerar = () => {
    setCpf(gerarCPF());
  };

  const limpar = () => {
    setCpf('');
  };

  const copiar = () => {
    navigator.clipboard.writeText(cpf);
    alert('CPF copiado!');
  };

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)] px-4 pt-24 pb-24 text-center">
      <div className="rounded-2xl shadow-lg p-8 max-w-3xl w-full bg-gradient-to-br from-purple-800 via-neutral-950 to-black border border-neutral-800">
        <h1 className="text-4xl font-bold mb-4 ">Gerador de CPF</h1>
        <p className="mb-6 text-neutral-400 ">
          Gere <strong>CPFs válidos</strong> para testes e desenvolvimento de sistemas.
        </p>
        <div className='flex justify-center'>
        <GrupoBotoes >
          <Botao onClick={gerar}>Gerar CPF</Botao>
          <Botao onClick={limpar}>Limpar</Botao>
          <Botao onClick={copiar} disabled={!cpf}>Copiar CPF</Botao>
        </GrupoBotoes>
        </div>
        <Resultado
          resultados={[
            { label: 'CPF Gerado', valor: cpf },
          ]}
        />
        <ComoUtilizar
          itens={[
            'Clique em <strong>“Gerar CPF”</strong> para gerar um CPF válido aleatório.',
            'O CPF aparecerá no card de <strong>“CPF Gerado”</strong>.',
            'Clique em <strong>“Copiar CPF”</strong> para copiar o CPF para sua área de transferência.',
            'Clique em <strong>“Limpar”</strong> para apagar o CPF atual e gerar outro se desejar.',
            'Este gerador é para uso em <strong>testes de sistemas e validações</strong>.',
          ]}
        />
      </div>
    </main>
  );
}
