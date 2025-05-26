"use client";

export default function ClientTermos() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 pb-24">
      <h1 className="text-4xl font-bold mb-6 text-white">Termos de Uso</h1>

      <p className="text-neutral-400 mb-4">
        Ao acessar e utilizar o <strong>DevTools</strong>, você concorda com os termos e condições
        descritos abaixo. Caso não concorde, por favor, não utilize este site.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Uso das ferramentas</h2>
      <p className="text-neutral-400 mb-4">
        As ferramentas oferecidas são gratuitas e destinadas a fins educacionais, profissionais e
        pessoais. O uso indevido, ilegal ou que cause prejuízo a terceiros é proibido.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Limitações de responsabilidade</h2>
      <p className="text-neutral-400 mb-4">
        Embora nos esforcemos para garantir que todas as ferramentas estejam funcionando corretamente,
        não garantimos que sejam livres de erros, interrupções ou que sejam adequadas a qualquer
        finalidade específica.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Propriedade intelectual</h2>
      <p className="text-neutral-400 mb-4">
        Todo o conteúdo, incluindo textos, logos, imagens e códigos, pertence ao <strong>DevTools</strong>
        e não pode ser copiado, distribuído ou reproduzido sem autorização.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Modificações nos termos</h2>
      <p className="text-neutral-400 mb-4">
        Reservamos o direito de modificar estes Termos de Uso a qualquer momento, sem aviso prévio.
        É sua responsabilidade revisá-los periodicamente.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Contato</h2>
      <p className="text-neutral-400">
        Para dúvidas sobre estes termos, entre em contato através do e-mail:
        <a href="mailto:henrique.marquesvj@gmail.com" className="text-blue-400 hover:underline ml-1">
          henrique.marquesvj@gmail.com
        </a>
      </p>
    </main>
  );
}
