const campo_texto =document.querySelector("#texto-encriptado");
const campo_mensaje = document.querySelector("#campo-mensaje");


const matriz_code = [
    ["e","enter"], //indice 0
    ["i","imes"],//indice 1
    ["a","ai"],//indice 2
    ["o","ober"],//indice 3
    ["u","ufat"], //indice 4
];

function btnEncriptar() {
    const texto = encriptar(campo_texto.value);
    campo_mensaje.value = texto;
    campo_texto.value="";
    campo_mensaje.style.backgroundImage="none";

}

function encriptar(fraseEncriptada) {
 for(let i=0; i < matriz_code.length; i++){
    if(fraseEncriptada.includes(matriz_code[i][0])){
        fraseEncriptada=fraseEncriptada.replaceAll(
            matriz_code[i][0],
            matriz_code[i][1]
        );
    }
 }
 return fraseEncriptada;
}


function copy() {
    let copyText = document.querySelector("#campo-mensaje");
    copyText.select();
    document.execCommand("copy"); 
  }
  
  document.querySelector("#copy").addEventListener("click", copy);


  function btnDesencriptar() {
    const texto = desencriptar(campo_texto.value);
    campo_mensaje.value = texto;
    campo_texto.value="";
    campo_mensaje.style.backgroundImage="none";

}

function desencriptar(fraseDesencriptada) {
 for(let i=0; i < matriz_code.length; i++){
    if(fraseDesencriptada.includes(matriz_code[i][0])){
        fraseDesencriptada=fraseDesencriptada.replaceAll(
            matriz_code[i][1],
            matriz_code[i][0]          
        );
    }
 }
 return fraseDesencriptada;
}


     


  

    //if (texto.legth !=0){
    //    document.getElementById("texto").value = textoCifrado;
    //    tituloMensaje.textContent = "texto desencritado con exito";
   //     parrafo.textContent="";
   //     muñeco.src = "./imagenes/muñeco.jpg";
   // }else {
        //muñeco.src = "./imagenes/muñeco.png";
      //  parrafo.textContent = "ingresa el texto"
    //      alert("Debes ingresar algun texto");   }}
