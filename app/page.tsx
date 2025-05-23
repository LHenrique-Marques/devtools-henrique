import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">DevTools do Henrique</h1>
      <p className="mb-10 text-center text-lg text-gray-700">
        Ferramentas online, rápidas e gratuitas para o seu dia a dia de desenvolvimento.
      </p>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <Link href="/contador-caracteres" className="p-6 rounded-xl shadow-md bg-white hover:scale-105 transition">
          <h2 className="text-2xl font-semibold mb-2">📝 Contador de Caracteres</h2>
          <p className="text-gray-600">Conte palavras e caracteres rapidamente.</p>
        </Link>
        <Link href="/calculadora-porcentagem" className="p-6 rounded-xl shadow-md bg-white hover:scale-105 transition">
          <h2 className="text-2xl font-semibold mb-2">📊 Calculadora de Porcentagem</h2>
          <p className="text-gray-600">Calcule porcentagens de forma simples.</p>
        </Link>
      </div>
    </main>
  );
}