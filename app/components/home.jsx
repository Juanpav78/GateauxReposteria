import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" 
import {faWandMagicSparkles, faCookieBite, faTruck} from "@fortawesome/free-solid-svg-icons"
const Home = () => {
  return (

      <div className="home__borde contenedor">
        <h1>Alimentos 100% artesanales de la mejor calidad</h1>

        <div className="home__info">
          <div className="home__card">
            <FontAwesomeIcon className="ico" icon={faWandMagicSparkles} />
            <h4>Diseño personalizad</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eligendi est consequatur, dolore explicabo reiciendis</p>
          </div>
          <div className="home__card">
            <FontAwesomeIcon className="ico" icon={faCookieBite} />
            <h4>Los mejores sabores</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eligendi est consequatur, dolore explicabo reiciendis</p>
          </div>
          <div className="home__card">
            <FontAwesomeIcon className="ico" icon={faTruck} />
            <h4>El domicilio mas rapido</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eligendi est consequatur, dolore explicabo reiciendis</p>
          </div>
            
            
            
        </div>
      </div>
  )
}

export default Home