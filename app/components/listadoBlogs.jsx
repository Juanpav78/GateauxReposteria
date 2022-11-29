import Post from "~/components/post.jsx"
let limite;

function cc(blogs, i, img){ 
  let imagen

  for(var j=0; j < img.rows.length; j++){
    if(img.rows[j].preview_url === blogs.url){
       imagen = img.rows[j].formats.small.url
       break;
    }
  } 


  if( i < limite){
    return (
      <Post 
        blogs = {blogs}
        img = {imagen}
        key = {blogs.id}
      />
    )
  }else{
    return ""
  }
}

const listadoBlogs = ({blogs, img, limit=blogs?.length}) => {
  limite = limit
  return (
    <>
        <h2 className="heading">Nuestros Blogs</h2>
        <div className="blog">
          {blogs?.length > 0 ? (
            blogs.map( (blogs, i) => (
                cc(blogs, i, img)
            )
            )
          ) : (
            <p>No hay entradas en el blog</p>
          )}
        </div>
    </>
  )
}

export default listadoBlogs 