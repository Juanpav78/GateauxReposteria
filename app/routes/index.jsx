import { useLoaderData, Link } from 'react-router'
import { getReposterias, getBlogs, getCurso } from '~/models/pasteles.server'
import ListadoReposteria from '~/components/listadoReposteria'
import Curso from "~/components/curso"
import ListadoBlogs from "~/components/listadoBlogs"
import Home from "~/components/home"
import { Revelar } from '~/components/animaciones'

export function meta() {
  return [
    { title: 'Gateaux - Repostería casera' },
    { name: 'description', content: 'Tortas, postres y panadería artesanal hechos en casa. Pide en línea o por WhatsApp.' }
  ]
}

export async function loader() {
  const [reposterias, blogs, curso] = await Promise.all([
    getReposterias(),
    getBlogs(),
    getCurso()
  ])

  return { reposterias, blogs, curso }
}

const Index = () => {
  const { reposterias, blogs, curso } = useLoaderData()
  return (
    <>
      <Home />

      <main>
        <ListadoReposteria
          reposterias={reposterias}
          limit={6}
          titulo="Los favoritos"
        />
        <Revelar>
          <Link to="/pasteles" className='btnVer'>Ver todos nuestros productos</Link>
        </Revelar>
      </main>

      <Curso curso={curso} />

      <section className='contenedor'>
        <ListadoBlogs
          blogs={blogs}
          limit={4}
        />
        <Revelar>
          <Link to="/blog" className='btnVer'>Ver nuestros blogs</Link>
        </Revelar>
      </section>
    </>
  )
}

export default Index
