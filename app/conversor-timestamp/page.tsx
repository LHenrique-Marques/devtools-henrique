'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ConversorTimestamp() {
  const [timestamp, setTimestamp] = useState('');
  const [data, setData] = useState('');

  const toDate = () => {
    const date = new Date(Number(timestamp) * 1000);
    setData(date.toLocaleString());
  };

  const toTimestamp = () => {
    const date = new Date(data);
    setTimestamp(Math.floor(date.getTime() / 1000).toString());
  };

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-neutral-900 text-neutral-100 px-4">
      <div className="bg-neutral-800 border border-neutral-700 rounded-2xl shadow-lg p-8 max-w-3xl w-full">
        <Link href="/" className="text-red-400 hover:underline">&larr; Voltar</Link>
        <h1 className="text-4xl font-bold mb-4">🕓 Conversor Timestamp</h1>
        <p className="mb-6 text-neutral-400">Converta entre Timestamp UNIX e Data legível.</p>

        <input
          type="text"
          value={timestamp}
          onChange={(e) => setTimestamp(e.target.value)}
          placeholder="Timestamp UNIX"
          className="p-4 border border-neutral-600 rounded-lg bg-neutral-900 text-neutral-100 mb-4 w-full"
        />
        <button onClick={toDate} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg mb-4">Para Data</button>

        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Data (ex.: 2025-05-23T04:00)"
          className="p-4 border border-neutral-600 rounded-lg bg-neutral-900 text-neutral-100 mb-4 w-full"
        />
        <button onClick={toTimestamp} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg">Para Timestamp</button>

        {(timestamp || data) && (
          <div className="text-xl mt-4">
            {timestamp && <p><strong>Timestamp:</strong> {timestamp}</p>}
            {data && <p><strong>Data:</strong> {data}</p>}
          </div>
        )}
      </div>
    </main>
  );
}