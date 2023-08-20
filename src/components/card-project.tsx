import { truncateString } from "@/utils/truncate-string";
import Image from "next/image";
import Link from "next/link";

interface Props {
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

export function CardProject(props: Props) {
  return (
    <div className="border border-gray-400 w-full">
      <div className="flex justify-center items-center">
        <Image src={props.thumbnail.url} alt="" className="aspect-video object-cover" width={500} height={500} />
      </div>
      <div className="border-t border-b border-gray-400 p-2">
        <p className="text-gray-500 dark:text-gray-400">{props.tools}</p>
      </div>
      <div className="p-4 gap-3 flex flex-col justify-between">
        <div className="">
          <h3 className="text-2xl font-medium">{props.title}</h3>
          <p className="text-gray-500 dark:text-gray-400">
            {truncateString(props.description.markdown, 52)}
          </p>
        </div>

        <div className="mt-3 flex justify-between">
          <Link href={props.live} target="_blank" className="font-medium border border-orange-500 py-2 px-4 hover:bg-orange-500 hover:transition-colors">
            <span>Live {'~~>'}</span>
          </Link>
          <Link href={props.code} target="_blank" className="font-medium border border-gray-500 dark:border-gray-400 py-2 px-4 dark:hover:bg-gray-400 hover:bg-gray-500 hover:transition-colors hover:text-white">
            <span>Code {'>='}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}