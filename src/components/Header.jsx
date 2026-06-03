import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY <= 0) {
        setVisible(true)
      } else if (currentScrollY > lastScrollY.current) {
        setVisible(false)
      } else {
        setVisible(true)
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 bg-slate-950 text-orange-300 shadow-lg transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <div className="text-2xl font-bold tracking-tight">Logo</div>
          <p className="text-sm text-orange-200/80">Responsive mobile-first header</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-white/10 text-orange-100 rounded-md border border-white/20 hover:bg-white/20 transition"
          >
            Page 1
          </button>
          <button
            onClick={() => navigate('/body2')}
            className="px-4 py-2 bg-white/10 text-orange-100 rounded-md border border-white/20 hover:bg-white/20 transition"
          >
            Page 2
          </button>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full sm:w-64 px-4 py-2 rounded-md border border-slate-700 bg-slate-900/90 text-orange-100 placeholder:text-orange-300/60 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <div className="font-semibold text-orange-100 text-center sm:text-left">Menu</div>
        </div>
      </div>
    </nav>
  )
}

export default Header