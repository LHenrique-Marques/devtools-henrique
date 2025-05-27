'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Botao, GrupoBotoes } from '../components/Botoes';
import Resultado from '../components/Resultado';
import ComoUtilizar from '../components/ComoUtilizar';

export default function JsonFormatterClient() {
  const [input, setInput] = useState('');
  const [resultado, setResultado] = useState('');

  const formatar = () => {
    try {
      const json = JSON.parse(input);
      const formatado = JSON.stringify(json, null, 2);
      setResultado(formatado);
    } catch {
      alert('JSON inválido!');
    }
  };

  const limpar = () => {
    setInput('');
    setResultado('');
  };

  const copiar = () => {
    navigator.clipboard.writeText(resultado);
    alert('Resultado copiado!');
  };

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)] px-4 pt-24 pb-24">
      <div className="text-center rounded-2xl shadow-lg p-8 max-w-3xl w-full bg-gradient-to-br from-purple-800 via-neutral-950 to-black border border-neutral-800">
        <h1 className="text-4xl font-bold mb-4">JSON Formatter</h1>
        <p className="mb-6 text-neutral-400">
          Formate, <strong>valide</strong> e organize seus dados <strong>JSON</strong> de forma rápida e simples.
        </p>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={6}
          className="w-full p-5 border border-neutral-600 rounded-xl mb-4 bg-neutral-900 text-neutral-100 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Cole aqui seu JSON..."
        />
        <div className='flex justify-center'>
        <GrupoBotoes>
          <Botao onClick={formatar}>Formatar JSON</Botao>
          <Botao onClick={limpar}>Limpar</Botao>
          <Botao onClick={copiar} disabled={!resultado}>Copiar Resultado</Botao>
        </GrupoBotoes>
        </div>
        <Resultado
          resultados={[
            { label: 'JSON Formatado', valor: resultado },
          ]}
        />
        {/* Descrição SEO e Explicação */}
        <div className="mb-6 pt-24">
          <h2 className="text-2xl font-bold text-white mb-2">
            O que é um JSON Formatter?
          </h2>
          <p className="text-neutral-400 mb-2">
            O JSON Formatter é uma ferramenta online que permite <strong>validar, formatar e visualizar JSON</strong> de forma clara e organizada. Ele ajuda desenvolvedores, analistas e profissionais de tecnologia a entender e identificar rapidamente erros de sintaxe, estruturas incorretas e a melhorar a legibilidade de dados em formato JSON.
          </p>
          <p className="text-neutral-400">
            Cole seu JSON na caixa de texto para obter uma visualização formatada e identar os dados corretamente. Esta ferramenta é essencial para quem trabalha com APIs, bancos de dados NoSQL, desenvolvimento web e integrações de sistemas. Tudo funciona diretamente no navegador, sem custos, sem cadastro e de forma 100% segura.
          </p>
        </div>
        <ComoUtilizar
          itens={[
            'Cole ou digite seu conteúdo no formato <strong>JSON</strong> na área acima.',
            'Clique em <strong>“Formatar JSON”</strong> para validar e organizar o conteúdo.',
            'Se o JSON estiver válido, o resultado aparecerá no card <strong>“JSON Formatado”</strong>.',
            'Se o JSON estiver inválido, aparecerá um alerta de erro.',
            'Clique em <strong>“Copiar Resultado”</strong> para copiar o JSON formatado.',
            'Clique em <strong>“Limpar”</strong> para apagar os campos e começar novamente.',
          ]}
        />
      </div>
    </main>
  );
}
