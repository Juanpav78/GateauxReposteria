import {useLoaderData, Link} from '@remix-run/react'
import {getResposterias, getBlogs, getCurso} from '~/models/pasteles.server'
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
  const [ reposterias , blogs, curso ] = await Promise.all([
    getResposterias(),
    getBlogs(),
    getCurso()
  ])

  return {
    reposterias: reposterias.data,
    blogs: blogs.data,
    curso: curso.data
  }


}
const Index = () => {
  const {reposterias, blogs, curso} = useLoaderData()
  return (
    <>
        <section className='contenedor'>
          <Home />
        </section>

        <main >
        <ListadoReposteria 
        reposterias = {reposterias}
        limit= {3}
        />

        <Link to="/pasteles" className='btnVer'>Ver todos nuestros productos</Link>
        </main>

        <section>
          <Curso 
          curso ={curso}
          />
        </section>

        <section className='contenedor'>
          <ListadoBlogs 
           blogs = { blogs}
           limit= {4}
          />
          <Link to="/pasteles" className='btnVer'>Ver nuestros blogs</Link>
        </section>
    </>
  )
}

export default Index