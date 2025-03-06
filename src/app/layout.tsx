import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/context/ThemeContext'
import { LanguageProvider } from '@/context/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Snow | Full Stack Developer',
  description:
    'Full Stack Developer specializing in Web3 and Enterprise Applications',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: '#3b82f6',
  viewport: 'width=device-width, initial-scale=1',
  keywords: [
    'Web3',
    'Full Stack',
    'Developer',
    'React',
    'Node.js',
    'Blockchain',
  ],
  authors: [{ name: 'Snow' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    siteName: 'Snow Portfolio',
    title: 'Snow | Full Stack Developer',
    description:
      'Full Stack Developer specializing in Web3 and Enterprise Applications',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Snow Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snow | Full Stack Developer',
    description:
      'Full Stack Developer specializing in Web3 and Enterprise Applications',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
