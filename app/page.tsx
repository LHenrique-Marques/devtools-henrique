'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [search, setSearch] = useState('');

  const tools = [
    { name: 'Contador de Caracteres', href: '/contador-caracteres', desc: 'Conte palavras e caracteres rapidamente.' },
    { name: 'Calculadora de Porcentagem', href: '/calculadora-porcentagem', desc: 'Calcule porcentagens de forma simples.' },
    { name: 'Gerador de CPF', href: '/gerador-cpf', desc: 'Gere CPFs válidos para testes.'},
    { name: 'Validador de CPF', href: '/validador-cpf', desc: 'Verifique se um CPF é válido.' },
    { name: 'Gerador de Senhas', href: '/gerador-senha', desc: 'Gere senhas seguras e aleatórias.' },
    { name: 'Conversor Base64', href: '/conversor-base64', desc: 'Converta texto para Base64 e vice-versa.',},
    { name: 'JSON Formatter', href: '/json-formatter', desc: 'Valide e formate JSON.'},
    { name: 'Conversor Timestamp', href: '/conversor-timestamp', desc: 'Converta timestamp UNIX para data e vice-versa.' },
    { name: 'Gerador de UUID', href: '/gerador-uuid', desc: 'Gere UUIDs aleatórios facilmente.'},
  ];

  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)] text-neutral-100 px-4 pt-20 pb-32 bg-gradient-to-br">
      <div className="max-w-6xl w-full ">

        {/* HERO */}
        <section className="text-center mb-14">
          <h1 className="text-5xl font-bold mb-4">
            The DevTools
          </h1>
          <p className="text-lg text-neutral-400 mb-4">
            Ferramentas online, rápidas e gratuitas <br />
            para desenvolvedores, criadores e profissionais do dia a dia.
          </p>
          <p className="text-neutral-500 mb-6">
            Atualmente temos <strong>{tools.length}</strong> ferramentas disponíveis!
          </p>
          <input
            type="text"
            placeholder="Buscar ferramenta..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 p-4 mb-4 rounded-2xl 
            border border-neutral-700 
            bg-gradient-to-br from-neutral-900 via-neutral-950 to-black 
            text-neutral-100 placeholder-neutral-500 
            focus:outline-none focus:ring-2 focus:ring-purple-600 
            transition"
          />
        </section>

        {/* LISTA DE FERRAMENTAS */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Nossas Ferramentas</h2>
          <p className="text-neutral-400 mb-8">
            Explore nossas ferramentas desenvolvidas para facilitar seu trabalho. Todas são gratuitas, funcionam direto do navegador, sem necessidade de cadastro ou instalação. 
            São soluções simples e eficazes para acelerar seu dia a dia na programação, desenvolvimento e outras atividades digitais.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredTools.length > 0 ? (
              filteredTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="backdrop-blur-sm bg-gradient-to-br from-purple-950 via-neutral-900 to-black 
                  border border-neutral-700 rounded-2xl p-6 shadow-md 
                  hover:scale-[1.03] hover:shadow-xl hover:border-purple-600 
                  transition-transform duration-300 flex flex-col gap-2"
                >
                  <h2 className="text-xl font-bold text-white">{tool.name}</h2>
                  <p className="text-neutral-400 text-sm">{tool.desc}</p>
                </Link>
              ))
            ) : (
              <p className="text-neutral-500 col-span-full">Nenhuma ferramenta encontrada.</p>
            )}
          </div>
        </section>

        {/* SOBRE O DEVTOOLS */}
        <section>
          <h2 className="text-3xl font-bold mb-4">O que é o TheDevTools?</h2>
          <p className="text-neutral-400 mb-4">
            O TheDevTools é um conjunto de ferramentas online pensadas para desenvolvedores, programadores, criadores de conteúdo e qualquer pessoa que precisa de soluções simples e rápidas no dia a dia.
          </p>
          <p className="text-neutral-400 mb-4">
            Nossa missão é tornar acessível recursos que normalmente exigiriam instalação de softwares, linhas de comando ou serviços pagos. Aqui você encontra geradores, validadores e conversores que funcionam diretamente no navegador, de forma gratuita e intuitiva.
          </p>
          <p className="text-neutral-400">
            Acreditamos que a tecnologia deve ser acessível a todos. Por isso, estamos sempre atualizando e adicionando novas ferramentas, para ajudar na sua produtividade e facilitar suas tarefas.
          </p>
        </section>
        {/* FAQ PERGUNTAS FREQUENTES */}
        <section className="mt-20 pt-10">
          <h2 className="text-3xl font-bold mb-6 text-center">❓ Perguntas Frequentes (FAQ)</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-white">O que é o TheDevTools?</h3>
              <p className="text-neutral-400">
                O TheDevTools é um conjunto de ferramentas online e gratuitas voltadas para desenvolvedores, criadores e profissionais que precisam de soluções rápidas no dia a dia. Oferecemos conversores, validadores e geradores que funcionam diretamente no navegador.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">As ferramentas são gratuitas?</h3>
              <p className="text-neutral-400">
                Sim! Todas as ferramentas são 100% gratuitas e podem ser utilizadas quantas vezes você quiser, sem qualquer custo ou necessidade de cadastro.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Meus dados são armazenados?</h3>
              <p className="text-neutral-400">
                Não. Todas as ferramentas rodam diretamente no seu navegador. Nenhum dado inserido é enviado para servidores ou armazenado. A privacidade dos usuários é uma das nossas prioridades.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Como funciona a geração de CPF?</h3>
              <p className="text-neutral-400">
                O gerador de CPF utiliza o algoritmo matemático de validação dos dígitos verificadores, garantindo que o número gerado seja matematicamente válido, porém totalmente aleatório e sem vínculo com pessoas reais. É exclusivo para testes de sistemas e desenvolvimento.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">É seguro usar essas ferramentas?</h3>
              <p className="text-neutral-400">
                Sim. Todas as operações são feitas localmente no seu navegador. Não coletamos, armazenamos ou compartilhamos nenhuma informação inserida nas ferramentas.
              </p>
            </div>
          </div>
        </section>

        {/* BLOG CONTEUDOS EDUCATIVOS */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6 text-center"> Conteúdos e Dicas</h2>
          <p className="text-neutral-400 mb-8 text-center">
            Aprenda mais sobre tecnologia, desenvolvimento e como utilizar melhor nossas ferramentas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-neutral-800 rounded-2xl p-6 hover:scale-[1.03] hover:border-purple-600 transition">
              <h3 className="text-xl font-bold mb-2 text-white">O que é um UUID e para que serve?</h3>
              <p className="text-neutral-400">
                Descubra o que é um UUID, como ele garante unicidade em sistemas e onde é utilizado no desenvolvimento de aplicações.
              </p>
            </div>
            <div className="border border-neutral-800 rounded-2xl p-6 hover:scale-[1.03] hover:border-purple-600 transition">
              <h3 className="text-xl font-bold mb-2 text-white">Como funciona o Base64?</h3>
              <p className="text-neutral-400">
                Entenda como o Base64 transforma dados binários em texto, suas aplicações em APIs, codificação de imagens e transferência de dados.
              </p>
            </div>
            <div className="border border-neutral-800 rounded-2xl p-6 hover:scale-[1.03] hover:border-purple-600 transition">
              <h3 className="text-xl font-bold mb-2 text-white">Boas práticas de senhas seguras</h3>
              <p className="text-neutral-400">
                Saiba como criar senhas fortes, seguras e difíceis de serem descobertas. Proteja seus dados e contas com as melhores práticas.
              </p>
            </div>
            <div className="border border-neutral-800 rounded-2xl p-6 hover:scale-[1.03] hover:border-purple-600 transition">
              <h3 className="text-xl font-bold mb-2 text-white">O que é um Timestamp e como ele funciona?</h3>
              <p className="text-neutral-400">
                Entenda como os timestamps UNIX representam datas e horas em segundos desde 1º de janeiro de 1970, e como são utilizados em bancos de dados, APIs e logs de sistemas.
              </p>
            </div>

            <div className="border border-neutral-800 rounded-2xl p-6 hover:scale-[1.03] hover:border-purple-600 transition">
              <h3 className="text-xl font-bold mb-2 text-white">Validação de CPF: como funciona?</h3>
              <p className="text-neutral-400">
                Descubra como funciona o algoritmo de validação de CPF, o papel dos dígitos verificadores e como garantir que um CPF seja matematicamente válido em seus sistemas.
              </p>
            </div>

            <div className="border border-neutral-800 rounded-2xl p-6 hover:scale-[1.03] hover:border-purple-600 transition">
              <h3 className="text-xl font-bold mb-2 text-white">O que é Base64 e por que usar?</h3>
              <p className="text-neutral-400">
                Aprenda quando e por que utilizar Base64 na codificação de dados, suas vantagens, limitações e aplicações comuns no desenvolvimento web e transferência de arquivos.
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
