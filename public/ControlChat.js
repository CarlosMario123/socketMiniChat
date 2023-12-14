const socket = io("http://localhost:8080")
const userName = document.getElementById("user");
const enviar = document.getElementById("enviar");
const chat = document.getElementById("chat");
const lado = "justify-end";
const textInput = document.querySelector("#texto-input")
let valor  = true;
enviar.addEventListener("click",sendMessaje)






function sendMessaje(){

 socket.emit("mensajeToServer",textInput.value);
 textInput.value = "";

}

function mensajeLado(valor,mensaje){
    const claseFlex = valor ? lado : '';

    return `  <div class="w-full flex ${claseFlex}">
    <p class="font-normal bg-sky-600 rounded-md w-1/2 py-1 px-1 flex overflow-hidden break-word flex-wrap h-auto">${mensaje}</p>
   </div>`
   
}








//--------------------solo logica de socket
//el metodo on del socket nos permitira escuchar el evento que se le haya asignado
//este caso sera la bienvenida
//ahora escucharemos lo que esta emitiendo el backend 
socket.on("bienvenida",(data)=>{//la data seria lo que emitiria el servidor
  userName.innerHTML = `Bienvenido se te asigno el id: <span class = "text-white">${data.id}<span>`;
   console.log(data)
})


//Escucharemos
socket.on("send-clients",(data)=>{
   
    chat.innerHTML += mensajeLado(valor,data)
    valor = !valor
});
