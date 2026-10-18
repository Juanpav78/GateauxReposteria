import { useEffect, useRef } from 'react'
import {
    Meta,
    Links,
    Outlet,
    Scripts,
    ScrollRestoration,
    Link,
    isRouteErrorResponse,
    useLocation
} from 'react-router'
import { MotionConfig, motion } from 'motion/react'
import { config } from '@fortawesome/fontawesome-svg-core'

import '@fortawesome/fontawesome-svg-core/styles.css'
import 'normalize.css'
import '~/styles/index.css'
import '~/styles/inicio.css'
import '~/styles/menu.css'
import '~/styles/reposteriaUrl.css'
import '~/styles/blog.css'
import '~/styles/blogUrl.css'
import '~/styles/curso.css'
import '~/styles/nosotros.css'
import '~/styles/contacto.css'
import '~/styles/carrito.css'

import Header from '~/components/header'
import Footer from '~/components/footer'
import BotonWhatsapp from '~/components/botonWhatsapp'
import Aviso from '~/components/aviso'
import { CarritoProvider } from '~/context/carrito'

// El CSS de Font Awesome ya se importa arriba; así los iconos no "saltan" al hidratar
config.autoAddCss = false

export function meta() {
    return [
        { title: 'Gateaux - Repostería casera' },
        { name: 'description', content: 'Pastelería y repostería casera: tortas, postres y panadería artesanal.' }
    ]
}

export function links() {
    return [{
        rel: 'icon',
        href: '/PanaderiaIco.ico',
    }, {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
    }, {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous'
    }, {
        rel: 'preconnect',
        href: 'https://images.unsplash.com',
    }, {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Sacramento&family=Sen:wght@400;700&display=swap',
    }]
}

export function Layout({ children }) {
    return (
        <html lang="es">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                <CarritoProvider>
                    <MotionConfig reducedMotion="user">
                        <Header />
                        {children}
                        <Footer />
                        <BotonWhatsapp />
                        <Aviso />
                    </MotionConfig>
                </CarritoProvider>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    )
}

export default function App() {
    const location = useLocation()
    // En la primera carga no se anima (el HTML del servidor ya es visible); sí al navegar entre páginas
    const primeraCarga = useRef(true)
    useEffect(() => {
        primeraCarga.current = false
    }, [])

    return (
        <motion.div
            key={location.pathname}
            initial={primeraCarga.current ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
            <Outlet />
        </motion.div>
    )
}

/** Manejo de errores */

export function ErrorBoundary({ error }) {
    let estado = 'Error'
    let mensaje = 'Ocurrió un error inesperado. Intenta de nuevo en unos minutos.'

    if (isRouteErrorResponse(error)) {
        estado = error.status
        mensaje = error.data?.mensaje
            ?? (error.status === 404 ? 'La página que buscas no existe.' : error.statusText || mensaje)
    } else if (import.meta.env.DEV && error instanceof Error) {
        mensaje = error.message
    }

    return (
        <main className="contenedor">
            <motion.p
                className="error error__status"
                initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 180, damping: 12 }}
            >{estado}</motion.p>
            <p className="error error__statusText">{mensaje}</p>
            <Link className="error__enlace" to="/">Volver a la página principal</Link>
        </main>
    )
}
