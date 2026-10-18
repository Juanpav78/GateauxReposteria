import { NavLink } from "react-router"
import { motion } from "motion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareFacebook, faSquareInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons"
import { faClock, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { NEGOCIO } from "~/config"
import { enlaces } from "~/components/header"

const redes = [
  { href: NEGOCIO.redes.facebook, icono: faSquareFacebook, nombre: 'Facebook' },
  { href: NEGOCIO.redes.instagram, icono: faSquareInstagram, nombre: 'Instagram' },
  { href: NEGOCIO.redes.tiktok, icono: faTiktok, nombre: 'TikTok' },
]

const Footer = () => {
  const fecha = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="contenedor nm-t">
        <div className="footer__info">
          <div className="footer__info--contacto">
            <h4>Contáctanos</h4>
            <p><FontAwesomeIcon icon={faLocationDot} /> {NEGOCIO.direccion}</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> <a href={`mailto:${NEGOCIO.correo}`}>{NEGOCIO.correo}</a></p>
            <p><FontAwesomeIcon icon={faPhone} /> {NEGOCIO.telefono}</p>
            <p><FontAwesomeIcon icon={faClock} /> {NEGOCIO.horario}</p>
          </div>
          <div className="footer__info--nav">
            <img className="footer__info--logo" src="/img/Logo.svg" alt="Logo Gateaux" />
            <nav className="navegacion">
              {enlaces.map(({ to, texto }) => (
                <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => isActive ? 'active' : ''}>
                  {texto}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="footer__info--redes">
            <h4>Redes Sociales</h4>
            <div className="footer__info--social">
              {redes.map(({ href, icono, nombre }) => (
                <motion.a
                  key={nombre}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={nombre}
                  whileHover={{ scale: 1.2, rotate: -6 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon className="ico" icon={icono} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <p className="footer__copy">{fecha} Todos los derechos reservados Juan Alvarado &copy;</p>
      </div>
    </footer>
  )
}

export default Footer
