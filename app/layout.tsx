import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'DevTools do Henrique',
  description: 'Ferramentas online, rápidas e gratuitas',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-neutral-900 text-neutral-100 min-h-screen flex flex-col">
        
        {/* HEADER */}
        <header className="bg-neutral-800 border-b border-neutral-700 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
            <Link href="/" className="text-2xl font-bold text-white">
              🚀 DevTools do Henrique
            </Link>
            <nav className="flex gap-6">
              <Link href="/" className="hover:text-red-500 transition">Home</Link>
              <Link href="/contador-caracteres" className="hover:text-red-500 transition">Contador</Link>
              <Link href="/calculadora-porcentagem" className="hover:text-red-500 transition">Porcentagem</Link>
            </nav>
          </div>
        </header>

        {/* CONTEÚDO */}
        <main className="flex-1">{children}</main>

        {/* FOOTER */}
        <footer className="bg-neutral-800 border-t border-neutral-700 p-4 text-center text-sm text-neutral-400">
          © {new Date().getFullYear()} DevTools do Henrique. Todos os direitos reservados.
        </footer>

      </body>
    </html>
  );
}

