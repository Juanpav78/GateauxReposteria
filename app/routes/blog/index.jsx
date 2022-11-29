import { getInfo, getImage } from "~/models/pasteles.server"
import { useLoaderData } from "@remix-run/react"
import ListadoBlogs from "~/components/listadoBlogs"

export async function loader(){
  const posts = await getInfo("blogs");
  const img = await getImage();
  return [{ 
    blogs : posts.rows,
    img : img
  }]
} 

const Blog = () => {
  const [{blogs, img}] = useLoaderData()

  return (
      <ListadoBlogs
      blogs= {blogs}
      img ={img}
      />
  )
}

export default Blog