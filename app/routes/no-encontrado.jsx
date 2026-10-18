import { data } from "react-router"

export function loader() {
  throw data({ mensaje: "La página que buscas no existe o fue movida." }, { status: 404 })
}

export function meta() {
  return [{ title: "Página no encontrada - Gateaux" }]
}

export default function NoEncontrado() {
  return null
}
