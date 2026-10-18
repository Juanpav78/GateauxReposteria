import { motion } from "motion/react"
import { NEGOCIO } from "~/config"
import { enlaceWhatsapp } from "~/utils/utilidades"
import { Revelar } from "~/components/animaciones"

const Curso = ({ curso }) => {
  const { titulo, contenido, imagen } = curso

  return (
    <section
      className="curso"
      style={{
        backgroundImage: `linear-gradient(to right, rgb(0 0 0 / .45), rgb(0 0 0 / .8)), url(${imagen})`
      }}
    >
      <div className="contenedor">
        <Revelar className="curso__info" desde="derecha">
          <h2 className="curso__info--titulo">{titulo}</h2>
          <p className="curso__info--contenido">{contenido}</p>
          <motion.a
            className="btn btn--primario"
            href={enlaceWhatsapp(NEGOCIO.whatsapp, `¡Hola! Quiero información sobre el ${titulo.toLowerCase()}.`)}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >Quiero inscribirme</motion.a>
        </Revelar>
      </div>
    </section>
  )
}

export default Curso
