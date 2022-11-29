
import { getResposteria } from "~/models/pasteles.server" 
import { useLoaderData } from "@remix-run/react"
import BtnVolver from "../../components/btnVolver"

export async function loader({params}){
  const {reposteriaUrl} = params
  const pastel = await getResposteria("pasteles" , reposteriaUrl)

  if(pastel.data.length === 0){
    throw new Response('', {
      status: 404,
      statusText: 'Lo sentimos ese producto no esta disponible o no existe.'
    })
  }

  return pastel.data[0].attributes
}

export function meta({data}){
  if(!data){
    return{
      title: 'Guitarra No encontrada',
      description: "Pasteleria y reposteria, Venta de almientos,Guitarra No encontrada"
    }
  }
  return({ 
      title: `${data.nombre} - Gateaux`,
      description: `Pasteleria y reposteria, Venta de almientos, ${data.nombre}`
  })
}


const Reposteria = () => {
  const pastel = useLoaderData()
  const {nombre, descripcion, precio, url, imagen} = pastel
  return (
    <div >
      <div className="titulos">
        <BtnVolver />
        <h2 className="heading">{nombre}</h2>
      </div>
      
      <div className="informacion">
        <div className="informacion__img">
          <img className="" src={imagen.data.attributes.formats.medium.url} alt={`Imagen Comida Reposteria Pastel ${nombre}`} />
        </div>
        <div className="informacion__txt">
          <h3>Detalles</h3>
        <p>{descripcion}</p>
        <p className="precio">${precio}</p>
        </div>
      </div>
      
    </div>
  )
}

export default Reposteria