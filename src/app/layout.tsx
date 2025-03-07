import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/context/ThemeContext'
import { LanguageProvider } from '@/context/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

// 定义宣城地区的本地化信息
const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Web3 开发者 - Snow',
  image: 'https://www.riversnow.xyz/logo.png',
  description:
    '安徽宣城专业的Web3全栈开发工程师，提供区块链开发、智能合约开发等服务',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '宣城市',
    addressLocality: '宣城',
    addressRegion: '安徽省',
    postalCode: '242000',
    addressCountry: 'CN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '30.9454',
    longitude: '118.7589',
  },
  url: 'https://www.riversnow.xyz',
  areaServed: ['宣城', '芜湖', '合肥', '南京'],
  priceRange: '¥¥',
  sameAs: [
    'https://github.com/yourgithub', // 替换为您的 GitHub 链接
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'riversnow.xyz@gmail.com',
    contactType: 'customer service',
    availableLanguage: ['Chinese', 'English'],
  },
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Web3 开发服务',
        description: '区块链应用开发、智能合约开发、DApp 开发',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: '网站开发服务',
        description: '企业网站开发、电商平台开发、Web 应用开发',
      },
    },
  ],
}

// 定义个人信息的结构化数据
const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Snow',
  jobTitle: 'Web3 全栈开发工程师',
  description: '专注于区块链技术和全栈开发的软件工程师',
  url: 'https://www.riversnow.xyz',
  sameAs: [
    'https://github.com/yourgithub', // 替换为您的 GitHub 链接
  ],
  knowsAbout: [
    'Web3',
    'Blockchain',
    'Smart Contracts',
    'Full Stack Development',
    'DApp Development',
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.riversnow.xyz'),
  title: {
    template: '%s | Web3 开发者 - Snow',
    default: 'Web3 开发者 | 安徽宣城软件开发工程师',
  },
  description:
    '宣城本地专业的Web3全栈开发工程师，专注于区块链技术、智能合约开发和DApp应用开发，为皖南地区企业提供完整的区块链解决方案。',
  keywords: [
    'Web3开发',
    '宣城软件开发',
    '安徽区块链',
    '宣城程序员',
    '皖南IT服务',
    '全栈开发',
    '宣城网站开发',
    '区块链工程师',
    '宣城技术外包',
    '安徽软件开发',
    '智能合约开发',
    'DApp开发',
    '区块链咨询',
    '网站建设',
  ],
  authors: [{ name: 'Snow', url: 'https://www.riversnow.xyz' }],
  creator: 'Snow',
  publisher: 'Snow',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.riversnow.xyz',
    languages: {
      'zh-CN': 'https://www.riversnow.xyz',
      'en-US': 'https://www.riversnow.xyz/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://www.riversnow.xyz',
    siteName: 'Web3 开发者 - Snow',
    title: 'Web3 开发者 | 安徽宣城软件开发工程师',
    description:
      '宣城本地专业的Web3全栈开发工程师，为企业提供区块链技术解决方案。',
    images: [
      {
        url: 'https://www.riversnow.xyz/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '宣城Web3开发服务',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web3 开发者 | 安徽宣城软件开发工程师',
    description: '宣城本地专业的Web3全栈开发工程师，提供区块链技术解决方案。',
    images: ['/og-image.jpg'],
    creator: '@yourtwitter',
    site: '@yourtwitter',
  },
  verification: {
    google: 'your-google-verification-code',
    other: {
      'baidu-site-verification': 'codeva-6s7DLz5s61',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="CN-34" />
        <meta name="geo.placename" content="Xuancheng" />
        <meta name="geo.position" content="30.9454;118.7589" />
        <meta name="ICBM" content="30.9454, 118.7589" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([localBusiness, person]),
          }}
        />
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
