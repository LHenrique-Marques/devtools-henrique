import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-neutral-900 text-neutral-100 px-4">
      <div className="max-w-6xl w-full text-center">
        <h1 className="text-5xl font-extrabold mb-4">🚀 DevTools do Henrique</h1>
        <p className="text-lg text-neutral-400 mb-10">
          Ferramentas online, rápidas e gratuitas para desenvolvedores, designers e o dia a dia.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Contador de Caracteres */}
          <Link
            href="/contador-caracteres"
            className="bg-neutral-800 border border-neutral-700 rounded-2xl p-6 shadow-md hover:scale-105 hover:border-red-500 transition transform"
          >
            <h2 className="text-2xl font-semibold mb-2">📝 Contador de Caracteres</h2>
            <p className="text-neutral-400">Conte palavras e caracteres rapidamente.</p>
          </Link>

          {/* Calculadora de Porcentagem */}
          <Link
            href="/calculadora-porcentagem"
            className="bg-neutral-800 border border-neutral-700 rounded-2xl p-6 shadow-md hover:scale-105 hover:border-red-500 transition transform"
          >
            <h2 className="text-2xl font-semibold mb-2">📊 Calculadora de Porcentagem</h2>
            <p className="text-neutral-400">Calcule porcentagens de forma simples.</p>
          </Link>

          {/* Gerador de CPF */}
          <Link
            href="/gerador-cpf"
            className="bg-neutral-800 border border-neutral-700 rounded-2xl p-6 shadow-md hover:scale-105 hover:border-red-500 transition transform"
          >
            <h2 className="text-2xl font-semibold mb-2">🧾 Gerador de CPF</h2>
            <p className="text-neutral-400">Gere CPFs válidos para testes.</p>
          </Link>

          {/* Validador de CPF */}
          <Link
            href="/validador-cpf"
            className="bg-neutral-800 border border-neutral-700 rounded-2xl p-6 shadow-md hover:scale-105 hover:border-red-500 transition transform"
          >
            <h2 className="text-2xl font-semibold mb-2">🕵️‍♂️ Validador de CPF</h2>
            <p className="text-neutral-400">Verifique se um CPF é válido.</p>
          </Link>

          {/* Gerador de Senha */}
          <Link
            href="/gerador-senha"
            className="bg-neutral-800 border border-neutral-700 rounded-2xl p-6 shadow-md hover:scale-105 hover:border-red-500 transition transform"
          >
            <h2 className="text-2xl font-semibold mb-2">🔐 Gerador de Senhas</h2>
            <p className="text-neutral-400">Gere senhas seguras e aleatórias.</p>
          </Link>

          {/* Conversor Base64 */}
          <Link
            href="/conversor-base64"
            className="bg-neutral-800 border border-neutral-700 rounded-2xl p-6 shadow-md hover:scale-105 hover:border-red-500 transition transform"
          >
            <h2 className="text-2xl font-semibold mb-2">🔄 Conversor Base64</h2>
            <p className="text-neutral-400">Converta texto para Base64 e vice-versa.</p>
          </Link>

          {/* JSON Formatter */}
          <Link
            href="/json-formatter"
            className="bg-neutral-800 border border-neutral-700 rounded-2xl p-6 shadow-md hover:scale-105 hover:border-red-500 transition transform"
          >
            <h2 className="text-2xl font-semibold mb-2">🛠️ JSON Formatter</h2>
            <p className="text-neutral-400">Valide e formate JSON.</p>
          </Link>

          {/* Conversor Timestamp */}
          <Link
            href="/conversor-timestamp"
            className="bg-neutral-800 border border-neutral-700 rounded-2xl p-6 shadow-md hover:scale-105 hover:border-red-500 transition transform"
          >
            <h2 className="text-2xl font-semibold mb-2">🕓 Conversor Timestamp</h2>
            <p className="text-neutral-400">Converta timestamp UNIX para data e vice-versa.</p>
          </Link>

          {/* Gerador de UUID */}
          <Link
            href="/gerador-uuid"
            className="bg-neutral-800 border border-neutral-700 rounded-2xl p-6 shadow-md hover:scale-105 hover:border-red-500 transition transform"
          >
            <h2 className="text-2xl font-semibold mb-2">🆔 Gerador de UUID</h2>
            <p className="text-neutral-400">Gere UUIDs aleatórios facilmente.</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
