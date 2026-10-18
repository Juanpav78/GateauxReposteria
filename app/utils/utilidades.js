export const formatearFecha = fecha => {
    // Las fechas vienen como "AAAA-MM-DD"; se fija el mediodía para evitar saltos de día por zona horaria
    const fechaNueva = new Date(`${fecha}T12:00:00`)
    const opc = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return fechaNueva.toLocaleDateString('es-ES', opc)
}

const formatoPrecio = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
})

export const formatearPrecio = precio => formatoPrecio.format(precio)

export const imagenUnsplash = (id, ancho = 800) =>
    `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${ancho}&q=75`

export const enlaceWhatsapp = (numero, mensaje) =>
    `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`
