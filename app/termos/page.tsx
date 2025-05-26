import Link from 'next/link';
import TermosContent from './client';

export const metadata = {
  title: 'Termos de Uso | DevTools',
  description: 'Termos e condições de uso do site DevTools e suas ferramentas.',
};

export default function TermosPage() {
  return (
        <TermosContent />
  );
}
