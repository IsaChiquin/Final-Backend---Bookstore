const {validationResult} = require ("express-validator")

const validaelCheck =  async (req, res, next )=>{
    const err = validationResult  (req)
    if (err.isEmpty()) {
        next()
    } else {
    res.status(501).json(err)
        }
    }

module.exports = {validaelCheck}