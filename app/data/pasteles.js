import { imagenUnsplash } from "~/utils/utilidades"

const pastel = (url, nombre, precio, foto, descripcion) => ({
  url,
  nombre,
  precio,
  descripcion,
  imagen: imagenUnsplash(foto, 900),
  miniatura: imagenUnsplash(foto, 500),
})

export const pasteles = [
  pastel("torta-de-chocolate", "Torta de chocolate", 85000, "1578985545062-69928b1d9587",
    "Bizcocho húmedo de cacao al 70 %, relleno y cubierto con ganache de chocolate semiamargo y decorado con rosetas de buttercream. Porción para 12 personas."),
  pastel("torta-frutos-rojos", "Torta de frutos rojos", 92000, "1565958011703-44f9829ba187",
    "Capas de bizcocho de vainilla con crema chantilly, mermelada casera de frambuesa y frutos rojos frescos de temporada."),
  pastel("selva-negra", "Selva negra", 95000, "1606890737304-57a1ca8a5b62",
    "Clásico alemán: bizcocho de chocolate, cerezas maceradas, crema batida y virutas de chocolate."),
  pastel("tiramisu", "Tiramisú", 68000, "1571877227200-a0d98ea607e9",
    "Bizcochos de soletilla bañados en café espresso, crema de mascarpone y cacao amargo espolvoreado. Receta italiana tradicional."),
  pastel("cheesecake-de-arandanos", "Cheesecake de arándanos", 78000, "1533134242443-d4fd215305ad",
    "Base de galleta con mantequilla, crema de queso horneada a baja temperatura y cobertura de arándanos."),
  pastel("pie-de-limon", "Pie de limón", 62000, "1519915028121-7d3463d20b13",
    "Masa quebrada, crema de limón ácida y suave, y merengue italiano flameado."),
  pastel("macarons", "Caja de macarons x12", 48000, "1569864358642-9d1684040f43",
    "Doce macarons franceses en sabores surtidos: pistacho, frambuesa, vainilla, chocolate, limón y maracuyá."),
  pastel("tartaletas-de-frutas", "Tartaletas de frutas x6", 42000, "1495147466023-ac5c588e2e94",
    "Tartaletas de masa sablée con crema pastelera y fruta fresca, terminadas con flores comestibles."),
  pastel("cupcakes-de-chocolate", "Cupcakes de chocolate x6", 36000, "1550617931-e17a7b70dce2",
    "Cupcakes de chocolate con frosting de café y chips de chocolate. Ideales para compartir."),
  pastel("croissants", "Croissants de mantequilla x4", 22000, "1555507036-ab1f4038808a",
    "Hojaldre laminado a mano con mantequilla, fermentado durante 24 horas para lograr capas crujientes."),
  pastel("galletas-con-chips", "Galletas con chips x10", 25000, "1558961363-fa8fdf82db35",
    "Galletas de mantequilla tostada con abundantes chips de chocolate, crujientes por fuera y suaves por dentro."),
  pastel("donas-glaseadas", "Donas glaseadas x6", 30000, "1551024601-bec78aea704b",
    "Donas esponjosas con glaseado de chocolate y vainilla, decoradas con chispas de colores."),
]
