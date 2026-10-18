import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faEnvelope, faLocationDot, faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons"
import { NEGOCIO } from "~/config"
import { Revelar, elementoLista, listaEscalonada } from "~/components/animaciones"

export function meta() {
  return [
    { title: 'Contacto - Gateaux' },
    { name: 'description', content: 'Escríbenos para pedidos especiales, cotizaciones y el curso de repostería.' }
  ]
}

const datos = [
  { icono: faLocationDot, titulo: 'Dirección', texto: NEGOCIO.direccion },
  { icono: faPhone, titulo: 'Teléfono', texto: NEGOCIO.telefono },
  { icono: faEnvelope, titulo: 'Correo', texto: NEGOCIO.correo },
  { icono: faClock, titulo: 'Horario', texto: NEGOCIO.horario },
]

/**
 * El formulario usa Netlify Forms: Netlify detecta el formulario "contacto"
 * en public/__forms.html al desplegar, y aquí se envía con fetch.
 */
const Contacto = () => {
  const [estado, setEstado] = useState('inicial') // inicial | enviando | enviado | error

  const handleSubmit = async e => {
    e.preventDefault()
    const formulario = e.currentTarget
    setEstado('enviando')

    try {
      if (import.meta.env.DEV) {
        // En local no existe Netlify Forms: se simula el envío
        await new Promise(resolve => setTimeout(resolve, 800))
      } else {
        const respuesta = await fetch('/__forms.html', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(new FormData(formulario)).toString(),
        })
        if (!respuesta.ok) throw new Error(respuesta.statusText)
      }
      formulario.reset()
      setEstado('enviado')
    } catch {
      setEstado('error')
    }
  }

  return (
    <main className="contenedor">
      <h2 className="heading">Contáctanos</h2>

      <div className="contacto">
        <Revelar className="contacto__formulario sombra" desde="izquierda">
          <AnimatePresence mode="wait">
            {estado === 'enviado' ? (
              <motion.div
                key="gracias"
                className="contacto__gracias"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.span
                  className="contacto__gracias--ico"
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 12, delay: 0.1 }}
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                </motion.span>
                <h3>¡Mensaje enviado!</h3>
                <p>Gracias por escribirnos. Te responderemos lo antes posible.</p>
                <button type="button" className="btn btn--primario" onClick={() => setEstado('inicial')}>
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="formulario"
                name="contacto"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <input type="hidden" name="form-name" value="contacto" />
                <p className="oculto">
                  <label>No llenes este campo: <input name="bot-field" /></label>
                </p>

                <div className="campo">
                  <label htmlFor="nombre">Nombre</label>
                  <input id="nombre" name="nombre" type="text" placeholder="Tu nombre" required />
                </div>
                <div className="campo">
                  <label htmlFor="email">Correo</label>
                  <input id="email" name="email" type="email" placeholder="tu@correo.com" required />
                </div>
                <div className="campo">
                  <label htmlFor="asunto">Asunto</label>
                  <select id="asunto" name="asunto" defaultValue="Pedido especial">
                    <option>Pedido especial</option>
                    <option>Cotización para evento</option>
                    <option>Curso de repostería</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div className="campo">
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea id="mensaje" name="mensaje" rows="5" placeholder="¿En qué podemos ayudarte?" required />
                </div>

                {estado === 'error' && (
                  <p className="contacto__error">No pudimos enviar el mensaje. Intenta de nuevo o escríbenos por WhatsApp.</p>
                )}

                <motion.button
                  type="submit"
                  className="btn btn--primario btn--bloque"
                  disabled={estado === 'enviando'}
                  whileTap={{ scale: 0.97 }}
                >
                  {estado === 'enviando' ? 'Enviando…' : 'Enviar mensaje'}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </Revelar>

        <div className="contacto__info">
          <motion.ul
            className="contacto__datos"
            variants={listaEscalonada}
            initial="oculto"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {datos.map(({ icono, titulo, texto }) => (
              <motion.li key={titulo} variants={elementoLista}>
                <span className="contacto__datos--ico"><FontAwesomeIcon icon={icono} /></span>
                <div>
                  <h4>{titulo}</h4>
                  <p>{texto}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
          <Revelar delay={0.2}>
            <iframe
              className="contacto__mapa"
              title="Ubicación de Gateaux"
              src={NEGOCIO.mapa}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Revelar>
        </div>
      </div>
    </main>
  )
}

export default Contacto
