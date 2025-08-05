'use client'

const Footer = ({ theme = 'projects' }) => {
  const contactInfo = {
    email: "dhruvka@umich.edu",
    linkedin: "linkedin.com/in/dhruvk19",
    github: "github.com/dhruvk19",
    openreview: "/Dhruv_Kapur1",
    location: "Ann Arbor, Michigan",
    timezone: "Eastern Time"
  }

  const themeColors = {
    projects: 'text-projects border-projects/30',
    experience: 'text-experience border-experience/30',
    about: 'text-about border-about/30',
    resume: 'text-resume border-resume/30'
  }

  const textColor = theme === 'about' ? 'text-dark' : 'text-white'
  const borderColor = theme === 'about' ? 'border-dark/20' : 'border-white/20'

  return (
    <footer className={`mt-auto pt-12 pb-8 border-t ${borderColor} max-w-4xl w-full`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h4 className={`text-xl mb-6 opacity-90 ${themeColors[theme]}`}>
            Let's Connect
          </h4>
          <div className={`space-y-2 text-base opacity-80 ${textColor}`}>
            <p>
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="hover:opacity-100 transition-opacity"
              >
                {contactInfo.email}
              </a>
            </p>
            <p>
              <a 
                href={`https://www.${contactInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity"
              >
                LinkedIn: {contactInfo.linkedin}
              </a>
            </p>
            <p>
              <a 
                href={`https://${contactInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity"
              >
                GitHub: {contactInfo.github}
              </a>
            </p>
            <p>
              <a 
                href="https://openreview.net/profile?id=~Dhruv_Kapur1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity"
              >
                OpenReview: {contactInfo.openreview}
              </a>
            </p>
          </div>
        </div>
        
        <div>
          <h4 className={`text-xl mb-6 opacity-90 ${themeColors[theme]}`}>
            Currently
          </h4>
          <div className={`space-y-2 text-base opacity-80 ${textColor}`}>
            <p>{contactInfo.location}</p>
            <p>{contactInfo.timezone}</p>
          </div>
        </div>
      </div>
      
      <div className={`text-center text-sm opacity-60 pt-8 border-t ${borderColor} ${textColor}`}>
        <p>© 2025 Dhruv Kapur. Built with passion in Ann Arbor.</p>
      </div>
    </footer>
  )
}

export default Footer