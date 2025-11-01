import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO = process.env.MY_EMAIL!

export async function POST(req: Request) {
  const { message } = await req.json()
  if (!message) return NextResponse.json({ error: '空のメッセージ' }, { status: 400 })

  try {
    await resend.emails.send({
      from: 'COW赤軍 <no-reply@cow-red-army.dev>',
      to: [TO],
      subject: '新しい意見が届きました',
      text: message,
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}