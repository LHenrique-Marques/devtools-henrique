'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function CalculadoraPorcentagem() {
  const [valor, setValor] = useState(0);
  const [porcentagem, setPorcentagem] = useState(0);

  const resultado = (valor * porcentagem) / 100;

  return (
    <main className="flex flex-col min-h-screen p-8 bg-gray-50">
      <Link href="/" className="mb-4 text-blue-600 hover:underline">&larr; Voltar</Link>
      <h1 className="text-3xl font-bold mb-4">📊 Calculadora de Porcentagem</h1>
      <p className="mb-6 text-gray-700">Digite um valor e uma porcentagem para calcular.</p>
      <div className="flex flex-col gap-4 mb-6">
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(parseFloat(e.target.value))}
          placeholder="Valor"
          className="p-4 border rounded-md"
        />
        <input
          type="number"
          value={porcentagem}
          onChange={(e) => setPorcentagem(parseFloat(e.target.value))}
          placeholder="Porcentagem"
          className="p-4 border rounded-md"
        />
      </div>
      <div className="text-lg">
        <p><strong>Resultado:</strong> {resultado}</p>
      </div>
    </main>
  );
}