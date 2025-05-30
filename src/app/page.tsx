'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import HeroAnimation from '@/components/HeroAnimation'
import ContactCTA from '@/components/ContactCTA'
import ProjectCase from '@/components/ProjectCase'
import CertificationCard from '@/components/CertificationCard' // Added import for CertificationCard

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
          "作为一名全栈开发专家，我专注于企业级应用与区块链技术的深度融合与创新。",
          "我精通设计与实现高性能、可扩展的系统架构，此专长源于我在企业级应用与区块链项目中的丰富实战经验。",
          "融汇多年在传统开发及区块链领域的实践经验，我成功主导并交付了众多复杂的企业管理系统、电商平台、数据分析解决方案以及前沿的DeFi应用。"
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
      featuredProjects: { // Added featured projects for Chinese
        title: '精选项目',
        items: [
          {
            title: '企业管理系统',
            description:
              '基于 React + Node.js 的全栈企业管理系统，包含用户管理、权限控制、数据可视化等功能。采用微服务架构，支持高并发访问。',
            image: '/projects/enterprise.jpg',
            technologies: ['React', 'Node.js', 'TypeScript', 'MySQL', 'Docker'],
            link: 'https://example.com/project',
            github: 'https://github.com/yourusername/enterprise',
            highlights: ['微服务架构', '权限管理', '数据可视化', '高并发支持'],
          },
          {
            title: '电商平台',
            description:
              '现代化的电商平台，支持商品管理、订单处理、支付集成、库存管理等功能。采用响应式设计，支持多端访问。',
            image: '/projects/ecommerce.jpg',
            technologies: ['Next.js', 'Python', 'PostgreSQL', 'Redis', 'AWS'],
            link: 'https://example.com/project',
            github: 'https://github.com/yourusername/ecommerce',
            highlights: ['响应式设计', '支付集成', '库存管理', '性能优化'],
          },
          {
            title: '去中心化交易所',
            description:
              '基于以太坊的 DEX 平台，支持代币交换和流动性提供。实现了 AMM 机制和闪电贷功能。',
            image: '/projects/dex.jpg',
            technologies: ['Solidity', 'React', 'Web3.js', 'Uniswap V2'],
            link: 'https://example.com/project',
            github: 'https://github.com/yourusername/dex',
            highlights: ['AMM 机制', '闪电贷', '流动性挖矿'],
          },
        ],
        cta: '查看所有项目',
      },
      certifications: { // Added certifications for Chinese
        title: '专业认证',
        items: [
          {
            title: 'Solidity 开发认证',
            issuer: 'Ethereum Foundation',
            date: '2024-02',
            image: '/certifications/solidity.jpg',
            link: 'https://example.com/cert',
            description:
              '完成以太坊基金会认证的 Solidity 开发课程，掌握智能合约开发最佳实践。',
          },
          {
            title: '智能合约安全审计',
            issuer: 'OpenZeppelin',
            date: '2024-01',
            image: '/certifications/security.jpg',
            link: 'https://example.com/cert',
            description:
              '获得 OpenZeppelin 智能合约安全审计认证，专注于 DeFi 协议安全。',
          },
          {
            title: 'Web3 开发专家',
            issuer: 'ConsenSys Academy',
            date: '2023-12',
            image: '/certifications/web3.jpg',
            link: 'https://example.com/cert',
            description:
              '完成 ConsenSys Academy 的 Web3 开发课程，掌握完整的区块链开发生态系统。',
          },
        ],
        cta: '查看所有认证',
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
          "As a full-stack development expert, I specialize in enterprise applications and blockchain technology.",
          "I excel at designing and implementing high-performance, scalable systems, drawing on extensive experience in both enterprise and blockchain project development.",
          "Leveraging years of experience in traditional and blockchain development, I have a proven track record of delivering successful enterprise management systems, e-commerce platforms, data analytics solutions, and innovative DeFi projects."
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
      featuredProjects: { // Added featured projects for English
        title: 'Featured Projects',
        items: [
          {
            title: 'Enterprise Management System',
            description:
              'Full-stack enterprise management system based on React + Node.js, featuring user management, access control, and data visualization. Built with microservices architecture for high concurrency support.',
            image: '/projects/enterprise.jpg',
            technologies: ['React', 'Node.js', 'TypeScript', 'MySQL', 'Docker'],
            link: 'https://example.com/project',
            github: 'https://github.com/yourusername/enterprise',
            highlights: [
              'Microservices',
              'Access Control',
              'Data Visualization',
              'High Concurrency',
            ],
          },
          {
            title: 'E-commerce Platform',
            description:
              'Modern e-commerce platform supporting product management, order processing, payment integration, and inventory management. Features responsive design for multi-device access.',
            image: '/projects/ecommerce.jpg',
            technologies: ['Next.js', 'Python', 'PostgreSQL', 'Redis', 'AWS'],
            link: 'https://example.com/project',
            github: 'https://github.com/yourusername/ecommerce',
            highlights: [
              'Responsive Design',
              'Payment Integration',
              'Inventory Management',
              'Performance Optimization',
            ],
          },
          {
            title: 'Decentralized Exchange',
            description:
              'Ethereum-based DEX platform supporting token swaps and liquidity provision. Implements AMM mechanism and flash loans.',
            image: '/projects/dex.jpg',
            technologies: ['Solidity', 'React', 'Web3.js', 'Uniswap V2'],
            link: 'https://example.com/project',
            github: 'https://github.com/yourusername/dex',
            highlights: ['AMM Mechanism', 'Flash Loans', 'Liquidity Mining'],
          },
        ],
        cta: 'View All Projects',
      },
      certifications: { // Added certifications for English
        title: 'Certifications',
        items: [
          {
            title: 'Solidity Development',
            issuer: 'Ethereum Foundation',
            date: '2024-02',
            image: '/certifications/solidity.jpg',
            link: 'https://example.com/cert',
            description:
              'Completed Ethereum Foundation certified Solidity development course, mastering smart contract development best practices.',
          },
          {
            title: 'Smart Contract Security Audit',
            issuer: 'OpenZeppelin',
            date: '2024-01',
            image: '/certifications/security.jpg',
            link: 'https://example.com/cert',
            description:
              'Obtained OpenZeppelin smart contract security audit certification, focusing on DeFi protocol security.',
          },
          {
            title: 'Web3 Development Expert',
            issuer: 'ConsenSys Academy',
            date: '2023-12',
            image: '/certifications/web3.jpg',
            link: 'https://example.com/cert',
            description:
              'Completed ConsenSys Academy Web3 development course, mastering the complete blockchain development ecosystem.',
          },
        ],
        cta: 'View All Certifications',
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
                  <div className="bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center group hover:bg-white/30 transition-all duration-300 ease-in-out transform hover:scale-105">
                    <div className="text-center">
                      <div className="font-mono text-lg mb-2">
                        {'<Solidity />'}
                      </div>
                      <div className="text-sm opacity-80">Smart Contracts</div>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center group hover:bg-white/30 transition-all duration-300 ease-in-out transform hover:scale-105">
                    <div className="text-center">
                      <div className="font-mono text-lg mb-2">
                        {'<Web3.js />'}
                      </div>
                      <div className="text-sm opacity-80">DApp Development</div>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center group hover:bg-white/30 transition-all duration-300 ease-in-out transform hover:scale-105">
                    <div className="text-center">
                      <div className="font-mono text-lg mb-2">{'<DeFi />'}</div>
                      <div className="text-sm opacity-80">Protocols</div>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center group hover:bg-white/30 transition-all duration-300 ease-in-out transform hover:scale-105">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content[language].skills.categories.map((category) => (
              <div
                key={category.category}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold dark:text-white">
                    {category.category}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2 mt-4">
                  {category.items.map((skill) => (
                    <li key={skill} className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </li>
                  ))}
                </ul>
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

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            {content[language].featuredProjects.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {content[language].featuredProjects.items.map((project) => (
              <ProjectCase key={project.title} {...project} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">
              {content[language].featuredProjects.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            {content[language].certifications.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {content[language].certifications.items.map((certification) => (
              <CertificationCard key={certification.title} {...certification} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/skills#certifications"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">
              {content[language].certifications.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Add ContactCTA at the end */}
      <ContactCTA />
    </div>
  )
}
