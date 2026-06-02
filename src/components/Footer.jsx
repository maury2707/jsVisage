

import { useEffect, useState } from 'react'

function Footer() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      setVisible(isAtBottom)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const footerStyle = {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: '#0b2140',
    color: '#ff3b3b',
    textAlign: 'center',
    padding: '12px 0',
    fontFamily: 'sans-serif',
    fontSize: '14px',
    zIndex: 999,
    transform: visible ? 'translateY(0)' : 'translateY(100%)',
    transition: 'transform 200ms ease',
  }

  return (
    <footer style={footerStyle}>
      © {new Date().getFullYear()} jsVisage. All rights reserved.
    </footer>
  )
}

export default Footer