'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const pageVariants = {
  initial: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 120 : -120,
  }),
  in: {
    opacity: 1,
    x: 0,
  },
  out: (direction) => ({
    opacity: 0,
    x: direction < 0 ? 120 : -120,
  }),
}

const pageTransition = {
  type: 'tween',
  ease: [0.25, 0.46, 0.45, 0.94],
  duration: 0.8,
}

const PageTransition = ({ children }) => {
  const pathname = usePathname()

  // Determine animation direction based on page order
  const getPageOrder = (path) => {
    const routes = ['/', '/projects', '/experience', '/about', '/resume']
    return routes.indexOf(path)
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        custom={getPageOrder(pathname)}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition