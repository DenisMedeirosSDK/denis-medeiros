import { CardPortfolio } from "./CardPortfolio";

export function Portfolio() {
  return (
    <div id="portfolio" className="mt-20">
      <h2 className="flex justify-center font-bold text-3xl mb-6">Portfólio</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <CardPortfolio
          title="ig. News"
          description="Ig.News é um blog de notícias, integrado ao PrismicCMS e Stripe para pagamento de recorrência."
          tags="#JamStack #Nextjs #Typescript #PrismicCMS #Stripe #FaunaDB #Next-auth"
          links={{
            github: "https://github.com/DenisMedeirosSDK/ignews",
          }}
        />
        <CardPortfolio
          title="Riders Brasil"
          description="Riders Brasil é um projeto fruto de um desafio criado para engajar pessoas de comunidade (fake) de ciclistas."
          tags="#Vitejs #TailwindCSS #NodeJs #Jest #Prisma #Typescript"
          links={{
            github:
              "https://github.com/DenisMedeirosSDK/nlw-return-challenge-05",
            site: "https://nlw-return-olive.vercel.app/",
          }}
        />
        <CardPortfolio
          title="Plataforma de eventos"
          description="Projeto criado em um evento de programação no qual tem como objetivo entregar uma plataforma de video para evento de lançamento."
          tags="#Vitejs #Tailwind #Typescript #GraphQL #GraphCMS #Codegen"
          links={{
            github: "https://github.com/DenisMedeirosSDK/ignite-lab-reactjs",
            site: "https://ignite-lab-reactjs-chi.vercel.app/",
          }}
        />
      </div>
    </div>
  );
}
