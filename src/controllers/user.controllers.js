const User = require('../models/user');
const Task = require('../models/tasks')
const bcrypt = require('bcrypt');
const ctrlUser = {};

//Controlador para obtener todos los usuarios de la base de datos.
ctrlUser.getUsers = async (req, res) => {
    //Se realiza consulta de todos los documentos en la base de datos.
    const users = await User.find();

    //Devolucion de los datos de usuario en un arreglo
    return res.json(users)
};

//Aca se crea un nuevo usuario en la base de datos
ctrlUser.postUser = async (req, res) =>{
    //Se obtienen los datos enviados por metodo POST
    const {username, password: passwordRecibida, email} = req.body;

    //Encriptacion de la contraseña
    const newPassword= bcrypt.hashSync(passwordRecibida, 10);

    //Instancia un nuevo documento de mongoDB para luego ser guardado
    const newuser = new User ({
        username,
        password: newPassword,
        email
    });

    //Se alamacena en la base de datos de forma asincronica .save()

    const user = await newuser.save();

    return res.json({
        msg: 'Usuario creado',
        user
    });
};

//Controlador para actualizar usuario, se usa ID de usuario
ctrlUser.putUser = async(req, res) => {

    const userId = req.params.id;

    //otraData serian el resto de datos de mi esquema
    const { username, email, isActive, role, ...otraData} = req.body;
    
    const data = {username, email, isActive, role};

    try{
        const dataUpdated = await User.findByIdAndUpdate(userId, data, {new: true});
        
        return res.json({
            msg: 'Usuario actualizado',
            dataUpdated
        })
    }catch(error){
        return res.status(500).json({
            msg: 'Error al actualizar'
        })
    }
};

//Eliminar usuario, usa ID
ctrlUser.deleteUser = async (req, res) => {

    const userId=req.params.id;

    try{
        const deleteTask = await Task.deleteMany({userId: userId})
        const deleteUser = await User.findByIdAndDelete(userId)
        return res.json({
            msg: 'Usuario borrado y sus tareas',
            deleteUser,
            deleteTask
        })
    }catch(error){
        return res.json({
            msg: 'Error al borrar',
            deleteUser,
            deleteTask
        })
    }


}


module.exports = ctrlUser;