import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.riversnow.xyz'

  // 定义所有页面路径
  const routes = [
    '',
    '/about',
    '/skills',
    '/projects',
    '/contact',
    '/ningguo-services', // 新增宁国服务页面
  ]

  // 为每个路径生成中英文版本的 URL
  return routes.flatMap((route) => [
    {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '/ningguo-services' ? 'daily' : 'weekly',
      priority: route === '' ? 1 : route === '/ningguo-services' ? 0.9 : 0.8,
    },
    {
      url: `${baseUrl}/en${route}`,
      lastModified: new Date(),
      changeFrequency: route === '/ningguo-services' ? 'daily' : 'weekly',
      priority: route === '' ? 0.9 : route === '/ningguo-services' ? 0.8 : 0.7,
    },
  ])
}
