import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useCatch,
    Link
} from '@remix-run/react'

import styles from '~/styles/index.css'
import Header from '/components/header'
import Footer from '/components/footer'
import favicon from '~/img/PanaderiaIco.ico'


export function meta(){
    return(
        {
            charset: 'utf-8',
            title: 'Gateaux',
            viewport: "width=device-width, initial-scale=1.0",
        }
    )
 
}

export function links(){
    return[{
        rel: 'icon',
        href: favicon,
    },{
        rel: 'stylesheet',
        href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css',

    },{
        rel: 'stylesheet',
        href: styles,
    },{
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
    },{
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin : 'true',
    },{
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Sacramento&family=Sen:wght@400;700&display=swap',
    }]
 
}

export default function App(){
    return(
        <Document> 
            <Outlet />  
        </Document>
        
    )
}

function Document({children}){
    
    return(
        <html lang="en">
        <head>
            <Meta />
            <Links />
        </head>
        <body>
            <Header />
            {children}
            <Footer />
            <Scripts />
            <LiveReload />
        </body>
        </html>
    )
}
/** Manejo de errores */

export function CatchBoundary(){
    const error = useCatch()

    return(
        <Document>
            <p className='error error__status'>{error.status}</p>
            <p className='error error__statusText'>{error.statusText}</p>
            <Link className=" error__enlace" to="/">Volver a la página principal</Link>
        </Document>
    )
}

export function ErrorBoundary({error}){
    return(
        <Document>
            <p className='error error__status'>{error.status}</p>
            <p className='error error__statusText'>{error.statusText}</p>
            <Link className="error__enlace" to="/">Volver a la página principal</Link>
        </Document>
    )
}