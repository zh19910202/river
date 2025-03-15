import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/context/ThemeContext'
import { LanguageProvider } from '@/context/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

// 定义宁国地区的本地化信息
const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: '宁国网站开发 - Snow',
  image: 'https://www.riversnow.xyz/logo.png',
  description:
    '安徽宣城宁国市专业的全栈开发工程师，提供本地网站搭建、小程序开发、区块链应用服务',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '宁国市',
    addressLocality: '宁国',
    addressRegion: '宣城市安徽省',
    postalCode: '242300',
    addressCountry: 'CN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '30.6339',
    longitude: '118.9831',
  },
  url: 'https://www.riversnow.xyz',
  areaServed: ['宁国', '宣城', '芜湖', '绩溪', '泾县', '旌德', '郎溪'],
  priceRange: '¥¥',
  telephone: '', // 如有电话可添加
  email: 'riversnow.xyz@gmail.com',
  sameAs: [
    'https://github.com/yourgithub', // 替换为您的 GitHub 链接
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: '宁国本地开发服务',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '宁国本地网站搭建',
          description: '宁国本地个人网站搭建、企业官网制作、电商网站开发',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '宁国本地小程序开发',
          description:
            '宁国本地微信小程序开发、支付宝小程序开发、企业小程序定制',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '宁国本地DApp开发',
          description: '宁国本地区块链应用开发、DApp开发、智能合约开发',
        },
      },
    ],
  },
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.riversnow.xyz'),
  title: '宁国本地网站小程序开发 | 安徽宁国软件开发工程师',
  description:
    '宁国本地专业网站搭建、小程序开发服务，提供宁国本地企业网站制作、宁国个人网站搭建、宁国微信小程序开发、宁国电商网站建设及区块链应用开发服务。本地工程师，快速响应，专业可靠。',
  keywords: [
    '宁国本地网站搭建',
    '宁国本地小程序开发',
    '宁国企业网站制作',
    '宁国个人网站开发',
    '宁国网站建设',
    '宁国微信小程序',
    '宁国电商网站',
    '宁国软件开发',
    '宁国网站开发公司',
    '宁国网页设计',
    '宁国dapp开发',
    '宁国区块链开发',
    '宁国本地技术外包',
    '宁国网站制作价格',
    '宁国专业网站定制',
    '宁国企业小程序',
    '宁国响应式网站',
    '宁国网站SEO优化',
    '宁国本地开发者',
    '宣城网站开发',
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
    siteName: '宁国本地网站小程序开发 - Snow',
    title: '宁国本地网站小程序开发 | 安徽宁国软件开发工程师',
    description:
      '宁国本地专业网站搭建、小程序开发服务，提供宁国本地企业网站制作、个人网站搭建、微信小程序开发、电商网站建设服务。',
    images: [
      {
        url: 'https://www.riversnow.xyz/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '宁国网站小程序开发服务',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '宁国本地网站小程序开发 | 安徽宁国软件开发工程师',
    description:
      '宁国本地专业网站搭建、小程序开发服务，提供企业网站制作、个人网站搭建、微信小程序开发服务。',
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
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
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
        <meta name="baidu-site-verification" content="codeva-6s7DLz5s61" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
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
