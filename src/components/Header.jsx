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
      className={`bg-blue-900 shadow-lg transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}
      style={{ color: '#ff3300' }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div
          className="text-2xl font-bold"
          style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.4)' }}
        >
          Logo
        </div>
        <div className="flex items-center space-x-3">
          <button onClick={() => navigate('/')} className="px-4 py-2 bg-white/10 text-current rounded-md border border-white/20 hover:bg-white/20 transition">
            Page 1
          </button>
          <button onClick={() => navigate('/body2')} className="px-4 py-2 bg-white/10 text-current rounded-md border border-white/20 hover:bg-white/20 transition">
            Page 2
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 w-64 text-[#ff3300]"
          />
          <div className="font-semibold">Menu</div>
        </div>
      </div>
    </nav>
  )
}

export default Header