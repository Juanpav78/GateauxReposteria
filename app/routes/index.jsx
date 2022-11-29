import {useLoaderData, Link} from '@remix-run/react'
import {getInfo, getImage, getInfoUnique} from '~/models/pasteles.server'

import ListadoReposteria from '~/components/listadoReposteria.jsx'

import stylesCurso from "~/styles/curso.css"
import stylesMenu from "~/styles/menu.css"
import stylesBlogs from "~/styles/blog.css"
import styles from "~/styles/inicio.css"

import Curso from "~/components/curso"
import ListadoBlogs from "~/components/listadoBlogs"
import Home from "~/components/home"

export function meta(){

}

export function links(){
  return[{
    rel: 'stylesheet',
    href: stylesMenu
  },{
    rel: 'stylesheet',
    href: stylesBlogs
  },{
    rel: 'stylesheet',
    href: stylesCurso
  },{
    rel: 'stylesheet',
    href: styles
  }]
}

export async function loader(){
  const reposterias = await getInfo("pasteles");
  const blogs = await getInfo("blogs");
  const [{res, resImg}] = await getInfoUnique("cursos" , "cursos-de-reposteria-a-25-de-descuento");
  const img = await getImage();
  return [{ 
    reposterias : reposterias.rows,
    img : img,
    blogs : blogs.rows,
    curso:{
      res: res.rows[0],
      resImg : resImg.rows[0]
    }
    
  }]
}
const Index = () => {
  
  const [{reposterias, img, blogs, curso}] = useLoaderData()
  return (
    <>
        <section className='contenedor'>
          <Home />
        </section>

        <main >
       <ListadoReposteria 
        reposterias = {reposterias}
        limit= {3}
        img={img}
        /> 

        <Link to="/pasteles" className='btnVer'>Ver todos nuestros productos</Link>
        </main>

        <section>
        <Curso 
          res ={curso.res}
          resImg ={curso.resImg}
          />
        </section>

        <section className='contenedor'>
          <ListadoBlogs 
           blogs = { blogs}
           limit= {4}
           img={img}
          />
          <Link to="/pasteles" className='btnVer'>Ver nuestros blogs</Link>
        </section>

    </>
  )
}

export default Index