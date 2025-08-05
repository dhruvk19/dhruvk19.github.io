import ExperiencePost from '@/components/ExperiencePost'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Experience',
  description: 'My professional experience in software engineering, research, and technology development across industry and academia.',
  openGraph: {
    title: 'Experience | Dhruv Kapur',
    description: 'Industry & research work spanning software engineering, machine learning, and data analysis.',
  },
}

const experiences = [
  {
    company: "NetApp",
    role: "Software Engineering Intern",
    period: "June 2025 - Present",
    description: `As a software engineering intern on the Google Cloud NetApp Volumes team, I worked on the integrating the Google Cloud Console onto the IDE.

I also developed a model context protocol server that allows the developer to use a LLM to execute commands and configurations whilst being efficient and optimized per the cloud infrastructure standards.`,
    techStack: ["React", "Node.js", "TypeScript", "Python", "Docker", "Kubernetes", "Google Cloud Platform"]
  },
  {
    company: "University of Michigan",
    role: "Research Assistant",
    period: "January 2024 - April 2025",
    description: `Collaborating with postdoctoral researcher at University of Michigan analyzing deidentification algorithms in depth as a continuation to my NeurIPS 2023 report in differential privacy`,
    techStack: ["Python", "Pandas", "Matplotlib", "Seaborn"]
  },
  {
    company: "Knexus Research Corporation",
    role: "Research Intern",
    period: "May 2023 - August 2023",
    description: `Explored the behavior of data deidentification in the Collaborative Research Cycle NIST Program analyzing over 450 deidentified data samples.

Compiled in a report for NeurIPS 2023 Track Datasets and Benchmarks.`,
    techStack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "SciPy", "NLTK", "SpaCy", "GCP", "BigQuery"]
  }
]

export default function Experience() {
  return (
    <div className="page-experience min-h-screen">
      <main className="container-custom pt-32 pb-8">
        <div className="max-w-4xl">
          <h2 className="page-header text-experience border-b-4 border-b-experience">
            experience
          </h2>
          <p className="page-tagline">
            industry & research work
          </p>
          
          <div className="space-y-8 mb-16">
            {experiences.map((experience, index) => (
              <ExperiencePost key={index} experience={experience} />
            ))}
          </div>

          <Footer theme="experience" />
        </div>
      </main>
    </div>
  )
}