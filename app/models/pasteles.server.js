import { pasteles } from "~/data/pasteles"
import { blogs } from "~/data/blogs"
import { curso } from "~/data/curso"

/**
 * Los datos ahora viven en app/data. Las funciones siguen siendo async
 * para poder volver a conectar una API (Strapi u otra) sin tocar las rutas.
 */

export async function getReposterias() {
    return pasteles
}

export async function getReposteria(url) {
    return pasteles.find(pastel => pastel.url === url) ?? null
}

export async function getBlogs() {
    return [...blogs].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
}

export async function getBlog(url) {
    return blogs.find(blog => blog.url === url) ?? null
}

export async function getCurso() {
    return curso
}
