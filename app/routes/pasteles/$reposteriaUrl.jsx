import { useState } from "react"

import { getInfoUnique } from "~/models/pasteles.server" 
import { useLoaderData, useOutletContext } from "@remix-run/react"
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
      title: `${data[0].res.nombre} - Gateaux`,
      description: `Pasteleria y reposteria, Venta de almientos, ${data.nombre}`
  })
}


const Reposteria = () => {
  const {agregarCarrito} = useOutletContext()
  const [cantidad , setCantidad] = useState(0)
  const [{res, resImg}] = useLoaderData()

  const handleSubmit = e =>{
    e.preventDefault();

    if (cantidad < 1){
      alert('Debes seleccionar una cantidad')
      return
    }
    const pastelSelect = {
      id: res.id,
      img: resImg.formats.medium.url,
      nombre: res.nombre,
      precio: res.precio,
      cantidad,
    }
    agregarCarrito(pastelSelect)
  }
  return (
    <div >
      <div className="titulos">
        <BtnVolver />
        <h2 className="heading">{res.nombre}</h2>
      </div>
      
      <div className="informacion">
        <div className="informacion__img">
          <img className="" src={resImg.formats.medium.url} alt={`Imagen Comida Reposteria Pastel ${res.nombre}`} />
        </div>
        <div className="informacion__txt">
          <h3>Detalles</h3>
          <p>{res.descripcion}</p>
          <p className="precio">${res.precio}</p>

          <form className="formulario" onSubmit={handleSubmit}>
              <label htmlFor="cantidad">Cantidad</label>

              <select name="" id="cantidad" onChange={ e => setCantidad(parseInt(e.target.value))}>
                <option value="0">--Seleccione--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <input type="submit"
              value="Agregar al carrito"
              />
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default Reposteria