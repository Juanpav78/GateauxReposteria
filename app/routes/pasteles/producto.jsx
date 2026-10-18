import { useState } from "react"
import { data, useLoaderData } from "react-router"
import { AnimatePresence, motion } from "motion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faCheck } from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { getReposteria, getReposterias } from "~/models/pasteles.server"
import BtnVolver from "~/components/btnVolver"
import SelectorCantidad from "~/components/selectorCantidad"
import ListadoReposteria from "~/components/listadoReposteria"
import { useCarrito } from "~/context/carrito"
import { NEGOCIO } from "~/config"
import { enlaceWhatsapp, formatearPrecio } from "~/utils/utilidades"

export async function loader({ params }) {
  const { reposteriaUrl } = params
  const pastel = await getReposteria(reposteriaUrl)

  if (!pastel) {
    throw data({ mensaje: 'Lo sentimos, ese producto no está disponible o no existe.' }, { status: 404 })
  }

  const todos = await getReposterias()
  const relacionados = todos.filter(p => p.url !== pastel.url).slice(0, 3)

  return { pastel, relacionados }
}

export function meta({ loaderData }) {
  if (!loaderData) {
    return [
      { title: 'Producto no encontrado - Gateaux' },
      { name: 'description', content: 'Pastelería y repostería, producto no encontrado' }
    ]
  }
  const { pastel } = loaderData
  return [
    { title: `${pastel.nombre} - Gateaux` },
    { name: 'description', content: `Pastelería y repostería, ${pastel.nombre}: ${pastel.descripcion}` }
  ]
}

const Reposteria = () => {
  const { pastel, relacionados } = useLoaderData()
  const { nombre, descripcion, precio, imagen } = pastel
  const { agregar } = useCarrito()
  const [cantidad, setCantidad] = useState(1)
  const [agregado, setAgregado] = useState(false)

  const handleAgregar = () => {
    agregar(pastel, cantidad)
    setAgregado(true)
    setTimeout(() => setAgregado(false), 1600)
  }

  const mensaje = `¡Hola Gateaux! Quiero pedir ${cantidad} x ${nombre} (${formatearPrecio(precio * cantidad)}).`

  return (
    <div>
      <div className="titulos">
        <BtnVolver respaldo="/pasteles" />
        <h2 className="heading">{nombre}</h2>
      </div>

      <div className="informacion">
        <motion.div
          className="informacion__img"
          initial={{ opacity: 0, x: -60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={imagen} alt={`Imagen Comida Reposteria Pastel ${nombre}`} />
        </motion.div>
        <motion.div
          className="informacion__txt"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3>Detalles</h3>
          <p>{descripcion}</p>
          <p className="precio">{formatearPrecio(precio)}</p>

          <div className="informacion__compra">
            <SelectorCantidad cantidad={cantidad} onCambiar={setCantidad} />
            <motion.button
              type="button"
              className={`btn btn--primario btn--bloque ${agregado ? 'btn--ok' : ''}`}
              onClick={handleAgregar}
              whileTap={{ scale: 0.96 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={agregado ? 'ok' : 'agregar'}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -12, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <FontAwesomeIcon icon={agregado ? faCheck : faCartShopping} />{' '}
                  {agregado ? '¡Añadido!' : 'Añadir al carrito'}
                </motion.span>
              </AnimatePresence>
            </motion.button>
            <motion.a
              className="btn btn--whatsapp btn--bloque"
              href={enlaceWhatsapp(NEGOCIO.whatsapp, mensaje)}
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 0.96 }}
            >
              <FontAwesomeIcon icon={faWhatsapp} /> Pedir por WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>

      <ListadoReposteria reposterias={relacionados} titulo="También te puede gustar" />
    </div>
  )
}

export default Reposteria
