'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type MenuItem = {
  label: string
  path: string
}

const MENU_LIST: MenuItem[] = [
  { label: 'Inicio', path: '/' },
  { label: 'Projetos', path: '/projetos' },
  { label: 'Passe de batalha', path: '/passe-de-batalha' },
  { label: 'Carreira', path: '/carreira' },
]

export function Header() {
  const pathname = usePathname()

  return (
    <div className="flex">
      <nav className="w-full flex flex-row gap-[2px]">
        {MENU_LIST.map((link) => {
          const isActive = pathname === link.path
          return (
            <Link
              href={link.path}
              data-active={isActive}
              className="p-4 rounded-xl mr-1 uppercase tracking-wide data-[active=true]:bg-white 
              data-[active=true]:text-black text-white data-[active=false]:hover:ring-2 ring-white transition-all">
              {link.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}