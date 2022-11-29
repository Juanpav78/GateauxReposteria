import { getInfo, getImage } from "~/models/pasteles.server" 
import { useLoaderData } from "@remix-run/react"
import ListadoReposteria from "~/components/listadoReposteria"


export async function loader(){
  const reposterias = await getInfo("pasteles");
  const img = await getImage();
  return [{ 
    reposterias : reposterias.rows,
    img : img
  
  }]
}

export function meta(){
  return({ 
      title: 'Tienda - Gateaux',
      description: 'Pasteleria y reposteria, Venta de almientos'
  })
}



const Tienda = () => {
  const [{reposterias, img}] = useLoaderData()
  return (
    <ListadoReposteria 
    reposterias = {reposterias}
    img={img}
    /> 
  )
}

export default Tienda