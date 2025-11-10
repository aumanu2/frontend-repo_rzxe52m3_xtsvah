import React from 'react'

function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold">C</div>
          <span className="text-lg sm:text-xl font-semibold text-gray-800">Community Committee</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a className="hover:text-gray-900" href="#events">Events</a>
          <a className="hover:text-gray-900" href="#contribute">Contribute</a>
          <a className="hover:text-gray-900" href="/test">Status</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
