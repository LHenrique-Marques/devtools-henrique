import Link from 'next/link';
import TermosContent from './client';

export const metadata = {
  title: 'Termos de Uso | DevTools',
  description: 'Termos e condições de uso do site DevTools e suas ferramentas.',
};

export default function TermosPage() {
  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-neutral-900 text-neutral-100 px-4 pt-16">
      <div className="max-w-6xl w-full">
        <Link href="/" className="text-red-400 hover:underline mb-6 block">&larr; Voltar</Link>
        <TermosContent />
      </div>
    </main>
  );
}
