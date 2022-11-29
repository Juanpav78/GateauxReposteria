import Menu from './menu.jsx'
let limite;
function cc(reposterias, i, img){ 
  let imagen

  for(var j=0; j < img.rows.length; j++){
    if(img.rows[j].preview_url === reposterias.url){
       imagen = img.rows[j].formats.small.url
       break;
    }
  } 


  if( i < limite){
    return (
      <Menu 
          reposteria={reposterias}
          img = {imagen}
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