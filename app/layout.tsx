import { Header } from '@/components/header'
import type { Metadata } from 'next'
import { Bowlby_One, Fira_Code, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const fira_Code = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' })
const bowlby_One = Bowlby_One({ subsets: ['latin'], variable: '--font-bowlby-one', weight: ['400'] })

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
}: {
  children: React.ReactNode,
}) {
  //from-[#041338] to-[#6518AC]
  return (
    <html>
      <body className={`${inter.variable} ${fira_Code.variable} ${bowlby_One.variable} font-sans dark:text-white text-black bg-gradient-to-b from-[#041338] via-[#041338e7] to-[#6518AC] flex flex-col h-full min-h-screen w-full mx-auto`}>
        <div className="flex flex-col h-fit mt-8 w-full max-w-screen-xl mx-auto">
          <Header />
        </div>
        {/* <div className='w-full h-full'> */}
        {/* <img src="/images/fortnite_lobby.jpg" alt="" className='w-screen h-auto bg-cover -z-10 absolute top-0 left-0' /> */}
        {children}
        {/* </div> */}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
