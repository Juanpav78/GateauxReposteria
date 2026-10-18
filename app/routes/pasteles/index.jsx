import { getReposterias } from "~/models/pasteles.server"
import { useLoaderData } from "react-router"
import ListadoReposteria from "~/components/listadoReposteria"

export async function loader() {
  return getReposterias()
}

export function meta() {
  return [
    { title: 'Tienda - Gateaux' },
    { name: 'description', content: 'Pastelería y repostería, venta de tortas, postres y panadería artesanal.' }
  ]
}

const Tienda = () => {
  const reposterias = useLoaderData()
  return (
    <ListadoReposteria
      reposterias={reposterias}
    />
  )
}

export default Tienda
