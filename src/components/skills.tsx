import { CardSkill } from "./card-skill";

interface Skill {
  id: string
  title: string
  techs: string
}
interface Props {
  skills: Skill[]
}

export function Skills(props: Props) {
  return (
    <section className="h-full mt-20 flex-col flex px-4">
      <div className="flex items-center gap-4">
        <h2 className="text-3xl font-medium"><span className="text-orange-500">#</span>skills</h2>
        <div className="w-full max-w-sm h-0.5 bg-orange-500" />
      </div>
      <div className="flex flex-col gap-4 mt-12 md:flex-row w-full">
        {
          props.skills.map(skill => {
            return (
              <CardSkill key={skill.id} title={skill.title} techs={skill.techs} />

            )
          })
        }
      </div>
    </section>
  )
}