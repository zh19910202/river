'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

interface CertificationCardProps {
  title: string
  issuer: string
  date: string
  image: string
  link: string
}

const CertificationCard = ({
  title,
  issuer,
  date,
  image,
  link,
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-200">{issuer}</p>
          <p className="text-xs text-gray-300">{date}</p>
        </div>
      </div>
    </a>
  )
}

export default CertificationCard
