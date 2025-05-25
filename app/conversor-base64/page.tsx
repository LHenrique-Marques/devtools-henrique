import { Metadata } from 'next';
import ConversorBase64 from './conversor-base64-client';
export const metadata: Metadata = {
  title: 'Contador de Caracteres | DevTools',
  description: 'Calcule facilmente quantos caracteres e palavras tem no seu texto com essa ferramenta online gratuita do DevTools.',
};

export default function Page() {
  return <ConversorBase64/>;
};
