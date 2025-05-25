import { Metadata } from 'next';
import ContadorCaracteresClient from './contador-caracteres-client';

export const metadata: Metadata = {
  title: 'Contador de Caracteres | DevTools',
  description: 'Conte caracteres, palavras e linhas facilmente.',
};

export default function Page() {
  return <ContadorCaracteresClient />;
}
