'use client';
import { useState } from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

export default function GeradorUUID() {
  const [uuid, setUuid] = useState('');

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-neutral-900 text-neutral-100 px-4">
      <div className="bg-neutral-800 border border-neutral-700 rounded-2xl shadow-lg p-8 max-w-3xl w-full">
        <Link href="/" className="text-red-400 hover:underline">&larr; Voltar</Link>
        <h1 className="text-4xl font-bold mb-4">🆔 Gerador de UUID</h1>
        <p className="mb-6 text-neutral-400">Gere UUIDs aleatórios para seus projetos.</p>

        <button
          onClick={() => setUuid(uuidv4())}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg mb-6 transition"
        >
          Gerar UUID
        </button>

        {uuid && <div className="text-xl"><p><strong>UUID:</strong> {uuid}</p></div>}
      </div>
    </main>
  );
}
