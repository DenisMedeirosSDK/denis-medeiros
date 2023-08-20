import Link from "next/link";
import { CardProject } from "./card-project";

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
  projects: Project[]
}

export function Projects(props: Props) {
  return (
    <section className="h-full mt-20 flex-col flex px-4">
      <div className="flex justify-between items-center gap-4">
        <h2 className="text-3xl font-medium"><span className="text-orange-500">#</span>projects</h2>
        <div className="w-full max-w-2xl h-0.5 bg-orange-500" />
        <Link className="hover:text-gray-500 dark:hover:text-gray-400 hover:transition-colors" href="/projects">
          <span className="whitespace-nowrap">View all {'~~>'}</span>
        </Link>
      </div>

      <div className="flex flex-col gap-4 mt-12 md:grid md:grid-cols-2 lg:grid-cols-3 w-full">
        {
          props.projects.map(project => {
            return (
              <CardProject key={project.id} {...project} />
            )
          })
        }
      </div>
    </section>
  )
}