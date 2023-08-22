import { CardProject } from "@/components/card-project";
import { CardSkill } from "@/components/card-skill";
import { DiscordIcon } from "@/components/discord-icon";
import { client } from "@/services/graphql-request";
import { getDictionary } from "@/utils/dictionaries";
import { replaceHyphenLocale } from "@/utils/replaceHyphenLocale";

import { gql } from "graphql-request";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Locale } from "../../i18n.config";

interface Skill {
  id: string
  title: string
  techs: string
}
interface Project {
  id: string
  title: string
  description: {
    markdown: string
  }
  live: string
  code: string
  tools: string
  thumbnail: {
    id: string
    url: string
  }
}
interface Props {
  skill: Skill[]
  projects: Project[]
}

const query = gql`
query Projects {
  projects {
    id
    title
    code
    live
    release
    tools
    description {
      markdown
    }
    thumbnail {
      id
      url
    }
  }
  skill {
    id
    title
    techs
  }
}
`
interface AboutProps {
  abouts: {
    resume: string
  }[]
}

export const revalidate = 60 * 60 * 24 * 7 // 7 days

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {

  const queryAbout = gql`
    query About {
      abouts(locales: ${replaceHyphenLocale(lang)}) {
      resume
    }
  }
`

  const response: Props = await client.request(query)
  const responseAbout: AboutProps = await client.request(queryAbout)
  const { page } = await getDictionary(lang)

  return (
    <main className="flex flex-col min-h-screen h-full max-w-screen-lg w-full mx-auto justify-between">
      <section className="flex flex-col md:flex-row md:justify-center md:items-center min-h-screen h-full max-w-screen-lg w-full mx-auto justify-between p-4">
        <div className="mt-10">
          <h1 className="text-3xl leading-relaxed font-semibold ">{page.home.hero.title.chunk1}<br />
            <span className="text-orange-500">{page.home.hero.title.chunk2}</span>
            {page.home.hero.title.chunk3} <br /><span className="text-orange-500">{page.home.hero.title.chunk4}</span> {page.home.hero.title.chunk5}
            <span className="text-orange-500"> {page.home.hero.title.chunk6}</span>
          </h1>
          <p className="mt-10 text-gray-500 dark:text-gray-400">{page.home.hero.subtitle}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src="/images/hacker-portfolio.png" className="object-contain" alt="hacker" width={512} height={768} quality={100} priority />
          <div className="p-2 w-full border border-zinc-500 text-center">
            {page.home.hero.work.split(' ').map((word, index, array) => (
              index === array.length - 1 ? (
                <span key={index} className="text-orange-500 font-semibold">
                  {word}
                </span>
              ) : (
                <span key={index}>{word} </span>
              )
            ))}
          </div>
        </div>
      </section>
      <section className="h-full mt-20 flex-col flex px-4">
        <div className="flex justify-between items-center gap-4">
          <h2 className="text-3xl font-medium"><span className="text-orange-500">#</span>{page.home.titles.projects}</h2>
          <div className="w-full max-w-2xl h-0.5 bg-orange-500" />
          <Link className="hover:text-gray-500 dark:hover:text-gray-400 hover:transition-colors" href={`/${lang}/projects`}>
            <span className="whitespace-nowrap">{page.home.links["view-all"]} {'~~>'}</span>
          </Link>
        </div>

        <div className="flex flex-col gap-4 mt-12 md:grid md:grid-cols-2 lg:grid-cols-3 w-full">
          {
            response.projects.map(project => {
              return (
                <CardProject key={project.id} params={{ lang: lang }} {...project} />
              )
            })
          }
        </div>
      </section>
      <section className="h-full mt-20 flex-col flex px-4">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-medium"><span className="text-orange-500">#</span>{page.home.titles.skills}</h2>
          <div className="w-full max-w-sm h-0.5 bg-orange-500" />
        </div>
        <div className="flex flex-col gap-4 mt-12 md:flex-row w-full">
          {
            response.skill.map(skill => {
              return (
                <CardSkill key={skill.id} title={skill.title} techs={skill.techs} />
              )
            })
          }
        </div>
      </section>
      <section className="h-full mt-20 flex-col flex px-4 w-full">
        <div className="flex items-center gap-4 w-full">
          <h2 className="text-3xl font-medium whitespace-nowrap"><span className="text-orange-500">#</span>{page.home.titles["about-me"]}</h2>
          <div className="w-full max-w-lg h-0.5 bg-orange-500" />
        </div>
        <div className="mt-12 flex flex-col gap-5">
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
            {/* {page.home["about-me"].description} */}
            {responseAbout.abouts[0].resume}
          </p>
          <div>
            <Link href={`/${lang}/about`} className="font-medium border border-orange-500 py-2 px-4 hover:bg-orange-500 hover:transition-colors hover:text-white">
              <span>{page.home.links["read-more"]} {'~~>'}</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="h-full mt-20 flex-col flex px-4">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-medium"><span className="text-orange-500">#</span>{page.home.titles.contact}</h2>
          <div className="w-full max-w-md h-0.5 bg-orange-500" />
        </div>
        <div className="mt-12 flex flex-col md:flex-row md:justify-between gap-5">
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
            {page.home.contact.description}
          </p>
          <div className="flex flex-col gap-5">
            <div>
              <div className="flex gap-3">
                <DiscordIcon />
                <p className="text-gray-500 dark:text-gray-400">@denismedeiros</p>
              </div>
            </div>
            <div>
              <div className="flex gap-3">
                <Mail className="text-gray-500 dark:text-gray-400" />
                <p className="text-gray-500 dark:text-gray-400">contato.denismedeiros@hotmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

