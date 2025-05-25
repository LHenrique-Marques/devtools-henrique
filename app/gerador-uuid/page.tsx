import { Metadata } from 'next';
import GeradorUuidClient from './gerador-uuid-client';

export const metadata: Metadata = {
  title: 'Gerador de UUID | DevTools',
  description: 'Gere UUIDs aleatórios rapidamente para identificar recursos únicos.',
};

export default function Page() {
  return <GeradorUuidClient />;
}
