import { gql } from "graphql-request"

import { Locale } from "@/i18n.config"
import { client } from "@/services/graphql-request"
import { getDictionary } from "@/utils/dictionaries"
import { replaceHyphenLocale } from "@/utils/replaceHyphenLocale"

interface AboutProps {
  abouts: {
    resume: string
  }[]
}

export const revalidate = 60 * 60 * 24 * 7 // 7 days

export default async function About({ params: { lang } }: { params: { lang: Locale } }) {
  const queryAbout = gql`
    query About {
      abouts(locales: ${replaceHyphenLocale(lang)}) {
      resume
    }
  }
`

  const responseAbout: AboutProps = await client.request(queryAbout)
  const { page } = await getDictionary(lang)


  return (
    <main className="flex flex-col min-h-screen h-full max-w-screen-lg w-full mx-auto p-4">
      <div className="flex items-center gap-4 mt-10">
        <h2 className="text-3xl font-medium"><span className="text-orange-500">{'/'}</span>{page.home.titles["about-me"]}</h2>
        <div className="w-full max-w-md h-0.5 bg-orange-500" />
      </div>
      <div className="mt-12">
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
          {responseAbout.abouts[0].resume}
        </p>
      </div>
    </main>
  )
}