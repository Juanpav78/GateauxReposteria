export async function getResposterias(){
    const respuesta = await fetch(`${process.env.API_URL}/pasteles?populate=imagen`)
    const res = await respuesta.json()
    return res;
}

export async function getResposteria(url){
    const respuesta = await fetch(`${process.env.API_URL}/pasteles?filters[url]=${url}&populate=imagen`)
    const res = await respuesta.json()
    return res;
}

export async function getBlogs(){
    const respuesta = await fetch(`${process.env.API_URL}/blogs?populate=imagen`)
    const res = await respuesta.json()
    return res;
}

export async function getBlog(url){
    const respuesta = await fetch(`${process.env.API_URL}/blogs?filters[url]=${url}&populate=imagen`)
    const res = await respuesta.json()
    return res;
}

export async function getCurso(){
    const respuesta = await fetch(`${process.env.API_URL}/curso?populate=imagen`)
    const res = await respuesta.json()
    return res;
}