'use client'

import { ReactNode } from 'react'
import Navbar from './Navbar'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <main className="pt-16">
        {/* 页面内容容器 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 页面过渡动画包装器 */}
          <div className="animate-slide-up">{children}</div>
        </div>
      </main>

      {/* 页面装饰 */}
      <div className="fixed inset-0 pointer-events-none">
        {/* 背景渐变 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-teal-500/5 dark:from-blue-500/10 dark:via-transparent dark:to-teal-500/10" />

        {/* 网格背景 */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:24px_24px] opacity-50 dark:opacity-30" />

        {/* 柔和光晕 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] rounded-full bg-gradient-to-b from-blue-500/10 to-transparent dark:from-blue-400/5 blur-3xl" />
      </div>
    </div>
  )
}

export default Layout
