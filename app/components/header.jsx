import { Link, useLocation } from "@remix-run/react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" 
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import Logo from "../img/Logo.svg"

const Header = () => {
    const location= useLocation();
  return (
    <header className="header">
        <div className="contenedor barra">
            <Link
            to={'/'} 
            className="logo">
                <img className="logo__img" src={Logo} alt="Pasteleria Logo Gateaux Imagen" />
                <p className="logo__txt">Reposteria Casera</p>
            </Link>
            <div className="navegacion">
                <Link
                to={'/'}
                className={location.pathname === '/' ? 'active' : ''}
                >Inicio</Link>
                <Link
                to={'/nosotros'}
                className={location.pathname === '/nosotros' ? 'active' : ''}
                >Nosotros</Link>
                <Link
                to={'/pasteles'}
                className={location.pathname === '/pasteles' ? 'active' : ''}
                >Tienda</Link>
                <Link
                to={'/blog'}
                className={location.pathname === '/blog' ? 'active' : ''}
                >Blog</Link>
                <Link
                to={'/carrito'}
                className={location.pathname === '/carrito' ? 'active' : ''}
                ><FontAwesomeIcon icon={faShoppingCart} /></Link>
            </div>
        </div>
    </header>
  )
}

export default Header