import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '宁国本地网站小程序开发服务 | 个人网站搭建、企业网站制作',
  description:
    '宁国本地专业网站搭建、小程序开发服务。提供宁国本地企业网站制作、宁国个人网站搭建、宁国微信小程序开发、宁国电商网站建设及区块链应用开发服务。本地工程师，快速响应，专业可靠。',
  keywords: [
    '宁国本地网站搭建',
    '宁国本地小程序开发',
    '宁国企业网站制作',
    '宁国个人网站搭建',
    '宁国微信小程序开发',
    '宁国电商网站建设',
    '宁国dapp开发',
    '宁国网站开发价格',
    '宁国本地开发者',
  ],
  alternates: {
    canonical: 'https://www.riversnow.xyz/ningguo-services',
  },
}

export default function NingguoServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
