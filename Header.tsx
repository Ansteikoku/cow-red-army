'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu } from 'lucide-react'

export const Header = () => {
  const [open, setOpen] = useState(false)
  const path = usePathname()
  const links = [
    { href: '/', label: 'HOME' },
    { href: '/members', label: 'メンバー' },
    { href: '/tools', label: 'ツール' },
    { href: '/strategies', label: '戦法' },
    { href: '/news', label: 'ニュース' },
    { href: '/feedback', label: '意見箱' },
  ]

  return (
    <header className="bg-red-900/90 backdrop-blur sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-yellow-300 drop-shadow-md">
          🐮 COW赤軍
        </Link>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <Menu />
        </button>
        <nav
          className={`${open ? 'block' : 'hidden'} md:flex gap-6 font-semibold text-white md:static absolute bg-red-900 md:bg-transparent left-0 w-full md:w-auto top-full md:top-0 p-4 md:p-0`}
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`hover:text-yellow-400 transition ${path === href ? 'text-yellow-300 underline underline-offset-4' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}