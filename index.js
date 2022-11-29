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


async function ConectarDB_Pasteles(){
    const client = new Client(connectionData);
    await client.connect()
    const res = await client.query("SELECT * FROM pasteles");
    return res.rows
}

async function getResposterias(){
    const respuesta = await ConectarDB_Pasteles();
    const res = respuesta[0].id
    console.log(res)
    return res;
}

getResposterias()
