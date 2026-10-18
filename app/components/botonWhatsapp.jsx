import { motion } from "motion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { NEGOCIO } from "~/config"
import { enlaceWhatsapp } from "~/utils/utilidades"

const BotonWhatsapp = () => {
  return (
    <motion.a
      className="whatsapp__flotante"
      href={enlaceWhatsapp(NEGOCIO.whatsapp, '¡Hola Gateaux! Quisiera más información.')}
      target="_blank"
      rel="noreferrer"
      aria-label="Escríbenos por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </motion.a>
  )
}

export default BotonWhatsapp
