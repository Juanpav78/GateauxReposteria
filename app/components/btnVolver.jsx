import { useNavigate } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

/** Vuelve a la página anterior; si se entró directo por el enlace, va a `respaldo`. */
const BtnVolver = ({ respaldo = "/" }) => {
  const navigate = useNavigate()
  const volver = () => {
    if (window.history.state?.idx > 0) {
      navigate(-1)
    } else {
      navigate(respaldo)
    }
  }

  return (
    <button type="button" className="btnVolver" onClick={volver}>
      <FontAwesomeIcon icon={faArrowLeft} /> Volver
    </button>
  )
}

export default BtnVolver
