import styles from '~/styles/nosotros.css'
import imagen from '../img/img_nosotros.jpg'
export function meta(){
    return({ 
        title: 'Nosotros - Gateaux',
        description: 'Pasteleria y reposteria, blog de reposteria'
    })
}
export function links(){
    return[{
        rel: 'stylesheet',
        href: styles
    },{
        rel: 'preload',
        href: imagen,
        as: 'image'
    }]
 
}
const Nosotros = () => {
  return (
    <>
    <div className="contenedor">
        <h2 className="heading">Sobre nosotros</h2>   
    </div>
    <div className="img__nosotros">
        <main className="contenedor nosotros">
            <h2 className="heading nm-t">Nuestra Reposteria</h2>

            <div className="nosotros__info">
                <img className="nosotros__info--img" src={imagen} alt="" />
                <div className="nosotros__info--txt">
                    <h3>Como empezo todo</h3>
                    <p>
                        Donec ac erat ac orci pellentesque ullamcorper id eu ex. Nunc nec ultrices mauris,
                        a ullamcorper felis. Etiam aliquam convallis quam, vitae porta libero consequat at.
                        Nullam sit amet nunc eleifend eros euismod blandit at vitae metus. Aliquam viverra pulvinar tellus, nec ultrices lorem eleifend vel. Vivamus in euismod purus.
                        Suspendisse potenti. Curabitur accumsan facilisis nisl in luctus. Ut non tellus sit amet odio vestibulum dapibus.
                    </p>
                    <p>
                        Phasellus convallis ante id semper commodo. Vivamus non sodales nisl. 
                        Proin ullamcorper molestie ipsum et vestibulum. In sollicitudin, mauris at fermentum sollicitudin, 
                        Etiam nulla ex, venenatis a dolor vel, sodales dictum enim.
                    </p>
                </div>
            </div>
            
        </main>
    </div>
    </>
    
  )
}

export default Nosotros