const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const categorias = require('./routes/categorias')
const publicacoes = require('./routes/publicacoes')

app.use(bodyParser.urlencoded())
app.set('view engine', 'ejs')
//Linha de condição IF
const port = process.env.PORT || 3000

app.get('/', async(request, response) => {
    response.render('index')
})
app.use('/categorias', categorias)
app.use('/publicacoes', publicacoes)

app.listen(port, (err) => {
    if(err){
        console.log('Erro')
    }else{
        console.log('Como Fazer Server is running ...:', port)
    }
});