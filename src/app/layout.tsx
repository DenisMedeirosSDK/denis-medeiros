import { Footer } from '@/components/footer'
import type { Metadata } from 'next'
import { Fira_Code, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const fira_Code = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' })

export const metadata: Metadata = {
  title: 'Portfólio | Denis Medeiros',
  description: 'Portfólio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt-BR'>
      <body className={`${inter.variable} ${fira_Code.variable} font-sans dark:text-white text-black bg-white dark:bg-[#282C33]`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
