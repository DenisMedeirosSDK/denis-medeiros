import { AnimatedSection } from "@/components/animated-section";
import { Perk } from "@/components/perk";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";


export default function Home() {
  return (
    <div className="max-w-screen-lg mx-auto w-full my-20 z-50 px-6 lg:px-0">
      <AnimatedSection animationType="slide">
        <div className="flex flex-col">
          <span className="font-semibold my-3">
            Desenvolvedor Web
            <span className="relative group">
              <span className="mx-2 animate-pulse">. . .</span>
              <span className="hidden group-hover:inline text-muted">GameDev?</span>
            </span>
          </span>
          <h1 className="text-5xl font-semibold">Denis Medeiros</h1>

        </div>
      </AnimatedSection>

      <AnimatedSection animationType="fade">
        <div className="mt-10">
          <ul className="flex flex-row space-x-3">
            <li><Badge>Node.js</Badge></li>
            <li><Badge>React</Badge></li>
            <li><Badge>Typescript</Badge></li>
            <li><Badge>TailwindCSS</Badge></li>
          </ul>
        </div>
      </AnimatedSection>


      <AnimatedSection animationType="fade">
        <div className="mt-20 space-y-3">
          <h2 className="font-semibold text-xl">Sobre mim</h2>
          <p className="leading-relaxed mb-4">
            <span className="font-semibold">Sou um desenvolvedor apaixonado</span> por solucionar problemas de forma eficiente e criativa, sempre buscando aplicar as melhores práticas e tecnologias disponíveis.
          </p>
          <p className="leading-relaxed mb-4">
            Atualmente, atuo como <span className="font-medium">desenvolvedor web</span>, com foco em <span className="font-semibold">React</span> e <span className="font-semibold">Node.js</span>, onde tenho a oportunidade de criar soluções robustas e escaláveis.
          </p>
          <p className="leading-relaxed mb-4">
            Além do desenvolvimento web, nutro um grande interesse pela <span className="font-medium">criação de jogos</span>. Um dos meus objetivos é desenvolver meu próprio jogo, utilizando ferramentas poderosas como <span className="font-semibold">Unreal Engine</span> e <span className="font-semibold">Blender</span>, que adoro explorar e aprender.
          </p>
          <p className="leading-relaxed">
            Acredito que a combinação de <span className="italic">lógica</span>, <span className="italic">criatividade</span> e <span className="italic">tecnologia</span> é essencial para construir experiências incríveis, seja em aplicações web ou no universo dos games.
          </p>
        </div>
      </AnimatedSection>
      <AnimatedSection animationType="fade" >
        <div className="mt-20 space-y-3">
          <h2 className="font-semibold text-xl">Experiências</h2>
          <p className="leading-relaxed mb-4">
            Atualmente, dedico meu tempo ao desenvolvimento de projetos de estudo, que têm sido fundamentais para consolidar meus conhecimentos e aprimorar minhas habilidades técnicas. Entre esses projetos, destaco a criação de <span className="font-semibold ">landing pages responsivas</span> e uma <span className="font-semibold ">calculadora de impostos de importação e investimentos</span>, que inclui funcionalidades como cálculos de juros compostos. Essas experiências me permitiram trabalhar com tecnologias modernas e boas práticas de desenvolvimento.
          </p>
          <p className="leading-relaxed mb-4">
            No momento, estou desenvolvendo uma <span className="font-semibold ">plataforma para aulas online</span>, utilizando <span className="font-semibold ">Node.js</span> e <span className="font-semibold ">React.js</span>, integrada a um sistema de pagamento externo para oferecer uma experiência completa aos usuários. Esse projeto tem sido desafiador e enriquecedor, pois me permite explorar desde a construção de interfaces intuitivas até a integração de APIs e gerenciamento de back-end.
          </p>
          <p className="leading-relaxed">
            Embora ainda não tenha atuado em projetos comerciais, minha dedicação aos estudos e a aplicação prática do que aprendo demonstram minha capacidade de resolver problemas, aprender novas tecnologias e entregar soluções funcionais. Estou animado para levar essa experiência e entusiasmo para um ambiente profissional, contribuindo com ideias inovadoras e soluções eficientes.
          </p>
        </div>
      </AnimatedSection>

      <div className="mt-20 space-y-3">
        <AnimatedSection animationType="fade">
          <h2 className="font-semibold text-xl">Projetos</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <AnimatedSection animationType="slide" >
            <Card>
              <CardHeader>
                <CardTitle>Calc-dm</CardTitle>
                <CardDescription>Uma calculatora potente para investimetos em juros composto e importação.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <Link href="https://google.com" target="_blank">Calc-dm</Link>
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>
          <AnimatedSection animationType="slide" className="" >
            <Card>
              <CardHeader>
                <CardTitle>Riders Brasil</CardTitle>
                <CardDescription>Landing page para comunidade de ciclistas (fake), desafio proposto pela Rocketseat.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button>
                  <Link href="https://nlw-return-olive.vercel.app" target="_blank">Calc-dm</Link>
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
      <AnimatedSection animationType="slide">
        {/* <HabilidadeEFerramentas /> */}
        <div className="mt-20 space-y-3">
          <h2 className="font-semibold text-xl">Habilidade & Ferramentas</h2>
          <p className="leading-relaxed">
            Sou um desenvolvedor apaixonado por resolver problemas de forma eficiente e criativa, sempre focando nas melhores práticas e tecnologias disponíveis. Atualmente, atuo como desenvolvedor web, com especialização em front-end e back-end, mas também tenho um grande sonho: criar meu próprio jogo.
          </p>
          <p className="leading-relaxed">
            Acredito que a combinação de lógica, criatividade e tecnologia é essencial para construir soluções incríveis, seja em aplicações web ou no universo dos games. Estou sempre em busca de novos conhecimentos e ferramentas que possam me ajudar a transformar ideias em experiências reais.
          </p>
        </div>
      </AnimatedSection>

      <Perk title="Linguagens"
        perks={["Javascript", "Typescript"]}
      />

      <Perk
        title="Frameworks front-end"
        perks={["React", "Next.js", "React Native"]}
      />

      <Perk
        title="Backend"
        perks={["Node.js", "Express.js", "Fastify", "PrismaORM"]}
      />

      <Perk
        title="Ferramentas"
        perks={["vsCode", "GIT", "Github", "ESLINT"]}
      />

      <Perk
        title="Desenvolvimento de jogos"
        perks={["Blender", "Unreal Engine", "UEFN", "Blueprints"]}
      />

    </div>
  );
}
