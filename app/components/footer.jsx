import { Link, useLocation } from "@remix-run/react"
import Logo from "../../public/img/Logo.svg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faSquareFacebook, faSquareInstagram, faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
const footer = () => {
  const fecha = new Date().getFullYear()
  const location= useLocation();
  return (
    <footer className="footer">
      <div className="contenedor nm-t">
      <div className="footer__info">
        <div className="footer__info--contacto">
              <h4>Contactanos</h4>
              <p>Direccion xxxxxxxx</p>
              <p>correo@correo.com</p>
              <p>+57 xxxxxxx</p>
        </div>
        <div className="footer__info--nav">
        <img className="footer__info--logo" src={Logo} alt="" />
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
                to={'/tienda'}
                className={location.pathname === '/tienda' ? 'active' : ''}
                >Tienda</Link>
                <Link
                to={'/blog'}
                className={location.pathname === '/blog' ? 'active' : ''}
                >Blog</Link>
            </div>
        </div>
        
        <div className="footer__info--">
              <h4>Redes Sociales</h4>
              <div className="footer__info--social">
              <FontAwesomeIcon className="ico" icon={faSquareFacebook} />
              <FontAwesomeIcon className="ico" icon={faSquareInstagram} />
              <FontAwesomeIcon className="ico" icon={faSquareTwitter} />
        </div>
        </div>
      </div>
      <p className="footer__copy"> {fecha} Todos los derechos reservados Juan Alvarado &copy;</p>
      </div>
      
    </footer>
  )
}

export default footer