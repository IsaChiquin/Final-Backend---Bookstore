const express = require('express')
const router = express.Router()
const controller = require('../controller/bookController')
const { validar } = require('../middleware/validar')
const checks = require('../middleware/check')
const {validaelCheck} = require('../middleware/validaelcheck')

router.get('/ver', controller.listar)

router.get ('/axios', controller.axiosGet)

router.post('/crear', checks, validaelCheck, controller.crear)

router.put('/editar/:id', validar, checks, validaelCheck, controller.editar)

router.delete('/eliminar/:id', validar, controller.eliminar)

module.exports = router