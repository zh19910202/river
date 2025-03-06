'use client'

import { useEffect, useRef } from 'react'
import { useLanguage } from '@/context/LanguageContext'

interface SkillData {
  name: string
  level: number
  color: string
}

interface SkillChartProps {
  data: SkillData[]
}

const SkillChart = ({ data }: SkillChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { language } = useLanguage()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // 设置画布大小
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // 绘制图表
    const drawChart = () => {
      const width = canvas.width
      const height = canvas.height
      const padding = 40
      const barWidth = (width - padding * 2) / data.length / 1.5
      const maxValue = Math.max(...data.map((item) => item.level))

      // 清空画布
      ctx.clearRect(0, 0, width, height)

      // 绘制坐标轴
      ctx.beginPath()
      ctx.strokeStyle = '#e5e7eb'
      ctx.lineWidth = 1
      ctx.moveTo(padding, padding)
      ctx.lineTo(padding, height - padding)
      ctx.lineTo(width - padding, height - padding)
      ctx.stroke()

      // 绘制网格线
      ctx.strokeStyle = '#f3f4f6'
      ctx.lineWidth = 0.5
      for (let i = 1; i < 5; i++) {
        const y = height - padding - (height - padding * 2) * (i / 5)
        ctx.beginPath()
        ctx.moveTo(padding, y)
        ctx.lineTo(width - padding, y)
        ctx.stroke()
      }

      // 绘制数据
      data.forEach((item, index) => {
        const x = padding + index * (barWidth * 1.5)
        const barHeight = (height - padding * 2) * (item.level / maxValue)
        const y = height - padding - barHeight

        // 绘制柱状图
        ctx.fillStyle = item.color
        ctx.fillRect(x, y, barWidth, barHeight)

        // 绘制数值
        ctx.fillStyle = '#374151'
        ctx.font = '12px Inter'
        ctx.textAlign = 'center'
        ctx.fillText(`${item.level}%`, x + barWidth / 2, y - 5)

        // 绘制技能名称
        ctx.fillStyle = '#6b7280'
        ctx.fillText(item.name, x + barWidth / 2, height - padding + 20)
      })
    }

    drawChart()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [data, language])

  return (
    <div className="w-full h-96 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ maxHeight: '400px' }}
      />
    </div>
  )
}

export default SkillChart
