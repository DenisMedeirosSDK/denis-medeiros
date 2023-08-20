import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-4 py-5 w-full flex flex-col items-center gap-5 border-t-2 border-gray-400 mt-20">
      <div className="flex flex-col md:flex-row justify-between w-full gap-3">
        <p><strong>Denis - </strong>contato.denismedeiros@hotmail.com</p>
        <div className="">
          <p className="font-medium">Social Media</p>
          <div className="flex gap-2 mt-2">
            <Link target="_blank" className="text-gray-400 hover:text-gray-500" href="https://github.com/DenisMedeirosSDK" ><Github /></Link>
            <Link target="_blank" className="text-gray-400 hover:text-gray-500" href="https://www.linkedin.com/in/denis-medeiros" ><Linkedin /></Link>
          </div>
        </div>
      </div>
      <p className="text-gray-500 dark:text-gray-400">© copyright {new Date().getFullYear()} - Denis Medeiros.</p>
    </footer>
  )
}