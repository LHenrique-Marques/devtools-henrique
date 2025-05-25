import { Metadata } from 'next';
import GeradorSenhaClient from './gerador-senha-client';

export const metadata: Metadata = {
  title: 'Gerador de Senhas | DevTools',
  description: 'Gere senhas seguras e aleatórias rapidamente.',
};

export default function Page() {
  return <GeradorSenhaClient />;
}
