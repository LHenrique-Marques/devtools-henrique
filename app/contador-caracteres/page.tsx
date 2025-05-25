import { Metadata } from 'next';
import ContadorCaracteres from './contador-caracteres-client';

export const metadata: Metadata = {
  title: 'Contador de Caracteres | DevTools',
  description: 'Calcule facilmente quantos caracteres e palavras tem no seu texto com essa ferramenta online gratuita do DevTools.',
};

export default function Page() {
  return <ContadorCaracteres />;
};
