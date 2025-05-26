'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Botao, GrupoBotoes } from '../components/Botoes';
import Resultado from '../components/Resultado';
import ComoUtilizar from '../components/ComoUtilizar';

export default function CalculadoraPorcentagemClient() {
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
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)] px-4 pb-24 pt-24">
      <div className="rounded-2xl shadow-lg p-8 max-w-3xl w-full bg-gradient-to-br from-purple-800 via-neutral-950 to-black border border-neutral-800">
        
        {/* Título */}
        <h1 className="text-4xl font-bold mb-4 text-white text-center">Calculadora de Porcentagem</h1>
        <p className="mb-6 text-neutral-400">
          Informe um valor e uma porcentagem para calcular descontos, acréscimos ou proporções.
        </p>

        {/* Inputs */}
        <div className="flex flex-col gap-4 mb-6">
          <input
            type="number"
            min={0}
            value={valor}
            onChange={(e) => setValor(e.target.value === '' ? '' : parseFloat(e.target.value))}
            placeholder="Valor (ex.: 150)"
            className="p-5 border border-neutral-700 rounded-xl bg-neutral-900 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="number"
            min={0}
            value={porcentagem}
            onChange={(e) => setPorcentagem(e.target.value === '' ? '' : parseFloat(e.target.value))}
            placeholder="Porcentagem (ex.: 20)"
            className="p-5 border border-neutral-700 rounded-xl bg-neutral-900 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Botões */}
        <GrupoBotoes>
          <Botao onClick={limpar}>Limpar</Botao>
        </GrupoBotoes>

        {/* Resultado */}
        <Resultado
          resultados={[
            { label: 'Porcentagem Calculada', valor: resultado.toFixed(2) },
            { label: 'Valor Final', valor: valorFinal.toFixed(2) },
          ]}
        />

        {/* Como utilizar */}
        <ComoUtilizar
          itens={[
            'No campo <strong>"Valor"</strong>, insira o número base que deseja calcular (ex.: <strong>150</strong>).',
            'No campo <strong>"Porcentagem"</strong>, insira a taxa percentual que deseja calcular (ex.: <strong>20</strong>).',
            'O campo <strong>"Porcentagem Calculada"</strong> mostra o valor referente à porcentagem (ex.: <strong>30</strong> é 20% de 150).',
            'O campo <strong>"Valor Final"</strong> mostra o valor após o desconto ou subtração da porcentagem (ex.: <strong>120</strong>).',
            'Use o botão <strong>Limpar</strong> para zerar os campos e começar um novo cálculo.',
          ]}
        />
      </div>
    </main>
  );
}
