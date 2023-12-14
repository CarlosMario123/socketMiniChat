const express = require("express");
const http = require("http");
const  socketio = require("socket.io");
//Cuando se mueve en directorio es mejor usar path
const path = require("path");
const Sockets = require("./sockets");


class Server{

    constructor(){

        this.app = express();
        this.port = 8080;//atributo para el puerto
        this.server = http.createServer(this.app);


        //configuracion de socket
          this.io =  socketio(this.server)
    }

    middlewares(){
        this.app.use(express.static(path.resolve(__dirname,"../public")))
    }


    ejecutar(){
       this.configurarSockets();
        //aca llamaamos los midle wares para que se ejecuten
        this.middlewares();
        this.server.listen(this.port,()=>{
            console.log("servidor socket corriendo 8080")
        })
    }


    configurarSockets(){
      const servidor =   new Sockets(this.io);
    }
}

//exportamos la clase server para su uso

module.exports = Server;