interface Props {
  title: string
  techs: string
}

export function CardSkill(props: Props) {
  return (
    <div className="border border-gray-500 dark:border-gray-400">
      <p className="font-semibold border-b border-gray-500 dark:border-gray-400 p-2">{props.title}</p>
      <p className="text-gray-500 dark:text-gray-400 p-2">{props.techs}</p>
    </div>
  )
}