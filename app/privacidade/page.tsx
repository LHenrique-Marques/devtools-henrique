import Link from 'next/link';
import PrivacidadeContent from './client';

export const metadata = {
  title: 'Política de Privacidade | DevTools',
  description: 'Saiba como coletamos, usamos e protegemos suas informações no DevTools.',
};

export default function PrivacidadePage() {
  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-neutral-900 text-neutral-100 px-4 pt-16">
      <div className="max-w-6xl w-full">
        <Link href="/" className="text-red-400 hover:underline mb-6 block">&larr; Voltar</Link>
        <PrivacidadeContent />
      </div>
    </main>
  );
}
