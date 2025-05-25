import { Metadata } from 'next';
import ConversorBase64Client from './conversor-base64-client';

export const metadata: Metadata = {
  title: 'Conversor Base64 | DevTools',
  description: 'Codifique e decodifique textos em Base64 de forma simples e rápida.',
};

export default function Page() {
  return <ConversorBase64Client />;
}
