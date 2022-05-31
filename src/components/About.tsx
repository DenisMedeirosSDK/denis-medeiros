export function About() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-5 my-32">
      <div>
        <figure>
          <img
            src="/src/assets/images/foto.png"
            alt=""
            width={620}
            height={596.07}
          />
        </figure>
      </div>
      <div>
        <h2 className="font-secondary font-bold text-5xl mb-8">Sobre Mim</h2>
        <p className="font-secondary max-w-xl">
          Eu sou Denis Medeiros, 22 anos, formado em Ciência da Computação pela
          UNIP, e atualmente estudando Node.js, React.js e React Native. Estou
          sempre em busca de novos conhecimentos e em busca de novos desafios.
        </p>
      </div>
    </div>
  );
}
