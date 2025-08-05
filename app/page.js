import Link from 'next/link'

export const metadata = {
  title: 'Dhruv Kapur - Portfolio',
  description: 'Full-stack developer and computer science student at University of Michigan, specializing in web development, machine learning, and system design.',
}

export default function Home() {
  const navItems = [
    { href: '/projects', label: 'projects', color: 'text-projects border-b-projects' },
    { href: '/experience', label: 'experience', color: 'text-experience border-b-experience' },
    { href: '/about', label: 'about', color: 'text-about border-b-about' },
    { href: '/resume', label: 'resume', color: 'text-resume border-b-resume' },
  ]

  return (
    <main className="min-h-screen flex flex-col justify-center items-start px-10 max-w-6xl mx-auto">
      <div className="space-y-8">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-8">
          dhruv kapur
        </h1>
        <h2 className="bg-red-500 p-4">
            give me a break!
        </h2>
        
        <nav className="flex flex-col gap-4 mt-8">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-4xl md:text-5xl font-light relative pb-1 
                         border-b-4 transition-all duration-300 hover:opacity-70
                         fade-in-up-delay-${index + 1} ${item.color}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </main>
  )
}