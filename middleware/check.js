const {check} = require ('express-validator')

const checks =  [
    check ("autor")
        .not().isEmpty().withMessage("Se requiere el campo autor para crear el producto")
        .isString().withMessage("El campo autor debe ser un string"),
    check ("año")
        .not().isEmpty().withMessage("Se requiere el campo año para crear el producto")
        .isNumeric().withMessage("El campo año debe ser numerico"),
    check ("nombre")
        .not().isEmpty().withMessage("Se requiere el campo nombre para crear el producto")
        .isString().withMessage("El campo nombre debe ser un string"),
    check ("precio")
        .not().isEmpty().withMessage("Se requiere el campo precio para crear el producto")
        .isNumeric().withMessage("El campo precio debe ser numerico"),
    check ("descripcion")
        .not().isEmpty().withMessage("Se requiere el campo descripcion para crear el producto")
        .isString().withMessage("El campo descripcion debe ser un string"),
    check ("stock")
        .not().isEmpty().withMessage("Se requiere el campo stock para crear el producto")
        .isBoolean().withMessage("El campo stock debe ser true o false"),
    ]

module.exports = checks