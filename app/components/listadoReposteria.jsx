import Menu from './menu.jsx'

let contador = 0;
let limite;
function cc(reposterias, i){

  if( i < limite){
    return (
      <Menu 
          reposteria={reposterias?.attributes}
          key={reposterias?.attributes.url}
      />
    )
  }else{
    return ""
  }
}

const ListadoReposteria = ({reposterias , limit=reposterias?.length}) => {
  limite = limit
  return (
    <>
        <h2 className="heading">Nuestros productos</h2>
        <div className="contenedor menu">
          {reposterias?.length && reposterias.map((reposterias,i) => 
           cc(reposterias, i)
          )}
        </div>
    </>
  )
}

export default ListadoReposteria 