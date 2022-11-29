import Menu from './menu.jsx'

let contador = 0;
let limite;
function cc(reposterias, i, img){

  if( i < limite){
    return (
      <Menu 
          reposteria={reposterias}
          img = {img.rows[reposterias.id-1].formats.medium.url}
          key={reposterias.id}
      />
    )
  }else{
    return ""
  }
}

const ListadoReposteria = ({reposterias, img , limit=reposterias?.length}) => {
  limite = limit
  return (
    <>
        <h2 className="heading">Nuestros productos</h2>
        <div className="contenedor menu">
          {reposterias?.length && reposterias.map((reposterias, i) => 
           cc(reposterias, i, img)
          )}

        </div>
    </>
  )
}

export default ListadoReposteria 