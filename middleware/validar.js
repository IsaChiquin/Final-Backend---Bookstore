const {Bookstore} = require('../scheme/bookstore')

const validar = async (req, res, next) =>{
    try {
        const bookstore = await Bookstore.findById(req.params.id);
        if (bookstore !== null) {
            next();
        } else {
            res.json({msg: "ID invalido"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { validar }