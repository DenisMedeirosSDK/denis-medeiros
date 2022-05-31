export function Skills() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-5 mt-32">
      <div>
        <h2 className="font-secondary font-bold text-5xl mb-8">
          Minhas habilidades inclui
        </h2>
        <p className="font-secondary max-w-xl">
          Eu desenvolvo aplicações backend, web e mobile, além de criar objetos
          e cenas em 3D.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 sm:mt-0">
        <figure className="bg-zinc-100 dark:bg-zinc-800 w-20 h-20 rounded-lg flex justify-center items-center">
          <img
            src="../../src/assets/icons/typescript.png"
            alt="Logo Typescript"
            className="w-12 h-12"
          />
        </figure>
        <figure className="bg-zinc-100 dark:bg-zinc-800 w-20 h-20 rounded-lg flex justify-center items-center">
          <img
            src="../../src/assets/icons/javascript.png"
            alt="Logo javascript"
            className="w-12 h-12"
          />
        </figure>
        <figure className="bg-zinc-100 dark:bg-zinc-800 w-20 h-20 rounded-lg flex justify-center items-center">
          <img
            src="../../src/assets/icons/docker.png"
            alt="Logo docker"
            className="w-12 h-12"
          />
        </figure>
        <figure className="bg-zinc-100 dark:bg-zinc-800 w-20 h-20 rounded-lg flex justify-center items-center">
          <img
            src="../../src/assets/icons/github.png"
            alt="Logo github"
            className="w-12 h-12"
          />
        </figure>
        <figure className="bg-zinc-100 dark:bg-zinc-800 w-20 h-20 rounded-lg flex justify-center items-center">
          <img
            src="../../src/assets/icons/nodejs.png"
            alt="Logo Nodejs"
            className="w-12 h-12"
          />
        </figure>
        <figure className="bg-zinc-100 dark:bg-zinc-800 w-20 h-20 rounded-lg flex justify-center items-center">
          <img
            src="../../src/assets/icons/react.png"
            alt="Logo React"
            className="w-12 h-12"
          />
        </figure>
        <figure className="bg-zinc-100 dark:bg-zinc-800 w-20 h-20 rounded-lg flex justify-center items-center">
          <img
            src="../../src/assets/icons/blender.png"
            alt="Logo Blender"
            className="w-auto h-12"
          />
        </figure>
        <figure className="bg-zinc-100 dark:bg-zinc-800 w-20 h-20 rounded-lg flex justify-center items-center">
          <img
            src="../../src/assets/icons/unreal_engine.png"
            alt="Logo Unreal Engine"
            className="w-12 h-12"
          />
        </figure>
      </div>
    </div>
  );
}
