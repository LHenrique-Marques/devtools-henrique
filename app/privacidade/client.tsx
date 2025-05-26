'use client';

export default function PrivacidadeContent() {
  return (
    <div className="bg-neutral-800 border border-neutral-700 rounded-2xl p-8 shadow-lg max-w-4xl w-full mx-auto pb-24">
      <h1 className="text-4xl font-bold mb-6">🔐 Política de Privacidade</h1>

      <p className="mb-4 text-neutral-300">
        No <strong>DevTools</strong>, levamos sua privacidade a sério. Esta política explica como coletamos, usamos e protegemos suas informações.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">📑 Coleta de Dados</h2>
      <p className="mb-4 text-neutral-400">
        Coletamos informações de navegação de forma anônima, incluindo cookies e dados de uso, para melhorar sua experiência no site e exibir anúncios relevantes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">🗂️ Dados Utilizados</h2>
      <p className="mb-4 text-neutral-400">
        Utilizamos ferramentas como Google Analytics e Google Adsense, que podem coletar cookies e dados anonimizados para análise e publicidade.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">🔒 Segurança</h2>
      <p className="mb-4 text-neutral-400">
        Seus dados estão protegidos. Não coletamos dados sensíveis ou pessoais como nome, CPF, e-mail ou telefone.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">📜 Consentimento</h2>
      <p className="mb-4 text-neutral-400">
        Ao utilizar este site, você concorda com o uso de cookies e com nossa política de privacidade.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">🔗 Serviços de Terceiros</h2>
      <p className="mb-4 text-neutral-400">
        Podemos exibir anúncios do Google Adsense e utilizar Google Analytics. Confira mais informações nas <a href="https://policies.google.com/technologies/ads?hl=pt-BR" target="_blank" className="text-red-500 underline">Políticas do Google</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">✉️ Contato</h2>
      <p className="text-neutral-400">
        Para qualquer dúvida sobre nossa política, entre em contato pelo e-mail: <span className="text-red-500">henrique.marquesvj@gmail.com</span>
      </p>
    </div>
  );
}
