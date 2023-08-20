import Image from "next/image";

export function Hero() {
  return (
    <main className="flex flex-col md:flex-row md:justify-center md:items-center min-h-screen h-full max-w-screen-lg w-full mx-auto justify-between p-4">
      <div className="mt-10">
        <h1 className="text-3xl leading-relaxed font-semibold ">Denis is a <br />
          <span className="text-orange-500">FullStack Developer </span>
          with <br /><span className="text-orange-500">Node.js</span> and
          <span className="text-orange-500"> React</span>
        </h1>
        <p className="mt-10 text-gray-500 dark:text-gray-400">Criou aplicações web performáticas e escaláveis.</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Image src="/hacker-portfolio.png" className="" alt="" width={512} height={768} quality={100} />
        <div className="p-2 w-full border border-zinc-500 text-center">
          <p>Trabalhando atualmente no meu <span className="text-orange-500 font-semibold">Portfólio</span></p>
        </div>
      </div>
    </main>
  )
}

