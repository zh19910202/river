'use client'

import Link from 'next/link' // Image import might not be needed directly here anymore
import { useLanguage } from '@/context/LanguageContext'
import ProjectCase from '@/components/ProjectCase' // Import ProjectCase

export default function Projects() {
  const { language } = useLanguage()

  // NOTE: The project data structure itself is already compatible with ProjectCase
  // 'features' will map to 'highlights'. 'icon' will not be used by ProjectCase.
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[language].projects.map((project) => (
            <ProjectCase
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image} // Using the actual image path
              technologies={project.technologies}
              link={project.link}
              github={project.github}
              highlights={project.features} // Mapping features to highlights
            />
          ))}
        </div>
      </div>
    </div>
  )
}
