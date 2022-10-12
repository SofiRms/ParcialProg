
const Tasks = require('../models/tasks');
ctrlTask = {};

ctrlTask.putTask = async (req, res)=>{
    const {_id} = req.user;

    const {id} = req.params;

    const {title, description, isDone, isActive} = req.body;

    const getTask = await Tasks.updateOne({_id: id, userId: _id},{
        $set: {
            title, description, isDone, isActive
        }
    });

    res.json(getTask);

}

ctrlTask.createTask = async(req, res) => {
    const { title, description } = req.body;

    const task = new Tasks({
        title,
        description,
        userId: req.user._id
    });

    try{
        const newTask = await task.save();

        return res.json({
            msg: 'Tarea creada',
            newTask
        })
    }catch(error){
        return res.status(500).json({
            msg:'Error al crear la tarea'
        })
    }
}

ctrlTask.getTasks= async (req, res) => {
    const tasks = await Tasks.find({ userId: req.user._id})
    .populate('userId', ['username','email'])
    return res.json(tasks);
}

ctrlTask.deleteTask = async (req, res)=>{
    const {_id} = req.user;

    const {id} = req.params;



    const deleteTask = await Tasks.deleteOne({_id: id, userId: _id});

    res.json(deleteTask);

}

module.exports = ctrlTask;