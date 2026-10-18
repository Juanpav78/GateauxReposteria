import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"

const SelectorCantidad = ({ cantidad, onCambiar, max = 20 }) => {
  return (
    <div className="cantidad">
      <button
        type="button"
        onClick={() => onCambiar(Math.max(1, cantidad - 1))}
        disabled={cantidad <= 1}
        aria-label="Quitar uno"
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <span className="cantidad__valor" aria-live="polite">{cantidad}</span>
      <button
        type="button"
        onClick={() => onCambiar(Math.min(max, cantidad + 1))}
        disabled={cantidad >= max}
        aria-label="Añadir uno"
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  )
}

export default SelectorCantidad
