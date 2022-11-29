import Post from "~/components/post.jsx"
let limite;
function cc(blogs, i, img){

  if( i < limite){
    return (
      <Post 
        blogs = {blogs}
        img = {img.rows[i].formats.medium.url}
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