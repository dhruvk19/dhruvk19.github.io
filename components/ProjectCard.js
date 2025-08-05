'use client'

import { motion } from 'framer-motion'

const ProjectCard = ({ project }) => {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="project-card group cursor-pointer"
    >
      <h3 className="text-2xl mb-4 text-projects font-medium">
        {project.title}
      </h3>
      <p className="text-white/90 leading-relaxed mb-4">
        {project.description}
      </p>
      {project.tech && (
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-projects/20 text-projects 
                         rounded-full border border-projects/30"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default ProjectCard