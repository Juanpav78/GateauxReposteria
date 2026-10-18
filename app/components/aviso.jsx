import { Link } from "react-router"
import { AnimatePresence, motion } from "motion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { useCarrito } from "~/context/carrito"

/** Notificación que aparece al añadir algo al carrito. */
const Aviso = () => {
  const { aviso } = useCarrito()
  return (
    <AnimatePresence>
      {aviso && (
        <motion.div
          key={aviso.id}
          className="aviso"
          role="status"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 28 }}
        >
          <FontAwesomeIcon icon={faCheck} className="aviso__ico" />
          <span>{aviso.texto}</span>
          <Link to="/carrito" className="aviso__enlace">Ver carrito</Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Aviso
