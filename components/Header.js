'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    if (!isHome) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [isHome])

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  }

  const navLinks = [
    { href: '/projects', label: 'projects', color: 'projects' },
    { href: '/experience', label: 'experience', color: 'experience' },
    { href: '/about', label: 'about', color: 'about' },
    { href: '/resume', label: 'resume', color: 'resume' },
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={headerVariants}
          className="fixed top-0 left-0 right-0 z-50 px-10 py-8 
                     bg-dark-light/95 backdrop-blur-custom border-b border-white/10
                     flex justify-between items-center h-24"
        >
          <Link
            href="/"
            className="text-2xl font-light text-white hover:opacity-70 
                       transition-opacity duration-300"
          >
            dhruv kapur
          </Link>

          <nav className="flex gap-8">
            {navLinks.map(({ href, label, color }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link nav-link-${color} text-lg font-light cursor-pointer`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  )
}

export default Header