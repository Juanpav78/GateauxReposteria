
const Curso = ({curso}) => {

    const {titulo, contenido, imagen} = curso.attributes

    console.log()
  return (
    <section className="curso" >
        <style jsx="true">{`
            .curso{
                background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen.data.attributes.formats.medium.url});
                background-size: cover;
            }
            
        `}
        </style>
        <div className="contenedor">
        <div className="curso__info ">
            <h2 className="curso__info--titulo">{titulo}</h2>
            <p className="curso__info--contenido"> {contenido}</p>
        </div>
        </div>
        
    </section>
   
  )
}

export default Curso