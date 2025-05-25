'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Botao, GrupoBotoes } from '../components/Botoes';
import Resultado from '../components/Resultado';
import ComoUtilizar from '../components/ComoUtilizar';

export default function GeradorSenhaClient() {
  const [senha, setSenha] = useState('');
  const [tamanho, setTamanho] = useState(12);
  const [usarMaiusculas, setUsarMaiusculas] = useState(true);
  const [usarMinusculas, setUsarMinusculas] = useState(true);
  const [usarNumeros, setUsarNumeros] = useState(true);
  const [usarSimbolos, setUsarSimbolos] = useState(true);

  const gerar = () => {
    if (tamanho < 4 || tamanho > 64) {
      alert('O tamanho deve ser entre 4 e 64.');
      return;
    }

    let caracteres = '';
    if (usarMaiusculas) caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (usarMinusculas) caracteres += 'abcdefghijklmnopqrstuvwxyz';
    if (usarNumeros) caracteres += '0123456789';
    if (usarSimbolos) caracteres += '!@#$%^&*()_-+=<>?';

    if (!caracteres) {
      alert('Selecione pelo menos um tipo de caractere!');
      return;
    }

    let resultado = '';
    for (let i = 0; i < tamanho; i++) {
      resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    setSenha(resultado);
  };

  const limpar = () => setSenha('');
  const copiar = () => {
    navigator.clipboard.writeText(senha);
    alert('Senha copiada!');
  };

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)] px-4">
      <div className="bg-neutral-800 border border-neutral-700 rounded-2xl shadow-lg p-8 max-w-3xl w-full">
        <Link href="/" className="text-red-400 hover:underline">&larr; Voltar</Link>

        <h1 className="text-4xl font-bold mb-4">🔐 Gerador de Senhas</h1>
        <p className="mb-6 text-neutral-400">
          Gere <strong>senhas seguras</strong> com as opções que desejar.
        </p>

        {/* Configurações */}
        <div className="flex flex-col gap-4 mb-6">
          <label className="flex items-center gap-2">
            <span className="text-neutral-300 w-[120px]">Tamanho:</span>
            <input
              type="number"
              min={4}
              max={64}
              value={tamanho}
              onChange={(e) => setTamanho(Number(e.target.value))}
              className="p-2 w-[80px] border border-neutral-600 rounded-lg bg-neutral-900 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={usarMaiusculas}
              onChange={(e) => setUsarMaiusculas(e.target.checked)}
            />
            <span className="text-neutral-300">Letras Maiúsculas</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={usarMinusculas}
              onChange={(e) => setUsarMinusculas(e.target.checked)}
            />
            <span className="text-neutral-300">Letras Minúsculas</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={usarNumeros}
              onChange={(e) => setUsarNumeros(e.target.checked)}
            />
            <span className="text-neutral-300">Números</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={usarSimbolos}
              onChange={(e) => setUsarSimbolos(e.target.checked)}
            />
            <span className="text-neutral-300">Símbolos</span>
          </label>
        </div>

        {/* Botões */}
        <GrupoBotoes>
          <Botao onClick={gerar}>Gerar Senha</Botao>
          <Botao onClick={limpar}>Limpar</Botao>
          <Botao onClick={copiar} disabled={!senha}>Copiar Senha</Botao>
        </GrupoBotoes>

        {/* Resultado */}
        <Resultado
          resultados={[
            { label: 'Senha Gerada', valor: senha },
          ]}
        />

        {/* Como utilizar */}
        <ComoUtilizar
          itens={[
            'Defina o <strong>tamanho</strong> da senha no campo numérico (mínimo 4, máximo 64 caracteres).',
            'Selecione os tipos de caracteres: <strong>maiúsculas, minúsculas, números e/ou símbolos</strong>.',
            'Clique em <strong>“Gerar Senha”</strong> para criar uma senha aleatória.',
            'O resultado aparece no card de <strong>“Senha Gerada”</strong>.',
            'Clique em <strong>“Copiar Senha”</strong> para copiar.',
            'Clique em <strong>“Limpar”</strong> para gerar uma nova senha.',
          ]}
        />
      </div>
    </main>
  );
}
