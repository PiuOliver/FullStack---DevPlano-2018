const api = require('../api')

const novaForm = (request, response) => {
    response.render('categorias/nova')
}

const nova = async(request, response) => {
    await api.create('categorias', {
        categorias: request.body.categoria
    })
    response.redirect('/categorias')
}

const list = async(request, response) => {
    const categorias = await api.list('categorias')
    response.render('categorias/index', {categorias})        
}

const excluir = async(request, response) => {
    await api.apagar('categorias', request.params.id)
    await api.apagar('publicacoes', request.params.id)
    response.redirect('/categorias')
}

const editarForm = async(request, response) => {
    const categoria =  await api.get('categorias', request.params.id)
    response.render('categorias/editar', {
        categoria
    })
}

const editar = async(request, response) => {
    await api.update('categorias', request.params.id, {
        categorias: request.body.categoria
    })
    response.redirect('/categorias')
}

module.exports = {
    novaForm, nova, list, excluir, editarForm, editar
 }