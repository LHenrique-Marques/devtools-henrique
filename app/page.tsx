import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-neutral-900 text-neutral-100 px-4">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] max-w-4xl w-full py-12">
        <h1 className="text-5xl font-extrabold mb-4 text-center">🚀 DevTools do Henrique</h1>
        <p className="text-lg text-neutral-400 mb-10 text-center">
          Ferramentas online, rápidas e gratuitas para desenvolvedores, designers e o dia a dia.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Link
            href="/contador-caracteres"
            className="bg-neutral-800 border border-neutral-700 rounded-2xl p-6 shadow-md hover:scale-105 hover:border-red-500 transition transform"
          >
            <h2 className="text-2xl font-semibold mb-2">📝 Contador de Caracteres</h2>
            <p className="text-neutral-400">Conte palavras e caracteres rapidamente.</p>
          </Link>

          <Link
            href="/calculadora-porcentagem"
            className="bg-neutral-800 border border-neutral-700 rounded-2xl p-6 shadow-md hover:scale-105 hover:border-red-500 transition transform"
          >
            <h2 className="text-2xl font-semibold mb-2">📊 Calculadora de Porcentagem</h2>
            <p className="text-neutral-400">Calcule porcentagens de forma simples.</p>
          </Link>
          <Link
            href="/gerador-cpf"
            className="bg-neutral-800 border border-neutral-700 rounded-2xl p-6 shadow-md hover:scale-105 hover:border-red-500 transition transform"
            >
            <h2 className="text-2xl font-semibold mb-2">🧾 Gerador de CPF</h2>
            <p className="text-neutral-400">Gere CPFs válidos para testes.</p>
          </Link>

          <Link
            href="#"
            className="bg-neutral-800 border border-neutral-700 rounded-2xl p-6 shadow-md hover:scale-105 hover:border-red-500 transition transform"
          >
            <h2 className="text-2xl font-semibold mb-2">✨ Em breve</h2>
            <p className="text-neutral-400">Novas ferramentas estão chegando.</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
