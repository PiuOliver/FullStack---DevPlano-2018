const express = require('express')
const router = express.Router()
const controllers = require('../controllers/publicacoes')

router.get('/nova', controllers.novaForm)
router.post('/nova', controllers.nova)
router.get('/categoria/:categoria', controllers.list)
router.get('/excluir/:categoria/:id', controllers.excluir)
router.get('/editar/:categoria/:id', controllers.editarForm)
router.post('/editar/:categoria/:id', controllers.editar)

module.exports = router
