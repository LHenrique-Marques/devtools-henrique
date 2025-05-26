'use client';

export default function TermosContent() {
  return (
    <div className="bg-neutral-800 border border-neutral-700 rounded-2xl p-8 shadow-lg max-w-4xl w-full mx-auto pb-24">
      <h1 className="text-4xl font-bold mb-6">📜 Termos de Uso</h1>

      <p className="mb-4 text-neutral-300">
        Bem-vindo ao <strong>DevTools</strong>. Ao acessar este site, você concorda com os presentes Termos de Uso. Caso não concorde, recomendamos que não utilize nossos serviços.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. 🔧 Uso das Ferramentas</h2>
      <p className="mb-4 text-neutral-400">
        As ferramentas disponibilizadas são gratuitas, online e destinadas a fins educacionais, profissionais ou pessoais. O usuário é responsável pelo uso correto das ferramentas.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. 🚫 Limitações</h2>
      <p className="mb-4 text-neutral-400">
        Não garantimos que as ferramentas sejam livres de erros ou interrupções. O DevTools não se responsabiliza por eventuais danos diretos ou indiretos decorrentes do uso do site.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. 🔐 Privacidade e Dados</h2>
      <p className="mb-4 text-neutral-400">
        A utilização do site implica na aceitação da nossa <a href="/privacidade" className="text-red-500 underline">Política de Privacidade</a>, que explica como coletamos e usamos dados anônimos de navegação, como cookies e dados de terceiros (Google Analytics, Adsense).
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. 🔗 Links Externos</h2>
      <p className="mb-4 text-neutral-400">
        O site pode conter links para sites externos que não são controlados por nós. Não nos responsabilizamos pelo conteúdo ou práticas desses sites.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. ⚙️ Modificações</h2>
      <p className="mb-4 text-neutral-400">
        Reservamos o direito de alterar, atualizar ou remover qualquer conteúdo, funcionalidade ou estes Termos de Uso a qualquer momento, sem aviso prévio.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. ✉️ Contato</h2>
      <p className="text-neutral-400">
        Para dúvidas sobre estes termos, entre em contato pelo e-mail: <span className="text-red-500">henrique.marquesvj@gmail.com</span>
      </p>
    </div>
  );
}
