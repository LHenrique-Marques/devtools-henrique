"use client";

export default function ClientPrivacidade() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 pb-24">
      <h1 className="text-4xl font-bold mb-6 text-white">Política de Privacidade</h1>

      <p className="text-neutral-400 mb-4">
        Sua privacidade é importante para nós. Esta Política de Privacidade descreve como coletamos,
        usamos e protegemos suas informações ao utilizar o <strong>DevTools</strong>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Quais dados coletamos?</h2>
      <p className="text-neutral-400 mb-4">
        Coletamos informações fornecidas voluntariamente, como nome e e-mail no formulário de
        contato. Também coletamos dados de navegação de forma automática, como endereço IP e dados
        de cookies, para melhorar sua experiência.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Uso das informações</h2>
      <p className="text-neutral-400 mb-4">
        As informações coletadas são usadas para:
      </p>
      <ul className="list-disc list-inside text-neutral-400 space-y-2">
        <li>Responder dúvidas ou solicitações enviadas via contato.</li>
        <li>Melhorar o desempenho, funcionalidades e conteúdo do site.</li>
        <li>Analisar dados para entender como os usuários utilizam nossas ferramentas.</li>
        <li>Exibir anúncios relevantes (quando aplicável).</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Compartilhamento de dados</h2>
      <p className="text-neutral-400 mb-4">
        Não compartilhamos seus dados pessoais com terceiros, exceto quando necessário para
        cumprimento de obrigações legais ou prestação de serviços como hospedagem e análises.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Seus direitos</h2>
      <p className="text-neutral-400 mb-4">
        Você pode solicitar a correção, atualização ou exclusão de seus dados pessoais a qualquer
        momento, entrando em contato conosco.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Alterações</h2>
      <p className="text-neutral-400 mb-4">
        Podemos atualizar esta política periodicamente. Recomendamos que você consulte esta página
        regularmente.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Contato</h2>
      <p className="text-neutral-400">
        Dúvidas sobre esta Política? Envie um e-mail para:
        <a href="mailto:henrique.marquesvj@gmail.com" className="text-blue-400 hover:underline ml-1">
          henrique.marquesvj@gmail.com
        </a>
      </p>
    </main>
  );
}
