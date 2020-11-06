const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    //inserir dados na tabela
    //await espera até ser executado
    await saveOrphanage(db,{
        lat: "-23.5426863",
        lng: "-46.4182274",
        name: "Lar dos meninos",
        about:"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
        whatsapp: "11-99663359",
        images:[
            "https://images.unsplash.com/photo-1573924436756-128cf1f6387a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1595295425007-985abbb16b92?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours:"Horários de visitas das 8h até 18h",
        open_on_weekends: "0"
    })
    
    //consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages);

    /*//Consultar somente 1 orfanato, pelo ID
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1" ')
    console.log(orphanage)

    //deletar dados da tabela orphanage
    console.log(await db.run('DELETe FROM orphanages WHERE id = "4"'))
    console.log(await db.run('DELETe FROM orphanages WHERE id = "5"'))
    console.log(await db.run('DELETe FROM orphanages WHERE id = "6"'))*/
})