import { getBlogs } from "~/models/pasteles.server"
import { useLoaderData } from "react-router"
import ListadoBlogs from "~/components/listadoBlogs"

export async function loader() {
  return getBlogs()
}

export function meta() {
  return [
    { title: 'Blog - Gateaux' },
    { name: 'description', content: 'Recetas, trucos y novedades de repostería casera.' }
  ]
}

const Blog = () => {
  const blogs = useLoaderData()
  return (
    <ListadoBlogs
      blogs={blogs}
    />
  )
}

export default Blog
