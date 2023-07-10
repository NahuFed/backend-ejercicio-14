import Usuario from '../models/usuario'

export const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find()
        res.status(200).json(usuarios)
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje : 'Error al buscar los usuarios'
        })
    }
  }
export const obtenerunUsuario = async (req, res) => {
    try {
        const usuario = await usuario.findById(req.params.id)
        res.status(200).json(usuario)
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje : 'Error al buscar el usuario'
        })
    }
  }

export const crearUsuario = async (req, res) => {
    try {
        // console.log(req.body);
        const usuarioNueva = new Usuario(req.body);
        await usuarioNueva.save();
        res.status(201).json({
            mensaje: ' El usuario se creo correctamente'
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje : 'Error al crear El usuario'
        })
    }
  }

export const borrarUsuario = async (req, res) => {
    try {
        console.log(req.params.id);
        await usuario.findByIdAndDelete(req.params.id)
        res.status(200).json({
            mensaje: 'El usuario fue eliminado correctamente'
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje : 'No se pudo eliminar el usuario'
        })
    }
  }
export const editarUsuario = async (req, res) => {
    try {
       await usuario.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            mensaje: 'El usuario fue modificada correctamente'
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje : 'No se pudo modificar El usuario'
        })
    }
  }