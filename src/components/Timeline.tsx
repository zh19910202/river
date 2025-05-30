'use client'

import { useLanguage } from '@/context/LanguageContext'

interface TimelineItem {
  date: string
  title: string
  description: string
  icon: string
  achievements?: string[] // Added achievements
}

interface TimelineProps {
  items: TimelineItem[]
}

const Timeline = ({ items }: TimelineProps) => {
  const { language } = useLanguage()

  return (
    <div className="relative">
      {/* 时间线轴线 */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />

      {items.map((item, index) => (
        <div
          key={index}
          className={`relative mb-8 flex ${
            index % 2 === 0 ? 'justify-start' : 'justify-end'
          }`}>
          {/* 时间线内容 */}
          <div
            className={`w-1/2 ${
              index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
            }`}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 relative">
              {/* 时间线点 */}
              <div className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full" />
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full ${
                  index % 2 === 0 ? '-right-8' : '-left-8'
                }`}
              />

              {/* 日期 */}
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {item.date}
              </div>

              {/* 标题 */}
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                {item.title}
              </h3>

              {/* 描述 */}
              <p className="text-gray-600 dark:text-gray-300 mb-3"> {/* Added mb-3 */}
                {item.description}
              </p>

              {/* Achievements */}
              {item.achievements && item.achievements.length > 0 && (
                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                  <h5 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    {language === 'zh' ? '主要成就:' : 'Key Achievements:'}
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {item.achievements.map((achievement, achIndex) => (
                      <span
                        key={achIndex}
                        className="px-2 py-1 text-xs bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 图标 */}
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 text-xl p-2 bg-gray-100 dark:bg-gray-700 rounded-full shadow-md ${ /* Icon styling */
                  index % 2 === 0 ? '-right-12 md:-right-14' : '-left-12 md:-left-14'  /* Adjusted positioning */
                }`}>
                {item.icon}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Timeline
