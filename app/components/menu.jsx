import { Link } from "react-router"
import { motion } from "motion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { useCarrito } from "~/context/carrito"
import { formatearPrecio } from "~/utils/utilidades"
import { elementoLista } from "~/components/animaciones"

const Menu = ({ reposteria }) => {
    const { nombre, precio, miniatura, url } = reposteria
    const { agregar } = useCarrito()

    return (
        <motion.article
            className="reposteria__card sombra"
            variants={elementoLista}
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <Link to={`/pasteles/${url}`} className="reposteria__card--marco">
                <img
                    className="reposteria__card--img"
                    src={miniatura}
                    alt={`Imagen Comida Reposteria Pastel ${nombre}`}
                    loading="lazy"
                />
            </Link>
            <h3 className="reposteria__card--titulo">{nombre}</h3>
            <p className="reposteria__card--precio">{formatearPrecio(precio)}</p>
            <div className="reposteria__card--acciones">
                <Link
                    className="reposteria__card--btn"
                    to={`/pasteles/${url}`}
                >Ver producto</Link>
                <motion.button
                    type="button"
                    className="reposteria__card--agregar"
                    onClick={() => agregar(reposteria)}
                    aria-label={`Añadir ${nombre} al carrito`}
                    whileTap={{ scale: 0.85 }}
                >
                    <FontAwesomeIcon icon={faCartShopping} />
                </motion.button>
            </div>
        </motion.article>
    )
}

export default Menu
