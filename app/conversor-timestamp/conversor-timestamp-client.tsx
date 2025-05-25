'use client';

import { useState } from 'react';
import Link from 'next/link';
import ComoUtilizar from '../components/ComoUtilizar';
import Resultado from '../components/Resultado';
import { Botao,GrupoBotoes } from '../components/Botoes';

export default function ConversorTimestampClient() {
  const [timestamp, setTimestamp] = useState('');
  const [data, setData] = useState('');

  const toDate = () => {
    const date = new Date(Number(timestamp) * 1000);
    if (isNaN(date.getTime())) {
      alert('Timestamp inválido!');
      return;
    }
    setData(date.toLocaleString());
  };

  const toTimestamp = () => {
    const date = new Date(data);
    if (isNaN(date.getTime())) {
      alert('Data inválida!');
      return;
    }
    setTimestamp(Math.floor(date.getTime() / 1000).toString());
  };

  const limpar = () => {
    setTimestamp('');
    setData('');
  };

  const copiar = (texto: string) => {
    navigator.clipboard.writeText(texto);
    alert('Copiado!');
  };

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)] px-4">
      <div className="bg-neutral-800 border border-neutral-700 rounded-2xl shadow-lg p-8 max-w-3xl w-full">
        <Link href="/" className="text-red-400 hover:underline">&larr; Voltar</Link>

        <h1 className="text-4xl font-bold mb-4">🕓 Conversor Timestamp</h1>
        <p className="mb-6 text-neutral-400">Converta entre <strong>Timestamp UNIX</strong> e <strong>Data legível</strong>.</p>

        {/* Inputs */}
        <div className="flex flex-col gap-4 mb-6">
          <input
            type="text"
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
            placeholder="Timestamp UNIX"
            className="p-5 border border-neutral-600 rounded-xl bg-neutral-900 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <Botao onClick={toDate}>Para Data</Botao>

          <input
            type="text"
            value={data}
            onChange={(e) => setData(e.target.value)}
            placeholder="Data (ex.: 2025-05-23T04:00)"
            className="p-5 border border-neutral-600 rounded-xl bg-neutral-900 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <Botao onClick={toTimestamp}>Para Timestamp</Botao>
        </div>

        {/* Botões de ação */}
        <GrupoBotoes>
          <Botao onClick={limpar}>Limpar</Botao>
          {timestamp && <Botao onClick={() => copiar(timestamp)}>Copiar Timestamp</Botao>}
          {data && <Botao onClick={() => copiar(data)}>Copiar Data</Botao>}
        </GrupoBotoes>

        {/* Resultado */}
        <Resultado
          resultados={[
            timestamp && { label: 'Timestamp', valor: timestamp },
            data && { label: 'Data', valor: data },
          ]}
        />

        {/* Como utilizar */}
        <ComoUtilizar
          itens={[
            'No campo <strong>"Timestamp"</strong>, insira um valor em timestamp UNIX (ex.: 1716403200).',
            'Clique em <strong>"Para Data"</strong> para converter o timestamp em uma data legível.',
            'No campo <strong>"Data"</strong>, insira uma data no formato aceito (ex.: <strong>2025-05-23T04:00</strong>).',
            'Clique em <strong>"Para Timestamp"</strong> para gerar o timestamp UNIX.',
            'Use <strong>Copiar</strong> para copiar qualquer um dos resultados.',
            'Clique em <strong>Limpar</strong> para apagar os campos e começar novamente.',
          ]}
        />
      </div>
    </main>
  );
}
