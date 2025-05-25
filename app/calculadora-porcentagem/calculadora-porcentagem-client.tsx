'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CalculadoraPorcentagem() {
  const [valor, setValor] = useState<number | ''>('');
  const [porcentagem, setPorcentagem] = useState<number | ''>('');

  const resultado =
    typeof valor === 'number' && typeof porcentagem === 'number'
      ? (valor * porcentagem) / 100
      : 0;

  const valorFinal =
    typeof valor === 'number' && typeof porcentagem === 'number'
      ? valor - resultado
      : 0;

  const limpar = () => {
    setValor('');
    setPorcentagem('');
  };

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-neutral-900 text-neutral-100 px-4">
      <div className="bg-neutral-800 border border-neutral-700 rounded-2xl shadow-lg p-8 max-w-3xl w-full">
        <Link href="/" className="text-red-400 hover:underline">
          &larr; Voltar
        </Link>

        <h1 className="text-4xl font-bold mb-4">📊 Calculadora de Porcentagem</h1>
        <p className="mb-6 text-neutral-400">
          Informe um valor e uma porcentagem para calcular descontos, acréscimos ou proporções.
        </p>

        <div className="flex flex-col gap-4 mb-6">
          <input
            type="number"
            min={0}
            value={valor}
            onChange={(e) => setValor(e.target.value === '' ? '' : parseFloat(e.target.value))}
            placeholder="Valor (ex.: 150)"
            className="p-5 border border-neutral-600 rounded-xl bg-neutral-900 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="number"
            min={0}
            value={porcentagem}
            onChange={(e) => setPorcentagem(e.target.value === '' ? '' : parseFloat(e.target.value))}
            placeholder="Porcentagem (ex.: 20)"
            className="p-5 border border-neutral-600 rounded-xl bg-neutral-900 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            onClick={limpar}
            className="bg-neutral-700 border border-neutral-600 rounded-xl px-4 py-2 text-sm hover:bg-neutral-600 transition"
          >
            Limpar
          </button>
        </div>

        <div className="border-t border-neutral-700 pt-6 text-xl">
          <p className="mb-2">
            <strong>Porcentagem Calculada:</strong> {resultado.toFixed(2)}
          </p>
          <p>
            <strong>Valor Final:</strong> {valorFinal.toFixed(2)}
          </p>
        </div>
      </div>
    </main>
  );
}
