'use client'

import { motion } from 'framer-motion'

const ExperiencePost = ({ experience }) => {
  const postVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <motion.div
      variants={postVariants}
      initial="initial"
      animate="animate"
      className="experience-card"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <h3 className="text-2xl font-medium text-experience mb-2 md:mb-0">
          {experience.company}
        </h3>
        <div className="text-sm opacity-70 text-white">
          {experience.period}
        </div>
      </div>
      
      {experience.role && (
        <div className="text-lg text-white/80 mb-4 font-light">
          {experience.role}
        </div>
      )}
      
      <div className="text-white/90 leading-relaxed mb-6 whitespace-pre-line">
        {experience.description}
      </div>
      
      {experience.techStack && (
        <div className="space-y-2">
          <span className="text-sm font-medium text-experience">Tech Stack:</span>
          <div className="flex flex-wrap gap-2">
            {experience.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-experience/20 text-experience 
                           rounded-full border border-experience/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default ExperiencePost