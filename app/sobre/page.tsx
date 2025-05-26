import { Metadata } from 'next';
import SobreClient from './sobre-client';

export const metadata: Metadata = {
  title: 'Sobre | DevTools',
  description: 'Saiba mais sobre o projeto DevTools, quem desenvolveu e o objetivo das ferramentas online.',
  alternates: {
    canonical: 'https://thedevtools.com.br/sobre',
  },
  openGraph: {
    title: 'Sobre | DevTools',
    description: 'Saiba mais sobre o projeto DevTools, quem desenvolveu e o objetivo das ferramentas online.',
    url: 'https://thedevtools.com.br/sobre',
    siteName: 'DevTools',
    images: [
      {
        url: 'https://thedevtools.com.br/images/banner-devtools.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre | DevTools',
    description: 'Saiba mais sobre o projeto DevTools, quem desenvolveu e o objetivo das ferramentas online.',
    images: ['https://thedevtools.com.br/images/banner-devtools.png'],
  },
};

export default function Page() {
  return <SobreClient />;
}
