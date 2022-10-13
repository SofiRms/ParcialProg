const router = require('express').Router();

const { putTask ,createTask, getTasks, deleteTask} = require('../controllers/task.controllers');
const validarJWT=require('../middlewares/validar-jwt');

//crear nueva tarea
router.put('/task/:id', [
    validarJWT
], putTask);

router.post('/task', [
    validarJWT
], createTask);

router.get('/task', [
    validarJWT
], getTasks);

router.delete('/task/:id', [
    validarJWT
], deleteTask)

module.exports = router;