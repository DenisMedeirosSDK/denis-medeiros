export default function About() {
  return (
    <main className="min-h-screen p-4">
      <div className="flex items-center gap-4 mt-10">
        <h2 className="text-3xl font-medium"><span className="text-orange-500">{'/'}</span>About Me</h2>
        <div className="w-full max-w-md h-0.5 bg-orange-500" />
      </div>
      <div className="mt-12">
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
          Olá, meu nome é Denis!

          Sou um desenvolvedor front-end autodidata localizado em São Paulo, Brasil. Tenho a capacidade de criar aplicações web
          responsivos e escaláveis a partir do zero e transformá-los em experiências web modernas e amigáveis aos usuários.

          Há mais de anos, venho canalizando minha criatividade e conhecimento no desenvolvimento wev, o que se tornou
          minha verdadeira paixão. Estou constantemente em busca de aprender sobre as mais recentes tecnologias e frameworks disponíveis.
        </p>
      </div>
    </main>
  )
}