import Logo from "../img/Logo.svg"

const Inicio = () => {
  return (
    <>
    <img src={Logo} alt="" />
    <p>Reposteria Casera, el sabor del amor de lo hecho en casa</p>

    <a href="#productos" className="btnVolver">Ver nuestros productos </a>
    </>
  )
}

export default Inicio