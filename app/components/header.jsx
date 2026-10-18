import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router"
import { AnimatePresence, motion } from "motion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faCartShopping, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useCarrito } from "~/context/carrito"

export const enlaces = [
    { to: '/', texto: 'Inicio' },
    { to: '/nosotros', texto: 'Nosotros' },
    { to: '/pasteles', texto: 'Tienda' },
    { to: '/blog', texto: 'Blog' },
    { to: '/contacto', texto: 'Contacto' },
]

const IconoCarrito = () => {
    const { totalItems } = useCarrito()
    return (
        <Link to="/carrito" className="carrito__icono" aria-label={`Carrito, ${totalItems} productos`}>
            <FontAwesomeIcon icon={faCartShopping} />
            <AnimatePresence>
                {totalItems > 0 && (
                    <motion.span
                        key="contador"
                        className="carrito__contador"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                    >
                        {/* La key reinicia el "rebote" cada vez que cambia el número */}
                        <motion.span
                            key={totalItems}
                            className="carrito__contador--numero"
                            initial={{ scale: 1.8 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                        >{totalItems}</motion.span>
                    </motion.span>
                )}
            </AnimatePresence>
        </Link>
    )
}

const Header = () => {
    const location = useLocation()
    const [abierto, setAbierto] = useState(false)

    // Cierra el menú móvil al cambiar de página
    useEffect(() => {
        setAbierto(false)
    }, [location.pathname])

    return (
        <header className="header">
            <div className="contenedor barra">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link to={'/'} className="logo">
                        <img className="logo__img" src="/img/Logo.svg" alt="Pasteleria Logo Gateaux Imagen" />
                        <p className="logo__txt">Reposteria Casera</p>
                    </Link>
                </motion.div>

                <nav className="navegacion navegacion--escritorio">
                    {enlaces.map(({ to, texto }) => (
                        <NavLink key={to} to={to} end={to === '/'}>
                            {({ isActive }) => (
                                <>
                                    {texto}
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-activo"
                                            className="navegacion__indicador"
                                            transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                                        />
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                    <IconoCarrito />
                </nav>

                <div className="barra__movil">
                    <IconoCarrito />
                    <button
                        className="hamburguesa"
                        onClick={() => setAbierto(!abierto)}
                        aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={abierto}
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.span
                                key={abierto ? 'cerrar' : 'abrir'}
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FontAwesomeIcon icon={abierto ? faXmark : faBars} />
                            </motion.span>
                        </AnimatePresence>
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {abierto && (
                    <motion.nav
                        className="navegacion navegacion--movil"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {enlaces.map(({ to, texto }, i) => (
                            <motion.div
                                key={to}
                                initial={{ x: -30, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.05 * i + 0.1 }}
                            >
                                <NavLink to={to} end={to === '/'} className={({ isActive }) => isActive ? 'active' : ''}>
                                    {texto}
                                </NavLink>
                            </motion.div>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header
