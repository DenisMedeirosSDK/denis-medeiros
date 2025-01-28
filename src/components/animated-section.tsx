"use client"
import { motion } from "motion/react";
import React from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: "fade" | "slide";
  delay?: number; // Atraso inicial antes da animação
  stagger?: number; // Intervalo entre os filhos
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  animationType = "fade",
  delay = 0.2,
}) => {

  const itemVariants = {
    hidden: { opacity: 0, y: animationType === "slide" ? 20 : 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: delay, duration: 0.2, ease: 'easeInOut', type: 'spring', stiffness: 260, damping: 20 }}

    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
};

export { AnimatedSection };
