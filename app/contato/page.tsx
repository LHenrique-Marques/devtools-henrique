import { Metadata } from 'next'
import ContatoClient from './client'

export const metadata: Metadata = {
  title: 'Contato | DevTools',
  description: 'Entre em contato com o DevTools. Envie dúvidas, sugestões ou feedback.',
  alternates: {
    canonical: 'https://thedevtools.com.br/contato',
  },
  openGraph: {
    title: 'Contato | DevTools',
    description: 'Entre em contato com o DevTools. Envie dúvidas, sugestões ou feedback.',
    url: 'https://thedevtools.com.br/contato',
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
    title: 'Contato | DevTools',
    description: 'Entre em contato com o DevTools. Envie dúvidas, sugestões ou feedback.',
    images: ['https://thedevtools.com.br/images/banner-devtools.png'],
  },
}

export default function Page() {
  return <ContatoClient />
}
