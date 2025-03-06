'use client'

import { useLanguage } from '@/context/LanguageContext'
import Image from 'next/image'
import { useState } from 'react'
import Modal from '@/components/Modal'

export default function Contact() {
  const { language } = useLanguage()
  const [isQRModalOpen, setIsQRModalOpen] = useState(false)

  const content = {
    zh: {
      title: '联系我',
      subtitle: '通过以下方式与我取得联系',
      wechat: {
        title: '微信',
        description: '扫描二维码添加我的微信',
        clickToView: '点击查看大图',
      },
      email: {
        title: '邮箱',
        description: '发送邮件至：',
        address: 'zhouhuan19910202@gmail.com', // 替换为你的实际邮箱
      },
    },
    en: {
      title: 'Contact Me',
      subtitle: 'Get in touch with me through the following channels',
      wechat: {
        title: 'WeChat',
        description: 'Scan QR code to add me on WeChat',
        clickToView: 'Click to view larger image',
      },
      email: {
        title: 'Email',
        description: 'Send email to:',
        address: 'zhouhuan19910202@gmail.com', // 替换为你的实际邮箱
      },
    },
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 页面标题 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            {content[language].title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {content[language].subtitle}
          </p>
        </div>

        {/* 联系方式卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 微信二维码卡片 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:-translate-y-1 transition-all">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              {content[language].wechat.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
              {content[language].wechat.description}
            </p>
            <div className="flex flex-col items-center space-y-4">
              <button
                onClick={() => setIsQRModalOpen(true)}
                className="group relative w-48 h-48 bg-white rounded-xl p-4 shadow-inner hover:shadow-lg transition-all cursor-pointer">
                <Image
                  src="/images/wechat-qr.jpg"
                  alt="WeChat QR Code"
                  fill
                  className="object-contain p-2"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-xl flex items-center justify-center transition-all">
                  <span className="text-transparent group-hover:text-gray-700 text-sm font-medium transition-all">
                    {content[language].wechat.clickToView}
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* 邮箱卡片 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:-translate-y-1 transition-all">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              {content[language].email.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
              {content[language].email.description}
            </p>
            <div className="flex justify-center">
              <a
                href={`mailto:${content[language].email.address}`}
                className="text-blue-600 dark:text-blue-400 font-mono text-lg hover:underline">
                {content[language].email.address}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 二维码模态框 */}
      <Modal isOpen={isQRModalOpen} onClose={() => setIsQRModalOpen(false)}>
        <div className="relative w-[400px] h-[400px] bg-white rounded-xl">
          <Image
            src="/images/wechat-qr.jpg"
            alt="WeChat QR Code"
            fill
            className="object-contain"
            quality={100}
          />
        </div>
      </Modal>
    </div>
  )
}
