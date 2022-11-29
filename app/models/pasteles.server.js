const { Client } = require('pg');

const connectionData ={
    user: "root",
    host: "dpg-cdvlrg82i3mkucb64dlg-a.oregon-postgres.render.com",
    database: "gateauxpasteleria",
    password: "FEkv5CTTKuACODLeJpC8qGRlNIidfx0v",
    port: 5432,
    ssl: {
        rejectUnauthorized: false,
    }
}


async function ConectarDB(bd){
    const client = new Client(connectionData);
    await client.connect()
    const respuesta = await client.query(`SELECT * FROM ${bd}`);
    await client.end()
    return respuesta
}

export async function getResposterias(bd){
    const res= await ConectarDB(bd);
    return res;
}

export async function getImage(){
    const res= await ConectarDB("files");
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