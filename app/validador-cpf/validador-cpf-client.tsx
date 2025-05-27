'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Botao, GrupoBotoes } from '../components/Botoes';
import Resultado from '../components/Resultado';
import ComoUtilizar from '../components/ComoUtilizar';

function validarCPF(cpf: string) {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  return resto === parseInt(cpf.charAt(10));
}

export default function ValidadorCpfClient() {
  const [cpf, setCpf] = useState('');
  const [resultado, setResultado] = useState<string | null>(null);

  const validar = () => {
    const valido = validarCPF(cpf);
    setResultado(valido ? 'CPF Válido ✅' : 'CPF Inválido ❌');
  };

  const limpar = () => {
    setCpf('');
    setResultado(null);
  };

  const copiar = () => {
    if (resultado) {
      navigator.clipboard.writeText(resultado);
      alert('Resultado copiado!');
    }
  };

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)] px-4 pt-24 pb-24">
      <div className="text-center rounded-2xl shadow-lg p-8 max-w-3xl w-full bg-gradient-to-br from-purple-800 via-neutral-950 to-black border border-neutral-800">
        <h1 className="text-4xl font-bold mb-4">🕵️‍♂️ Validador de CPF</h1>
        <p className="mb-6 text-neutral-400">
          Verifique se um <strong>CPF</strong> é válido segundo os critérios de validação.
        </p>

        <input
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          placeholder="Digite o CPF (apenas números ou formatado)"
          className="w-full p-5 border border-neutral-600 rounded-xl mb-4 bg-neutral-900 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <div className='flex justify-center'>
        <GrupoBotoes>
          <Botao onClick={validar}>Validar CPF</Botao>
          <Botao onClick={limpar}>Limpar</Botao>
          <Botao onClick={copiar} disabled={!resultado}>Copiar Resultado</Botao>
        </GrupoBotoes>
        </div>
        <Resultado
          resultados={[
            resultado && { label: 'Resultado', valor: resultado },
          ]}
        />
        {/* Descrição SEO e Explicação */}
        <div className="mb-6 pt-24">
          <h2 className="text-2xl font-bold text-white mb-2">
            O que é um Validador de CPF?
          </h2>
          <p className="text-neutral-400 mb-2">
            O Validador de CPF é uma ferramenta online que permite <strong>verificar se um CPF é válido</strong> segundo os critérios matemáticos definidos pela Receita Federal do Brasil. Ele verifica se os dígitos verificadores estão corretos, garantindo que o número informado segue a regra de formação de um CPF.
          </p>
          <p className="text-neutral-400">
            Essa validação é extremamente útil para desenvolvedores, empresas, sistemas de cadastro e aplicações que precisam garantir que um CPF inserido pelo usuário não possui erros de digitação. A validação é feita diretamente no navegador, de forma gratuita, rápida, sem necessidade de cadastro e com total segurança.
          </p>
        </div>

        <ComoUtilizar
          itens={[
            'Digite o <strong>CPF</strong> no campo acima, pode ser formatado (xxx.xxx.xxx-xx) ou apenas números.',
            'Clique em <strong>“Validar CPF”</strong> para verificar se o CPF é válido.',
            'O resultado aparecerá no card <strong>“Resultado”</strong>.',
            'Clique em <strong>“Copiar Resultado”</strong> para copiar.',
            'Clique em <strong>“Limpar”</strong> para apagar e testar outro CPF.',
          ]}
        />
      </div>
    </main>
  );
}
