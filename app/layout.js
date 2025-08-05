import './globals.css'
import Header from '@/components/Header'
import PageTransition from '@/components/PageTransition'

export const metadata = {
  title: {
    default: 'Dhruv Kapur - Portfolio',
    template: '%s | Dhruv Kapur'
  },
  description: 'Full-stack developer and computer science student at University of Michigan, specializing in web development, machine learning, and system design.',
  keywords: ['Dhruv Kapur', 'portfolio', 'software engineer', 'University of Michigan', 'computer science', 'web development', 'machine learning'],
  authors: [{ name: 'Dhruv Kapur', url: 'https://dhruvkapur.dev' }],
  creator: 'Dhruv Kapur',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dhruvkapur.dev',
    siteName: 'Dhruv Kapur Portfolio',
    title: 'Dhruv Kapur - Full-Stack Developer & CS Student',
    description: 'Explore my projects, experience, and journey in software engineering and computer science.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhruv Kapur - Portfolio',
    description: 'Full-stack developer and computer science student at University of Michigan.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-serif bg-dark text-white overflow-x-hidden">
        <Header />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  )
}