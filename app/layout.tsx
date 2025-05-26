import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import AvisoCookies from './components/AvisoCookies';
import Footer from './components/Rodape';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'DevTools | Ferramentas Online Gratuitas',
  description: 'Conjunto de ferramentas online, rápidas e gratuitas para desenvolvedores e criadores. Confira todas as ferramentas disponíveis.',
  keywords: [
    'DevTools',
    'Ferramentas para desenvolvedores',
    'Gerador de CPF',
    'Validador de CPF',
    'Contador de caracteres',
    'Base64',
    'Gerador de UUID',
    'Conversor Timestamp',
    'JSON Formatter',
    'Calculadora de Porcentagem',
    'Gerador de Senha'
  ],
  openGraph: {
    title: 'DevTools | Ferramentas Online',
    description: 'Ferramentas úteis e gratuitas para desenvolvedores e criadores.',
    url: 'https://thedevtools.com.br',
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
    title: 'DevTools | Ferramentas Online',
    description: 'Ferramentas úteis e gratuitas para desenvolvedores e criadores.',
    images: ['https://thedevtools.com.br/images/banner-devtools.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        {/* Google Adsense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1484005881693287"
          crossOrigin="anonymous"
        ></script>

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ERMH66V5T7"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ERMH66V5T7');
            `,
          }}
        />
      </head>

      <body className={`${inter.className} bg-neutral-900 text-neutral-100 min-h-screen flex flex-col`}>

        {/* HEADER */}
        <header className="bg-neutral-800 border border-neutral-700 rounded-2xl p-6 shadow-md">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/favicon.png"
                alt="Logo DevTools"
                width={40}
                height={40}
                className="rounded-md"
              />
              <span className="text-2xl font-bold text-white hover:text-red-500 transition">
                DevTools
              </span>
            </Link>

            <nav className="flex gap-6 text-sm md:text-base">
              <Link href="/" className="hover:text-red-500 transition">Início</Link>
              <Link href="/sobre" className="hover:text-red-500 transition">Sobre</Link>
            </nav>
          </div>
        </header>

        {/* CONTEÚDO */}
        <main className="flex-1">{children}</main>

        {/* FOOTER */}
        <footer className="bg-neutral-800 border border-neutral-700 rounded-2xl p-6 shadow-md">
          <Footer/>
        </footer>
        <AvisoCookies />
      </body>
    </html>
  );
}
