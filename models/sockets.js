class Sockets{
      
    constructor(io){
      this.io = io;
  this.socketsEvents();
    }

    socketsEvents(){
        this.io.on("connection",(cliente)=>{
            console.log("un dispositivo se ha conectado")
            console.log(cliente.id)//obtendremos el id del cliente que se conecto
         
            //socket.emit() dispara o emite un evento alos clientes
            
            //comentado:
            //cliente.emit("bienvenida","Hola usuario bienvenido") 
         
            cliente.emit("bienvenida",{
              mensaje:"hola usuario bienvenido",
              id:cliente.id
            }) //podemos mandar objeto si asi lo deseamos
         
            //Escuchamos lo que nos manda el cliente
         
             cliente.on("mensajeToServer",(data)=>{
                console.log(data)
         
                //creamos un emit para volver a enviar todos los cliente io emite a todos
                this.io.emit("send-clients",data);
             })
         })
         
        
    }
}

module.exports = Sockets