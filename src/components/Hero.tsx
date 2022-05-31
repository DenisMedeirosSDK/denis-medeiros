import { Card } from './Card';

export function Hero() {
  return (
    <div className="flex flex-col mx-auto justify-center items-center px-5 pt-28">
      <h2 className="font-bold text-3xl text-center md:text-left">
        Oi, eu sou <u className="text-brand-300">Denis Medeiros</u> 👋
      </h2>

      <h1 className="font-bold text-5xl text-center md:text-left mt-8">
        Desenvolvedor web FullStack {'&'} Modelador 3D
      </h1>

      <p className="text-2xl text-center md:text-left mt-16">
        Eu projeto e codifico coisas lindas e simples, amo o que faço
      </p>

      <figure className="mt-8">
        <img
          src="https://github.com/denismedeirossdk.png"
          alt=""
          className="rounded-full w-52"
        />
      </figure>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-32">
        <Card title="+3" description="Anos de experiências com programação" />
        <Card title="+2" description="Anos de experiências com 3D" />
      </div>
    </div>
  );
}
