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
          <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300 mb-1"> {/* Added mb-1 */}
            {title}
          </h3>
          <div className="text-xs text-gray-200 space-y-0.5"> {/* Grouped issuer and date, consistent text-xs */}
            <div className="flex items-center">
              <svg className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20S15 18 12 18s-4 2-4 2z" />
              </svg>
              <span>{issuer}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{date}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4"> {/* Removed fixed height h-24 and overflow-hidden */}
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
          {description}
        </p>
      </div>
      <div className="px-4 pb-4 pt-2"> {/* Added pt-2 for spacing */}
        <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 group-hover:bg-blue-500 transition-colors duration-300">
          {language === 'zh' ? '查看证书' : 'View Certificate'} <span aria-hidden="true" className="ml-1">→</span>
        </span>
      </div>
    </a>
  )
}

export default CertificationCard
