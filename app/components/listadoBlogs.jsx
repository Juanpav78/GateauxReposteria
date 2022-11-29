import Post from "~/components/post.jsx"
let limite;
function cc(blogs, i){

  if( i < limite){
    return (
      <Post 
        blogs = {blogs?.attributes}
        key = {blogs?.attributes.url}
      />
    )
  }else{
    return ""
  }
}

const listadoBlogs = ({blogs, limit=blogs?.length}) => {
  limite = limit
  return (
    <>
        <h2 className="heading">Nuestros Blogs</h2>
        <div className="blog">
          {blogs?.length > 0 ? (
            blogs.map( (blogs, i) => (
                cc(blogs, i)
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