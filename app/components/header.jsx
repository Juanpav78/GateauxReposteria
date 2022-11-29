import { Link, useLocation } from "@remix-run/react"
import Logo from "../../public/img/Logo.svg"

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
            </div>
        </div>
    </header>
  )
}

export default Header