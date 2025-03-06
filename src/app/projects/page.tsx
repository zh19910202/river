'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function Projects() {
  const { language } = useLanguage()

  const content = {
    zh: {
      title: '项目展示',
      subtitle: '探索我的区块链开发作品集',
      projects: [
        {
          title: '去中心化交易所',
          description:
            '基于以太坊的 DEX 平台，支持代币交换、流动性提供和收益耕作。实现了自动做市商（AMM）机制，支持闪电贷和闪电交换。',
          image: '/projects/dex.jpg',
          technologies: [
            'Solidity',
            'React',
            'Web3.js',
            'Hardhat',
            'Uniswap V2',
          ],
          link: 'https://github.com/yourusername/dex',
          github: 'https://github.com/yourusername/dex',
          features: [
            '自动做市商（AMM）机制',
            '闪电贷和闪电交换',
            '流动性挖矿和收益耕作',
            '代币质押和治理',
          ],
          icon: '💱',
        },
        {
          title: '借贷协议',
          description:
            '去中心化借贷平台，支持多种代币的存款和借款，包含利率模型和清算机制。实现了闪电贷功能，支持抵押品管理和风险控制。',
          image: '/projects/lending.jpg',
          technologies: [
            'Solidity',
            'OpenZeppelin',
            'Ethers.js',
            'IPFS',
            'Chainlink',
          ],
          link: 'https://github.com/yourusername/lending',
          github: 'https://github.com/yourusername/lending',
          features: ['多代币支持', '动态利率模型', '闪电贷功能', '清算机制'],
          icon: '💰',
        },
        {
          title: 'NFT 市场',
          description:
            '支持 ERC-721 和 ERC-1155 标准的 NFT 交易平台，包含拍卖和固定价格销售功能。实现了版税机制和创作者收益分配。',
          image: '/projects/nft.jpg',
          technologies: [
            'Solidity',
            'Next.js',
            'Web3.js',
            'IPFS',
            'OpenSea API',
          ],
          link: 'https://github.com/yourusername/nft-marketplace',
          github: 'https://github.com/yourusername/nft-marketplace',
          features: [
            '多标准 NFT 支持',
            '拍卖和固定价格销售',
            '版税机制',
            '创作者收益分配',
          ],
          icon: '🎨',
        },
      ],
    },
    en: {
      title: 'Projects',
      subtitle: 'Explore my blockchain development portfolio',
      projects: [
        {
          title: 'Decentralized Exchange',
          description:
            'Ethereum-based DEX platform supporting token swaps, liquidity provision, and yield farming. Implements Automated Market Maker (AMM) mechanism with flash loans and flash swaps.',
          image: '/projects/dex.jpg',
          technologies: [
            'Solidity',
            'React',
            'Web3.js',
            'Hardhat',
            'Uniswap V2',
          ],
          link: 'https://github.com/yourusername/dex',
          github: 'https://github.com/yourusername/dex',
          features: [
            'Automated Market Maker (AMM)',
            'Flash Loans and Flash Swaps',
            'Liquidity Mining and Yield Farming',
            'Token Staking and Governance',
          ],
          icon: '💱',
        },
        {
          title: 'Lending Protocol',
          description:
            'Decentralized lending platform supporting multiple token deposits and borrowings, featuring interest rate models and liquidation mechanisms. Implements flash loan functionality with collateral management.',
          image: '/projects/lending.jpg',
          technologies: [
            'Solidity',
            'OpenZeppelin',
            'Ethers.js',
            'IPFS',
            'Chainlink',
          ],
          link: 'https://github.com/yourusername/lending',
          github: 'https://github.com/yourusername/lending',
          features: [
            'Multi-token Support',
            'Dynamic Interest Rate Model',
            'Flash Loan Functionality',
            'Liquidation Mechanism',
          ],
          icon: '💰',
        },
        {
          title: 'NFT Marketplace',
          description:
            'NFT trading platform supporting ERC-721 and ERC-1155 standards, featuring auctions and fixed-price sales. Implements royalty mechanisms and creator revenue sharing.',
          image: '/projects/nft.jpg',
          technologies: [
            'Solidity',
            'Next.js',
            'Web3.js',
            'IPFS',
            'OpenSea API',
          ],
          link: 'https://github.com/yourusername/nft-marketplace',
          github: 'https://github.com/yourusername/nft-marketplace',
          features: [
            'Multi-standard NFT Support',
            'Auction and Fixed Price Sales',
            'Royalty Mechanism',
            'Creator Revenue Sharing',
          ],
          icon: '🎨',
        },
      ],
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

        {/* 项目列表 */}
        <div className="grid grid-cols-1 gap-12">
          {content[language].projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* 项目图片 */}
                <div className="relative h-64 md:h-full bg-gradient-to-br from-blue-600 to-indigo-800">
                  <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl text-white">{project.icon}</span>
                  </div>
                </div>

                {/* 项目内容 */}
                <div className="p-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {project.description}
                  </p>

                  {/* 技术栈 */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* 主要功能 */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                      {language === 'zh' ? '主要功能' : 'Key Features'}
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-gray-600 dark:text-gray-300">
                          <svg
                            className="w-4 h-4 mr-2 text-blue-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 项目链接 */}
                  <div className="flex gap-4">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      {language === 'zh' ? '查看演示' : 'View Demo'}
                    </Link>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all transform hover:scale-105">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.91-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
