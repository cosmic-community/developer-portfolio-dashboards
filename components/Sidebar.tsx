'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Dashboard', href: '/', icon: '📊' },
  { name: 'Projects', href: '/projects', icon: '💼' },
  { name: 'Skills', href: '/skills', icon: '🎯' },
  { name: 'Experience', href: '/experience', icon: '👔' },
  { name: 'Testimonials', href: '/testimonials', icon: '💬' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900">Portfolio Dashboard</h2>
      </div>

      <nav className="px-3">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg mb-1 transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}