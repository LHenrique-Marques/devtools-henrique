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
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)] px-4">
      <div className="bg-neutral-800 border border-neutral-700 rounded-2xl shadow-lg p-8 max-w-3xl w-full">
        <Link href="/" className="text-red-400 hover:underline">&larr; Voltar</Link>

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

        <GrupoBotoes>
          <Botao onClick={validar}>Validar CPF</Botao>
          <Botao onClick={limpar}>Limpar</Botao>
          <Botao onClick={copiar} disabled={!resultado}>Copiar Resultado</Botao>
        </GrupoBotoes>

        <Resultado
          resultados={[
            resultado && { label: 'Resultado', valor: resultado },
          ]}
        />

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
