'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.')
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your message! I'll get back to you soon.")
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      setIsSubmitting(false)
    }, 1500)
  }

  const formVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <motion.form
      variants={formVariants}
      initial="initial"
      animate="animate"
      onSubmit={handleSubmit}
      className="grid gap-6 max-w-2xl mt-8"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="p-4 border-none rounded bg-white/10 text-white text-lg
                   backdrop-blur-sm placeholder:text-white/70
                   focus:outline-none focus:ring-2 focus:ring-white/30"
      />
      
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="p-4 border-none rounded bg-white/10 text-white text-lg
                   backdrop-blur-sm placeholder:text-white/70
                   focus:outline-none focus:ring-2 focus:ring-white/30"
      />
      
      <input
        type="text"
        name="subject"
        placeholder="What's this about?"
        value={formData.subject}
        onChange={handleChange}
        className="p-4 border-none rounded bg-white/10 text-white text-lg
                   backdrop-blur-sm placeholder:text-white/70
                   focus:outline-none focus:ring-2 focus:ring-white/30"
      />
      
      <textarea
        name="message"
        placeholder="Tell me about your project, idea, or just say hello! I typically respond within 24 hours."
        rows={6}
        value={formData.message}
        onChange={handleChange}
        required
        className="p-4 border-none rounded bg-white/10 text-white text-lg
                   backdrop-blur-sm placeholder:text-white/70 resize-none
                   focus:outline-none focus:ring-2 focus:ring-white/30"
      />
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="p-4 px-8 border-2 border-white bg-transparent text-white text-lg
                   cursor-pointer rounded transition-all duration-300
                   hover:bg-white hover:text-resume disabled:opacity-50
                   disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </motion.form>
  )
}

export default ContactForm