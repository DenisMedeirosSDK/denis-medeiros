export function About() {
  return (
    <div id="about" className="flex flex-col justify-center items-center mt-20">
      <h2 className="flex justify-center font-bold text-3xl mb-6">Sobre Mim</h2>
      <p className="leading-relaxed text-justify tracking-wide">
        Sou <strong className="text-orange-500">Denis Medeiros</strong>, sou
        desenvolvedor <span className="font-medium">FullStack</span>, com foco
        nas tecnologias{" "}
        <span className="font-medium">Nodejs, React e React Native</span>.
        Formado em{" "}
        <span className="text-orange-500">Ciência da Computação</span>.
        Atualmente estou me aprofundando mais em Backend, aprendendo conceitos
        sobre microserviços e mensageria. Gosto muito de construir aplicações
        Jamstack.
      </p>
      <p className="leading-relaxed text-justify tracking-wide">
        Tenho diversos projetos, tanto pessoal quanto projetos desenvolvido em
        eventos de programação. Para a construção do meu TCC, eu desenvolvi uma
        aplicação para agendamentos no ramo da beleza, utilizando a stack
        apresendata acima.
      </p>
    </div>
  );
}
