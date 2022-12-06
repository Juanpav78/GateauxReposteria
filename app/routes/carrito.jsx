import { useEffect, useState } from 'react'
import { useOutletContext } from '@remix-run/react'
import { ClientOnly} from 'remix-utils'
import style from '~/styles/carrito.css'

export function meta(){
    return{ 
        title: 'Compras - Gateaux',
        description: 'Pasteleria y reposteria, blog de reposteria'
    }
}
export function links(){
    return [{
        rel: 'stylesheet',
        href: style
    }]
}

const Carrito = () => {
    const [total, setTotal] = useState(0)
    const {carrito, actualizarCantidad,eliminarReposteria} = useOutletContext()

    useEffect(()=>{
        const total = carrito.reduce((total, producto)=> total + Math.round(producto.precio * producto.cantidad), 0)
        setTotal(total)
    }, [carrito])
  return (
    <ClientOnly fallback={'cargando...'}>
        {() => (

    <main className='contenedor'>
        <h1 className="heading">Carrito de compras</h1>
        <div className="contenido">
            <div className="carrito">
                <h2>Articulos</h2>
                {carrito?.length === 0 ? 'Carrito Vacio' : (
                    carrito?.map( producto =>(
                        <div key={producto.id} className="producto">
                            <div>
                                <img src={producto.img} alt={`Imagen del producto ${producto.nombre}`} />
                            </div>
                            <div>
                                <p className='nombre'>{producto.nombre}</p>
                                <p >Cantidad:</p>
                                <select
                                value={producto.cantidad}
                                className="select"
                                onChange={e =>actualizarCantidad(
                                   { 
                                    cantidad: +e.target.value,
                                    id: producto.id
                                }
                                )}
                                name="" id="">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <p className="precio">$ <span>{producto.precio}</span></p>
                                <p className="subtotal">Subtotal: $ <span>{Math.round(producto.precio * producto.cantidad)}</span></p>
                            </div>

                            <button 
                            className='btnEliminar'
                            type='button'
                            onClick={e => eliminarReposteria(producto.id)}
                            >X</button>
                        </div>
                    ))
                )}
            </div>
            <aside className="resumen">
                <h3>Resumen del pedido</h3>
                <p>Total a pagar ${total}</p>
            </aside>
        </div>

    </main>)}
    </ClientOnly>
  )
}

export default Carrito