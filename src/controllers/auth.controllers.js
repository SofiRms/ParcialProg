const User = require('../models/user');
const generarJWT = require('../helpers/generar-jwt');
const bcrypt =require('bcrypt');

const ctrlAuth = {};

ctrlAuth.iniciarSesion = async(req, res) => {

    const {username, password} = req.body;

    try{
        //Busca si el usuario existe
        const user = await User.findOne({ username});

        if(!user){
            return res.status(400).json({
                ok: false,
                msg: 'Error al autenticar usuario' 
            });
        }
        if (!user.isActive){
            return res.status(400).json({
                ok: false,
                msg: 'Error al autenticarse(inactivo)'
            });
        }
        //verificar contra
        const validPassword= bcrypt.compareSync(password, user.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Error al autenticar contraseña'
            })
        }
        const token = await generarJWT({uid:user._id})
        res.json(token)
    }catch(error){
        console.log(error)
        return res.json({msg: 'Error al iniciar sesión'});
        
    }
};

module.exports = ctrlAuth;