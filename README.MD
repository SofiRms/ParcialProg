Se debe agregar una conexión a base de datos Mongo

Para probar los métodos:

para usuarios:

GET:localhost:puerto/user🔴
POST : localhost:puerto/user crear usuario🟡
POST: localhost:puerto/login para iniciar sesión y generar token🟢
PUT : localhost:puerto/id(del usuario)🟣
delete :localhost:puerto /id(del usuario) 🟠
el método delete utilizado para borrar a un usuario borra todas las tareas creadas por el usuario.

para tareas:
GET: localhost:puerto/task Un usuario sólo puede ver las tareas creadas por él mismo
 POST localhost:puerto/task crear tarea
 PUT : localhostpuerto/task/id(de la tarea) actualizar tarea
 Delete : localhost:puerto/id(de la tarea) borrar tarea


