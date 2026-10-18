import { motion } from 'motion/react'
import Menu from '~/components/menu'
import { listaEscalonada } from '~/components/animaciones'

const ListadoReposteria = ({ reposterias, limit, titulo = 'Nuestros productos' }) => {
  const visibles = limit ? reposterias.slice(0, limit) : reposterias

  return (
    <>
      <h2 className="heading">{titulo}</h2>
      {visibles.length > 0 ? (
        <motion.div
          className="contenedor menu"
          variants={listaEscalonada}
          initial="oculto"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {visibles.map(reposteria => (
            <Menu
              key={reposteria.url}
              reposteria={reposteria}
            />
          ))}
        </motion.div>
      ) : (
        <p className="vacio">No hay productos disponibles por ahora.</p>
      )}
    </>
  )
}

export default ListadoReposteria
