import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { motion, AnimatePresence } from 'framer-motion'

export const metadata = {
  title: 'COW赤軍公式サイト',
  description: 'COW赤軍 公式ウェブサイト - 戦略・メンバー・ニュースなどを公開。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-gradient-to-b from-black to-red-950 text-white min-h-screen flex flex-col font-sans">
        <Header />
        <AnimatePresence mode="wait">
          <motion.main
            className="flex-1 p-6 container mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  )
}