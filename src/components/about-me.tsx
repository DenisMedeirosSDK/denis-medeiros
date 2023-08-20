import Link from "next/link";

export function AboutMe() {
  return (
    <section className="h-full mt-20 flex-col flex px-4 w-full">
      <div className="flex items-center gap-4 w-full">
        <h2 className="text-3xl font-medium whitespace-nowrap"><span className="text-orange-500">#</span>about-me</h2>
        <div className="w-full max-w-lg h-0.5 bg-orange-500" />
      </div>
      <div className="mt-12 flex flex-col gap-5">
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
          Olá, meu nome é Denis!

          Sou um desenvolvedor front-end autodidata localizado em São Paulo, Brasil. Tenho a capacidade de criar aplicações web
          responsivos e escaláveis a partir do zero e transformá-los em experiências web modernas e amigáveis aos usuários.

          Há mais de anos, venho canalizando minha criatividade e conhecimento no desenvolvimento wev, o que se tornou
          minha verdadeira paixão. Estou constantemente em busca de aprender sobre as mais recentes tecnologias e frameworks disponíveis.
        </p>
        <div>
          <Link href="/about" className="font-medium border border-orange-500 py-2 px-4 hover:bg-orange-500 hover:transition-colors">
            <span>Read more {'~~>'}</span>
          </Link>
        </div>
      </div>
    </section>
  )
}