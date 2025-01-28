"use client"

import { motion } from "motion/react";

const HabilidadeEFerramentas = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="mt-20 space-y-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="font-semibold text-xl"
        variants={itemVariants}
      >
        Habilidade & Ferramentas
      </motion.h2>
      <motion.p className="leading-relaxed" variants={itemVariants}>
        Sou um desenvolvedor apaixonado por resolver problemas de forma eficiente e criativa, sempre focando nas melhores práticas e tecnologias disponíveis. Atualmente, atuo como desenvolvedor web, com especialização em front-end e back-end, mas também tenho um grande sonho: criar meu próprio jogo.
      </motion.p>
      <motion.p className="leading-relaxed" variants={itemVariants}>
        Acredito que a combinação de lógica, criatividade e tecnologia é essencial para construir soluções incríveis, seja em aplicações web ou no universo dos games. Estou sempre em busca de novos conhecimentos e ferramentas que possam me ajudar a transformar ideias em experiências reais.
      </motion.p>
    </motion.div>
  );
};

export { HabilidadeEFerramentas };

