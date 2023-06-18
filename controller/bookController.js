const {Bookstore} = require('../scheme/bookstore')
const axios = require ('axios')

class Controller {
    async listar (req, res) {
        const items = await Bookstore.find() 
        res.status(200).json(items);
    }

    async crear (req, res) {
        try {
            const itemGuardar = new Bookstore(req.body);
            await itemGuardar.save();
            res.status(201).json(itemGuardar);
            }
        catch (error) {
            res.status(501).json({msg: "No se pudo guardar el Libro", error})
        }
    }

    async editar (req, res) {
        await Bookstore.findByIdAndUpdate(req.params.id, req.body)
        res.status(202).json({msg: "Item Actualizado"})
    }

    async eliminar (req, res) {
        await Bookstore.findByIdAndDelete(req.params.id);
        res.json({msg: "El producto" + req.params.id + "ha sido eliminado con exito"})
    }
    
    async axiosGet (req,res) {
        try {
            const {data, status} = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
            res.json({data, status}) 
            } catch (error) {
            res.json({data: error.response.data, status: error.response.status})
            } 
    }
}

module.exports = new Controller