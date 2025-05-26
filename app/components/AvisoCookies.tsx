'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AvisoCookies() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const aceitou = localStorage.getItem('cookies');
    if (!aceitou) setVisivel(true);
  }, []);

  const aceitar = () => {
    localStorage.setItem('cookies', 'aceito');
    setVisivel(false);
  };

  if (!visivel) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-neutral-800 border border-neutral-700 p-4 rounded-xl shadow-md max-w-xs text-sm z-50">
      <p className="text-neutral-300">
        Este site utiliza cookies para melhorar sua experiência.{' '}
        <Link href="/privacidade" className="text-red-500 underline hover:text-red-400">
          Saiba mais
        </Link>.
      </p>
      <button
        onClick={aceitar}
        className="mt-2 px-3 py-1 bg-red-600 hover:bg-red-500 rounded text-white text-sm"
      >
        Ok, entendi
      </button>
    </div>
  );
}
