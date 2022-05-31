import { useState } from 'react';

export function MyWorkers() {
  const [viewProjectsProgramin, setViewProjectsProgramin] = useState(true);
  const [viewProjects3D, setViewProjects3D] = useState(false);

  function handleViewProjectProgramin() {
    setViewProjectsProgramin(!viewProjectsProgramin);
    setViewProjects3D(false);
  }

  function handleViewProject3D() {
    setViewProjects3D(!viewProjects3D);
    setViewProjectsProgramin(false);
  }
  return (
    <div className="px-5">
      <div className="flex flex-row items-center justify-center mt-32 mx-auto max-w-screen-md">
        <button
          onClick={handleViewProjectProgramin}
          className="h-14 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 px-5 rounded-lg mr-auto"
        >
          Programação
        </button>
        <button
          onClick={handleViewProject3D}
          className="h-14 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 px-5 rounded-lg"
        >
          3D
        </button>
      </div>
      {viewProjectsProgramin && (
        <section className="flex flex-col justify-center items-center mb-32">
          <h2 className="font-secondary font-bold text-5xl my-8">
            Programação
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <figure className="">
              <a
                href="https://nlw-return-olive.vercel.app/"
                className="hover:opacity-70"
              >
                <img
                  src="./src/assets/images/rider_brazil.png"
                  alt="Sala simples"
                  width={384}
                  height={216}
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://github.com/DenisMedeirosSDK/ignews"
                className="hover:opacity-70"
              >
                <img
                  src="./src/assets/images/ignews.png"
                  alt="Sala simples"
                  width={384}
                  height={216}
                />
              </a>
            </figure>
            <figure>
              <a
                href="https://github.com/DenisMedeirosSDK/Nebulosa-Backend"
                className="hover:opacity-70"
              >
                <img
                  src="./src/assets/images/TCC.png"
                  alt="Sala simples"
                  width={384}
                  height={216}
                />
              </a>
            </figure>
          </div>
        </section>
      )}

      {viewProjects3D && (
        <section className="flex flex-col justify-center items-center mb-32">
          <h2 className="font-secondary font-bold text-5xl my-8">
            Projetos 3D
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <figure>
              <img
                src="./src/assets/images/simple_room.png"
                alt="Sala simples"
                width={360}
                height={480}
              />
            </figure>
            <figure>
              <img
                src="./src/assets/images/render_003_pos.png"
                alt="Sala simples"
                width={360}
                height={480}
              />
            </figure>
          </div>
        </section>
      )}
    </div>
  );
}
