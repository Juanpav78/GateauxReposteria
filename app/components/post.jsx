import { Link } from "@remix-run/react"
import {formatearFecha }from '~/utils/utilidades.js'

const post = ({blogs, img}) => {

    const{ titulo, contenido, imagen, url,published_at} = blogs
  return (
    <Link className="link__blog sombra" to={`/blog/${url}`}>
    <div className="blog__entrada">
        <div className="blog__entrada--img">
            <img className="" src={img} alt={`Imagen Comida Reposteria Pastel ${titulo}`} />
        </div>
        <div className="blog__entrada--info">
            <h3>{titulo}</h3>   
            <p className="fecha">{formatearFecha(published_at)}</p>

            <p className="resumen">{contenido}</p>
        </div>
    </div>
    
    </Link>
  )
}

export default post