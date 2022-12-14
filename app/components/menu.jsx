import { Link } from "@remix-run/react"


const Menu = ({reposteria}) => {
    const {nombre,descripcion, precio, imagen, url }= reposteria
    return (
        <div className="reposteria__card sombra">
            <img className="reposteria__card--img" src={imagen.data.attributes.formats.medium.url} alt={`Imagen Comida Reposteria Pastel ${nombre}`} />
            <h3 className="reposteria__card--titulo">{nombre}</h3>
            <p className="reposteria__card--precio">${precio}</p>
            <Link
            className="reposteria__card--btn"
            to={`/pasteles/${url}`}
            >Ver producto</Link>
        </div>
    )
}

export default Menu