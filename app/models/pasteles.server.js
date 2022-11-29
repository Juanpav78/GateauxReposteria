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

export async function getInfo(bd){
    const res= await ConectarDB(bd);
    return res;
}

export async function getImage(){
    const res= await ConectarDB("files");
    return res;
}

export async function getInfoUnique(bd, url){

    
    const query = bd+" WHERE url = '"+url+"'"
    const queryImg = "files WHERE preview_url = '"+url+"'"
    const res= await ConectarDB(query);
    const resImg= await ConectarDB(queryImg);

    return [{
        res: res,
        resImg : resImg
    }];
}



export async function getResposteria(url){
    const respuesta = await fetch(`${process.env.API_URL}/pasteles?filters[url]=${url}&populate=imagen`)
    const res = await respuesta.json()
    return res;
}
