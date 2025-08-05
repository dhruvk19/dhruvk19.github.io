import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Resume & Contact',
  description: 'Get in touch with Dhruv Kapur for collaboration, projects, or opportunities. Download resume and connect via email or LinkedIn.',
  openGraph: {
    title: 'Resume & Contact | Dhruv Kapur',
    description: 'Connect with me for exciting projects, collaboration opportunities, or just to chat about technology.',
  },
}

const contactInfo = {
  email: "dhruvka@umich.edu",
  linkedin: "linkedin.com/in/dhruvk19",
  github: "github.com/dhruvk19",
  openreview: "OpenReview: /Dhruv_Kapur1",
  location: "Ann Arbor, Michigan",
  timezone: "Eastern Time"
}

const interests = [
  "🚀 Exciting Projects: Especially in fintech, healthtech, or sustainability",
  "💡 Collaboration: Always open to partnering with designers, developers, and entrepreneurs",
  "🎯 Mentoring: Happy to chat with junior developers or career changers",
  "☕ Coffee Chats: If you're in Ann Arbor, let's grab coffee and talk shop!"
]

export default function Resume() {
  return (
    <div className="page-resume min-h-screen">
      <main className="container-custom pt-32 pb-8">
        <div className="max-w-4xl">
          <h2 className="page-header text-white border-b-4 border-b-white">
            resume
          </h2>
          
          <div className="page-content text-white space-y-8">
            <p className="text-xl leading-relaxed">
              I love connecting with fellow creators, potential collaborators, and anyone who gets excited about building cool stuff. Whether you have a project in mind, want to chat about the latest in tech, or just want to say hi—I'd love to hear from you!
            </p>
            
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-white/20">
              <h3 className="text-2xl font-medium text-white mb-6">Let's Connect</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                <p><strong>Email:</strong> <a href={`mailto:${contactInfo.email}`} className="hover:opacity-70 transition-opacity">{contactInfo.email}</a></p>
                <p><strong>LinkedIn:</strong> <a href={`https://www.${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">{contactInfo.linkedin}</a></p>
                <p><strong>GitHub:</strong> <a href={`https://${contactInfo.github}`} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">{contactInfo.github}</a></p>
                <p><strong>OpenReview:</strong> <a href="https://openreview.net/profile?id=~Dhruv_Kapur1" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">/Dhruv_Kapur1</a></p>
                <p><strong>Location:</strong> {contactInfo.location}</p>
                <p><strong>Timezone:</strong> {contactInfo.timezone}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-white">What I'm Looking For</h3>
              <div className="space-y-3">
                {interests.map((interest, index) => (
                  <p key={index} className="text-lg leading-relaxed">
                    {interest}
                  </p>
                ))}
              </div>
            </div>
            
            <ContactForm />

            <p className="text-sm opacity-80 mt-8">
              <strong>Response Time:</strong> I typically respond to emails within 24 hours during weekdays. For urgent matters, feel free to reach out on LinkedIn for a faster response!
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}