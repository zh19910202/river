'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import HeroAnimation from '@/components/HeroAnimation'

export default function Home() {
  const { language } = useLanguage()

  const content = {
    zh: {
      title: '全栈开发专家',
      subtitle: '专注于企业级应用与区块链开发',
      description:
        '我是一名全栈开发专家，擅长企业级应用开发和区块链技术。专注于构建高性能、可扩展的解决方案，包括企业管理系统、电商平台、数据分析系统，以及去中心化应用（DApp）和智能合约开发。',
      cta: {
        projects: '查看项目',
        contact: '联系我',
      },
      about: {
        title: '关于我',
        description: [
          '作为一名全栈开发专家，我专注于企业级应用开发和区块链技术。',
          '我擅长设计和实现高性能、可扩展的系统，具有丰富的企业应用和区块链项目开发经验。',
          '在传统开发和区块链领域都拥有多年经验，我参与过多个成功的企业管理系统、电商平台、数据分析系统，以及 DeFi 项目开发。',
        ],
      },
      skills: {
        title: '核心技能',
        categories: [
          {
            category: '前端开发',
            items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
            icon: '🎨',
          },
          {
            category: '后端开发',
            items: ['Node.js', 'Python', 'Java', 'Go'],
            icon: '⚙️',
          },
          {
            category: '数据库',
            items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
            icon: '🗄️',
          },
          {
            category: '区块链开发',
            items: ['Solidity', 'Web3.js', 'Ethers.js', '智能合约'],
            icon: '⛓️',
          },
          {
            category: 'DevOps',
            items: ['Docker', 'Kubernetes', 'CI/CD', 'AWS'],
            icon: '🚀',
          },
          {
            category: '其他技能',
            items: ['微服务架构', '系统设计', '性能优化', '安全审计'],
            icon: '🔧',
          },
        ],
      },
      services: [
        {
          title: '企业级应用开发',
          description:
            '开发高性能、可扩展的企业管理系统，包括用户管理、权限控制、数据可视化等功能。',
          icon: '🏢',
        },
        {
          title: '电商平台开发',
          description:
            '构建现代化的电商平台，支持商品管理、订单处理、支付集成、库存管理等功能。',
          icon: '🛍️',
        },
        {
          title: '数据分析系统',
          description:
            '开发企业级数据分析平台，支持数据导入、清洗、分析和可视化，包含机器学习功能。',
          icon: '📊',
        },
        {
          title: '区块链应用开发',
          description:
            '开发去中心化应用（DApp）和智能合约，包括 DeFi 协议、NFT 市场、去中心化交易所等。',
          icon: '⛓️',
        },
      ],
      experience: [
        {
          title: '企业级应用开发',
          description:
            '参与多个大型企业管理系统开发，掌握企业级应用开发流程和最佳实践。',
          icon: '💼',
        },
        {
          title: '区块链开发',
          description:
            '开发多个 DeFi 协议和 DApp，包括去中心化交易所、借贷平台、NFT 市场等。',
          icon: '🔗',
        },
        {
          title: '系统架构设计',
          description:
            '设计并实现微服务架构，确保系统的高可用性、可扩展性和安全性。',
          icon: '🏗️',
        },
        {
          title: '性能优化',
          description:
            '优化系统性能，包括数据库查询优化、缓存策略、前端性能优化等。',
          icon: '⚡',
        },
      ],
      latest: {
        title: '最新动态',
        items: [
          {
            title: '企业管理系统上线',
            date: '2024-03-15',
            description: '完成大型企业管理系统开发，支持多部门协作和数据分析。',
          },
          {
            title: '电商平台优化',
            date: '2024-03-10',
            description: '优化电商平台性能，提升用户体验和系统稳定性。',
          },
        ],
      },
    },
    en: {
      title: 'Full-stack Development Expert',
      subtitle:
        'Specialized in Enterprise Applications and Blockchain Development',
      description:
        'I am a full-stack development expert specializing in enterprise applications and blockchain technology. Focused on building high-performance, scalable solutions including enterprise management systems, e-commerce platforms, data analytics systems, as well as decentralized applications (DApps) and smart contract development.',
      cta: {
        projects: 'View Projects',
        contact: 'Contact Me',
      },
      about: {
        title: 'About Me',
        description: [
          'As a full-stack development expert, I focus on enterprise applications and blockchain technology.',
          'I excel in designing and implementing high-performance, scalable systems, with extensive experience in enterprise applications and blockchain project development.',
          'With years of experience in both traditional development and blockchain, I have participated in the development of multiple successful enterprise management systems, e-commerce platforms, data analytics systems, and DeFi projects.',
        ],
      },
      skills: {
        title: 'Core Skills',
        categories: [
          {
            category: 'Frontend Development',
            items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
            icon: '🎨',
          },
          {
            category: 'Backend Development',
            items: ['Node.js', 'Python', 'Java', 'Go'],
            icon: '⚙️',
          },
          {
            category: 'Databases',
            items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
            icon: '🗄️',
          },
          {
            category: 'Blockchain Development',
            items: ['Solidity', 'Web3.js', 'Ethers.js', 'Smart Contracts'],
            icon: '⛓️',
          },
          {
            category: 'DevOps',
            items: ['Docker', 'Kubernetes', 'CI/CD', 'AWS'],
            icon: '🚀',
          },
          {
            category: 'Other Skills',
            items: [
              'Microservices',
              'System Design',
              'Performance Optimization',
              'Security Audit',
            ],
            icon: '🔧',
          },
        ],
      },
      services: [
        {
          title: 'Enterprise Application Development',
          description:
            'Developing high-performance, scalable enterprise management systems with user management, access control, and data visualization features.',
          icon: '🏢',
        },
        {
          title: 'E-commerce Platform Development',
          description:
            'Building modern e-commerce platforms supporting product management, order processing, payment integration, and inventory management.',
          icon: '🛍️',
        },
        {
          title: 'Data Analytics Systems',
          description:
            'Developing enterprise-level data analytics platforms with data import, cleaning, analysis, visualization, and machine learning capabilities.',
          icon: '📊',
        },
        {
          title: 'Blockchain Application Development',
          description:
            'Developing decentralized applications (DApps) and smart contracts, including DeFi protocols, NFT marketplaces, and decentralized exchanges.',
          icon: '⛓️',
        },
      ],
      experience: [
        {
          title: 'Enterprise Application Development',
          description:
            'Participated in multiple large-scale enterprise management system developments, mastering enterprise application development processes and best practices.',
          icon: '💼',
        },
        {
          title: 'Blockchain Development',
          description:
            'Developed multiple DeFi protocols and DApps, including decentralized exchanges, lending platforms, and NFT marketplaces.',
          icon: '🔗',
        },
        {
          title: 'System Architecture Design',
          description:
            'Designed and implemented microservices architecture, ensuring system high availability, scalability, and security.',
          icon: '🏗️',
        },
        {
          title: 'Performance Optimization',
          description:
            'Optimized system performance, including database query optimization, caching strategies, and frontend performance optimization.',
          icon: '⚡',
        },
      ],
      latest: {
        title: 'Latest Updates',
        items: [
          {
            title: 'Enterprise Management System Launch',
            date: '2024-03-15',
            description:
              'Completed large-scale enterprise management system development, supporting multi-department collaboration and data analytics.',
          },
          {
            title: 'E-commerce Platform Optimization',
            date: '2024-03-10',
            description:
              'Optimized e-commerce platform performance, improving user experience and system stability.',
          },
        ],
      },
    },
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20 overflow-hidden">
        <HeroAnimation />
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {content[language].title}
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                {content[language].subtitle}
              </p>
              <div className="space-x-4">
                <Link
                  href="/projects"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105">
                  {content[language].cta.projects}
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">
                  {content[language].cta.contact}
                </Link>
              </div>
            </div>
            <div className="relative h-64 md:h-96 animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl blur-3xl" />
              <div className="relative bg-white/10 rounded-2xl w-full h-full flex items-center justify-center backdrop-blur-sm p-8">
                <div className="grid grid-cols-2 gap-4 w-full h-full p-4">
                  <div className="bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center group hover:bg-white/30 transition-all">
                    <div className="text-center">
                      <div className="font-mono text-lg mb-2">
                        {'<Solidity />'}
                      </div>
                      <div className="text-sm opacity-80">Smart Contracts</div>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center group hover:bg-white/30 transition-all">
                    <div className="text-center">
                      <div className="font-mono text-lg mb-2">
                        {'<Web3.js />'}
                      </div>
                      <div className="text-sm opacity-80">DApp Development</div>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center group hover:bg-white/30 transition-all">
                    <div className="text-center">
                      <div className="font-mono text-lg mb-2">{'<DeFi />'}</div>
                      <div className="text-sm opacity-80">Protocols</div>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center group hover:bg-white/30 transition-all">
                    <div className="text-center">
                      <div className="font-mono text-lg mb-2">
                        {'<Security />'}
                      </div>
                      <div className="text-sm opacity-80">Auditing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            {content[language].about.title}
          </h2>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            {content[language].about.description.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-gray-600 dark:text-gray-300">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            {content[language].skills.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {content[language].skills.categories.map((category) => (
              <div
                key={category.category}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold dark:text-white">
                  {category.category}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            {content[language].latest.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content[language].latest.items.map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {item.date}
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
