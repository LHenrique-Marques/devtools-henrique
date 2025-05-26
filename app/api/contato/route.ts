import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { nome, email, mensagem } = await request.json()

  const webhookUrl = process.env.WEBHOOK_URL

  if (!webhookUrl) {
    return NextResponse.json(
      { error: 'Webhook não configurado.' },
      { status: 500 }
    )
  }

  const data = {
    content: `📩 **Nova mensagem de contato:**\n\n**Nome:** ${nome}\n**Email:** ${email}\n**Mensagem:** ${mensagem}`,
  }

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erro ao enviar para o webhook:', error)
    return NextResponse.json({ error: 'Erro ao enviar mensagem' }, { status: 500 })
  }
}
