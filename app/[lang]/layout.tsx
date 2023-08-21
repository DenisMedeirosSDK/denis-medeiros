import { Footer } from '@/components/footer'

import type { Metadata } from 'next'
import { Fira_Code, Inter } from 'next/font/google'
import { Locale } from '../../i18n.config'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const fira_Code = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' })

export const metadata: Metadata = {
  title: 'Portfólio | Denis Medeiros',
  description: 'Portfólio',
}


export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pt-BR' }]
}

// export async function generateStaticParams() {
//   return i18n.locales.map(locale => ({ lang: locale }))
// }

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { lang: Locale }
}) {


  return (
    <html lang={params.lang}>
      <body className={`${inter.variable} ${fira_Code.variable} font-sans dark:text-white text-black bg-white dark:bg-[#282C33]`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
