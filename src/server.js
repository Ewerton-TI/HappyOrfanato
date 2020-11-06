//importar pacote / dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//iniciando express
const server = express()
server

//utilizando o body do request
.use(express.urlencoded({extended: true}))

//utilizando os arquivos estaticos
.use(express.static('public'))

// configurar template engines
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

//Rotas da aplicação
.get('/', pages.index)
.get('/orphanage-form', pages.orphanageForm)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

//ligar o servidor
server.listen(5500)