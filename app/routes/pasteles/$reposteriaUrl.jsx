
import { getInfoUnique } from "~/models/pasteles.server" 
import { useLoaderData } from "@remix-run/react"
import BtnVolver from "../../components/btnVolver"

export async function loader({params}){
  const {reposteriaUrl} = params
  const [{res, resImg}] = await getInfoUnique("pasteles", reposteriaUrl)
  
  if(res.rows.length === 0){
      throw new Response('', {
        status: 404,
        statusText: 'Lo sentimos esta entrada no esta disponible o no existe.'
      })
  }
  return [{
      res: res.rows[0],
      resImg : resImg.rows[0]
  }]
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
  const [{res, resImg}] = useLoaderData()
  return (
    <div >
      <div className="titulos">
        <BtnVolver />
        <h2 className="heading">{res.nombre}</h2>
      </div>
      
      <div className="informacion">
        <div className="informacion__img">
          <img className="" src={resImg.formats.small.url} alt={`Imagen Comida Reposteria Pastel ${res.nombre}`} />
        </div>
        <div className="informacion__txt">
          <h3>Detalles</h3>
        <p>{res.descripcion}</p>
        <p className="precio">${res.precio}</p>
        </div>
      </div>
      
    </div>
  )
}

export default Reposteria