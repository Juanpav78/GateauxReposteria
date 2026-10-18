import { Link } from "react-router"
import { motion } from "motion/react"
import { formatearFecha } from '~/utils/utilidades'
import { elementoLista } from "~/components/animaciones"

const Post = ({ blog }) => {
  const { titulo, resumen, miniatura, url, publishedAt } = blog

  return (
    <motion.div variants={elementoLista} whileHover={{ y: -6 }}>
      <Link className="link__blog sombra" to={`/blog/${url}`}>
        <article className="blog__entrada">
          <div className="blog__entrada--img">
            <img src={miniatura} alt={`Imagen Comida Reposteria Pastel ${titulo}`} loading="lazy" />
          </div>
          <div className="blog__entrada--info">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="resumen">{resumen}</p>
            <span className="blog__leer">Leer más →</span>
          </div>
        </article>
      </Link>
    </motion.div>
  )
}

export default Post
