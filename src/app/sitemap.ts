import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.riversnow.xyz'

  // 定义所有页面路径
  const routes = ['', '/about', '/skills', '/projects', '/contact']

  // 为每个路径生成中英文版本的 URL
  const urls = routes.flatMap((route) => [
    {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    },
    {
      url: `${baseUrl}/en${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 0.9 : 0.7,
    },
  ])

  return urls
}
