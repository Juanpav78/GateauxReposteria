import { useState } from "react"
import { Link } from "react-router"
import { AnimatePresence, motion } from "motion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { useCarrito } from "~/context/carrito"
import SelectorCantidad from "~/components/selectorCantidad"
import { NEGOCIO } from "~/config"
import { enlaceWhatsapp, formatearPrecio } from "~/utils/utilidades"

export function meta() {
  return [
    { title: 'Carrito - Gateaux' },
    { name: 'robots', content: 'noindex' }
  ]
}

const crearMensaje = (items, total, cliente) => {
  const lineas = items.map(item =>
    `• ${item.cantidad} x ${item.nombre} — ${formatearPrecio(item.precio * item.cantidad)}`
  )
  return [
    '¡Hola Gateaux! Quiero hacer este pedido:',
    '',
    ...lineas,
    '',
    `*Total: ${formatearPrecio(total)}*`,
    cliente.nombre ? `Nombre: ${cliente.nombre}` : null,
    cliente.direccion ? `Entrega en: ${cliente.direccion}` : null,
    cliente.notas ? `Notas: ${cliente.notas}` : null,
  ].filter(linea => linea !== null).join('\n')
}

const Carrito = () => {
  const { items, total, actualizarCantidad, eliminar, vaciar } = useCarrito()
  const [cliente, setCliente] = useState({ nombre: '', direccion: '', notas: '' })

  const handleCambio = e => setCliente({ ...cliente, [e.target.name]: e.target.value })

  return (
    <main className="contenedor">
      <h2 className="heading">Tu carrito</h2>

      {items.length === 0 ? (
        <motion.div
          className="carrito__vacio"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.span
            className="carrito__vacio--ico"
            animate={{ rotate: [0, -10, 10, -6, 0] }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <FontAwesomeIcon icon={faCartShopping} />
          </motion.span>
          <p>Tu carrito está vacío.</p>
          <Link to="/pasteles" className="btn btn--primario">Ir a la tienda</Link>
        </motion.div>
      ) : (
        <div className="carrito">
          <motion.ul className="carrito__lista" layout>
            <AnimatePresence initial={false}>
              {items.map(item => (
                <motion.li
                  key={item.url}
                  className="carrito__item sombra"
                  layout
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 80, transition: { duration: 0.25 } }}
                >
                  <img src={item.imagen} alt={item.nombre} className="carrito__item--img" />
                  <div className="carrito__item--info">
                    <Link to={`/pasteles/${item.url}`}><h3>{item.nombre}</h3></Link>
                    <p>{formatearPrecio(item.precio)} c/u</p>
                  </div>
                  <SelectorCantidad
                    cantidad={item.cantidad}
                    onCambiar={cantidad => actualizarCantidad(item.url, cantidad)}
                  />
                  <p className="carrito__item--subtotal">{formatearPrecio(item.precio * item.cantidad)}</p>
                  <motion.button
                    type="button"
                    className="carrito__item--eliminar"
                    onClick={() => eliminar(item.url)}
                    aria-label={`Quitar ${item.nombre}`}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.85 }}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </motion.button>
                </motion.li>
              ))}
            </AnimatePresence>
            <motion.li layout className="carrito__vaciar">
              <button type="button" onClick={vaciar}>Vaciar carrito</button>
            </motion.li>
          </motion.ul>

          <motion.aside
            className="carrito__resumen sombra"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <h3>Resumen del pedido</h3>
            <div className="campo">
              <label htmlFor="nombre">Nombre</label>
              <input id="nombre" name="nombre" value={cliente.nombre} onChange={handleCambio} placeholder="¿A nombre de quién?" />
            </div>
            <div className="campo">
              <label htmlFor="direccion">Dirección de entrega</label>
              <input id="direccion" name="direccion" value={cliente.direccion} onChange={handleCambio} placeholder="Opcional si recoges en tienda" />
            </div>
            <div className="campo">
              <label htmlFor="notas">Notas</label>
              <textarea id="notas" name="notas" rows="3" value={cliente.notas} onChange={handleCambio} placeholder="Mensaje en la torta, fecha de entrega…" />
            </div>
            <p className="carrito__total">
              Total
              <motion.span key={total} initial={{ scale: 1.15 }} animate={{ scale: 1 }}>
                {formatearPrecio(total)}
              </motion.span>
            </p>
            <motion.a
              className="btn btn--whatsapp btn--bloque"
              href={enlaceWhatsapp(NEGOCIO.whatsapp, crearMensaje(items, total, cliente))}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <FontAwesomeIcon icon={faWhatsapp} /> Enviar pedido por WhatsApp
            </motion.a>
            <p className="carrito__nota">Confirmaremos disponibilidad, costo de envío y forma de pago por WhatsApp.</p>
          </motion.aside>
        </div>
      )}
    </main>
  )
}

export default Carrito
