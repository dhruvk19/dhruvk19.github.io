import ProjectCard from '@/components/ProjectCard'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Projects',
  description: 'Explore my software engineering projects including web applications, machine learning models, and system design implementations.',
  openGraph: {
    title: 'Projects | Dhruv Kapur',
    description: 'From backend engineering to user interfaces - explore my diverse portfolio of software projects.',
  },
}

const projects = [
  {
    title: "ClashBot",
    description: "Developed Discord bot utilizing discord.py API to enhance communication and organization within gaming community of 300+ members. Hosted it on a virtual private server (VPS) for 24/7 uptime.",
    tech: ["discord.py", "Python", "VPS"]
  },
  {
    title: "Web-Based Office Hours Queue Management System",
    description: "Developed a high-performance REST API in C++ for managing student office hours queues, implementing custom doubly-linked list data structures with full iterator support. Built careful dynamic memory management, integrated comprehensive error handling. The system demonstrates low-level programming expertise while solving a real-world coordination problem for academic environments.",
    tech: ["C++", "REST API", "Data Structures"]
  },
  {
    title: "Machine Learning Text Classification",
    description: "Created an intelligent text classifier in C++ that achieved 87% accuracy on Piazza post categorization. Implemented supervised learning algorithms with log-probability scoring, processing large CSV datasets to train the model. Built debugging tools to visualize training data and classifier parameters, showcasing both machine learning fundamentals and systems programming skills in a performance-critical application.",
    tech: ["C++", "Machine Learning", "CSV Processing"]
  },
  {
    title: "Euchre (Card Game) Simulation",
    description: "Full-stack web application helping individuals and companies track their environmental impact. Features API integrations with transportation and energy providers, data visualization with D3.js, and gamification elements.",
    tech: ["JavaScript", "Game Logic", "Simulation"]
  },
  {
    title: "Computer Vision Editing",
    description: "Built a social platform for local event discovery and networking. Implemented real-time messaging, location-based event recommendations, and integrated payment processing. Scaled to support 50,000+ monthly active users.",
    tech: ["Computer Vision", "Image Processing", "Python"]
  },
  {
    title: "Computing Alaskan Precipitation",
    description: "Developed an interactive coding education platform with live code execution, peer review systems, and AI-powered hints. Used Next.js, WebSocket connections, and Docker containers for isolated code execution environments.",
    tech: ["Data Analysis", "Python", "Climate Data"]
  },
  {
    title: "Segway Optimization",
    description: "Developed an interactive coding education platform with live code execution, peer review systems, and AI-powered hints. Used Next.js, WebSocket connections, and Docker containers for isolated code execution environments.",
    tech: ["Control Systems", "Optimization", "Engineering"]
  }
]

export default function Projects() {
  return (
    <div className="page-projects min-h-screen">
      <main className="container-custom pt-32 pb-8">
        <div className="max-w-4xl">
          <h2 className="page-header text-projects border-b-4 border-b-projects">
            projects
          </h2>
          <p className="page-tagline">
            all the way from backend engineering & management to the user's screen :)
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          <Footer theme="projects" />
        </div>
      </main>
    </div>
  )
}