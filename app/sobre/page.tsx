import { Metadata } from 'next';
import SobreClient from './sobre-client';

export const metadata: Metadata = {
  title: 'Sobre | DevTools',
  description: 'Saiba mais sobre o projeto DevTools, quem desenvolveu e o objetivo das ferramentas online.',
  alternates: {
    canonical: 'https://devtools-henrique.vercel.app/sobre',
  },
  openGraph: {
    title: 'Sobre | DevTools',
    description: 'Saiba mais sobre o projeto DevTools, quem desenvolveu e o objetivo das ferramentas online.',
    url: 'https://devtools-henrique.vercel.app/sobre',
    siteName: 'DevTools',
    images: [
      {
        url: 'https://devtools-henrique.vercel.app/images/banner-devtools.png',
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
    images: ['https://devtools-henrique.vercel.app/images/banner-devtools.png'],
  },
};

export default function Page() {
  return <SobreClient />;
}
