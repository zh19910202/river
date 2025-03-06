'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

interface CertificationCardProps {
  title: string
  issuer: string
  date: string
  image: string
  link: string
  description: string
}

const CertificationCard = ({
  title,
  issuer,
  date,
  image,
  link,
  description,
}: CertificationCardProps) => {
  const { language } = useLanguage()

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-gray-200 flex items-center">
            <span className="mr-1">🏢</span> {issuer}
          </p>
          <p className="text-xs text-gray-300 flex items-center">
            <span className="mr-1">📅</span> {date}
          </p>
        </div>
      </div>
      <div className="p-4 h-24 overflow-hidden">
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
          {description}
        </p>
      </div>
      <div className="px-4 pb-4 pt-0">
        <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 dark:bg-blue-700 dark:text-blue-200 rounded-full">
          {language === 'zh' ? '查看证书' : 'View Certificate'} →
        </div>
      </div>
    </a>
  )
}

export default CertificationCard
