import { AboutMe } from "@/components/about-me";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { client } from "@/services/graphql-request";
import { gql } from "graphql-request";

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
interface Props2 {
  skills: Skill[]

}

const props: Props2 = {
  skills: [
    {
      id: '1',
      title: 'Languages',
      techs: 'Typescript Javascript'
    },
    {
      id: '2',
      title: 'Database',
      techs: 'PostgreSQL Redis MongoDB'
    },
    {
      id: '3',
      title: 'Frameworks',
      techs: 'Next.js Express'
    },
    {
      id: '4',
      title: 'Tools',
      techs: 'Git Tailwind Zustand Docker'
    },
  ],

}

const query = gql`
query Projects {
  projects {
    id
    title
    code
    live
    release
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

export default async function Home() {

  const response: Props = await client.request(query)

  return (
    <main className="flex flex-col min-h-screen h-full max-w-screen-lg w-full mx-auto justify-between">
      <Hero />
      <Projects projects={response.projects} />
      <Skills skills={response.skill} />
      <AboutMe />
      <Contact />
    </main>
  )
}

