import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'DevTools | Ferramentas Online',
  description: 'Conjunto de ferramentas online para devs e criadores. Rápidas, simples e gratuitas.',
  icons: {
    icon: '/favicon.png',
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
        <header className="bg-neutral-800 border-b border-neutral-700 sticky top-0 z-50 shadow-md">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
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
              <Link
                href="/"
                className="hover:text-red-500 transition"
              >
                Início
              </Link>
              <Link
                href="/sobre"
                className="hover:text-red-500 transition"
              >
                Sobre
              </Link>
            </nav>
          </div>
        </header>

        {/* CONTEÚDO */}
        <main className="flex-1">{children}</main>

        {/* FOOTER */}
        <footer className="bg-neutral-800 border-t border-neutral-700 px-6 py-4 text-center text-sm text-neutral-400">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p>
              © {new Date().getFullYear()} DevTools. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <Link href="/" className="hover:text-red-500 transition">Início</Link>
              <Link href="/sobre" className="hover:text-red-500 transition">Sobre</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
