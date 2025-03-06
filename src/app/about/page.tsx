'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function About() {
  const { language } = useLanguage()

  const content = {
    zh: {
      title: '关于我',
      subtitle: '了解我的故事和专业背景',
      description: '我是一名全栈开发工程师，专注于 Web3 和企业应用开发...',
    },
    en: {
      title: 'About Me',
      subtitle: 'Learn about my story and professional background',
      description: 'I am a full-stack developer specializing in Web3 and enterprise applications...',
    },
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            {content[language].title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {content[language].subtitle}
          </p>
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300">
            {content[language].description}
          </p>
        </div>
      </div>
    </div>
  )
} 