import styles from "~/styles/blogUrl.css"
import { getBlog} from "~/models/pasteles.server" 
import { useLoaderData } from "@remix-run/react"
import BtnVolver from "../../components/btnVolver"
import { formatearFecha } from "~/utils/utilidades"

export async function loader({params}){
    const {blogUrl} = params
    const blog = await getInfo(blogUrl)
    if(blog.data.length === 0){
        throw new Response('', {
          status: 404,
          statusText: 'Lo sentimos esta entrada no esta disponible o no existe.'
        })
    }

    return blog.data[0].attributes
}

export function links(){
    return[{
        rel: 'stylesheet',
        href: styles
    }]
}

const Blog = () => {
    const blog = useLoaderData()
    const {titulo, contenido, imagen, url, publishedAt} = blog
    return (
    <main className="contenedor">
        <div className="titulos">
            <BtnVolver />
            <h2 className="heading">{titulo}</h2>
        </div>
        <div className="blogUrl__info">
            <img className="blogUrl__img" src={imagen.data.attributes.formats.large.url} alt={`Imagen Comida Reposteria Pastel ${titulo}`} />
            <p className="blogUrl__contenido">{contenido}</p>
            <p className="blogUrl__publish">Publicado el: {formatearFecha(publishedAt)}</p>
        </div>
    </main >
  )
}

export default Blog