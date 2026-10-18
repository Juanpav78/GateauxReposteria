import { motion } from "motion/react"
import Post from "~/components/post"
import { listaEscalonada } from "~/components/animaciones"

const ListadoBlogs = ({ blogs, limit }) => {
  const visibles = limit ? blogs.slice(0, limit) : blogs

  return (
    <>
      <h2 className="heading">Nuestros Blogs</h2>
      {visibles.length > 0 ? (
        <motion.div
          className="blog"
          variants={listaEscalonada}
          initial="oculto"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {visibles.map(blog => (
            <Post
              key={blog.url}
              blog={blog}
            />
          ))}
        </motion.div>
      ) : (
        <p className="vacio">No hay entradas en el blog</p>
      )}
    </>
  )
}

export default ListadoBlogs
