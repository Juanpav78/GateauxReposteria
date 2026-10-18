import { imagenUnsplash } from "~/utils/utilidades"

const entrada = (url, titulo, publishedAt, foto, contenido) => ({
  url,
  titulo,
  publishedAt,
  contenido,
  resumen: contenido[0],
  imagen: imagenUnsplash(foto, 1400),
  miniatura: imagenUnsplash(foto, 600),
})

export const blogs = [
  entrada("secretos-de-un-bizcocho-humedo", "5 secretos para un bizcocho húmedo", "2026-09-28", "1621303837174-89787a7d4729", [
    "Un bizcocho seco es la pesadilla de cualquier repostero. Lo bueno es que con unos cuantos ajustes puedes lograr una miga tierna y jugosa.",
    "Primero, pesa los ingredientes en vez de medirlos por tazas: la harina en exceso es la causa más común de un bizcocho seco. Segundo, usa ingredientes a temperatura ambiente para que la mezcla emulsione bien.",
    "Tercero, no batas de más una vez agregada la harina. Cuarto, cambia parte de la leche por yogur o suero de mantequilla. Y quinto, saca el bizcocho del horno cuando el palillo salga con unas migas húmedas, no completamente limpio.",
  ]),
  entrada("pan-de-masa-madre-en-casa", "Pan de masa madre en casa", "2026-09-10", "1509440159596-0249088772ff", [
    "La masa madre es solo harina, agua y paciencia. En esta entrada te contamos cómo empezar la tuya y hornear tu primer pan rústico.",
    "Mezcla partes iguales de harina integral y agua, tapa el frasco y aliméntalo cada 24 horas. Entre el quinto y el séptimo día debería duplicar su volumen pocas horas después de alimentarla.",
    "Para el pan, usa 100 g de masa madre activa, 350 g de agua, 500 g de harina y 10 g de sal. Fermenta en frío toda la noche y hornea en olla de hierro a 250 °C.",
  ]),
  entrada("guia-de-macarons", "Guía para macarons perfectos", "2026-08-22", "1569864358642-9d1684040f43", [
    "Los macarons tienen fama de difíciles, pero casi todos los errores tienen solución. Te explicamos los más comunes.",
    "Si salen sin pie, el macaronage quedó corto o no dejaste secar las conchas el tiempo suficiente. Si se agrietan, el horno está muy caliente o la mezcla tiene demasiado aire.",
    "Envejece las claras un día en la nevera, tamiza la harina de almendra y usa un termómetro de horno: son los tres cambios que más se notan.",
  ]),
  entrada("visita-a-nuestro-obrador", "Un día en nuestro obrador", "2026-08-05", "1517433670267-08bbd4be890f", [
    "Nuestro día empieza a las 4 de la mañana, cuando encendemos los hornos y sale la primera tanda de croissants.",
    "Todo se hace a mano y en lotes pequeños. Las tortas de encargo se decoran a media mañana y las entregas salen a partir de las 10.",
    "Si quieres conocer el proceso, los sábados abrimos el obrador para visitas guiadas cortas. ¡Escríbenos para reservar!",
  ]),
  entrada("cupcakes-para-fiestas", "Ideas de cupcakes para fiestas", "2026-07-18", "1486427944299-d1955d23e34d", [
    "Los cupcakes son el postre ideal para cumpleaños: cada invitado tiene su porción y se pueden decorar al gusto.",
    "Juega con colores pastel en el frosting, añade toppers de papel con el nombre del festejado o arma una torre de cupcakes como centro de mesa.",
    "Para que el buttercream aguante el calor, reemplaza un tercio de la mantequilla por queso crema bien frío.",
  ]),
  entrada("postres-en-vaso", "Postres en vaso: rápidos y bonitos", "2026-07-01", "1488477181946-6428a0291777", [
    "Los postres en vaso no necesitan horno y se ven increíbles en cualquier mesa.",
    "Alterna capas de galleta triturada, crema (yogur griego, mascarpone o chantilly) y fruta fresca. Refrigera al menos dos horas para que los sabores se integren.",
    "Una combinación que nunca falla: galleta de mantequilla, crema de vainilla y fresas maceradas con un poco de azúcar.",
  ]),
]
