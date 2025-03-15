'use client'

import { useLanguage } from '@/context/LanguageContext'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import ContactCTA from '@/components/ContactCTA'

export default function NingguoServices() {
  const { language } = useLanguage()

  const content = {
    zh: {
      title: '宁国本地网站与小程序开发服务',
      subtitle: '为宁国企业和个人提供专业的网站建设与应用开发',
      intro:
        '作为宁国本地的网站开发工程师，我为宁国市及周边地区的企业和个人提供专业的网站建设、小程序开发和区块链应用服务。',
      services: [
        {
          title: '宁国个人网站搭建',
          description:
            '为宁国市个人提供专业的个人网站、博客、作品集等网站搭建服务，展示个人专业形象。',
          icon: '👤',
          features: [
            '响应式设计',
            '个性化定制',
            'SEO优化',
            '简单的内容管理系统',
          ],
        },
        {
          title: '宁国企业网站建设',
          description:
            '为宁国本地企业打造专业的企业官网，提升企业形象，拓展业务渠道。',
          icon: '🏢',
          features: [
            '企业形象展示',
            '产品服务介绍',
            '联系表单',
            '多端适配',
            '后台管理系统',
          ],
        },
        {
          title: '宁国微信小程序开发',
          description:
            '开发微信、支付宝等平台的小程序，帮助宁国企业拓展移动端业务。',
          icon: '📱',
          features: [
            '用户管理',
            '商品管理',
            '订单系统',
            '支付功能',
            '数据分析',
          ],
        },
        {
          title: '宁国电商网站开发',
          description: '为宁国商家提供电商网站开发服务，帮助企业实现线上销售。',
          icon: '🛒',
          features: [
            '商品管理',
            '购物车功能',
            '支付接口',
            '订单管理',
            '会员系统',
          ],
        },
        {
          title: '宁国DApp开发',
          description:
            '开发基于区块链的去中心化应用，适合宁国地区对创新技术有需求的企业。',
          icon: '⛓️',
          features: [
            '智能合约开发',
            'Web3集成',
            '去中心化存储',
            '数字资产管理',
          ],
        },
        {
          title: '宁国网站维护升级',
          description: '为宁国地区现有网站提供维护、更新和升级服务。',
          icon: '🔧',
          features: [
            '内容更新',
            '功能升级',
            '安全维护',
            '性能优化',
            '故障修复',
          ],
        },
      ],
      clients: {
        title: '服务宁国地区客户',
        description: '我为宁国市各行业提供专业的网站和应用开发服务，包括：',
        industries: [
          '制造业',
          '餐饮服务',
          '旅游景点',
          '教育机构',
          '零售商店',
          '专业服务',
        ],
      },
      advantages: {
        title: '选择宁国本地开发者的优势',
        items: [
          {
            title: '宁国本地服务',
            description: '作为宁国本地开发者，可提供面对面沟通和及时响应。',
            icon: '📍',
          },
          {
            title: '了解宁国本地需求',
            description:
              '熟悉宁国市场环境和用户需求，提供更符合本地特色的解决方案。',
            icon: '🧠',
          },
          {
            title: '长期合作',
            description: '提供长期的技术支持和维护服务，建立持久的合作关系。',
            icon: '🤝',
          },
          {
            title: '灵活定制',
            description: '根据宁国企业的具体需求，提供定制化的开发方案。',
            icon: '⚙️',
          },
        ],
      },
      faq: {
        title: '宁国网站开发常见问题',
        items: [
          {
            question: '宁国开发一个网站需要多长时间？',
            answer:
              '根据项目复杂度不同，一般简单的展示型网站需要1-2周，功能复杂的网站可能需要1-2个月。',
          },
          {
            question: '宁国本地网站开发价格如何？',
            answer:
              '价格根据网站类型、功能复杂度和设计要求而定，展示型网站起价较低，电商网站和功能型网站价格较高。欢迎咨询具体报价。',
          },
          {
            question: '开发完成后是否提供后续维护？',
            answer:
              '是的，我提供长期的网站维护和技术支持服务，确保您的网站正常运行和安全。',
          },
          {
            question: '是否提供网站域名和服务器？',
            answer:
              '可以提供域名注册和服务器部署的全套服务，也可以使用您已有的资源。',
          },
        ],
      },
    },
    en: {
      title: 'Ningguo Website & Mini Program Development',
      subtitle:
        'Professional Web Development Services for Businesses in Ningguo',
      intro:
        'As a local web developer in Ningguo, I provide professional website building, mini program development, and blockchain application services for businesses and individuals in Ningguo City and surrounding areas.',
      services: [
        {
          title: 'Personal Website Development',
          description:
            'Professional personal website, blog, and portfolio development services for individuals in Ningguo City.',
          icon: '👤',
          features: [
            'Responsive design',
            'Personalization',
            'SEO optimization',
            'Simple CMS',
          ],
        },
        {
          title: 'Business Website Development',
          description:
            'Create professional corporate websites for local Ningguo businesses to enhance image and expand business channels.',
          icon: '🏢',
          features: [
            'Corporate image display',
            'Product service introduction',
            'Contact forms',
            'Multi-device adaptation',
            'Backend management',
          ],
        },
        {
          title: 'Mini Program Development',
          description:
            'Develop mini programs for WeChat, Alipay and other platforms to help Ningguo businesses expand mobile services.',
          icon: '📱',
          features: [
            'User management',
            'Product management',
            'Order system',
            'Payment functions',
            'Data analysis',
          ],
        },
        {
          title: 'E-commerce Website Development',
          description:
            'Provide e-commerce website development services for Ningguo merchants to help businesses achieve online sales.',
          icon: '🛒',
          features: [
            'Product management',
            'Shopping cart functionality',
            'Payment interface',
            'Order management',
            'Membership system',
          ],
        },
        {
          title: 'DApp Development',
          description:
            'Develop blockchain-based decentralized applications for businesses in Ningguo area that need innovative technology.',
          icon: '⛓️',
          features: [
            'Smart contract development',
            'Web3 integration',
            'Decentralized storage',
            'Digital asset management',
          ],
        },
        {
          title: 'Website Maintenance & Upgrade',
          description:
            'Provide maintenance, update and upgrade services for existing websites in Ningguo area.',
          icon: '🔧',
          features: [
            'Content updates',
            'Feature upgrades',
            'Security maintenance',
            'Performance optimization',
            'Troubleshooting',
          ],
        },
      ],
      clients: {
        title: 'Serving Clients in Ningguo',
        description:
          'I provide professional website and application development services for various industries in Ningguo City, including:',
        industries: [
          'Manufacturing',
          'Food & Beverage',
          'Tourism Sites',
          'Educational Institutions',
          'Retail Stores',
          'Professional Services',
        ],
      },
      advantages: {
        title: 'Advantages of Choosing a Local Developer',
        items: [
          {
            title: 'Local Service',
            description:
              'As a Ningguo local developer, I offer face-to-face communication and timely response.',
            icon: '📍',
          },
          {
            title: 'Understanding Local Needs',
            description:
              'Familiar with Ningguo market environment and user needs, providing solutions that better match local characteristics.',
            icon: '🧠',
          },
          {
            title: 'Long-term Cooperation',
            description:
              'Provide long-term technical support and maintenance services to establish lasting partnerships.',
            icon: '🤝',
          },
          {
            title: 'Flexible Customization',
            description:
              'Provide customized development solutions based on the specific needs of Ningguo businesses.',
            icon: '⚙️',
          },
        ],
      },
      faq: {
        title: 'FAQ About Ningguo Website Development',
        items: [
          {
            question: 'How long does it take to develop a website in Ningguo?',
            answer:
              'Depending on the complexity of the project, a simple display website generally takes 1-2 weeks, while a website with complex functions may take 1-2 months.',
          },
          {
            question:
              'What are the prices for local website development in Ningguo?',
            answer:
              'Prices vary depending on the type of website, functional complexity, and design requirements. Display websites start at a lower price, while e-commerce and functional websites are priced higher. Please inquire for specific quotes.',
          },
          {
            question:
              'Do you provide maintenance after development is complete?',
            answer:
              'Yes, I provide long-term website maintenance and technical support services to ensure your website runs normally and securely.',
          },
          {
            question: 'Do you provide domain names and servers?',
            answer:
              'I can provide full services for domain registration and server deployment, or I can use your existing resources.',
          },
        ],
      },
    },
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen pb-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {currentContent.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-8">
            {currentContent.subtitle}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {currentContent.intro}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            {currentContent.clients.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            {currentContent.clients.description}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {currentContent.clients.industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <p className="text-gray-800 dark:text-gray-200 font-medium">
                  {industry}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            {currentContent.advantages.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentContent.advantages.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-start p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <div className="text-3xl mr-4">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            {currentContent.faq.title}
          </h2>
          <div className="space-y-6">
            {currentContent.faq.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {item.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactCTA />
    </div>
  )
}
