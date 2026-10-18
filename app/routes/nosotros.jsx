import { motion } from 'motion/react'
import { Revelar, elementoLista, listaEscalonada } from '~/components/animaciones'

const imagen = '/img/img_nosotros.jpg'

export function meta() {
    return [
        { title: 'Nosotros - Gateaux' },
        { name: 'description', content: 'Conoce la historia de Gateaux, repostería casera y artesanal.' }
    ]
}

export function links() {
    return [{
        rel: 'preload',
        href: imagen,
        as: 'image'
    }]
}

const cifras = [
    { valor: '+10', texto: 'años horneando' },
    { valor: '+40', texto: 'recetas propias' },
    { valor: '+5.000', texto: 'clientes felices' },
]

const Nosotros = () => {
    return (
        <>
            <div className="contenedor">
                <h2 className="heading">Sobre nosotros</h2>
            </div>
            <div className="img__nosotros">
                <main className="contenedor nosotros">
                    <h2 className="heading nm-t">Nuestra Repostería</h2>

                    <div className="nosotros__info">
                        <Revelar desde="izquierda">
                            <img className="nosotros__info--img" src={imagen} alt="Nuestro equipo preparando postres" />
                        </Revelar>
                        <Revelar className="nosotros__info--txt" desde="derecha" delay={0.15}>
                            <h3>Cómo empezó todo</h3>
                            <p>
                                Gateaux nació en la cocina de nuestra casa, con las recetas que la abuela guardaba en un
                                cuaderno lleno de manchas de harina. Lo que empezó como tortas para cumpleaños de amigos
                                y vecinos se convirtió, poco a poco, en una pequeña repostería con clientes en toda la ciudad.
                            </p>
                            <p>
                                Hoy seguimos trabajando igual que el primer día: en lotes pequeños, con mantequilla real,
                                fruta fresca y sin conservantes. Cada pedido se prepara a mano y por encargo, para que
                                llegue a tu mesa recién hecho.
                            </p>
                            <p>
                                Además de vender, nos encanta enseñar. Por eso abrimos nuestro curso de repostería casera
                                y compartimos trucos y recetas en el blog.
                            </p>
                        </Revelar>
                    </div>

                    <motion.div
                        className="cifras"
                        variants={listaEscalonada}
                        initial="oculto"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        {cifras.map(({ valor, texto }) => (
                            <motion.div key={texto} className="cifra" variants={elementoLista}>
                                <span className="cifra__valor">{valor}</span>
                                <span className="cifra__texto">{texto}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </main>
            </div>
        </>
    )
}

export default Nosotros
