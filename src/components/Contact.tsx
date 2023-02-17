import { GithubLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";

export function Contact() {
  return (
    <div id="contact" className="mt-20">
      <h2 className="flex justify-center font-bold text-3xl mb-6">Contato</h2>
      <section className="flex flex-col gap-6">
        <div className="flex flex-row gap-4 justify-center">
          <a
            href="https://api.whatsapp.com/send?phone=5515996102148&text=Oi%2C%20tudo%20bem%3F"
            target="_blank"
            className="flex justify-center items-center dark:text-zinc-100 hover:dark:text-zinc-200 shadow-md dark:bg-zinc-800 dark:hover:bg-zinc-400 
            transition-all p-3 rounded-full transform hover:scale-110 sm:scale-105"
          >
            <WhatsappLogo size={32} />
          </a>
          <a
            href="https://github.com/DenisMedeirosSDK"
            target="_blank"
            className="flex justify-center items-center dark:text-zinc-100 hover:dark:text-zinc-200 shadow-md dark:bg-zinc-800 dark:hover:bg-zinc-400 
            transition-all p-3 rounded-full transform hover:scale-110 sm:scale-105"
          >
            <GithubLogo size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/denis-medeiros/"
            target="_blank"
            className="flex justify-center items-center dark:text-zinc-100 hover:dark:text-zinc-200 shadow-md dark:bg-zinc-800 dark:hover:bg-zinc-400 
            transition-all p-3 rounded-full transform hover:scale-110 sm:scale-105"
          >
            <LinkedinLogo size={32} />
          </a>
        </div>

        <form
          action="https://formsubmit.co/contato.denismedeiros@hotmail.com"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nome"
            required
            className="dark:text-zinc-100 h-14 rounded-lg p-4 dark:bg-zinc-800 placeholder-zinc-300 shadow-md"
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            required
            className="dark:text-zinc-100 h-14 rounded-lg p-4 dark:bg-zinc-800 placeholder-zinc-300 shadow-md"
          />
          <input
            type="subject"
            name="subject"
            placeholder="Assunto"
            required
            className="dark:text-zinc-100 h-14 rounded-lg p-4 dark:bg-zinc-800 placeholder-zinc-300 shadow-md"
          />
          <textarea
            id="message"
            name="message"
            placeholder="Mensagem"
            required
            className="dark:text-zinc-100 h-24 resize-none rounded-lg p-4 dark:bg-zinc-800 placeholder-zinc-300 shadow-md"
          />
          <button
            type="submit"
            className="h-14 text-zinc-100 font-bold bg-orange-500 hover:bg-orange-400 rounded-lg transition-colors shadow-md"
          >
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
}
