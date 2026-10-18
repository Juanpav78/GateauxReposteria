import { data, useLoaderData } from "react-router"
import { motion } from "motion/react"
import { getBlog } from "~/models/pasteles.server"
import BtnVolver from "~/components/btnVolver"
import { formatearFecha } from "~/utils/utilidades"

export async function loader({ params }) {
    const { blogUrl } = params
    const blog = await getBlog(blogUrl)
    if (!blog) {
        throw data({ mensaje: 'Lo sentimos, esta entrada no está disponible o no existe.' }, { status: 404 })
    }

    return blog
}

export function meta({ loaderData }) {
    if (!loaderData) {
        return [{ title: 'Entrada no encontrada - Gateaux' }]
    }
    return [
        { title: `${loaderData.titulo} - Blog Gateaux` },
        { name: 'description', content: loaderData.resumen }
    ]
}

const Blog = () => {
    const { titulo, contenido, imagen, publishedAt } = useLoaderData()
    return (
        <article>
            <div className="titulos">
                <BtnVolver respaldo="/blog" />
                <h2 className="heading">{titulo}</h2>
            </div>
            <div className="blogUrl__info">
                <motion.img
                    className="blogUrl__img"
                    src={imagen}
                    alt={`Imagen Comida Reposteria Pastel ${titulo}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                />
                {contenido.map((parrafo, i) => (
                    <motion.p
                        key={i}
                        className="blogUrl__contenido"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                    >{parrafo}</motion.p>
                ))}
                <p className="blogUrl__publish">Publicado el: {formatearFecha(publishedAt)}</p>
            </div>
        </article>
    )
}

export default Blog
