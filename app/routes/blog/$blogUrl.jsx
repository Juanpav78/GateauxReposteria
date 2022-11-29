import styles from "~/styles/blogUrl.css"
import { getInfoUnique} from "~/models/pasteles.server" 
import { useLoaderData } from "@remix-run/react"
import BtnVolver from "../../components/btnVolver"
import { formatearFecha } from "~/utils/utilidades"

export async function loader({params}){
    const {blogUrl} = params
    const [{res, resImg}] = await getInfoUnique("blogs", blogUrl)
    
    if(res.rows.length === 0){
        throw new Response('', {
          status: 404,
          statusText: 'Lo sentimos esta entrada no esta disponible o no existe.'
        })
    }
    return [{
        res: res.rows[0],
        resImg : resImg.rows[0]
    }]
}

export function links(){
    return[{
        rel: 'stylesheet',
        href: styles
    }]
}

const Blog = () => {
    const [{res, resImg}] = useLoaderData()
    return (
    <main className="contenedor">
        <div className="titulos">
            <BtnVolver />
            <h2 className="heading">{res.titulo}</h2>
        </div>
        <div className="blogUrl__info">
            <img className="blogUrl__img" src={resImg.url} alt={`Imagen Comida Reposteria Pastel ${res.titulo}`} />
            <p className="blogUrl__contenido">{res.contenido}</p>
            <p className="blogUrl__publish">Publicado el: {formatearFecha(res.published_at)}</p>
        </div>
    </main >
  )
}

export default Blog