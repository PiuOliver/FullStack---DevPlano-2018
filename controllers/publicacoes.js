const api = require('../api')

const novaForm = async(request, response) => {
    const categorias = await api.list('categorias')
    console.log(categorias)
    response.render('publicacoes/nova', {categorias})
}

const nova = async(request, response) => {
    await api.create('publicacoes/' + request.body.categoria, {
        titulo: request.body.titulo,
        conteudo: request.body.conteudo
    })
    response.redirect('/publicacoes/categoria/'+request.body.categoria)
}

const list = async(request, response) => {
    const categoria = request.params.categoria
    const publicacoes = await api.list('publicacoes/' + categoria)
    response.render('publicacoes/index', {publicacoes, categoria})        
}

const excluir = async(request, response) => {
    await api.apagar('publicacoes/'+request.params.categoria, request.params.id)
    response.redirect('/publicacoes/categoria/'+request.params.categoria)
}

const editarForm = async(request, response) => {
    const publicacao =  await api.get('publicacoes/' + request.params.categoria, request.params.id)
    console.log(publicacao)
    response.render('publicacoes/editar', {
        publicacao,
        categoria: request.params.categoria
    })
}

const editar = async(request, response) => {
    await api.update('publicacoes/' + request.params.categoria, request.params.id, {
        titulo: request.body.titulo,
        conteudo: request.body.conteudo
    })
    response.redirect('/publicacoes/categoria/'+request.params.categoria)
}

module.exports = {
    novaForm, nova, list, excluir, editarForm, editar
 }