import { getResposterias } from "~/models/pasteles.server" 
import { useLoaderData } from "@remix-run/react"
import ListadoReposteria from "~/components/listadoReposteria"


export async function loader(){
  const reposteria = await getResposterias()
  return reposteria.data
}

export function meta(){
  return({ 
      title: 'Tienda - Gateaux',
      description: 'Pasteleria y reposteria, Venta de almientos'
  })
}



const Tienda = () => {
  const reposterias = useLoaderData()
  return (
        <ListadoReposteria 
        reposterias = {reposterias}
        />
  )
}

export default Tienda