export function Contact() {
  return (
    <div className="px-5 max-w-screen-lg mx-auto">
      <h2 className="font-secondary font-bold text-5xl my-8">Contato</h2>
      <section>
        <form
          action="https://formsubmit.co/contato.denismedeiros@hotmail.com"
          method="POST"
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="font-secondary font-bold text-lg">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nome"
              className="border border-zinc-500 dark:text-zinc-800 rounded-lg px-4 py-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="font-secondary font-bold text-lg">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              className="border border-zinc-500 dark:text-zinc-800 rounded-lg px-4 py-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="font-secondary font-bold text-lg">
              Assunto
            </label>
            <input
              type="subject"
              name="subject"
              placeholder="Assunto"
              className="border border-zinc-500 dark:text-zinc-800 rounded-lg px-4 py-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="font-secondary font-bold text-lg">
              Menssagem
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Menssagem"
              className="border border-zinc-500 dark:text-zinc-800 rounded-lg px-4 py-2"
            />
          </div>
          <button
            type="submit"
            className="h-14 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 px-5 rounded-lg mr-auto"
          >
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
}
