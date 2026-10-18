import { Link } from "react-router"
import { motion } from "motion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faTruck, faWheatAwn } from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { NEGOCIO } from "~/config"
import { enlaceWhatsapp } from "~/utils/utilidades"
import { elementoLista, listaEscalonada } from "~/components/animaciones"

const titulo = ["Repostería", "hecha", "en", "casa,", "con", "amor"]

const beneficios = [
  { icono: faWheatAwn, titulo: "Ingredientes naturales", texto: "Mantequilla real, frutas frescas y chocolate de origen. Sin conservantes." },
  { icono: faHeart, titulo: "Hecho a mano", texto: "Cada torta se prepara por encargo, en lotes pequeños y con recetas de familia." },
  { icono: faTruck, titulo: "Domicilios", texto: "Llevamos tus pedidos a toda la ciudad para que lleguen frescos a tu mesa." },
]

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="contenedor hero__contenido">
          <motion.p
            className="hero__subtitulo"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >Bienvenido a Gateaux</motion.p>

          <h1 className="hero__titulo">
            {titulo.map((palabra, i) => (
              <motion.span
                key={i}
                className="hero__palabra"
                initial={{ opacity: 0, y: 50, rotateX: -60 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.7, delay: 0.25 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              >{palabra}</motion.span>
            ))}
          </h1>

          <motion.p
            className="hero__texto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Tortas, postres y panadería artesanal preparados cada mañana para tus celebraciones y antojos.
          </motion.p>

          <motion.div
            className="hero__acciones"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link to="/pasteles" className="btn btn--primario">Ver la tienda</Link>
            </motion.div>
            <motion.a
              className="btn btn--secundario"
              href={enlaceWhatsapp(NEGOCIO.whatsapp, '¡Hola Gateaux! Quiero hacer un pedido.')}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <FontAwesomeIcon icon={faWhatsapp} /> Haz tu pedido
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="hero__scroll"
          aria-hidden="true"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </section>

      <motion.section
        className="contenedor beneficios"
        variants={listaEscalonada}
        initial="oculto"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {beneficios.map(({ icono, titulo, texto }) => (
          <motion.article key={titulo} className="beneficio" variants={elementoLista}>
            <motion.span
              className="beneficio__ico"
              whileHover={{ rotate: 12, scale: 1.1 }}
            >
              <FontAwesomeIcon icon={icono} />
            </motion.span>
            <h3>{titulo}</h3>
            <p>{texto}</p>
          </motion.article>
        ))}
      </motion.section>
    </>
  )
}

export default Home
