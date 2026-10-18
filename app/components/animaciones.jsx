import { motion } from "motion/react"

const suave = [0.22, 1, 0.36, 1]

/** Aparece al entrar en pantalla (una sola vez). */
export const Revelar = ({ children, className, delay = 0, desde = "abajo" }) => {
  const inicio = {
    abajo: { y: 40 },
    izquierda: { x: -50 },
    derecha: { x: 50 },
  }[desde]

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...inicio }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: suave }}
    >
      {children}
    </motion.div>
  )
}

/** Variantes para listas: el contenedor escalona la entrada de sus hijos. */
export const listaEscalonada = {
  oculto: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export const elementoLista = {
  oculto: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: suave } },
}
