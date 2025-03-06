'use client'

import { useLanguage } from '@/context/LanguageContext'
import CertificationCard from '@/components/CertificationCard'
import ProjectCase from '@/components/ProjectCase'
import Timeline from '@/components/Timeline'
import SkillChart from '@/components/SkillChart'

export default function Skills() {
  const { language } = useLanguage()

  const content = {
    zh: {
      title: '专业技能',
      subtitle: '探索我的技术栈和开发经验',
      certifications: {
        title: '技能认证',
        subtitle: '专业认证和培训经历',
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
      },
      skills: {
        title: '技能水平',
        subtitle: '核心技能和专长领域',
        items: [
          {
            name: 'Solidity',
            level: 95,
            color: '#3b82f6',
            description: '智能合约开发、DeFi 协议实现',
          },
          {
            name: 'Web3.js',
            level: 90,
            color: '#10b981',
            description: '区块链交互、DApp 开发',
          },
          {
            name: 'React',
            level: 92,
            color: '#06b6d4',
            description: '前端开发、状态管理、组件设计',
          },
          {
            name: 'Node.js',
            level: 88,
            color: '#10b981',
            description: '后端开发、API 设计、服务端渲染',
          },
          {
            name: 'TypeScript',
            level: 90,
            color: '#4f46e5',
            description: '类型系统、代码质量、工程化',
          },
          {
            name: 'Python',
            level: 85,
            color: '#3b82f6',
            description: '数据处理、自动化脚本、机器学习',
          },
          {
            name: 'MySQL',
            level: 88,
            color: '#f59e0b',
            description: '数据库设计、性能优化、数据迁移',
          },
          {
            name: 'Docker',
            level: 85,
            color: '#06b6d4',
            description: '容器化部署、微服务架构、CI/CD',
          },
        ],
      },
      projects: {
        title: '项目案例',
        subtitle: '代表性项目展示',
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
          {
            title: '数据分析平台',
            description:
              '企业级数据分析平台，支持数据导入、清洗、分析和可视化。包含机器学习模型训练和预测功能。',
            image: '/projects/analytics.jpg',
            technologies: [
              'Python',
              'React',
              'TensorFlow',
              'MongoDB',
              'Docker',
            ],
            link: 'https://example.com/project',
            github: 'https://github.com/yourusername/analytics',
            highlights: ['数据清洗', '机器学习', '可视化报表', '实时分析'],
          },
        ],
      },
      timeline: {
        title: '学习历程',
        subtitle: '专业成长时间线',
        items: [
          {
            date: '2024-03',
            title: '全栈开发实践',
            description: '完成企业级全栈应用开发，掌握微服务架构和DevOps实践。',
            icon: '🚀',
            achievements: ['微服务架构', 'DevOps实践', '性能优化', '团队协作'],
          },
          {
            date: '2024-02',
            title: '智能合约安全审计',
            description: '获得智能合约安全审计认证，提升代码安全性。',
            icon: '🛡️',
            achievements: ['漏洞分析', '安全最佳实践', '审计报告'],
          },
          {
            date: '2024-01',
            title: '企业应用开发',
            description: '参与大型企业管理系统开发，掌握企业级应用开发流程。',
            icon: '🏢',
            achievements: ['需求分析', '架构设计', '团队管理', '项目交付'],
          },
          {
            date: '2023-12',
            title: 'Web3 开发基础',
            description: '学习 Web3.js 和 Ethers.js，掌握区块链交互。',
            icon: '🌐',
            achievements: ['DApp 开发', '合约交互', '事件监听'],
          },
        ],
      },
    },
    en: {
      title: 'Professional Skills',
      subtitle: 'Explore my technical stack and development experience',
      certifications: {
        title: 'Certifications',
        subtitle: 'Professional certifications and training',
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
      },
      skills: {
        title: 'Skill Level',
        subtitle: 'Core skills and expertise',
        items: [
          {
            name: 'Solidity',
            level: 95,
            color: '#3b82f6',
            description:
              'Smart contract development, DeFi protocol implementation',
          },
          {
            name: 'Web3.js',
            level: 90,
            color: '#10b981',
            description: 'Blockchain interaction, DApp development',
          },
          {
            name: 'React',
            level: 92,
            color: '#06b6d4',
            description:
              'Frontend development, state management, component design',
          },
          {
            name: 'Node.js',
            level: 88,
            color: '#10b981',
            description:
              'Backend development, API design, server-side rendering',
          },
          {
            name: 'TypeScript',
            level: 90,
            color: '#4f46e5',
            description: 'Type system, code quality, engineering',
          },
          {
            name: 'Python',
            level: 85,
            color: '#3b82f6',
            description:
              'Data processing, automation scripts, machine learning',
          },
          {
            name: 'MySQL',
            level: 88,
            color: '#f59e0b',
            description:
              'Database design, performance optimization, data migration',
          },
          {
            name: 'Docker',
            level: 85,
            color: '#06b6d4',
            description: 'Container deployment, microservices, CI/CD',
          },
        ],
      },
      projects: {
        title: 'Project Cases',
        subtitle: 'Featured project showcase',
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
          {
            title: 'Data Analytics Platform',
            description:
              'Enterprise-level data analytics platform supporting data import, cleaning, analysis, and visualization. Includes machine learning model training and prediction capabilities.',
            image: '/projects/analytics.jpg',
            technologies: [
              'Python',
              'React',
              'TensorFlow',
              'MongoDB',
              'Docker',
            ],
            link: 'https://example.com/project',
            github: 'https://github.com/yourusername/analytics',
            highlights: [
              'Data Cleaning',
              'Machine Learning',
              'Visualization Reports',
              'Real-time Analytics',
            ],
          },
        ],
      },
      timeline: {
        title: 'Learning Journey',
        subtitle: 'Professional growth timeline',
        items: [
          {
            date: '2024-03',
            title: 'Full-stack Development Practice',
            description:
              'Completed enterprise-level full-stack application development, mastered microservices architecture and DevOps practices.',
            icon: '🚀',
            achievements: [
              'Microservices Architecture',
              'DevOps Practices',
              'Performance Optimization',
              'Team Collaboration',
            ],
          },
          {
            date: '2024-02',
            title: 'Smart Contract Security Audit',
            description:
              'Obtained smart contract security audit certification, improved code security.',
            icon: '🛡️',
            achievements: [
              'Vulnerability Analysis',
              'Security Best Practices',
              'Audit Reports',
            ],
          },
          {
            date: '2024-01',
            title: 'Enterprise Application Development',
            description:
              'Participated in large-scale enterprise management system development, mastered enterprise application development processes.',
            icon: '🏢',
            achievements: [
              'Requirements Analysis',
              'Architecture Design',
              'Team Management',
              'Project Delivery',
            ],
          },
          {
            date: '2023-12',
            title: 'Web3 Development Basics',
            description:
              'Learned Web3.js and Ethers.js, mastered blockchain interaction.',
            icon: '🌐',
            achievements: [
              'DApp Development',
              'Contract Interaction',
              'Event Listening',
            ],
          },
        ],
      },
    },
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 页面标题 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            {content[language].title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {content[language].subtitle}
          </p>
        </div>

        {/* 技能分类展示 */}
        <section className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              {content[language].skills.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {content[language].skills.subtitle}
            </p>
          </div>

          {/* 技能分组 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400 flex items-center">
                <span className="mr-2">💻</span>
                {language === 'zh' ? '开发技能' : 'Development Skills'}
              </h3>
              <div className="space-y-4">
                {content[language].skills.items
                  .filter((skill) =>
                    ['React', 'Node.js', 'TypeScript', 'Python'].includes(
                      skill.name
                    )
                  )
                  .map((skill) => (
                    <div key={skill.name} className="relative pt-1">
                      <div className="flex items-center justify-between mb-1">
                        <div>
                          <span className="text-sm font-semibold inline-block text-gray-800 dark:text-gray-200">
                            {skill.name}
                          </span>
                          <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                            {skill.description}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-blue-600 dark:text-blue-400">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200 dark:bg-gray-700">
                        <div
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: skill.color,
                          }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center rounded-l-full rounded-r-full transition-all duration-500"></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-4 text-teal-600 dark:text-teal-400 flex items-center">
                <span className="mr-2">⛓️</span>
                {language === 'zh' ? '区块链技能' : 'Blockchain Skills'}
              </h3>
              <div className="space-y-4">
                {content[language].skills.items
                  .filter((skill) =>
                    ['Solidity', 'Web3.js'].includes(skill.name)
                  )
                  .map((skill) => (
                    <div key={skill.name} className="relative pt-1">
                      <div className="flex items-center justify-between mb-1">
                        <div>
                          <span className="text-sm font-semibold inline-block text-gray-800 dark:text-gray-200">
                            {skill.name}
                          </span>
                          <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                            {skill.description}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-teal-600 dark:text-teal-400">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200 dark:bg-gray-700">
                        <div
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: skill.color,
                          }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center rounded-l-full rounded-r-full transition-all duration-500"></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-4 text-amber-600 dark:text-amber-400 flex items-center">
                <span className="mr-2">🗄️</span>
                {language === 'zh' ? '数据库技能' : 'Database Skills'}
              </h3>
              <div className="space-y-4">
                {content[language].skills.items
                  .filter((skill) => ['MySQL'].includes(skill.name))
                  .map((skill) => (
                    <div key={skill.name} className="relative pt-1">
                      <div className="flex items-center justify-between mb-1">
                        <div>
                          <span className="text-sm font-semibold inline-block text-gray-800 dark:text-gray-200">
                            {skill.name}
                          </span>
                          <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                            {skill.description}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-amber-600 dark:text-amber-400">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200 dark:bg-gray-700">
                        <div
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: skill.color,
                          }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center rounded-l-full rounded-r-full transition-all duration-500"></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400 flex items-center">
                <span className="mr-2">🚀</span>
                {language === 'zh' ? 'DevOps 技能' : 'DevOps Skills'}
              </h3>
              <div className="space-y-4">
                {content[language].skills.items
                  .filter((skill) => ['Docker'].includes(skill.name))
                  .map((skill) => (
                    <div key={skill.name} className="relative pt-1">
                      <div className="flex items-center justify-between mb-1">
                        <div>
                          <span className="text-sm font-semibold inline-block text-gray-800 dark:text-gray-200">
                            {skill.name}
                          </span>
                          <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                            {skill.description}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-indigo-600 dark:text-indigo-400">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200 dark:bg-gray-700">
                        <div
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: skill.color,
                          }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center rounded-l-full rounded-r-full transition-all duration-500"></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* 技能图表 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all">
            <SkillChart data={content[language].skills.items} />
          </div>
        </section>

        {/* 技能认证 */}
        <section className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              {content[language].certifications.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {content[language].certifications.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content[language].certifications.items.map((cert) => (
              <CertificationCard key={cert.title} {...cert} />
            ))}
          </div>
        </section>

        {/* 项目案例 */}
        <section className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              {content[language].projects.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {content[language].projects.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content[language].projects.items.map((project) => (
              <ProjectCase key={project.title} {...project} />
            ))}
          </div>
        </section>

        {/* 学习时间线 */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              {content[language].timeline.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {content[language].timeline.subtitle}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all">
            <Timeline items={content[language].timeline.items} />
          </div>
        </section>
      </div>
    </div>
  )
}
