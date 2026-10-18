import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.jsx"),
  route("nosotros", "routes/nosotros.jsx"),
  route("contacto", "routes/contacto.jsx"),
  route("carrito", "routes/carrito.jsx"),
  route("pasteles", "routes/pasteles.jsx", [
    index("routes/pasteles/index.jsx"),
    route(":reposteriaUrl", "routes/pasteles/producto.jsx"),
  ]),
  route("blog", "routes/blog.jsx", [
    index("routes/blog/index.jsx"),
    route(":blogUrl", "routes/blog/entrada.jsx"),
  ]),
  route("*", "routes/no-encontrado.jsx"),
];
