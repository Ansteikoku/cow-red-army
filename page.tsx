'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function FeedbackPage() {
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('送信中...')
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    })
    if (res.ok) {
      setStatus('送信完了！ありがとうございます')
      setMessage('')
    } else setStatus('エラーが発生しました')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-lg mx-auto bg-red-950/80 p-6 rounded-xl shadow-lg"
    >
      <h1 className="text-3xl font-bold mb-6 text-center text-yellow-300">意見箱</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          className="w-full p-3 rounded bg-red-900 text-white border border-red-700 focus:ring-2 focus:ring-red-600 transition"
          placeholder="ご意見・要望を入力してください"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-red-700 hover:bg-red-600 transition px-4 py-2 rounded w-full font-bold"
        >
          送信
        </button>
      </form>
      {status && <p className="text-center mt-4 text-gray-200">{status}</p>}
    </motion.div>
  )
}