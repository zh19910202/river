'use client'

import { useLanguage } from '@/context/LanguageContext'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function ContactCTA() {
  const { language } = useLanguage()
  const [showQRCode, setShowQRCode] = useState(false)

  const content = {
    en: {
      title: 'Need a Website?',
      subtitle: "Let's Build Something Amazing Together",
      description:
        'Whether you need a personal portfolio, business website, or web application, I can help bring your vision to life.',
      services: [
        'Website Development',
        'Web3 dApp Development',
        'UI/UX Design',
        'Technical Consulting',
      ],
      contact: 'Contact me via:',
      email: 'riversnow.xyz@gmail.com',
      wechat: 'WeChat',
      scanQR: 'Scan QR Code',
    },
    zh: {
      title: '需要开发网站？',
      subtitle: '让我们一起打造出色的网站',
      description:
        '无论您需要个人作品集、企业网站还是Web应用程序，我都能帮助您实现愿景。',
      services: ['网站开发', 'Web3 应用开发', 'UI/UX 设计', '技术咨询'],
      contact: '联系方式：',
      email: 'riversnow.xyz@gmail.com',
      wechat: '微信',
      scanQR: '扫码添加',
    },
  }

  const currentContent = content[language]

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8 rounded-3xl my-8 shadow-lg">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {currentContent.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-8">
          {currentContent.subtitle}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
          {currentContent.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {currentContent.services.map((service, index) => (
            <div
              key={service}
              className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md">
              <p className="text-gray-800 dark:text-gray-200 font-medium">
                {service}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8">
          <p className="text-gray-700 dark:text-gray-300 font-medium">
            {currentContent.contact}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Email Button */}
            <a
              href={`mailto:${currentContent.email}`}
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {currentContent.email}
            </a>

            {/* WeChat Button and QR Code */}
            <div className="relative">
              <button
                onClick={() => setShowQRCode(!showQRCode)}
                className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-200">
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M8.2 13.3c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9m7.6 0c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9m-8.1-4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9m7.6 0c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9m4.4 3.9c0-3.3-3.2-5.9-7.2-5.9s-7.2 2.6-7.2 5.9c0 1.7.9 3.3 2.4 4.4.2.1.3.3.2.5 0 .2-.1.3-.1.5-.1.2-.2.4 0 .5.1.1.2.1.3.1h.1c1.1-.5 1.5-.4 1.8-.3 1 .3 2 .4 3 .3.2 0 .4-.1.5-.3.1-.2 0-.4-.2-.5-.8-.4-1.1-1.3-.6-2 .4-.8 1.3-1.1 2-.6.8.4 1.1 1.3.6 2-.2.3-.4.6-.7.7-.2.1-.3.4-.2.6.1.2.4.3.6.2 1.5-.8 2.4-2.3 2.4-4l-.7-.1" />
                </svg>
                {currentContent.wechat}
              </button>

              {/* QR Code Modal */}
              {showQRCode && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl">
                  <div className="relative w-48 h-48">
                    <Image
                      src="/images/wechat-qr.jpg"
                      alt="WeChat QR Code"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {currentContent.scanQR}
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
