import { Metadata } from 'next';
import GeradorCpfClient from './gerador-cpf-client';

export const metadata: Metadata = {
  title: 'Gerador de CPF | DevTools',
  description: 'Gere CPFs válidos para testes de forma rápida e fácil.',
};

export default function Page() {
  return <GeradorCpfClient />;
}
