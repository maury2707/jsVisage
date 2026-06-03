

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

  const footerClasses = `fixed left-0 bottom-0 w-full bg-[#0b2140] text-[#ff3b3b] text-center py-3 font-sans text-sm z-50 transform transition-transform duration-200 ease-in-out ${visible ? 'translate-y-0' : 'translate-y-full'}`

  return (
    <footer className={footerClasses}>
      © {new Date().getFullYear()} jsVisage. All rights reserved.
    </footer>
  )
}

export default Footer