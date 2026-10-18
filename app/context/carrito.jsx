import { createContext, useContext, useEffect, useMemo, useState } from "react"

const CarritoContext = createContext(null)
const CLAVE = "gateaux-carrito"

export function CarritoProvider({ children }) {
  const [items, setItems] = useState([])
  const [cargado, setCargado] = useState(false)
  const [aviso, setAviso] = useState(null)

  // El carrito se lee del navegador solo después de hidratar, para que el HTML del servidor coincida
  useEffect(() => {
    try {
      const guardado = JSON.parse(localStorage.getItem(CLAVE))
      if (Array.isArray(guardado)) setItems(guardado)
    } catch {
      // localStorage no disponible o datos corruptos: se empieza vacío
    }
    setCargado(true)
  }, [])

  useEffect(() => {
    if (!cargado) return
    try {
      localStorage.setItem(CLAVE, JSON.stringify(items))
    } catch {
      // sin persistencia, el carrito sigue funcionando en memoria
    }
  }, [items, cargado])

  useEffect(() => {
    if (!aviso) return
    const temporizador = setTimeout(() => setAviso(null), 2500)
    return () => clearTimeout(temporizador)
  }, [aviso])

  const valor = useMemo(() => {
    const agregar = (producto, cantidad = 1) => {
      setItems(prev => {
        const existe = prev.find(item => item.url === producto.url)
        if (existe) {
          return prev.map(item =>
            item.url === producto.url ? { ...item, cantidad: item.cantidad + cantidad } : item
          )
        }
        const { url, nombre, precio, miniatura } = producto
        return [...prev, { url, nombre, precio, imagen: miniatura, cantidad }]
      })
      setAviso({ id: Date.now(), texto: `${producto.nombre} se añadió al carrito` })
    }

    const actualizarCantidad = (url, cantidad) =>
      setItems(prev =>
        prev.map(item => (item.url === url ? { ...item, cantidad: Math.max(1, cantidad) } : item))
      )

    const eliminar = url => setItems(prev => prev.filter(item => item.url !== url))
    const vaciar = () => setItems([])

    return {
      items,
      aviso,
      agregar,
      actualizarCantidad,
      eliminar,
      vaciar,
      totalItems: items.reduce((suma, item) => suma + item.cantidad, 0),
      total: items.reduce((suma, item) => suma + item.cantidad * item.precio, 0),
    }
  }, [items, aviso])

  return <CarritoContext.Provider value={valor}>{children}</CarritoContext.Provider>
}

export const useCarrito = () => useContext(CarritoContext)
