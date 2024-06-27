import { GithubIcon, LinkedinIcon } from 'lucide-react';
import Link from "next/link";
export const revalidate = 60 * 60 * 24 * 7 // 7 days

export default async function Home() {

  return (
    <main className="flex flex-col flex-grow w-full max-w-screen-xl mx-auto pb-10 px-6">
      <div className="flex-col flex-grow h-full mt-20 flex md:flex-row justify-between gap-3">
        <div id='hero' className=''>
          <h1 className="text-[#f7ff1a] text-4xl mb-5 uppercase">Denis Medeiros</h1>
          <div className='max-w-screen-md flex flex-col gap-3'>
            <p className="leading-loose font-alt font-bold">
              Crio aplicações web performáticas e escaláveis.
            </p>
            <p className="leading-relaxed tracking-wide text-white font-alt">
              Olá, meu nome é Denis! Sou um desenvolvedor web fullstack.
              Tenho a capacidade de criar aplicações web responsivos e escaláveis a partir do zero e transformá-los em experiências web modernas e amigáveis aos usuários.
              Há mais de anos, venho canalizando minha criatividade e conhecimento no desenvolvimento web, o que se tornou minha verdadeira paixão.
              Estou constantemente em busca de aprender sobre as mais recentes tecnologias e frameworks disponíveis.
            </p>
          </div>
        </div>
        <div id='slider' className='w-80 h-40 rounded-xl bg-black/25 flex justify-center items-center'>
          Slider
        </div>
      </div>
      <div id="card-curriculo" className="flex flex-col md:flex-row justify-between items-end mt-10 gap-3">

        <div className="w-full md:w-72 h-52 bg-black/25 rounded-xl p-6 flex flex-col justify-between items-center">
          <p className="text-2xl text-white uppercase">CURRÍCULO</p>
          <p className="text-green-500 uppercase text-sm">disponível</p>
          <div className='p-1 rounded-xl hover:ring-4 ring-white transition-all w-full'>
            <button className="bg-[#f7ff1a] flex w-full justify-center items-center text-black text-2xl 
          p-4 rounded-xl uppercase">
              BAIXAR
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-1 justify-center items-center w-full md:w-auto">
          <div className='p-1 rounded-xl hover:ring-4 ring-white transition-all flex flex-row group md:ml-auto w-full md:w-auto'>
            <Link href="https://github.com/DenisMedeirosSDK" target='_blank' className="w-full md:w-24 h-24 md:group-hover:w-96 bg-slate-400/30 rounded-xl flex justify-center items-center gap-2 transition-all">
              <GithubIcon />
              <p className='md:hidden md:group-hover:block'>@DenisMedeirosSDK</p>
            </Link>
          </div>
          <div className='p-1 rounded-xl hover:ring-4 ring-white transition-all flex flex-row group md:ml-auto w-full md:w-auto'>
            <Link href="https://www.linkedin.com/in/denis-medeiros/" target='_blank' className="w-full md:w-24 h-24 md:group-hover:w-96 bg-slate-400/30 rounded-xl flex justify-center items-center gap-2 transition-all">
              <LinkedinIcon />
              <p className='md:hidden md:group-hover:block'>Denis Medeiros</p>
            </Link>
          </div>
        </div>

      </div>
    </main >
  )
}