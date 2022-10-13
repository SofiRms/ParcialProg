Se debe agregar una conexión a base de datos Mongo

Instrucciones para probar los métodos

para usuarios:

🔴GET:localhost:puerto/user
🟡POST : localhost:puerto/user crear usuario 
{
    "username":,
    "password";,
    "email":
}

🟢POST: localhost:puerto/login para iniciar sesión y generar token
{
    "username":,
    "password"
}
🟣PUT : localhost:puerto/id(del usuario)
{
    "username";,
    "email":
}
🟠delete :localhost:puerto /id(del usuario) 
el método delete utilizado para borrar a un usuario borra todas las tareas creadas por el usuario.


para tareas:


🟪GET: localhost:puerto/task Un usuario sólo puede ver las tareas creadas por él mismo
 🟥POST localhost:puerto/task crear tarea utilizar token de usuario
 {
    "title":,
    "description":
 }
 🟩PUT : localhostpuerto/task/id(de la tarea) actualizar tarea
 {
    "title":,
    "description"
 }
 🟦Delete : localhost:puerto/id(de la tarea) borrar tarea


