'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-gradient-to-br from-purple-950 via-neutral-850 to-black border-b border-neutral-800 shadow-md">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/favicon.png"
            alt="Logo DevTools"
            width={32}
            height={32}
            className="rounded-md"
          />
          <span className="text-xl font-bold text-white hover:text-purple-400 transition">
            DevTools
          </span>
        </Link>

        {/* MENU */}
        <nav className="hidden md:flex gap-8 text-sm">
          <Link href="/" className="text-neutral-300 hover:text-purple-400 transition">
            Início
          </Link>
          <Link href="/sobre" className="text-neutral-300 hover:text-purple-400 transition">
            Sobre
          </Link>
          <Link href="/contato" className="text-neutral-300 hover:text-purple-400 transition">
            Contato
          </Link>
        </nav>

        {/* MOBILE */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-neutral-300 hover:text-purple-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
