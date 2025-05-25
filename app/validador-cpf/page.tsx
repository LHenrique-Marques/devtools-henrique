import { Metadata } from 'next';
import ValidadorCpfClient from './validador-cpf-client';

export const metadata: Metadata = {
  title: 'Validador de CPF | DevTools',
  description: 'Valide se um CPF é verdadeiro e siga padrões corretos facilmente.',
};

export default function Page() {
  return <ValidadorCpfClient />;
}
