import { getBlogs } from "~/models/pasteles.server"
import { useLoaderData } from "@remix-run/react"
import ListadoBlogs from "~/components/listadoBlogs"

export async function loader(){
  const posts = await getBlogs()
  return posts.data
}

const blog = () => {
  const blogs = useLoaderData()
  return (
      <ListadoBlogs
      blogs= {blogs}
      
      />
  )
}

export default blog