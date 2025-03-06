import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/context/ThemeContext'
import { LanguageProvider } from '@/context/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Web3 开发者 | Smart Contract Developer',
  description: '专业的智能合约开发工程师，专注于以太坊生态系统和区块链技术。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="pt-16">{children}</main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
