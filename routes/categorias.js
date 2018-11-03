const express = require('express')
const router = express.Router()
const controllers = require('../controllers/categorias')

router.get('/nova', controllers.novaForm)
router.post('/nova', controllers.nova)
router.get('/', controllers.list)
router.get('/excluir/:id', controllers.excluir)
router.get('/editar/:id', controllers.editarForm)
router.post('/editar/:id', controllers.editar)

module.exports = router
