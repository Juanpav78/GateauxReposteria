import {  Outlet, useOutletContext } from "@remix-run/react"
import styles from "~/styles/menu.css"
import stylesListado from "~/styles/reposteriaUrl.css"

export function links(){
    return[{
        rel: 'stylesheet',
        href: styles
    },{
        rel: 'stylesheet',
        href: stylesListado
    }]
 
}

const tienda = () => {

  return (
    <main className="contenedor">
        <Outlet 
          context={useOutletContext()}
        />
    </main>
  )
}

export default tienda