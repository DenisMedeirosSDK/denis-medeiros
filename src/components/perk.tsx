"use client"

import { motion } from "motion/react"
import { Badge } from "./ui/badge"

interface Perk {
  title: string
  perks: string[]
}

export function Perk({ title, perks }: Perk) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: .2, duration: 0.2, ease: 'easeInOut', type: 'spring', stiffness: 260, damping: 20 }}
      className="mt-10 space-y-3"
    >
      <h2 className="font-semibold text-xl">{title}</h2>
      <div className="flex flex-col md:flex-row gap-3">
        {perks.map((item, index) => (
          <Badge key={index} className="w-fit" variant="outline">{item}</Badge>
        ))}
      </div>
    </motion.div>
  )
}
