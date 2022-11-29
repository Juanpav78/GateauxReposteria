
const Curso = ({res, resImg}) => {

    console.log()
  return (
    <section className="curso" >
        <style jsx="true">{`
            .curso{
                background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${resImg.formats.medium.url});
                background-size: cover;
            }
            
        `}
        </style>
        <div className="contenedor">
        <div className="curso__info ">
            <h2 className="curso__info--titulo">{res.titulo}</h2>
            <p className="curso__info--contenido"> {res.contenido}</p>
        </div>
        </div>
        
    </section>
   
  )
}

export default Curso