"use client"
import { clipBoard } from "@/utils/clipboard";
import { Mail } from "lucide-react";
import { DiscordIcon } from "./discord-icon";

export function Contact() {

  return (
    <section className="h-full mt-20 flex-col flex px-4">
      <div className="flex items-center gap-4">
        <h2 className="text-3xl font-medium"><span className="text-orange-500">#</span>contact</h2>
        <div className="w-full max-w-md h-0.5 bg-orange-500" />
      </div>
      <div className="mt-12 flex flex-col md:flex-row md:justify-between gap-5">
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
          Estou interessado em oportunidades de trabalho fulltime ou freelancer. No entanto, se você tiver outras
          solicitações ou perguntas, não hesite em entrar em contato comigo.
        </p>
        <div className="flex flex-col gap-5">
          <div>
            <button title="Copy to clipboard" onClick={() => clipBoard('denismedeiros')} className="flex gap-3">
              <DiscordIcon />
              <p className="text-gray-500 dark:text-gray-400">@denismedeiros</p>
            </button>
          </div>
          <div>
            <button title="Copy to clipboard" onClick={() => clipBoard('contato.denismedeiros@hotmail.com')} className="flex gap-3">
              <Mail className="text-gray-500 dark:text-gray-400" />
              <p className="text-gray-500 dark:text-gray-400">contato.denismedeiros@hotmail.com</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}