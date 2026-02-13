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
import { ArrowRight, Code, Gamepad2, Globe, Move3d } from 'lucide-react';
import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-16">
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
          <div className="w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"></div>
        </div>
        <div className="relative z-10 text-center space-y-4 max-w-4xl">
          <p className="font-mono text-primary tracking-[0.3em] text-xs uppercase animate-pulse">System Boot Sequence Complete</p>
          <h1 className="font-display text-5xl md:text-8xl font-black text-black dark:text-white leading-none tracking-tighter glow-green">
            DENIS<br />MEDEIROS
          </h1>
          <h2 className="font-mono text-lg md:text-2xl text-slate-600 dark:text-slate-400 mt-6 border-y border-white/5 py-4 inline-block px-8">
            FULLSTACK &amp; <span className="text-primary">GAME DEVELOPER</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {/* <button className="bg-primary text-black font-display font-bold py-4 px-10 hover:brightness-110 transition-all flex items-center gap-3">
              INITIATE_PROJECTS <ArrowRight className="text-sm" />
            </button> */}
            <a href="/DenisMedeiros_Curriculo_2026.pdf" download className="border border-white/20 bg-white/5 font-display font-bold py-4 px-10 hover:bg-white/10 transition-all backdrop-blur-sm">
              DOWNLOAD_CV
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-widest text-slate-500 animate-bounce">
          SCROLL_TO_EXPLORE
        </div>
      </section>
      <section className="py-24 px-6 max-w-screen-xl mx-auto" id="profile">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary opacity-30 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-square overflow-hidden border border-white/10 bg-card-dark rounded-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-dark/80"></div>
              <img alt="Denis Medeiros" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-700"
                src="/profile_pic.png" />
              <div className="absolute bottom-4 left-4 font-mono text-[10px] text-primary bg-black/50 px-2 py-1">
                UID: DEV_4592_DM
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-secondary/10 border border-secondary text-secondary text-[10px] font-mono tracking-widest uppercase mb-4">
              Core Identity
            </div>
            <h3 className="font-display text-3xl font-bold dark:text-white">Professional Profile</h3>
            <p className="text-lg leading-relaxed text-slate-400 font-light">
              Formado em Ciência da Computação e apaixonado por desenvolvimento de jogos, Denis construiu sua trajetória unindo base técnica sólida e prática constante. Ao longo dos últimos anos, desenvolveu diversos protótipos jogáveis, explorando mecânicas, sistemas e pipelines completos dentro da <span className="text-primary">Unreal Engine</span>.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Com forte foco em C++ e Blueprint, lógica de gameplay e integração com assets 3D criados no Blender, seu objetivo sempre foi o mesmo: transformar ideias em experiências interativas reais. Mesmo fora de grandes estúdios, acumulou conhecimento através de projetos autorais, estudos aprofundados e inúmeros cursos especializados.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="border-l-2 border-primary pl-4 py-2 bg-primary/5">
                <div className="text-[10px] font-mono uppercase text-slate-500">Develop Experience</div>
                <div className="text-xl font-bold dark:text-white">4+ Anos</div>
              </div>
              <div className="border-l-2 border-secondary pl-4 py-2 bg-secondary/5">
                <div className="text-[10px] font-mono uppercase text-slate-500">Projects Completed</div>
                <div className="text-xl font-bold dark:text-white">10+ Assets</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-slate-950/50 border-y border-white/5" id="skills">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="font-display text-2xl font-bold dark:text-white">CORE_SYSTEMS.exe</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-card-dark border border-white/10 p-6 group hover:border-primary/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-8">
                {/* <span className="material-symbols-outlined text-primary text-3xl">sports_esports</span> */}
                <Gamepad2 className="text-primary" />
                <span className="font-mono text-[10px] text-slate-500">01</span>
              </div>
              <h4 className="font-display font-bold text-white mb-2">Unreal Engine 5</h4>
              <p className="text-sm text-slate-400 font-mono">Blueprints, C++ API, Lumen, Nanite, Enhanced Input</p>
            </div>
            <div className="bg-card-dark border border-white/10 p-6 group hover:border-primary/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-8">
                {/* <span className="material-symbols-outlined text-primary text-3xl">code</span> */}
                <Code className="text-primary" />
                <span className="font-mono text-[10px] text-slate-500">02</span>
              </div>
              <h4 className="font-display font-bold text-white mb-2">Unreal Engine C++</h4>
              <p className="text-sm text-slate-400 font-mono">Gameplay Design</p>
            </div>
            <div className="bg-card-dark border border-white/10 p-6 group hover:border-secondary/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-8">
                {/* <span className="material-symbols-outlined text-secondary text-3xl">language</span> */}
                <Globe className="text-secondary" />
                <span className="font-mono text-[10px] text-slate-500">03</span>
              </div>
              <h4 className="font-display font-bold text-white mb-2">Typescript</h4>
              <p className="text-sm text-slate-400 font-mono">React, Next.js, Node.js, Tailwind CSS, Prisma</p>
            </div>
            <div className="bg-card-dark border border-white/10 p-6 group hover:border-primary/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-8">
                {/* <span className="material-symbols-outlined text-primary text-3xl">3d_rotation</span> */}
                <Move3d className="text-primary" />
                <span className="font-mono text-[10px] text-slate-500">04</span>
              </div>
              <h4 className="font-display font-bold text-white mb-2">3D Art Pipeline</h4>
              <p className="text-sm text-slate-400 font-mono">Blender Modeling, Texturing, Rigging, Animation</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 max-w-screen-xl mx-auto" id="terminal">
        <div className="bg-[#0D0D0F] border border-white/10 rounded overflow-hidden shadow-2xl">
          <div className="terminal-header h-10 flex items-center px-4 border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
            </div>
            <div className="mx-auto text-[10px] font-mono text-slate-500 flex items-center gap-2">
              <span className="material-symbols-outlined text-[12px]">terminal</span>
              DEBUG_CONSOLE - USER@DENIS_PORTFOLIO
            </div>
          </div>
          <div className="p-8 font-mono text-sm space-y-4">
            <div className="text-slate-500"># Initializing portfolio environment...</div>
            <div className="text-slate-500"># Loading assets and project modules...</div>
            <div className="flex gap-2">
              <span className="text-primary">denis@portfolio:~$</span>
              <span className="text-white">run skills_analysis.sh</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <span className="text-white text-xs">UNREAL ENGINE ENGINE</span>
                  <span className="text-primary text-[10px]">95%</span>
                </div>
                <div className="w-full bg-white/5 h-1">
                  <div className="bg-primary h-full w-[95%]"></div>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-white text-xs">C++ GAMEPLAY</span>
                  <span className="text-primary text-[10px]">88%</span>
                </div>
                <div className="w-full bg-white/5 h-1">
                  <div className="bg-primary h-full w-[88%]"></div>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-white text-xs">3D MODELING (BLENDER)</span>
                  <span className="text-primary text-[10px]">95%</span>
                </div>
                <div className="w-full bg-white/5 h-1">
                  <div className="bg-primary h-full w-[95%]"></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <span className="text-secondary text-xs">Typescript</span>
                  <span className="text-secondary text-[10px]">90%</span>
                </div>
                <div className="w-full bg-white/5 h-1">
                  <div className="bg-secondary h-full w-[90%]"></div>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-secondary text-xs">NODE.JS BACKEND</span>
                  <span className="text-secondary text-[10px]">82%</span>
                </div>
                <div className="w-full bg-white/5 h-1">
                  <div className="bg-secondary h-full w-[82%]"></div>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-secondary text-xs">Nextjs</span>
                  <span className="text-secondary text-[10px]">78%</span>
                </div>
                <div className="w-full bg-white/5 h-1">
                  <div className="bg-secondary h-full w-[78%]"></div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 pt-4">
              <span className="text-primary">denis@portfolio:~$</span>
              <span className="text-white">list current_status --verbose</span>
            </div>
            <div className="text-slate-400 pl-4 border-l border-white/10 space-y-1 text-xs">
              <p>&gt; Status: <span className="text-primary">READY_FOR_WORK</span></p>
              <p>&gt; Location: Brazil, Global Remote</p>
              <p>&gt; Current_Focus: Desenvolvimento Web e Gamedev Unreal Engine</p>
              <p>&gt; Availability: Disponível</p>
            </div>
            <div className="flex gap-2 pt-4">
              <span className="text-primary">denis@portfolio:~$</span>
              <span className="animate-pulse bg-primary w-2 h-4"></span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-primary text-black">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter mb-8">PRONTO PARA UPAR DE NÍVEL?</h2>
          <p className="text-lg max-w-2xl mx-auto font-bold mb-12 opacity-80 uppercase tracking-wider">
            Disponível para novos projetos, parcerias em estúdios de jogos e desafios fullstack.
          </p>
          <a className="inline-block bg-black text-white font-display font-bold px-12 py-5 hover:scale-105 transition-transform" href="mailto:contato.denismedeiros@hotmail.com">
            ESTABELECER CONEXÃO
          </a>
        </div>
      </section>
    </main>

  );
}
