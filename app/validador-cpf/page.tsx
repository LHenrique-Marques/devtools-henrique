'use client';

import { useState } from 'react';
import Link from 'next/link';

function validarCPF(cpf: string) {
  cpf = cpf.replace(/[^\d]/g, '');

  if (cpf.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  const calc = (base: number) => {
    let soma = 0;
    for (let i = 0; i < base; i++) {
      soma += parseInt(cpf.charAt(i)) * (base + 1 - i);
    }
    const resto = (soma * 10) % 11;
    return resto === 10 ? 0 : resto;
  };

  const dig1 = calc(9);
  const dig2 = calc(10);

  return dig1 === parseInt(cpf.charAt(9)) && dig2 === parseInt(cpf.charAt(10));
}

export default function ValidadorCPF() {
  const [cpf, setCpf] = useState('');
  const [resultado, setResultado] = useState<null | boolean>(null);

  const handleValidar = () => {
    setResultado(validarCPF(cpf));
  };

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-neutral-900 text-neutral-100 px-4">
      <div className="bg-neutral-800 border border-neutral-700 rounded-2xl shadow-lg p-8 max-w-3xl w-full">
        <Link href="/" className="text-red-400 hover:underline">&larr; Voltar</Link>

        <h1 className="text-4xl font-bold mb-4">🕵️‍♂️ Validador de CPF</h1>
        <p className="mb-6 text-neutral-400">
          Verifique se um CPF é válido digitando abaixo.
        </p>

        <input
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          placeholder="Digite o CPF (ex.: 12345678909)"
          className="p-4 border border-neutral-600 rounded-lg bg-neutral-900 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-red-500 w-full mb-4"
        />

        <button
          onClick={handleValidar}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg mb-6 transition"
        >
          Validar CPF
        </button>

        {resultado !== null && (
          <div className="text-xl">
            {resultado ? (
              <p className="text-green-500"><strong>CPF Válido ✅</strong></p>
            ) : (
              <p className="text-red-500"><strong>CPF Inválido ❌</strong></p>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
