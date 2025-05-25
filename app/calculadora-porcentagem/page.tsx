import { Metadata } from 'next';
import CalculadoraPorcentagemClient from './calculadora-porcentagem-client';

export const metadata: Metadata = {
  title: 'Calculadora de Porcentagem | DevTools',
  description: 'Calcule porcentagens, descontos e acréscimos de forma rápida e fácil.',
};

export default function Page() {
  return <CalculadoraPorcentagemClient />;
}
