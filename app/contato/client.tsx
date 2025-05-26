'use client'

import { useState } from 'react'

export default function ContatoClient() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('sent')
        setForm({ nome: '', email: '', mensagem: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Erro ao enviar', error)
      setStatus('error')
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 ">
      <div className="rounded-2xl shadow-lg p-8 max-w-3xl w-full bg-gradient-to-br from-purple-800 via-neutral-950 to-black border border-neutral-800">
      <h1 className="text-4xl font-bold mb-4 text-center">Contato</h1>
      <p className="text-neutral-400 mb-8">
        Tem alguma dúvida, sugestão ou encontrou algum problema? Me envie uma mensagem.
      </p>

      <form
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block mb-1 text-sm">Nome</label>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-neutral-600 bg-neutral-900 px-4 py-2 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm">E-mail</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-neutral-600 bg-neutral-900 px-4 py-2 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm">Mensagem</label>
          <textarea
            name="mensagem"
            value={form.mensagem}
            onChange={handleChange}
            rows={5}
            required
            className="w-full rounded-md border border-neutral-600 bg-neutral-900 px-4 py-2 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="bg-purple-600 hover:bg-purple-500 px-6 py-2 rounded-md text-white font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? 'Enviando...' : 'Enviar'}
        </button>

        {status === 'sent' && (
          <p className="text-green-400 text-sm">Mensagem enviada com sucesso!</p>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-sm">Ocorreu um erro. Tente novamente.</p>
        )}
      </form>
      </div>
    </main>
  )
}
