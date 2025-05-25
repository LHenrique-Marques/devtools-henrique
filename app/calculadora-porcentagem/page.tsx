import { Metadata } from 'next';
import CalculadoraPorcentagem from './calculadora-porcentagem-client';

export const metadata: Metadata = {
  title: 'Calculadora de Porcentagem | DevTools',
  description: 'Calcule facilmente porcentagens, descontos e acréscimos com essa ferramenta online gratuita do DevTools.',
  keywords: ['calculadora de porcentagem', 'calcular desconto', 'ferramenta de porcentagem online', 'DevTools'],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://devtools-henrique.vercel.app/calculadora-porcentagem',
  },
  openGraph: {
    title: 'Calculadora de Porcentagem | DevTools',
    description: 'Calcule porcentagens, descontos e acréscimos de forma rápida e gratuita.',
    url: 'https://devtools-henrique.vercel.app/calculadora-porcentagem',
    siteName: 'DevTools',
    images: [
      {
        url: 'https://devtools-henrique.vercel.app/banner.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora de Porcentagem | DevTools',
    description: 'Calcule porcentagens, descontos e acréscimos de forma rápida e gratuita.',
    images: ['https://devtools-henrique.vercel.app/banner.png'],
  },
};

export default function Page() {
  return <CalculadoraPorcentagem />;
}
