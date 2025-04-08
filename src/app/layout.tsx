import './globals.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

// Font configuration
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
})

export const metadata: Metadata = {
  title: 'Ashutosh Saxena | Portfolio',
  description: 'DevOps Engineer & Developer - Portfolio showcasing my projects, skills, and experiences.',
  keywords: ['DevOps', 'Engineer', 'Portfolio', 'Developer', 'Java', 'Docker', 'Kubernetes'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable} scroll-smooth`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 