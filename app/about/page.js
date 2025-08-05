import Footer from '@/components/Footer'

export const metadata = {
  title: 'About',
  description: 'Learn more about Dhruv Kapur - Computer Science student at University of Michigan with a passion for full-stack development and user experience design.',
  openGraph: {
    title: 'About | Dhruv Kapur',
    description: 'Final year Computer Science student at University of Michigan, studying CS with a minor in User Experience Design.',
  },
}

const courses = [
  "Web Systems -- React.js, Python, SQL",
  "Data Science and Machine Learning -- Python",
  "Artificial Intelligence -- Python",
  "Data Structures & Algorithms -- C++",
  "Parallel Programming with GPUs -- C, CUDA",
  "Mobile App Development",
  "Web Design, Development, and Accessibility -- HTML, CSS, JavaScript"
]

export default function About() {
  return (
    <div className="page-about min-h-screen">
      <main className="container-custom pt-32 pb-8">
        <div className="max-w-4xl">
          <h2 className="page-header text-dark border-b-4 border-b-dark">
            about
          </h2>
          
          <div className="page-content text-dark space-y-8">
            <p className="text-xl leading-relaxed">
              Hi! I'm Dhruv, a full-stack developer and product designer who gets excited about building things that people actually want to use.
            </p>
            
            <p className="text-lg leading-relaxed">
              I am currently in my final year at the University of Michigan, studying Computer Science and a minor in User Experience Design.
            </p>
            
            <div className="space-y-2">
              <p className="text-lg">
                <strong>GPA:</strong> 3.77/4.00
              </p>
              <p className="text-lg mb-6">
                <strong>Achievements:</strong> Dean's Honor List, University Honors
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg font-medium">
                Some relevant courses that I have taken at college are...
              </p>
              <ul className="space-y-3 ml-6">
                {courses.map((course, index) => (
                  <li key={index} className="text-lg leading-relaxed list-disc">
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Footer theme="about" />
        </div>
      </main>
    </div>
  )
}