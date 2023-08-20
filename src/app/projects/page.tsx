import { CardProject } from "@/components/card-project"
import { client } from "@/services/graphql-request"
import { gql } from "graphql-request"


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
}
`

export default async function ProjectsPage() {
  const response: Props = await client.request(query)

  return (
    <main className="flex flex-col min-h-screen h-full max-w-screen-lg w-full mx-auto p-4">
      <div className="flex items-center gap-4 mt-10">
        <h2 className="text-3xl font-medium"><span className="text-orange-500">{'/'}</span>projects</h2>
        <div className="w-full max-w-md h-0.5 bg-orange-500" />
      </div>

      <div className="flex flex-col gap-4 mt-12 md:grid md:grid-cols-2 lg:grid-cols-3 w-full">
        {
          response.projects.map(project => {
            return (
              <CardProject key={project.id} {...project} />
            )
          })
        }
      </div>
    </main>
  )
}